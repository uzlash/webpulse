import { defineField } from "sanity";

export const HEADLINE_HELP = "Wrap words in *asterisks* to highlight them, e.g. Empowering Growth *Through Smart* ICT Solutions.";

export const headline = () =>
  defineField({ name: "headline", type: "string", description: HEADLINE_HELP, validation: (r) => r.required() });

export const eyebrow = () =>
  defineField({ name: "eyebrow", type: "string", description: "Small uppercase label above the headline.", validation: (r) => r.required() });

export const anchor = () =>
  defineField({
    name: "anchor",
    type: "string",
    description: "Optional ID for in-page links, e.g. 'services' makes #services jump here.",
    validation: (r) => r.regex(/^[a-z0-9-]+$/, { name: "slug-like" }),
  });

export const photo = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "image",
    description: description ?? "Optional. A labelled placeholder shows until a photo is added.",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Alt text", type: "string", description: "Describe the photo for screen readers." })],
  });

export const cta = (name = "cta", title = "Button") =>
  defineField({ name, title, type: "cta", validation: (r) => r.required() });

/** Strips the *highlight* markers for Studio list previews. */
export const plain = (s?: string) => (s ?? "").replace(/\*/g, "");
