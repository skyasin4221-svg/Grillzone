import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  inverted = false
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {text ? (
        <p className={`mt-5 text-base leading-8 ${inverted ? "text-white/80" : "text-black/65"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
