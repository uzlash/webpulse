import type { SanityImageSource } from "@sanity/image-url";

/** A file in /public, used by seed content before Sanity is connected. */
export type LocalImg = { src: string; alt: string };
export type Img = LocalImg | (SanityImageSource & { alt?: string }) | null | undefined;
export type Cta = { label: string; href: string };

export type Office = { label: string; address: string; shortName: string };

export type SiteSettings = {
  companyName: string;
  tagline: string;
  rcNumber: string;
  logo?: Img;
  email: string;
  phone: string;
  phoneHref: string;
  offices: Office[];
  nav: Cta[];
  headerCta: Cta;
  footerServices: Cta[];
};

type Base<T extends string> = { _key: string; _type: T; anchor?: string };

export type HeroSection = Base<"heroSection"> & {
  eyebrow: string;
  headline: string;
  cta: Cta;
  intro: string;
  statValue: string;
  statEyebrow: string;
  statLabel: string;
  watermark: string;
  backgroundImage?: Img;
};

export type IntroSection = Base<"introSection"> & {
  pillAccent: string;
  pillText: string;
  headline: string;
  body: string;
  metrics: { _key: string; label: string; value: string; caption: string }[];
};

export type AboutSection = Base<"aboutSection"> & {
  eyebrow: string;
  headline: string;
  body: string;
  facts: { _key: string; label: string; value: string }[];
  badgeText: string;
  badgeCaption: string;
  image?: Img;
  secondaryImage?: Img;
  quote: string;
  quoteCaption: string;
};

export type PracticesSection = Base<"practicesSection"> & {
  eyebrow: string;
  headline: string;
  body: string;
  image?: Img;
  items: { _key: string; title: string; points: string[]; focus: string }[];
};

export type ServicesSection = Base<"servicesSection"> & {
  eyebrow: string;
  headline: string;
  countLabel: string;
  items: { _key: string; title: string; description: string; href?: string }[];
};

export type ValuesSection = Base<"valuesSection"> & {
  eyebrow: string;
  headline: string;
  body: string;
  items: { _key: string; title: string; tag: string; description: string; icon: ValueIcon }[];
};
export type ValueIcon = "bulb" | "shield" | "star" | "person" | "people";

export type ProjectsSection = Base<"projectsSection"> & {
  eyebrow: string;
  headline: string;
  cta: Cta;
  note: string;
  items: { _key: string; title: string; category: string; image?: Img }[];
};

export type ComplianceSection = Base<"complianceSection"> & {
  eyebrow: string;
  headline: string;
  body: string;
  facts: { _key: string; label: string; value: string }[];
  items: { _key: string; acronym: string; document: string; issuer: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
};

export type FaqSection = Base<"faqSection"> & {
  eyebrow: string;
  headline: string;
  body: string;
  cta: Cta;
  items: { _key: string; question: string; answer: string }[];
};

export type Section =
  | HeroSection
  | IntroSection
  | AboutSection
  | PracticesSection
  | ServicesSection
  | ValuesSection
  | ProjectsSection
  | ComplianceSection
  | FaqSection;

export type Page = {
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: Section[];
};
