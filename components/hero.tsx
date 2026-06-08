"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-white pt-20 text-black">
      <Image
        src={images.hero}
        alt="Fresh grilled chicken and burgers"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/18" />
      <div className="hero-sweep absolute -left-20 top-28 h-20 w-[58vw] bg-grillRed/95 shadow-2xl shadow-red-600/20" />
      <div className="absolute -left-8 top-36 h-3 w-[70vw] bg-white/90" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
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
            className="heading-xl max-w-4xl text-grillRed drop-shadow-[0_8px_28px_rgba(255,255,255,0.9)]"
          >
            Fresh Grill, Big Flavour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-xl text-base font-bold leading-8 text-black/70 sm:text-lg"
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
              <div key={label} className="rounded-[8px] border border-red-100 bg-white/90 px-3 py-3 text-center shadow-lg shadow-red-600/10 backdrop-blur">
                <p className="font-display text-3xl leading-none text-grillRed sm:text-4xl">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wide text-black/50 sm:text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="float-slow relative ml-auto max-w-sm rounded-[8px] border border-red-100 bg-white p-4 text-black shadow-[0_35px_100px_rgba(255,0,0,0.18)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-red-50">
              <Image
                src={images.counterMeals}
                alt="Signature burger meal"
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-grillRed">Best seller</p>
                <p className="mt-1 text-xl font-black uppercase">Tower Burger Meal</p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-full bg-grillRed text-white shadow-xl shadow-red-600/35">
                <Flame size={24} />
              </div>
            </div>
          </div>
          <div className="float-delay absolute -bottom-8 -left-4 rounded-[8px] border border-red-100 bg-white px-5 py-4 text-black shadow-[0_25px_70px_rgba(255,0,0,0.16)]">
            <div className="flex gap-1 text-grillRed">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-sm font-black uppercase tracking-wide">900+ local reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
