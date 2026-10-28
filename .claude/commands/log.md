---
description: Log a Sanity or other non-code website change in this month's changelog
argument-hint: <what changed, e.g. "added 2 products: Neem Oil, Herbal Soap">
allowed-tools: Read, Write, Edit, Bash(date:*)
---

Log this non-code website change in the monthly change log: $ARGUMENTS

Steps:

1. Read `changelog/README.md` for the format rules.
2. Get today's date with `date +%Y-%m-%d`. The target file is `changelog/YYYY-MM.md` for the current
   month. If it doesn't exist, create it from `changelog/_template.md`, replacing `<Month YYYY>`
   with the month name and year (e.g. `November 2026`).
3. Turn the text into one or more entries. Split it when it names several separate things
   (e.g. "added 2 products: Neem Oil, Herbal Soap" becomes two entries, one per product).
4. Pick each entry's section: Added, Updated, Removed, Fixed, Complimentary, or
   Internal (not shown to client).
5. Pick the source:
   - `sanity` for content edited in the Sanity Studio: products, blog posts, pages, images, prices.
     Use this when the text is about site content and doesn't say otherwise.
   - `manual` for anything else done outside the code: hosting, domain, DNS, email, Google, analytics.
6. Write each entry as `- YYYY-MM-DD — <description> (<source>)`. The description must be plain
   English a non-technical business owner understands: no jargon, file names or code terms.
   Tidy up the user's wording, but don't invent details that aren't in it.
7. If the text says the work was free or complimentary, put it under Complimentary and end the
   line with `— complimentary, worth ₹<amount>`. If no amount was given, ask for it before writing.
8. Append each entry at the end of its section, after any existing entries. Never change or
   remove existing lines.
9. Don't commit. Show the lines you added and which section each went into.
