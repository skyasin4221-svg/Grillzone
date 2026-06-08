import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-600/25 transition hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
