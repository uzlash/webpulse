import { Headline } from "@/components/ui/Headline";
import type { IntroSection } from "@/content/types";

export function Intro({ s }: { s: IntroSection }) {
  const n = s.metrics.length;
  return (
    <section className="intro light" id={s.anchor}>
      <div className="container">
        <div className="pill reveal">
          <span className="pill__accent">{s.pillAccent}</span> {s.pillText}
          <span className="pill__plus" aria-hidden="true">+</span>
        </div>
        <Headline text={s.headline} className="display--center reveal" />
        <p className="lede lede--center reveal">{s.body}</p>
        <div className="metrics" style={{ "--cols": n } as React.CSSProperties}>
          {s.metrics.map((m, i) => (
            <div className="metric reveal" key={m._key}>
              <p className="micro">{m.label}</p>
              <p className="metric__num">{m.value}</p>
              <p className="metric__label">{m.caption}</p>
              <span className="metric__dots" aria-hidden="true">
                {Array.from({ length: n }, (_, j) => (
                  <i key={j} className={j === i ? "on" : undefined} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
