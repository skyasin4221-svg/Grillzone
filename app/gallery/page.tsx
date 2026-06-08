import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Grill Zone Original food photography, restaurant photos, grilled chicken, burgers and fresh dishes."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Food worth a closer look"
        text="A visual taste of our grilled chicken, burgers, crispy classics, restaurant details and fresh plates."
        image={images.interior}
      />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionHeading
              eyebrow="Photography"
              title="Grill marks, crunch and colour"
              text="Browse Grill Zone Original food, counter, restaurant and fresh plate photography."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
