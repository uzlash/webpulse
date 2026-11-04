import Link from "next/link";
import type { SiteSettings } from "@/content/types";
import { cacheLife } from "next/cache";
import { ToTop } from "./ToTop";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function SiteFooter({ settings: s }: { settings: SiteSettings }) {
  const [at, domain] = s.email.split("@");
  return (
    <footer className="site-footer dark" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <svg className="footer__mark" viewBox="0 0 64 48" aria-hidden="true">
            <rect x="10" y="4" width="44" height="30" rx="3" />
            <rect x="15" y="9" width="34" height="20" rx="1" className="screen" />
            <path d="M2 38h60l-4 6H6z" />
          </svg>
          <p className="footer__word">
            WEBPULSE
            <br />
            <span>NETWORK SERVICES</span>
          </p>
          <p>{s.tagline}</p>
        </div>
        <div className="footer__col">
          <p className="footer__label footer__label--accent">Contact now</p>
          <a className="footer__big" href={`mailto:${s.email}`}>
            {at}
            <wbr />@{domain}
          </a>
          <a className="footer__big" href={s.phoneHref}>
            {s.phone}
          </a>
        </div>
        <div className="footer__col">
          <p className="footer__label">Offices</p>
          {s.offices.map((o) => (
            <p className="footer__addr" key={o.label}>
              <strong>{o.label}</strong>
              {o.address.split("\n").map((line, i) => (
                <span key={i} className="footer__line">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>
        <div className="footer__col">
          <p className="footer__label">Services</p>
          <ul className="footer__list">
            {s.footerServices.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © <CopyrightYear /> <Link href="#top">{s.companyName}</Link>. All rights reserved.
          </p>
          <p>{s.rcNumber}</p>
        </div>
      </div>
      <ToTop />
    </footer>
  );
}
