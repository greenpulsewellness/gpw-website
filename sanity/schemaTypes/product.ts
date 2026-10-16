import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Product — one document per catalog item.
 * Field names mirror `Product` (data/home.ts) and `ProductDetail` (data/products-data.ts)
 * so lib/products.ts can map them 1:1.
 */

const CATEGORIES = [
  "Heat & Thermal Therapy",
  "Cold & Cryo Therapy",
  "Light & Photobiomodulation",
  "Oxygen & Hyperbaric (Air)",
  "Active Recovery & Massage (Relax)",
  "Mobility & Assistive Technology",
  "Wellness & Recovery Technology",
  "Rehabilitation & Physical Therapy",
];

const MODALITIES = [
  { title: "Heat", value: "heat" },
  { title: "Cold", value: "cold" },
  { title: "Light", value: "light" },
  { title: "Air", value: "air" },
  { title: "Relax", value: "relax" },
  { title: "Mobility", value: "mobility" },
];

const TIERS = ["Essential", "Pro", "Signature"];

const ICONS = ["Activity", "Award", "BatteryCharging", "Compass", "Crosshair", "Eye", "Flame", "Footprints", "Layers", "Maximize", "Monitor", "Move", "Shield", "ShieldCheck", "Sliders", "Smartphone", "Snowflake", "Sparkles", "Target", "ThermometerSnowflake", "VolumeX", "Wind", "Zap"];

const stringList = (name: string, title: string, group: string, description?: string) =>
  defineField({ name, title, type: "array", group, description, of: [defineArrayMember({ type: "string" })] });

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "basics", title: "Basics", default: true },
    { name: "media", title: "Images" },
    { name: "overview", title: "Overview" },
    { name: "specs", title: "Specifications" },
    { name: "protocol", title: "Protocol" },
    { name: "more", title: "FAQs & Related" },
  ],
  fields: [
    /* ---------------- Basics ---------------- */
    defineField({ name: "name", title: "Product name", type: "string", group: "basics", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "basics",
      description: "Used in the page URL: /products/<slug>. Changing it breaks existing links.",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "category", title: "Category", type: "string", group: "basics", options: { list: CATEGORIES }, validation: (r) => r.required() }),
    defineField({ name: "modality", title: "Modality (catalog filter)", type: "string", group: "basics", options: { list: MODALITIES, layout: "radio", direction: "horizontal" }, validation: (r) => r.required() }),
    defineField({ name: "subCategory", title: "Sub-category", type: "string", group: "basics" }),
    defineField({ name: "brand", title: "Brand", type: "string", group: "basics" }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 2, group: "basics", validation: (r) => r.required() }),
    defineField({
      name: "tiers",
      title: "Tiers",
      type: "array",
      group: "basics",
      of: [defineArrayMember({ type: "string" })],
      options: { list: TIERS, layout: "grid" },
    }),
    stringList("specs", "Spec tags", "basics", "2–3 short tags shown on product cards, e.g. model code, brand, price."),
    defineField({ name: "order", title: "Sort order", type: "number", group: "basics", description: "Lower numbers appear first in the catalog." }),

    /* ---------------- Images ---------------- */
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Gallery images",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
      options: { layout: "grid" },
    }),

    /* ---------------- Overview ---------------- */
    defineField({ name: "subtitle", title: "Subtitle", type: "string", group: "overview" }),
    defineField({ name: "tagline", title: "Tagline", type: "text", rows: 2, group: "overview" }),
    defineField({ name: "overview", title: "Overview paragraphs", type: "array", group: "overview", of: [defineArrayMember({ type: "text", rows: 3 })] }),
    defineField({
      name: "mechanismOfAction",
      title: "How it works",
      type: "object",
      group: "overview",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "points", type: "array", of: [defineArrayMember({ type: "string" })] }),
      ],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "overview",
      of: [
        defineArrayMember({
          type: "object",
          name: "feature",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 2 }),
            defineField({ name: "iconName", title: "Icon", type: "string", options: { list: ICONS } }),
          ],
        }),
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      group: "overview",
      of: [
        defineArrayMember({
          type: "object",
          name: "benefit",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 2 }),
            defineField({ name: "metric", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "suitableEnvironments",
      title: "Suitable environments",
      type: "array",
      group: "overview",
      of: [
        defineArrayMember({
          type: "object",
          name: "environment",
          fields: [defineField({ name: "type", type: "string" }), defineField({ name: "description", type: "text", rows: 2 })],
          preview: { select: { title: "type", subtitle: "description" } },
        }),
      ],
    }),

    /* ---------------- Specs ---------------- */
    defineField({
      name: "specGroups",
      title: "Specification tables",
      type: "array",
      group: "specs",
      of: [
        defineArrayMember({
          type: "object",
          name: "specGroup",
          fields: [
            defineField({ name: "category", title: "Group title", type: "string" }),
            defineField({
              name: "items",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "specItem",
                  fields: [defineField({ name: "label", type: "string" }), defineField({ name: "value", type: "string" })],
                  preview: { select: { title: "label", subtitle: "value" } },
                }),
              ],
            }),
          ],
          preview: { select: { title: "category" } },
        }),
      ],
    }),
    stringList("whatsIncluded", "What's included", "specs"),

    /* ---------------- Protocol ---------------- */
    defineField({
      name: "protocol",
      title: "Usage protocol",
      type: "object",
      group: "protocol",
      fields: [
        defineField({ name: "recommendedDuration", type: "string" }),
        defineField({ name: "frequency", type: "string" }),
        defineField({ name: "preparation", type: "array", of: [defineArrayMember({ type: "string" })] }),
        defineField({
          name: "protocolSteps",
          title: "Steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "protocolStep",
              fields: [defineField({ name: "step", type: "string" }), defineField({ name: "instruction", type: "text", rows: 2 })],
              preview: { select: { title: "step", subtitle: "instruction" } },
            }),
          ],
        }),
        defineField({ name: "contraindications", type: "array", of: [defineArrayMember({ type: "string" })] }),
      ],
    }),

    /* ---------------- FAQs & related ---------------- */
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "more",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [defineField({ name: "question", type: "string" }), defineField({ name: "answer", type: "text", rows: 3 })],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({
      name: "relatedProducts",
      title: "Related products",
      type: "array",
      group: "more",
      of: [defineArrayMember({ type: "reference", to: [{ type: "product" }] })],
      validation: (r) => r.unique(),
    }),
  ],
  orderings: [
    { title: "Catalog order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Name A–Z", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
