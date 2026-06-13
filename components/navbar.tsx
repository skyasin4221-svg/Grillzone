"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const heroMode = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 40);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        heroMode
          ? "border-white/10 bg-grillBlack/70 text-white shadow-none"
          : "border-red-200/70 bg-[#fff7f2]/95 text-black shadow-lg shadow-red-900/10"
      )}
    >
      <nav className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-grillRed font-display text-2xl leading-none text-white sm:h-12 sm:w-12 sm:text-3xl">
            GZ
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-2xl uppercase tracking-wide min-[390px]:text-3xl">{site.name}</span>
            <span
              className={cn(
                "block truncate text-[10px] font-bold uppercase tracking-[0.18em] transition-colors sm:text-xs sm:tracking-[0.25em]",
                heroMode ? "text-white/72" : "text-grillRed/70"
              )}
            >
              Flame Grilled
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-black uppercase tracking-wide transition",
                heroMode
                  ? "text-white/78 hover:bg-white/10 hover:text-white"
                  : "text-black/68 hover:bg-red-50 hover:text-grillRed",
                pathname === item.href &&
                  (heroMode
                    ? "bg-white/15 text-white ring-1 ring-white/20"
                    : "bg-grillRed text-white shadow-lg shadow-red-900/15 hover:bg-grillRed hover:text-white")
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={site.orderUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-12 items-center justify-center gap-2 rounded-full bg-grillRed px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-red-900/25 transition hover:-translate-y-1 hover:bg-red-800 hover:shadow-2xl hover:shadow-red-900/20 focus:outline-none focus:ring-4 focus:ring-red-300 lg:inline-flex"
        >
          <ShoppingBag size={18} />
          Order Now
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden",
            heroMode ? "border-white/20 bg-white/10 text-white" : "border-red-100 bg-red-50 text-grillRed"
          )}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-96 border-t border-red-100" : "max-h-0"
        )}
      >
        <div className="container-pad grid gap-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-full px-4 py-3 text-sm font-black uppercase tracking-wide text-black/65 transition hover:bg-red-50 hover:text-grillRed",
                pathname === item.href && "bg-grillRed text-white hover:bg-grillRed hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-grillRed px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-red-600/35"
          >
            <ShoppingBag size={18} />
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
