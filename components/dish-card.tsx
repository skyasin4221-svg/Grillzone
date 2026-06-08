"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DishCard({
  title,
  text,
  image,
  price
}: {
  title: string;
  text: string;
  image: string;
  price?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="premium-card group overflow-hidden rounded-[8px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-red-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-red-950/35 to-transparent" />
        {price ? (
          <span className="absolute left-4 top-4 rounded-full bg-grillRed px-3 py-1 text-xs font-black uppercase text-white shadow-xl shadow-red-600/35">
            {price}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-black/60">{text}</p>
        <Link
          href="/menu"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-grillRed"
        >
          Explore
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
