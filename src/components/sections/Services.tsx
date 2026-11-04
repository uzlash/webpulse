import Link from "next/link";
import { Headline } from "@/components/ui/Headline";
import { ArrowUpRight } from "@/components/ui/icons";
import type { ServicesSection } from "@/content/types";

export function Services({ s }: { s: ServicesSection }) {
  return (
    <section className="services dark" id={s.anchor}>
      <div className="container">
        <div className="services__head">
          <div className="reveal">
            <p className="eyebrow">{s.eyebrow}</p>
            <Headline text={s.headline} tone="accent" />
          </div>
          <div className="services__count reveal">
            <span className="services__count-num">{String(s.items.length).padStart(2, "0")}</span>
            <span className="micro">{s.countLabel}</span>
          </div>
        </div>
        <div className="service-grid">
          {s.items.map((item, i) => (
            <Link href={item.href || "#contact"} className="service reveal" key={item._key}>
              <span className="micro">Service {String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="icon-btn">
                <ArrowUpRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
