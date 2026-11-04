import { Headline } from "@/components/ui/Headline";
import { Media } from "@/components/ui/Media";
import type { PracticesSection } from "@/content/types";

export function Practices({ s }: { s: PracticesSection }) {
  return (
    <section className="practices" id={s.anchor}>
      <div className="practices__left">
        <div className="practices__left-inner">
          <p className="eyebrow eyebrow--ink reveal">{s.eyebrow}</p>
          <Headline text={s.headline} className="reveal" />
          <p className="lede reveal">{s.body}</p>
          <Media
            image={s.image}
            placeholder="Hardware supply / workspace photo"
            tone="light"
            width={520}
            height={330}
            sizes="(max-width: 900px) 100vw, 520px"
            className="practices__photo reveal"
          />
        </div>
      </div>
      <div className="practices__right">
        <ol className="practice-list">
          {s.items.map((item, i) => (
              <li className="practice reveal" key={item._key}>
                <span className="practice__num">{String(i + 1).padStart(2, "0")}.</span>
                <div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="practice__box">
                  <span className="micro">Focus</span>
                  <strong>{item.focus}</strong>
                </div>
              </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
