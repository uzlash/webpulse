"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Cta } from "@/content/types";

type Props = {
  companyName: string;
  logoSrc: string;
  nav: Cta[];
  cta: Cta;
  phone: string;
  phoneHref: string;
};

export function SiteHeader({ companyName, logoSrc, nav, cta, phone, phoneHref }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  // Highlight the nav item for the section in the middle of the viewport.
  useEffect(() => {
    const targets = nav
      .map((n) => (n.href.startsWith("#") ? document.querySelector(n.href) : null))
      .filter((el): el is Element => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [nav]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="header-inner">
        <Link href="#top" className="brand" aria-label={`${companyName} — home`}>
          <Image src={logoSrc} alt={companyName} width={200} height={79} priority />
        </Link>
        <nav className="main-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active === item.href ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-meta">
          <a href={phoneHref} className="header-phone">
            {phone}
          </a>
          <Button href={cta.href} label={cta.label} variant="accent" size="sm" />
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
