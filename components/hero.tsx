"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/data";

export function Hero() {
  const luxuryTabs = ["Charcoal grill", "Fresh naan", "Open late", "Family buckets", "Sunday Nashta", "Peri peri"];
  const movingTabs = [...luxuryTabs, ...luxuryTabs];

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-grillBlack pt-20 text-white">
      <Image
        src={images.hero}
        alt="Fresh grilled chicken and burgers"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#140909] via-[#140909]/82 to-[#140909]/22" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#140909] via-[#140909]/86 to-transparent sm:w-[72%]" />
      <div className="hero-sweep absolute -left-20 top-28 h-14 w-[58vw] bg-grillRed/90 shadow-2xl shadow-red-950/30" />
      <div className="absolute -left-8 top-36 h-2 w-[70vw] bg-white/85" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-grillBlack to-transparent" />
      <div className="absolute left-0 top-20 h-1.5 w-full bg-grillRed" />

      <div className="container-pad relative z-10 grid min-h-[calc(92svh-5rem)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.72fr]">
        <div className="w-full min-w-0 max-w-[38rem] lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-red-950/20 backdrop-blur"
          >
            <Flame size={16} className="text-grillRed" />
            Grill Zone Original
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-[14ch] break-words font-display text-4xl font-black uppercase leading-[0.95] text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] sm:max-w-4xl sm:text-7xl lg:text-8xl"
          >
            Premium Grill, Original Fire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-5 max-w-[34rem] text-sm font-semibold leading-7 text-white/82 min-[380px]:text-base sm:mt-6 sm:text-lg sm:leading-8"
          >
            Peri peri chicken, crispy wings, burgers, doner wraps, curry plates and
            Sunday Nashta served fresh from Colchester High Street.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-6 w-full max-w-full overflow-hidden sm:mt-7 sm:max-w-2xl"
          >
            <div className="luxury-tab-track flex w-max gap-2">
              {movingTabs.map((tab, index) => (
                <span
                  key={`${tab}-${index}`}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-white/85 backdrop-blur"
                >
                  {tab}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-7 flex w-full flex-col gap-3 min-[380px]:flex-row sm:mt-8"
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
            className="mt-7 grid max-w-xl grid-cols-2 gap-2 min-[520px]:grid-cols-3 sm:gap-3"
          >
            {[
              ["£4.50", "meals from"],
              ["£8.00", "mix grill"],
              ["£12.00", "15 wings"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-white/15 bg-white/10 px-3 py-3 text-center shadow-lg shadow-red-950/20 backdrop-blur">
                <p className="font-display text-3xl leading-none text-white sm:text-4xl">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-white/55 sm:text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
