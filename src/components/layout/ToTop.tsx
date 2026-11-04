"use client";

import { useEffect, useState } from "react";

export function ToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#top" className={`to-top${visible ? " is-visible" : ""}`} aria-label="Back to top">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20V4M5 11l7-7 7 7" />
      </svg>
    </a>
  );
}
