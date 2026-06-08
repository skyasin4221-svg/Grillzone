import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {galleryImages.map((image) => (
        <figure
          key={image.alt}
          className="mb-5 break-inside-avoid overflow-hidden rounded-[8px] border border-red-100 bg-white shadow-premium"
        >
          <div className={cn("relative", image.tall ? "aspect-[3/4]" : "aspect-[4/3]")}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
