"use client";

import { useState } from "react";
import type { FaqSection } from "@/content/types";

export function FaqAccordion({ items }: { items: FaqSection["items"] }) {
  const [open, setOpen] = useState<string | null>(items[0]?._key ?? null);
  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === item._key;
        const id = `faq-${item._key}`;
        return (
          <div key={item._key} className={`acc${isOpen ? " is-open" : ""}`}>
            <button
              className="acc__q"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : item._key)}
            >
              <span className="acc__num">{String(i + 1).padStart(2, "0")}.</span>
              <span className="acc__title">{item.question}</span>
              <span className="acc__icon" aria-hidden="true" />
            </button>
            <div className="acc__a" id={id} role="region">
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
