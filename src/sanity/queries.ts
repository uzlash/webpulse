import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]`);

export const PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  title, seoTitle, seoDescription,
  sections[]
}`);
