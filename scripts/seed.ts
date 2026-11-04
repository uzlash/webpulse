/**
 * Loads the default content (src/content/seed.ts) into the Sanity dataset.
 * Run once after `sanity init`:  npx sanity exec scripts/seed.ts --with-user-token
 * It replaces the siteSettings and home page documents, so don't re-run it after editors have made changes.
 */
import { createReadStream } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";
import { seedHome, seedSettings } from "../src/content/seed";
import type { Section } from "../src/content/types";

const client = getCliClient({ apiVersion: "2026-11-01" });

const typed = <T extends object>(arr: T[] | undefined, _type: string, prefix: string) =>
  (arr ?? []).map((item, i) => ({ _key: `${prefix}${i}`, ...item, _type }));

// Inline array members need a _type matching the schema's member name.
const itemType: Record<Section["_type"], string> = {
  heroSection: "",
  introSection: "metric",
  aboutSection: "",
  practicesSection: "practice",
  servicesSection: "service",
  valuesSection: "value",
  projectsSection: "project",
  complianceSection: "registration",
  faqSection: "faq",
};

function toSanity(section: Section) {
  const s: Record<string, unknown> = { ...section };
  if ("cta" in section) s.cta = { _type: "cta", ...section.cta };
  if ("facts" in section) s.facts = typed(section.facts, "fact", "f");
  if (section._type === "introSection") s.metrics = typed(section.metrics, "metric", "m");
  else if ("items" in section && itemType[section._type]) s.items = typed(section.items as object[], itemType[section._type], "i");
  return s;
}

// Local seed images ({ src: "/images/..." }) are uploaded from /public and replaced with Sanity image references.
const uploaded = new Map<string, string>();
async function uploadImages(value: unknown): Promise<unknown> {
  if (Array.isArray(value)) return Promise.all(value.map(uploadImages));
  if (!value || typeof value !== "object") return value;
  const obj = value as Record<string, unknown>;
  if (typeof obj.src === "string" && obj.src.startsWith("/")) {
    let assetId = uploaded.get(obj.src);
    if (!assetId) {
      const file = path.join(process.cwd(), "public", obj.src);
      const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(file) });
      assetId = asset._id;
      uploaded.set(obj.src, assetId);
      console.log(`Uploaded ${obj.src}`);
    }
    return { _type: "image", asset: { _type: "reference", _ref: assetId }, alt: obj.alt };
  }
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) out[k] = await uploadImages(v);
  return out;
}

async function run() {
  const sections = (await uploadImages(seedHome.sections.map(toSanity))) as object[];
  const tx = client.transaction();
  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...seedSettings,
    offices: typed(seedSettings.offices, "office", "o"),
    nav: typed(seedSettings.nav, "cta", "n"),
    headerCta: { _type: "cta", ...seedSettings.headerCta },
    footerServices: typed(seedSettings.footerServices, "cta", "s"),
  });
  tx.createOrReplace({
    _id: "page-home",
    _type: "page",
    title: seedHome.title,
    slug: { _type: "slug", current: "home" },
    seoTitle: seedHome.seoTitle,
    seoDescription: seedHome.seoDescription,
    sections,
  });
  await tx.commit();
  console.log(`Seeded siteSettings and page-home (${uploaded.size} images uploaded).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
