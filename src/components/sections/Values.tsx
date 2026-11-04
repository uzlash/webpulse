import { Headline } from "@/components/ui/Headline";
import { ValueGlyph } from "@/components/ui/icons";
import type { ValuesSection } from "@/content/types";

export function Values({ s }: { s: ValuesSection }) {
  return (
    <section className="values light" id={s.anchor}>
      <div className="container">
        <div className="values__head">
          <div className="reveal">
            <p className="eyebrow eyebrow--ink">{s.eyebrow}</p>
            <Headline text={s.headline} />
          </div>
          <p className="lede reveal">{s.body}</p>
        </div>
        <div className="value-grid">
          {s.items.map((v, i) => (
            <article className="value reveal" key={v._key}>
              <span className="value__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="value__dot" />
              <div className="value__icon">
                <ValueGlyph name={v.icon} />
              </div>
              <h3>{v.title}</h3>
              <p className="micro micro--accent">{v.tag}</p>
              <p>{v.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
