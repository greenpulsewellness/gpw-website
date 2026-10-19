import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Blog post. Field names mirror `BlogPost` (data/blog.ts) so lib/blog.ts can map them 1:1.
 * Paragraph text supports **bold**, and lines starting with "• " or "1. " render as lists.
 */

export const BLOG_CATEGORIES = [
  "Heat & Infrared",
  "Cold & Contrast",
  "Red Light & Photobiomodulation",
  "Oxygen & Hyperbaric",
  "Compression & Massage",
  "Business & Facility Design",
  "Healthy Ageing & Mobility",
];

export const postType = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  groups: [
    { name: "basics", title: "Basics", default: true },
    { name: "content", title: "Article" },
    { name: "related", title: "Related" },
  ],
  fields: [
    /* ---------------- Basics ---------------- */
    defineField({ name: "title", type: "string", group: "basics", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "basics",
      description: "Used in the page URL: /blog/<slug>. Changing it breaks existing links.",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3, group: "basics", description: "Shown on blog cards and in search results.", validation: (r) => r.required().max(300) }),
    defineField({ name: "category", type: "string", group: "basics", options: { list: BLOG_CATEGORIES }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", title: "Publish date", type: "date", group: "basics", options: { dateFormat: "MMM D, YYYY" }, validation: (r) => r.required() }),
    defineField({ name: "readTime", title: "Read time", type: "string", group: "basics", description: 'e.g. "7 min read"' }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }], group: "basics", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Featured on the blog page", type: "boolean", group: "basics", initialValue: false }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "basics",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
      validation: (r) => r.required(),
    }),
    defineField({ name: "tags", type: "array", group: "basics", of: [defineArrayMember({ type: "string" })], options: { layout: "tags" } }),

    /* ---------------- Article ---------------- */
    defineField({ name: "keyTakeaways", title: "Key takeaways", type: "array", group: "content", of: [defineArrayMember({ type: "text", rows: 2 })] }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "id",
              title: "Anchor id",
              type: "slug",
              description: "Used for the table of contents link (#anchor).",
              options: { source: (_doc, ctx) => (ctx.parent as { heading?: string })?.heading ?? "" },
            }),
            defineField({
              name: "content",
              title: "Paragraphs",
              type: "array",
              description: 'Use **bold** for emphasis. Start a line with "• " for bullets or "1. " for numbered steps.',
              of: [defineArrayMember({ type: "text", rows: 4 })],
            }),
            defineField({
              name: "callout",
              title: "Callout (optional)",
              type: "object",
              fields: [
                defineField({ name: "type", type: "string", options: { list: ["tip", "science", "quote"], layout: "radio", direction: "horizontal" } }),
                defineField({ name: "text", type: "text", rows: 3 }),
                defineField({ name: "source", type: "string", description: "For quotes" }),
              ],
            }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
    }),

    /* ---------------- Related ---------------- */
    defineField({
      name: "relatedEquipment",
      title: "Related equipment",
      type: "array",
      group: "related",
      description: "Products featured at the end of the article.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "product" }] })],
      validation: (r) => r.unique(),
    }),
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
