import type { Metadata } from "next";
import { MenuCategoryCard } from "@/components/menu-category-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { images, menuCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Grill Zone Original's fried chicken, burgers, doner wraps, grill, peri peri chicken, rice, curry, Sunday specials and drinks."
};

function toCategoryId(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function MenuPage() {
  const signatureCategory = menuCategories.find((category) => category.name === "Signature Items");
  const regularCategories = menuCategories.filter((category) => category.name !== "Signature Items");

  return (
    <>
      <PageHero
        eyebrow="Full menu"
        title="Choose your flame"
        text="Crispy, grilled, saucy, smoky and fresh. Explore every Grill Zone Original category."
        image={images.counterMeals}
      />
      <section className="bg-gradient-to-b from-white via-red-50/35 to-white py-10 sm:py-14 lg:py-16">
        <div className="container-pad">
          <Reveal>
            <SectionHeading
              eyebrow="Categories"
              title="Fast to scan, easy to order"
              text="Tap a category, compare prices, and find the favourites without scrolling through oversized gaps."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <nav
              aria-label="Menu categories"
              className="sticky top-20 z-20 -mx-4 mt-6 overflow-x-auto border-y border-red-100 bg-white/95 px-4 py-3 shadow-sm shadow-red-600/5 backdrop-blur sm:mx-0 sm:rounded-[8px] sm:border"
            >
              <div className="flex min-w-max gap-2">
                {menuCategories.map((category) => (
                  <a
                    key={category.name}
                    href={`#${toCategoryId(category.name)}`}
                    className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-grillRed transition hover:border-grillRed hover:bg-grillRed hover:text-white"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </nav>
          </Reveal>
          <div className="mt-6 grid gap-5">
            {signatureCategory ? (
              <Reveal>
                <MenuCategoryCard {...signatureCategory} id={toCategoryId(signatureCategory.name)} featured />
              </Reveal>
            ) : null}
            {regularCategories.map((category, index) => (
              <Reveal key={category.name} delay={index * 0.03}>
                <MenuCategoryCard {...category} id={toCategoryId(category.name)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
