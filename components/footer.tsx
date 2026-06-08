import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-red-200/70 bg-[#fff7f2] text-[#1a1010]">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-5xl uppercase leading-none text-grillRed">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-black/60">
            Freshly grilled chicken, crispy favourites, stacked burgers and Sunday Nashta
            served with bold flavour and a premium local restaurant feel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.socials.map((social) => (
              <a
                href="#"
                key={social}
                className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-grillRed transition hover:border-grillRed hover:bg-grillRed hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-grillRed">Explore</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-black/60 transition hover:text-grillRed">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-grillRed">Visit</p>
          <div className="mt-5 grid gap-4 text-sm text-black/60">
            <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-grillRed" size={18} />{site.address}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-grillRed" size={18} />{site.phone}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 shrink-0 text-grillRed" size={18} />{site.email}</p>
            <p className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-grillRed" size={18} />Sun-Wed 11:30-22:00, Thu 11:30-00:00, Fri-Sat 11:30-04:00</p>
          </div>
        </div>
      </div>
      <div className="border-t border-red-100 py-5">
        <div className="container-pad flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Fresh food. Real flame. Original flavour.</span>
        </div>
      </div>
    </footer>
  );
}
