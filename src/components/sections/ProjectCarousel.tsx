"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Centred carousel: the active slide sits in the middle, neighbours peek in scaled down. */
export function ProjectCarousel({ children, count }: { children: React.ReactNode; count: number }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(count > 1 ? 1 : 0);
  const x0 = useRef<number | null>(null);

  const render = useCallback(() => {
    const slides = track.current?.children;
    const slide = slides?.[index] as HTMLElement | undefined;
    if (!slide || !root.current || !track.current) return;
    const offset = slide.offsetLeft + slide.offsetWidth / 2 - root.current.clientWidth / 2;
    track.current.style.transform = `translateX(${-offset}px)`;
    [...slides!].forEach((s, i) => s.classList.toggle("is-active", i === index));
  }, [index]);

  useEffect(() => {
    render();
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [render]);

  const go = (d: number) => setIndex((i) => (i + d + count) % count);

  return (
    <div className="carousel" ref={root}>
      <div
        className="carousel__track"
        ref={track}
        onPointerDown={(e) => (x0.current = e.clientX)}
        onPointerUp={(e) => {
          if (x0.current !== null && Math.abs(e.clientX - x0.current) > 40) go(e.clientX < x0.current ? 1 : -1);
          x0.current = null;
        }}
      >
        {children}
      </div>
      {count > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" aria-label="Previous project" onClick={() => go(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <button className="carousel__btn carousel__btn--next" aria-label="Next project" onClick={() => go(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
