import type { Metadata } from "next";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getSettings } from "@/content/get";
import { urlFor } from "@/sanity/client";
import "@/styles/site.css";

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSettings();
  return { title: { default: s.companyName, template: `%s | ${s.companyName}` } };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const s = await getSettings();
  const logoSrc = s.logo && "asset" in (s.logo as object) ? urlFor(s.logo).width(400).url() : "/webpulse-logo.jpg";
  return (
    <>
      {/* Lets CSS hide .reveal elements only when JS is available to show them again. */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <SiteHeader
        companyName={s.companyName}
        logoSrc={logoSrc}
        nav={s.nav}
        cta={s.headerCta}
        phone={s.phone}
        phoneHref={s.phoneHref}
      />
      <main>{children}</main>
      <SiteFooter settings={s} />
      <RevealObserver />
    </>
  );
}
