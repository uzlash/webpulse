import Link from "next/link";
import { Headline } from "@/components/ui/Headline";
import { ArrowUpRight } from "@/components/ui/icons";
import type { ComplianceSection } from "@/content/types";

export function Compliance({ s }: { s: ComplianceSection }) {
  const pad = (i: number) => String(i + 1).padStart(2, "0");
  return (
    <section className="compliance light" id={s.anchor}>
      <div className="container">
        <div className="compliance__head">
          <div className="reveal">
            <p className="eyebrow eyebrow--ink">{s.eyebrow}</p>
            <Headline text={s.headline} />
          </div>
          <div className="compliance__aside reveal">
            <p className="lede">{s.body}</p>
            <div className="compliance__facts">
              {s.facts.map((f) => (
                <div key={f._key}>
                  <span className="micro">{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cert-grid">
          {s.items.map((c, i) => (
            <article className="cert reveal" key={c._key}>
              <span className="cert__num">{pad(i)}</span>
              <p className="cert__org">{c.acronym}</p>
              <h3>{c.document}</h3>
              <p className="micro micro--accent">{c.issuer}</p>
            </article>
          ))}
          {s.ctaTitle && (
            <Link href={s.ctaHref || "#contact"} className="cert cert--cta reveal">
              <span className="cert__num">{pad(s.items.length)}</span>
              <p className="cert__org">{s.ctaTitle}</p>
              <h3>{s.ctaText}</h3>
              <span className="icon-btn">
                <ArrowUpRight />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
