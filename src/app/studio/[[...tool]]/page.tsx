import { NextStudio } from "next-sanity/studio";
import { isSanityConfigured } from "@/sanity/env";
import config from "../../../../sanity.config";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <p style={{ fontFamily: "system-ui", padding: 40, maxWidth: 560, lineHeight: 1.6 }}>
        Sanity is not connected yet. Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in <code>.env.local</code> (see
        README) and restart the dev server.
      </p>
    );
  }
  return <NextStudio config={config} />;
}
