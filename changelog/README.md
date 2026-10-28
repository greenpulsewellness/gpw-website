# Website change log

A month-by-month record of every change to the GreenPulse Wellness website, written so the
business owner can read it without any technical background. It is kept up to date as work
happens, so the month never has to be pieced together from git history afterwards.

## Files

| File | Purpose |
| --- | --- |
| `YYYY-MM.md` | One file per month, e.g. `2026-11.md`. Created from the template on the first change of the month. |
| `_template.md` | Blank month file. Copy it and replace `<Month YYYY>` (e.g. `November 2026`). |
| `README.md` | This file. |

## Sections

| Section | What goes there |
| --- | --- |
| **Added** | New pages, products, features, sections, articles. |
| **Updated** | Changes to existing content, design, photos, prices, wording. |
| **Removed** | Anything taken off the site. |
| **Fixed** | Something that was broken or wrong and now works. |
| **Complimentary** | Work done free of charge. Always carries a value (see below). |
| **Internal (not shown to client)** | Technical-only work: dependency updates, refactors, config, tooling. |

Below the `---` line, **Month-end notes** holds free-form *Insights* and *Next month actions*,
filled in when the month closes. These bullets are not entries and are not checked.

## Entry format

One line per entry:

```
- YYYY-MM-DD — <plain-English description> (<source>)
```

`<source>` is one of:

- a short commit hash, e.g. `af7d5d2` (several hashes may be comma-separated if one change spans commits)
- `pending` — committed by Claude; the hash isn't known until after the commit exists (see below)
- `sanity` — content changed in the Sanity Studio, no code involved
- `manual` — anything else done outside the code (hosting, domain, Google, etc.)

Complimentary entries add a value at the end:

```
- 2026-11-04 — Designed a Diwali offer banner for the home page (3f9c2ab) — complimentary, worth ₹4,000
```

### Writing descriptions

Write for a non-technical business owner. No jargon, no file names, no code terms.

- Good: "Updated the price and photos of the Recovery Suite product page"
- Bad: "edited data/products.ts"

Anything only a developer would care about goes under **Internal**.

## Workflow

1. **Code changes**: Claude logs these automatically (rule in `CLAUDE.md`). Whenever site code,
   content or config is committed, an entry is appended to the current month's file in the same
   commit, with source `pending`.
2. **Sanity / non-code changes**: use the `/log` command in Claude Code, e.g.
   `/log added 2 products: Neem Oil, Herbal Soap`. It appends formatted entries with source
   `sanity` or `manual`.
3. **Cross-check**: run

   ```
   npm run changelog:check -- --month 2026-11
   ```

   It reports:
   - **Unlogged commits**: commits in that month that no entry references.
   - **Pending entries**: `pending` entries matched to a commit by date and wording. Add `--fix`
     to write the real hashes into the file (commit that change on its own; changelog-only
     commits are ignored by the check).
   - **Unknown hashes**: entries pointing at a hash that doesn't exist in git.
   - **Malformed entries**: lines in an entry section that don't follow the format.

   Exit code is `0` when everything matches, `1` otherwise. `--month` defaults to the current
   month. Commits that only touch `changelog/`, and empty commits, are ignored.

## Rules

- Only append. Never rewrite or delete past entries. The one exception is replacing `pending`
  with the real hash (`--fix`).
- Don't log changes to the changelog itself.
