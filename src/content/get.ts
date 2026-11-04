import { cacheLife, cacheTag } from "next/cache";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { PAGE_QUERY, SETTINGS_QUERY } from "@/sanity/queries";
import { seedHome, seedSettings } from "./seed";
import type { Page, SiteSettings } from "./types";

// All CMS reads share one tag; /api/revalidate expires it when content is published.
export const SANITY_TAG = "sanity";

export async function getSettings(): Promise<SiteSettings> {
  "use cache";
  cacheLife("hours");
  cacheTag(SANITY_TAG);
  if (!isSanityConfigured) return seedSettings;
  const data = await client.fetch<SiteSettings | null>(SETTINGS_QUERY);
  return data ?? seedSettings;
}

export async function getPage(slug: string): Promise<Page | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(SANITY_TAG);
  if (!isSanityConfigured) return slug === "home" ? seedHome : null;
  return client.fetch<Page | null>(PAGE_QUERY, { slug });
}
