import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/Headline";
import type { FaqSection } from "@/content/types";
import { FaqAccordion } from "./FaqAccordion";

export function Faq({ s }: { s: FaqSection }) {
  return (
    <section className="faq dark" id={s.anchor}>
      <div className="faq__watermark" aria-hidden="true">
        FAQ
      </div>
      <div className="container faq__grid">
        <div className="faq__left">
          <div className="reveal">
            <p className="eyebrow">{s.eyebrow}</p>
            <Headline text={s.headline} />
          </div>
          <div className="faq__left-foot reveal">
            <p>{s.body}</p>
            <Button href={s.cta.href} label={s.cta.label} variant="outline" />
          </div>
        </div>
        <FaqAccordion items={s.items} />
      </div>
    </section>
  );
}
