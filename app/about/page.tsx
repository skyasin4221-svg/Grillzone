import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { images, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Read the Grill Zone Original story, fresh ingredient promise, quality standards and team approach."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Original recipes, modern grill energy"
        text="Grill Zone Original brings together flame-grilled chicken, crispy comfort food and South Asian weekend favourites."
        image={images.hero}
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Fresh ingredients"
                title="Made daily, served boldly"
                text="Our kitchen is built around simple principles: marinate properly, cook with care and serve food while it still tastes alive."
              />
              <p className="mt-6 leading-8 text-black/65">
                Grill Zone Original started as a neighbourhood spot for proper grilled chicken
                and has grown into a menu with burgers, wraps, curry plates, rice dishes and
                Sunday specials. Every section keeps the same promise: generous food, bold
                seasoning and a clean, welcoming restaurant experience.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-premium">
              <Image src={images.interior} alt="Grill Zone Original counter and team" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-red-50 text-black">
        <div className="container-pad">
          <Reveal>
            <SectionHeading
              eyebrow="Quality promise"
              title="Premium standards in every order"
              text="We prep in controlled batches, grill to order where possible and keep sauces, sides and packaging aligned around taste and freshness."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="rounded-[8px] border border-red-100 bg-white p-5 shadow-[0_16px_45px_rgba(255,0,0,0.08)]">
                  <value.icon className="text-grillRed" size={28} />
                  <h3 className="mt-5 text-lg font-black uppercase">{value.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionHeading
              eyebrow="Team"
              title="Friendly people behind the grill"
              text="Our front-of-house and kitchen team work together so collection, delivery and dine-in orders feel smooth even during the dinner rush."
              align="center"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
