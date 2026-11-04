import { defineArrayMember, defineField, defineType } from "sanity";
import { sectionTypeNames } from "./sections";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "company", title: "Company", default: true },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({ name: "companyName", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "tagline", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "rcNumber", title: "RC number", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "email", type: "string", group: "company", validation: (r) => r.required().email() }),
    defineField({ name: "phone", title: "Phone (as displayed)", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({
      name: "phoneHref",
      title: "Phone link",
      type: "string",
      group: "company",
      description: "International format, e.g. tel:+2348060163941",
      validation: (r) => r.required().regex(/^tel:\+\d+$/, { name: "tel link" }),
    }),
    defineField({ name: "offices", type: "array", group: "company", of: [defineArrayMember({ type: "office" })] }),
    defineField({
      name: "logo",
      type: "image",
      group: "header",
      description: "Optional. Leave empty to use the built-in logo file.",
    }),
    defineField({ name: "nav", title: "Main navigation", type: "array", group: "header", of: [defineArrayMember({ type: "cta" })] }),
    defineField({ name: "headerCta", title: "Header button", type: "cta", group: "header", validation: (r) => r.required() }),
    defineField({ name: "footerServices", title: "Footer service links", type: "array", group: "footer", of: [defineArrayMember({ type: "cta" })] }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

export const pageType = defineType({
  name: "page",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      group: "content",
      description: "The homepage must use the slug 'home'.",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      group: "content",
      description: "Add, remove and reorder the blocks that make up the page.",
      of: sectionTypeNames.map((type) => defineArrayMember({ type })),
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", group: "seo", validation: (r) => r.max(70).warning("Keep under 70 characters.") }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (r) => r.max(160).warning("Keep under 160 characters."),
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
