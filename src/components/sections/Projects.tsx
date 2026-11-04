import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/Headline";
import { Media } from "@/components/ui/Media";
import type { ProjectsSection } from "@/content/types";
import { ProjectCarousel } from "./ProjectCarousel";

export function Projects({ s }: { s: ProjectsSection }) {
  return (
    <section className="projects light light--alt" id={s.anchor}>
      <div className="container projects__head">
        <div className="reveal">
          <p className="eyebrow eyebrow--ink">{s.eyebrow}</p>
          <Headline text={s.headline} />
        </div>
        <Button href={s.cta.href} label={s.cta.label} variant="dark" className="reveal" />
      </div>
      <ProjectCarousel count={s.items.length}>
        {s.items.map((p) => (
          <article className="slide" key={p._key}>
            <Media image={p.image} placeholder="Project photo" tone="light" width={720} height={405} sizes="(max-width: 900px) 84vw, 720px" />
            <div className="slide__meta">
              <h3>{p.title}</h3>
              <span className="micro">{p.category}</span>
            </div>
          </article>
        ))}
      </ProjectCarousel>
      {s.note && <p className="container projects__note micro">{s.note}</p>}
    </section>
  );
}
