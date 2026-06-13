import { ShoppingBag } from "lucide-react";
import { site } from "@/lib/data";

export function FloatingOrderButton() {
  return (
    <a
      href={site.orderUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order online"
      className="fixed bottom-3 right-3 z-40 inline-flex h-12 min-w-12 items-center justify-center gap-2 rounded-full bg-grillRed px-3 text-xs font-black uppercase tracking-wide text-white shadow-2xl shadow-red-950/30 ring-1 ring-white/25 transition hover:-translate-y-1 hover:bg-red-900 sm:bottom-5 sm:right-5 sm:h-auto sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm"
    >
      <ShoppingBag size={18} />
      <span className="hidden sm:inline">Order</span>
    </a>
  );
}
