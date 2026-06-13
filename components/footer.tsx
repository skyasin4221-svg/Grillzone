import { Clock, ExternalLink, Instagram, MapPin, Music2, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-red-950/20 bg-grillBlack text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <p className="font-display text-5xl uppercase leading-none text-white">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            Freshly grilled chicken, crispy favourites, stacked burgers and Sunday Nashta
            served with bold flavour and a premium local restaurant feel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.socials.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-wide text-white/82 transition hover:border-grillRed hover:bg-grillRed hover:text-white"
              >
                {social.label === "Instagram" ? <Instagram size={14} /> : <Music2 size={14} />}
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-grillRed">Explore</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-white/62 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-grillRed">Visit</p>
          <div className="mt-5 grid gap-4 text-sm text-white/62">
            <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-grillRed" size={18} />{site.address}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-grillRed" size={18} />{site.phone}</p>
            <p className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-grillRed" size={18} />Mon-Sat 11:00 AM-10:00 PM, Sun 9:00 AM-10:00 PM</p>
          </div>
        </div>
      </div>

      <div className="container-pad pb-10">
        <div className="grid gap-5 rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-grillRed">Restaurant location</p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-white">
              120 High Street, Colchester
            </h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/62">
              Grill Zone Original has one Colchester High Street restaurant at {site.address}.
            </p>
          </div>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="button-primary">
            Open Map
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-pad flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Fresh food. Real flame. Original flavour.</span>
        </div>
      </div>
    </footer>
  );
}
