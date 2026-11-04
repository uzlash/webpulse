import type { StructureResolver } from "sanity/structure";

// Site settings is a singleton: one fixed document instead of a list.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
    ]);
