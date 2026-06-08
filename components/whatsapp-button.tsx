import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      aria-label="Order on WhatsApp"
      className="fixed bottom-3 right-3 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-600/25 transition hover:-translate-y-1 hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <MessageCircle size={26} />
    </a>
  );
}
