"use client";

import { motion } from "framer-motion";

export function MenuCategoryCard({
  name,
  items,
  id,
  featured = false
}: {
  name: string;
  items: string[][];
  id?: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      id={id}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`scroll-mt-32 overflow-hidden rounded-[8px] border bg-[#fffdfb] shadow-[0_16px_45px_rgba(90,20,20,0.1)] ${
        featured ? "border-grillRed ring-2 ring-red-200/70" : "border-red-200/70"
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-red-200/70 bg-gradient-to-r from-red-900 to-grillRed px-4 py-3 text-white sm:px-5">
        <h2 className="font-display text-3xl uppercase leading-none sm:text-4xl">{name}</h2>
        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-grillRed">
          {items.length} items
        </span>
      </div>
      <div className="grid gap-px bg-red-200/70 md:grid-cols-2">
        {items.map(([title, text, price]) => (
          <div
            key={title}
            className="grid gap-2 bg-[#fffdfb] px-4 py-3 transition hover:bg-red-100/45 min-[460px]:grid-cols-[1fr_auto] min-[460px]:items-start sm:px-5"
          >
            <div className="min-w-0 pr-1">
              <h3 className="text-sm font-black uppercase tracking-tight text-black sm:text-base">{title}</h3>
              <p className="mt-1 text-xs font-medium leading-5 text-black/55 sm:text-sm">{text}</p>
            </div>
            <div className="flex min-[460px]:justify-end">
              <span className="inline-flex min-w-20 justify-center rounded-full bg-[#fff0ea] px-3 py-1 text-sm font-black text-grillRed ring-1 ring-red-200">
                {price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
