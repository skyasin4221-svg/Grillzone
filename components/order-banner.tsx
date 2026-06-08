import { ArrowRight, ShoppingBag } from "lucide-react";
import { site } from "@/lib/data";

export function OrderBanner() {
  return (
    <section className="bg-grillRed text-white">
      <div className="container-pad flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-4xl uppercase leading-none sm:text-5xl">Hungry now?</p>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-white/80">
            Build your Grill Zone order from crispy chicken, flame-grilled peri peri, burgers,
            wraps and fresh sides.
          </p>
        </div>
        <a href={site.orderUrl} target="_blank" rel="noreferrer" className="button-secondary shrink-0">
          <ShoppingBag size={18} />
          Order Online
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
