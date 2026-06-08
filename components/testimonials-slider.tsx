"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/data";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-red-100 bg-white p-6 text-black shadow-[0_20px_55px_rgba(255,0,0,0.12)] sm:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex gap-1 text-grillRed">
            {Array.from({ length: active.rating }).map((_, starIndex) => (
              <Star key={starIndex} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="mt-6 text-2xl font-black leading-snug sm:text-3xl">
            &ldquo;{active.text}&rdquo;
          </p>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-black/45">
            {active.name}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-red-50 text-grillRed transition hover:bg-grillRed hover:text-white"
          onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-red-50 text-grillRed transition hover:bg-grillRed hover:text-white"
          onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
