import { defineArrayMember, defineField, defineType } from "sanity";
import { anchor, cta, eyebrow, headline, photo, plain } from "./helpers";

const preview = (label: string) => ({
  select: { title: "headline" },
  prepare: ({ title }: { title?: string }) => ({ title: plain(title) || label, subtitle: label }),
});

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    cta(),
    defineField({ name: "intro", type: "text", rows: 3, description: "Paragraph on the right.", validation: (r) => r.required() }),
    defineField({ name: "statValue", title: "Big number", type: "string", description: "e.g. 2024", validation: (r) => r.required() }),
    defineField({ name: "statEyebrow", title: "Big number label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "statLabel", title: "Big number caption", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "watermark", type: "string", description: "Large faded word behind the hero." }),
    photo("backgroundImage", "Background photo", "Optional. Shown faded behind the dark overlay."),
    anchor(),
  ],
  preview: preview("Hero"),
});

export const introSection = defineType({
  name: "introSection",
  title: "Intro + metrics",
  type: "object",
  fields: [
    defineField({ name: "pillAccent", title: "Badge (blue part)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "pillText", title: "Badge (dark part)", type: "string", validation: (r) => r.required() }),
    headline(),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "metrics",
      type: "array",
      validation: (r) => r.min(1).max(4),
      of: [
        defineArrayMember({
          type: "object",
          name: "metric",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", type: "string", description: "Only use numbers you can verify.", validation: (r) => r.required() }),
            defineField({ name: "caption", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("Intro + metrics"),
});

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "body", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "facts", type: "array", of: [defineArrayMember({ type: "fact" })] }),
    defineField({ name: "badgeText", title: "Photo badge text", type: "string", description: "Large text over the first photo.", validation: (r) => r.required() }),
    defineField({ name: "badgeCaption", title: "Photo badge caption", type: "string", validation: (r) => r.required() }),
    photo("image", "Photo (left)"),
    photo("secondaryImage", "Photo (right)"),
    defineField({ name: "quote", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "quoteCaption", type: "string", validation: (r) => r.required() }),
    anchor(),
  ],
  preview: preview("About"),
});

export const practicesSection = defineType({
  name: "practicesSection",
  title: "Practices (numbered list)",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
    photo("image", "Photo"),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "practice",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "points", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "focus", type: "string", description: "Short label in the side box, e.g. Build & Deploy.", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "title", subtitle: "focus" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("Practices"),
});

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services grid",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "countLabel", type: "string", description: "Caption under the service count (the count is automatic).", validation: (r) => r.required() }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "service",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", rows: 2, validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link", type: "string", description: "Defaults to #contact." }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("Services grid"),
});

export const valuesSection = defineType({
  name: "valuesSection",
  title: "Values",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "value",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "tag", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", rows: 2, validation: (r) => r.required() }),
            defineField({
              name: "icon",
              type: "string",
              initialValue: "star",
              options: {
                list: [
                  { title: "Light bulb", value: "bulb" },
                  { title: "Shield", value: "shield" },
                  { title: "Star", value: "star" },
                  { title: "Person", value: "person" },
                  { title: "People", value: "people" },
                ],
              },
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "tag" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("Values"),
});

export const projectsSection = defineType({
  name: "projectsSection",
  title: "Projects carousel",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    cta(),
    defineField({ name: "note", type: "string", description: "Small line under the carousel." }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "project",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "category", type: "string", validation: (r) => r.required() }),
            photo("image", "Photo"),
          ],
          preview: { select: { title: "title", subtitle: "category", media: "image" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("Projects carousel"),
});

export const complianceSection = defineType({
  name: "complianceSection",
  title: "Compliance grid",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "facts", type: "array", of: [defineArrayMember({ type: "fact" })] }),
    defineField({
      name: "items",
      title: "Registrations",
      type: "array",
      description: "Issuer and document name only. Do not add certificate numbers, TINs or financial figures.",
      of: [
        defineArrayMember({
          type: "object",
          name: "registration",
          fields: [
            defineField({ name: "acronym", type: "string", validation: (r) => r.required() }),
            defineField({ name: "document", type: "string", validation: (r) => r.required() }),
            defineField({ name: "issuer", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "document", subtitle: "acronym" } },
        }),
      ],
    }),
    defineField({ name: "ctaTitle", title: "Last tile title", type: "string", description: "Leave empty to hide the dark call-to-action tile." }),
    defineField({ name: "ctaText", title: "Last tile text", type: "string" }),
    defineField({ name: "ctaHref", title: "Last tile link", type: "string" }),
    anchor(),
  ],
  preview: preview("Compliance grid"),
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",
  fields: [
    eyebrow(),
    headline(),
    defineField({ name: "body", type: "text", rows: 2, validation: (r) => r.required() }),
    cta(),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "question", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", type: "text", rows: 4, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    anchor(),
  ],
  preview: preview("FAQ"),
});

export const sectionTypes = [
  heroSection,
  introSection,
  aboutSection,
  practicesSection,
  servicesSection,
  valuesSection,
  projectsSection,
  complianceSection,
  faqSection,
];

export const sectionTypeNames = sectionTypes.map((t) => t.name);
