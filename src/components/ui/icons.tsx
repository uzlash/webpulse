import type { ValueIcon } from "@/content/types";

export const ArrowUpRight = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9 9 3M4 3h5v5" />
  </svg>
);

const valuePaths: Record<ValueIcon, React.ReactNode> = {
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  star: <path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" />,
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20c0-3 2.7-5 6-5 1.5 0 2.9.4 4 1.2 1.1-.8 2.5-1.2 4-1.2 3.3 0 6 2 6 5" />
    </>
  ),
};

export const ValueGlyph = ({ name }: { name: ValueIcon }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {valuePaths[name] ?? valuePaths.star}
  </svg>
);
