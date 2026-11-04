import { Headline } from "@/components/ui/Headline";
import { Media } from "@/components/ui/Media";
import type { AboutSection } from "@/content/types";

export function About({ s }: { s: AboutSection }) {
  return (
    <section className="about dark" id={s.anchor}>
      <div className="container about__grid">
        <div className="about__head reveal">
          <p className="eyebrow">{s.eyebrow}</p>
          <Headline text={s.headline} />
        </div>
        <Media
          image={s.image}
          placeholder="Team / office photo"
          tone="dark"
          width={330}
          height={360}
          sizes="(max-width: 900px) 100vw, 330px"
          className="about__photo reveal"
        >
          <span className="about__photo-num">{s.badgeText}</span>
          <figcaption className="micro">{s.badgeCaption}</figcaption>
        </Media>
        <div className="about__body reveal">
          <p>{s.body}</p>
          <dl className="rows">
            {s.facts.map((f) => (
              <div key={f._key}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about__side reveal">
          <Media
            image={s.secondaryImage}
            placeholder="Installation / field photo"
            tone="dark"
            width={440}
            height={420}
            sizes="(max-width: 900px) 100vw, 440px"
            className="about__photo2"
          />
          <blockquote className="quote">{s.quote}</blockquote>
          <p className="quote__cap micro">{s.quoteCaption}</p>
        </div>
      </div>
    </section>
  );
}
