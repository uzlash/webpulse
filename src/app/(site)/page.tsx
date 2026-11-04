import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { getPage } from "@/content/get";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  return {
    title: { absolute: page?.seoTitle || "Webpulse Network Services Limited" },
    description: page?.seoDescription,
  };
}

export default async function HomePage() {
  const page = await getPage("home");
  if (!page) notFound();
  return <SectionRenderer sections={page.sections ?? []} />;
}
