import type { StructureResolver } from "sanity/structure";

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

/** Admin sidebar: products (all / by category), then blog posts and authors. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("GreenPulse Admin")
    .items([
      S.listItem()
        .title("All products")
        .schemaType("product")
        .child(S.documentTypeList("product").title("All products").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.divider(),
      S.listItem()
        .title("By category")
        .child(
          S.list()
            .title("Categories")
            .items(
              CATEGORIES.map((category) =>
                S.listItem()
                  .title(category)
                  .child(
                    S.documentList()
                      .title(category)
                      .schemaType("product")
                      .apiVersion("2025-10-01")
                      .filter('_type == "product" && category == $category')
                      .params({ category })
                      .defaultOrdering([{ field: "order", direction: "asc" }]),
                  ),
              ),
            ),
        ),
      S.divider(),
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts").defaultOrdering([{ field: "publishedAt", direction: "desc" }])),
      S.documentTypeListItem("author").title("Authors"),
    ]);
