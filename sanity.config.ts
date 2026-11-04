"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Webpulse",
  projectId: projectId || "unconfigured",
  dataset,
  schema: {
    types: schemaTypes,
    // Hide "create new" for the settings singleton.
    templates: (templates) => templates.filter((t) => t.schemaType !== "siteSettings"),
  },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === "siteSettings" ? actions.filter((a) => !["duplicate", "delete", "unpublish"].includes(a.action ?? "")) : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
