import type { JSX } from "react";

type Props = {
  text: string;
  as?: keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3">;
  tone?: "muted" | "accent";
  className?: string;
};

/** Renders `*words*` in the highlight tone (grey or brand blue). */
export function Headline({ text, as: Tag = "h2", tone = "muted", className = "" }: Props) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <Tag className={`display ${className}`.trim()}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className={tone}>
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </Tag>
  );
}
