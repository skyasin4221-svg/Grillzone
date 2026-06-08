import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";
import { DishCard } from "@/components/dish-card";
import { FlavourMarquee } from "@/components/flavour-marquee";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { featuredDishes, images, site, stats, whyChooseUs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FlavourMarquee />

      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionHeading
              eyebrow="Featured dishes"
              title="Fresh favourites with serious flavour"
              text="From crispy chicken to flame-grilled peri peri, every headline dish is built for heat, crunch and generous portions."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <Reveal key={dish.title} delay={index * 0.08}>
                <DishCard {...dish} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-red-50 text-black">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
              <Image src={images.grill} alt="Flame grilled platter" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why choose us"
                title="A proper grill house standard"
                text="Premium does not have to feel precious. We focus on fresh prep, high heat, clean kitchens and generous food that travels well."
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="rounded-[8px] border border-red-100 bg-white p-5 shadow-[0_16px_45px_rgba(255,0,0,0.08)]">
                    <item.icon className="text-grillRed" size={28} />
                    <h3 className="mt-4 text-lg font-black uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-pad grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[8px] border border-red-100 bg-red-50/40 p-6 text-center">
              <p className="font-display text-6xl uppercase text-grillRed">
                <AnimatedCounter value={stat.value} />+
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-wide text-black/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Reviews"
              title="Local regulars keep coming back"
              text="Fast service, generous plates and bold flavour make Grill Zone Original a go-to for families, friends and late-night cravings."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialsSlider />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 rounded-[8px] border border-red-100 bg-grillRed p-6 text-white shadow-[0_24px_70px_rgba(255,0,0,0.2)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
              Book, collect or order direct
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Call the team for allergy questions, big family orders, collection times or
              Sunday specials availability.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={`tel:${site.phone}`} className="button-secondary">
              <Phone size={18} />
              {site.phone}
            </a>
            <Link href="/contact" className="button-primary">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
