import Image from "next/image";
import { resolveImage } from "@/content/image";
import type { Img } from "@/content/types";

type Props = {
  image: Img;
  /** Shown on the placeholder until a photo is set. */
  placeholder: string;
  tone: "dark" | "light";
  width: number;
  height: number;
  sizes: string;
  className?: string;
  children?: React.ReactNode;
};

/** Seed or CMS image, or a labelled placeholder block when none is set. */
export function Media({ image, placeholder, tone, width, height, sizes, className = "", children }: Props) {
  const img = resolveImage(image, width * 2, height * 2);
  return (
    <figure
      className={`ph ph--${tone} ${img ? "ph--filled" : ""} ${className}`.trim()}
      data-placeholder={img ? undefined : placeholder}
    >
      {img && <Image src={img.src} alt={img.alt} width={width} height={height} sizes={sizes} className="ph__img" />}
      {children}
    </figure>
  );
}
