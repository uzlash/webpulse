import { defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "A section anchor (#contact), a page path (/about) or a full URL.",
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const factType = defineType({
  name: "fact",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
});

export const officeType = defineType({
  name: "office",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", description: "e.g. Head office", validation: (r) => r.required() }),
    defineField({ name: "shortName", type: "string", description: "e.g. Kaduna", validation: (r) => r.required() }),
    defineField({ name: "address", type: "text", rows: 3, description: "One line per row.", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label", subtitle: "shortName" } },
});
