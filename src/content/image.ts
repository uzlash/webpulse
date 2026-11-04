import { urlFor } from "@/sanity/client";
import type { Img } from "./types";

/** Resolves a local seed image or a Sanity image to a URL; null when no image is set. */
export function resolveImage(image: Img, width: number, height?: number): { src: string; alt: string } | null {
  if (!image || typeof image !== "object") return null;
  if ("src" in image && typeof image.src === "string") return { src: image.src, alt: image.alt ?? "" };
  if (!("asset" in image)) return null;
  let b = urlFor(image).width(width);
  if (height) b = b.height(height).fit("crop");
  return { src: b.url(), alt: (image as { alt?: string }).alt ?? "" };
}
