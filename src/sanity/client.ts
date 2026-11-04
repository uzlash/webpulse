import { createClient } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder({ projectId: projectId || "unconfigured", dataset });

export const urlFor = (source: SanityImageSource) => builder.image(source).auto("format");
