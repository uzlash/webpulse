import Link from "next/link";
import { ArrowUpRight } from "./icons";

type Variant = "accent" | "light" | "dark" | "outline";

export function Button({
  href,
  label,
  variant,
  size,
  className = "",
}: {
  href: string;
  label: string;
  variant: Variant;
  size?: "sm";
  className?: string;
}) {
  const cls = ["btn", `btn--${variant}`, size === "sm" && "btn--sm", className].filter(Boolean).join(" ");
  return (
    <Link href={href} className={cls}>
      {label}
      <span className="btn__arrow">
        <ArrowUpRight />
      </span>
    </Link>
  );
}
