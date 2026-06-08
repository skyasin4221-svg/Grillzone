import type { Metadata } from "next";
import { MenuCategoryCard } from "@/components/menu-category-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { menuCategories } from "@/lib/data";

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
      <section className="relative overflow-hidden bg-[#fff7f2] pt-28 sm:pt-32">
        <div className="absolute left-0 top-20 h-1.5 w-full bg-grillRed" />
        <div className="absolute -right-24 top-24 h-28 w-1/2 -skew-x-12 bg-red-100/70" />
        <div className="container-pad relative z-10 pb-8 sm:pb-10">
          <p className="eyebrow">Full menu</p>
          <h1 className="heading-xl mt-3 max-w-4xl text-grillRed">Choose your flame</h1>
          <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-[#2b1a1a]/75 sm:text-lg">
            Fast, clear prices for fried chicken, burgers, doner, grill, rice, curry,
            Sunday Nashta and signature favourites.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-red-100/45 via-[#fff9f6] to-[#fff7f2] py-8 sm:py-10 lg:py-12">
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
              className="sticky top-20 z-20 -mx-4 mt-6 overflow-x-auto border-y border-red-200/70 bg-[#fff9f6]/95 px-4 py-3 shadow-sm shadow-red-900/10 backdrop-blur sm:mx-0 sm:rounded-[8px] sm:border"
            >
              <div className="flex min-w-max gap-2">
                {menuCategories.map((category) => (
                  <a
                    key={category.name}
                    href={`#${toCategoryId(category.name)}`}
                    className="rounded-full border border-red-200/80 bg-[#fff3ee] px-4 py-2 text-xs font-black uppercase tracking-wide text-grillRed transition hover:border-grillRed hover:bg-grillRed hover:text-white"
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
