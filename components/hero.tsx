"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#fff7f2] pt-20 text-[#1a1010]">
      <Image
        src={images.hero}
        alt="Fresh grilled chicken and burgers"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1010]/18 via-[#fff7f2]/90 to-[#fff7f2]/18" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#fff7f2] via-[#fff7f2]/96 to-transparent sm:w-[70%]" />
      <div className="hero-sweep absolute -left-20 top-28 h-16 w-[58vw] bg-grillRed/80 shadow-2xl shadow-red-900/20" />
      <div className="absolute -left-8 top-36 h-3 w-[70vw] bg-[#fff7f2]/90" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff7f2] to-transparent" />
      <div className="absolute left-0 top-20 h-1.5 w-full bg-grillRed" />

      <div className="container-pad relative z-10 grid min-h-[calc(92svh-5rem)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.72fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-grillRed/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-grillRed shadow-lg shadow-red-600/10"
          >
            <Flame size={16} />
            Grill Zone Original
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="heading-xl max-w-4xl text-[#211010] drop-shadow-[0_8px_24px_rgba(255,247,242,0.95)]"
          >
            Fresh Grill, Big Flavour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-xl text-base font-bold leading-8 text-[#3a2420] sm:text-lg"
          >
            Peri peri chicken, crispy wings, burgers, doner wraps, curry plates and
            Sunday Nashta served fresh from Colchester High Street.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 min-[380px]:flex-row"
          >
            <Link href="/menu" className="button-primary">
              View Menu
              <ArrowRight size={18} />
            </Link>
            <a href={site.orderUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <ShoppingBag size={18} />
              Order Now
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
            className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:gap-3"
          >
            {[
              ["£4.50", "meals from"],
              ["£8.00", "mix grill"],
              ["£12.00", "15 wings"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-red-200/80 bg-[#fff9f6] px-3 py-3 text-center shadow-lg shadow-red-900/10">
                <p className="font-display text-3xl leading-none text-grillRed sm:text-4xl">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-black/50 sm:text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
