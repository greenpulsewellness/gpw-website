-- GreenPulse Wellness — Phase E (e-commerce) schema DRAFT. NOT RUN, NOT FINAL.
--
-- This is a design sketch for when the site starts taking quotes/orders online. Review it
-- against the real checkout flow (B2B quote-first vs. direct purchase, GST/tax rules, payment
-- provider) before turning it into a numbered migration. Move it out of `drafts/` when ready.
--
-- Conventions:
--   * Money is stored as integer minor units (paise/cents) + a currency code. Never floats.
--   * Orders SNAPSHOT product name, SKU and price at purchase time, so later catalog edits
--     never rewrite history.
--   * Customer-owned rows use RLS keyed on auth.uid(); everything else is service_role only.
--   * Requires 0001 (catalog, content, crm) to exist first.

create schema if not exists commerce;    -- customers, carts, orders, payments, discounts
create schema if not exists inventory;   -- locations and stock levels

-- ===========================================================================
-- catalog additions — sellable units
-- ===========================================================================

-- A product (catalog.products) is what visitors read about; a variant is what they buy.
-- Maps to the existing Essential / Pro / Signature tiers or to model codes (e.g. MS-011FS).
create table if not exists catalog.product_variants (
  id               uuid primary key default gen_random_uuid(),
  product_id       text not null references catalog.products (id) on update cascade on delete cascade,
  sku              text not null unique,
  title            text not null,                        -- "Pro", "Double · Walnut", ...
  tier             text,
  attributes       jsonb not null default '{}'::jsonb,   -- colour, voltage, size, ...
  price_minor      integer check (price_minor >= 0),     -- null = "price on request" (quote-only)
  compare_at_minor integer check (compare_at_minor >= 0),
  currency         text not null default 'INR',
  weight_grams     integer,
  status           text not null default 'active' check (status in ('draft', 'active', 'archived')),
  sort_order       integer not null default 0,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create index if not exists product_variants_product_idx on catalog.product_variants (product_id, sort_order);

create table if not exists catalog.categories (
  id         text primary key,                           -- slug
  name       text not null,
  parent_id  text references catalog.categories (id) on delete set null,
  sort_order integer not null default 0
);

create table if not exists catalog.collections (            -- merchandising groups, e.g. "Hotel spa suite"
  id          text primary key,
  title       text not null,
  description text not null default ''
);

create table if not exists catalog.collection_products (
  collection_id text not null references catalog.collections (id) on delete cascade,
  product_id    text not null references catalog.products (id) on update cascade on delete cascade,
  position      integer not null default 0,
  primary key (collection_id, product_id)
);

-- ===========================================================================
-- inventory
-- ===========================================================================

create table if not exists inventory.locations (
  id    uuid primary key default gen_random_uuid(),
  name  text not null,
  city  text
);

create table if not exists inventory.stock_levels (
  variant_id   uuid not null references catalog.product_variants (id) on delete cascade,
  location_id  uuid not null references inventory.locations (id) on delete cascade,
  on_hand      integer not null default 0 check (on_hand >= 0),
  reserved     integer not null default 0 check (reserved >= 0),
  updated_at   timestamptz not null default now(),
  primary key (variant_id, location_id)
);

-- ===========================================================================
-- commerce
-- ===========================================================================

-- Profile row for each signed-in buyer; id = Supabase Auth user.
create table if not exists commerce.customers (
  id          uuid primary key references auth.users (id) on delete cascade,
  name        text not null,
  phone       text,
  company     text,
  tax_id      text,                                      -- GSTIN etc.
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists commerce.addresses (
  id           uuid primary key default gen_random_uuid(),
  customer_id  uuid not null references commerce.customers (id) on delete cascade,
  label        text,
  line1        text not null,
  line2        text,
  city         text not null,
  state        text,
  postal_code  text not null,
  country      text not null default 'IN',
  is_default   boolean not null default false
);

create table if not exists commerce.carts (
  id           uuid primary key default gen_random_uuid(),
  customer_id  uuid references commerce.customers (id) on delete cascade,   -- null = guest cart
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists commerce.cart_items (
  cart_id     uuid not null references commerce.carts (id) on delete cascade,
  variant_id  uuid not null references catalog.product_variants (id) on delete cascade,
  quantity    integer not null check (quantity > 0),
  primary key (cart_id, variant_id)
);

create table if not exists commerce.discounts (
  code            text primary key,
  kind            text not null check (kind in ('percent', 'fixed')),
  value           integer not null check (value > 0),    -- percent (1-100) or minor units
  starts_at       timestamptz,
  ends_at         timestamptz,
  max_redemptions integer,
  redeemed        integer not null default 0
);

create sequence if not exists commerce.order_number_seq start 1001;

create table if not exists commerce.orders (
  id               uuid primary key default gen_random_uuid(),
  order_number     bigint not null unique default nextval('commerce.order_number_seq'),
  customer_id      uuid references commerce.customers (id) on delete set null,
  quote_id         uuid,                                  -- set when the order came from crm.quotes
  status           text not null default 'pending'
                   check (status in ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  currency         text not null default 'INR',
  subtotal_minor   integer not null check (subtotal_minor >= 0),
  discount_minor   integer not null default 0,
  tax_minor        integer not null default 0,
  shipping_minor   integer not null default 0,
  total_minor      integer not null check (total_minor >= 0),
  discount_code    text,
  billing_address  jsonb not null,                        -- snapshots, not FKs
  shipping_address jsonb not null,
  notes            text,
  placed_at        timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create index if not exists orders_customer_idx on commerce.orders (customer_id, placed_at desc);

create table if not exists commerce.order_items (
  id                uuid primary key default gen_random_uuid(),
  order_id          uuid not null references commerce.orders (id) on delete cascade,
  variant_id        uuid references catalog.product_variants (id) on delete set null,
  product_name      text not null,                        -- snapshot
  sku               text not null,                        -- snapshot
  unit_price_minor  integer not null check (unit_price_minor >= 0),
  quantity          integer not null check (quantity > 0)
);
create index if not exists order_items_order_idx on commerce.order_items (order_id);

create table if not exists commerce.payments (
  id            uuid primary key default gen_random_uuid(),
  order_id      uuid not null references commerce.orders (id) on delete cascade,
  provider      text not null,                            -- 'razorpay', 'stripe', 'bank_transfer', ...
  provider_ref  text,                                     -- gateway payment/intent id
  status        text not null check (status in ('initiated', 'authorized', 'captured', 'failed', 'refunded')),
  amount_minor  integer not null check (amount_minor >= 0),
  currency      text not null default 'INR',
  raw           jsonb,                                    -- gateway payload, for reconciliation
  created_at    timestamptz not null default now()
);
create unique index if not exists payments_provider_ref_idx on commerce.payments (provider, provider_ref) where provider_ref is not null;

create table if not exists commerce.shipments (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid not null references commerce.orders (id) on delete cascade,
  carrier      text,
  tracking_no  text,
  shipped_at   timestamptz,
  delivered_at timestamptz
);

-- ===========================================================================
-- crm additions — quote-first selling (typical for high-ticket wellness equipment)
-- ===========================================================================

create table if not exists crm.quotes (
  id            uuid primary key default gen_random_uuid(),
  enquiry_id    uuid references crm.enquiries (id) on delete set null,
  customer_id   uuid references commerce.customers (id) on delete set null,
  status        text not null default 'draft' check (status in ('draft', 'sent', 'accepted', 'declined', 'expired')),
  currency      text not null default 'INR',
  valid_until   date,
  total_minor   integer not null default 0,
  terms         text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists crm.quote_items (
  id                uuid primary key default gen_random_uuid(),
  quote_id          uuid not null references crm.quotes (id) on delete cascade,
  variant_id        uuid references catalog.product_variants (id) on delete set null,
  description       text not null,
  unit_price_minor  integer not null check (unit_price_minor >= 0),
  quantity          integer not null check (quantity > 0)
);

alter table commerce.orders
  add constraint orders_quote_fk foreign key (quote_id) references crm.quotes (id) on delete set null;

-- ===========================================================================
-- Privileges + RLS (sketch)
-- ===========================================================================

grant usage on schema commerce, inventory to service_role;
grant usage on schema commerce to authenticated;
grant all on all tables    in schema commerce, inventory to service_role;
grant all on all sequences in schema commerce, inventory to service_role;
grant select on catalog.product_variants, catalog.categories, catalog.collections, catalog.collection_products to anon, authenticated;
grant select, insert, update, delete on commerce.customers, commerce.addresses, commerce.carts, commerce.cart_items to authenticated;
grant select on commerce.orders, commerce.order_items, commerce.payments, commerce.shipments to authenticated;

alter table catalog.product_variants    enable row level security;
alter table catalog.categories          enable row level security;
alter table catalog.collections         enable row level security;
alter table catalog.collection_products enable row level security;
alter table inventory.locations         enable row level security;   -- private
alter table inventory.stock_levels      enable row level security;   -- private
alter table commerce.customers          enable row level security;
alter table commerce.addresses          enable row level security;
alter table commerce.carts              enable row level security;
alter table commerce.cart_items         enable row level security;
alter table commerce.orders             enable row level security;
alter table commerce.order_items        enable row level security;
alter table commerce.payments           enable row level security;
alter table commerce.shipments          enable row level security;
alter table commerce.discounts          enable row level security;   -- private
alter table crm.quotes                  enable row level security;   -- private
alter table crm.quote_items             enable row level security;   -- private

create policy "active variants are public" on catalog.product_variants
  for select to anon, authenticated using (status = 'active');
create policy "categories are public" on catalog.categories
  for select to anon, authenticated using (true);
create policy "collections are public" on catalog.collections
  for select to anon, authenticated using (true);
create policy "collection products are public" on catalog.collection_products
  for select to anon, authenticated using (true);

create policy "own profile" on commerce.customers
  for all to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy "own addresses" on commerce.addresses
  for all to authenticated using (customer_id = auth.uid()) with check (customer_id = auth.uid());
create policy "own cart" on commerce.carts
  for all to authenticated using (customer_id = auth.uid()) with check (customer_id = auth.uid());
create policy "own cart items" on commerce.cart_items
  for all to authenticated
  using (exists (select 1 from commerce.carts c where c.id = cart_id and c.customer_id = auth.uid()))
  with check (exists (select 1 from commerce.carts c where c.id = cart_id and c.customer_id = auth.uid()));
create policy "own orders" on commerce.orders
  for select to authenticated using (customer_id = auth.uid());
create policy "own order items" on commerce.order_items
  for select to authenticated
  using (exists (select 1 from commerce.orders o where o.id = order_id and o.customer_id = auth.uid()));
create policy "own payments" on commerce.payments
  for select to authenticated
  using (exists (select 1 from commerce.orders o where o.id = order_id and o.customer_id = auth.uid()));
create policy "own shipments" on commerce.shipments
  for select to authenticated
  using (exists (select 1 from commerce.orders o where o.id = order_id and o.customer_id = auth.uid()));
