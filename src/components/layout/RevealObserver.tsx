"use client";

import { useEffect } from "react";

/** Fades `.reveal` elements in as they enter the viewport, staggered within a parent. */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = [...(el.parentElement?.children ?? [])].filter((c) => c.classList.contains("reveal"));
          el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 5) * 80}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
