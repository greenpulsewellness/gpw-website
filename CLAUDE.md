@AGENTS.md

## Change log

The website keeps a monthly, client-readable change log in `changelog/` (format and workflow in
`changelog/README.md`). Keep it current as you work:

- After any change to site code, content or config that is committed (or that the user asks you
  to commit), append an entry to the current month's file, `changelog/YYYY-MM.md`, in the same
  commit. If the file doesn't exist yet, create it from `changelog/_template.md`.
- Put each entry in the right section: Added, Updated, Removed, Fixed, Complimentary, or
  Internal (not shown to client). Dependency bumps, refactors, config and tooling go under
  Internal.
- Format: `- YYYY-MM-DD — <description> (<source>)`, using today's date. The source is the
  commit's short hash, or `pending` when the hash isn't known yet (always the case for the commit
  that contains the entry). Complimentary entries end with `— complimentary, worth ₹<amount>`.
- Write descriptions for a non-technical business owner: no jargon, file names or code terms.
  "Updated the price and photos of the Recovery Suite product page", not "edited
  data/products.ts".
- One commit may need several entries if it changes several things a client would notice.
- Never rewrite or delete past entries; only append. The exception is
  `npm run changelog:check -- --fix`, which replaces `pending` with real hashes.
- Don't log changes to the changelog itself.
- `npm run changelog:check -- --month YYYY-MM` cross-checks entries against git.
