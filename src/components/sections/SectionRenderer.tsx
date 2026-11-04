import type { Section } from "@/content/types";
import { About } from "./About";
import { Compliance } from "./Compliance";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Practices } from "./Practices";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Values } from "./Values";

export function SectionRenderer({ sections }: { sections: Section[] }) {
  return sections.map((s) => {
    switch (s._type) {
      case "heroSection":
        return <Hero key={s._key} s={s} />;
      case "introSection":
        return <Intro key={s._key} s={s} />;
      case "aboutSection":
        return <About key={s._key} s={s} />;
      case "practicesSection":
        return <Practices key={s._key} s={s} />;
      case "servicesSection":
        return <Services key={s._key} s={s} />;
      case "valuesSection":
        return <Values key={s._key} s={s} />;
      case "projectsSection":
        return <Projects key={s._key} s={s} />;
      case "complianceSection":
        return <Compliance key={s._key} s={s} />;
      case "faqSection":
        return <Faq key={s._key} s={s} />;
      default:
        return null;
    }
  });
}
