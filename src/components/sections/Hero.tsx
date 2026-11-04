import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/Headline";
import { resolveImage } from "@/content/image";
import type { HeroSection } from "@/content/types";

export function Hero({ s }: { s: HeroSection }) {
  const bg = resolveImage(s.backgroundImage, 2400)?.src;
  return (
    <section className="hero dark" id={s.anchor}>
      <div className="hero__bg" aria-hidden="true">
        {bg && <div className="hero__photo" style={{ backgroundImage: `url(${bg})` }} />}
        <svg className="hero__net" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g className="net-lines">
            <path d="M820 180 1010 300 1220 210 1380 360M1010 300 960 520 1180 600 1380 360M960 520 760 640 900 820M1180 600 1300 800M820 180 700 360 960 520M700 360 760 640" />
          </g>
          <g className="net-nodes">
            {[
              [820, 180, 4], [1010, 300, 6], [1220, 210, 4], [1380, 360, 5], [960, 520, 7],
              [1180, 600, 5], [760, 640, 4], [900, 820, 4], [1300, 800, 4], [700, 360, 4],
            ].map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
            ))}
          </g>
        </svg>
        {s.watermark && <div className="hero__watermark">{s.watermark}</div>}
      </div>
      <div className="container hero__inner">
        <div className="hero__copy reveal">
          <p className="eyebrow">{s.eyebrow}</p>
          <Headline as="h1" text={s.headline} />
          <Button href={s.cta.href} label={s.cta.label} variant="light" />
        </div>
        <div className="hero__aside reveal">
          <span className="rule" />
          <p>{s.intro}</p>
        </div>
        <div className="hero__stat reveal">
          <div className="hero__stat-num">{s.statValue}</div>
          <div>
            <p className="eyebrow">{s.statEyebrow}</p>
            <p className="hero__stat-label">{s.statLabel}</p>
          </div>
        </div>
        <a href="#intro" className="hero__down" aria-label="Scroll to next section">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v16M5 13l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
