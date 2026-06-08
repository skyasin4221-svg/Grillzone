import type { Metadata } from "next";
import { Clock, ExternalLink, Instagram, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { images, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Grill Zone Original for ordering, opening hours, address, phone number and restaurant enquiries."
};

const hours = [
  ["Sunday - Wednesday", "11:30 - 22:00"],
  ["Thursday", "11:30 - 00:00"],
  ["Friday - Saturday", "11:30 - 04:00"],
  ["Delivery platforms", "Check live availability"]
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Order, visit or message us"
        text="We are ready for dine-in, collection, local delivery questions and big family orders."
        image={images.restaurant}
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Tell the team what you need"
                text="Use the form for bookings, catering-style enquiries or general questions. For same-day food orders, phone or WhatsApp is fastest."
              />
              <div className="mt-8 grid gap-4">
                <a href={`tel:${site.phone}`} className="flex items-center gap-3 rounded-[8px] border border-red-100 bg-white p-4 font-bold shadow-sm shadow-red-600/5 transition hover:border-grillRed hover:text-grillRed">
                  <Phone size={20} />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-[8px] border border-red-100 bg-white p-4 font-bold shadow-sm shadow-red-600/5 transition hover:border-grillRed hover:text-grillRed">
                  <Mail size={20} />
                  {site.email}
                </a>
                <a href={site.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[8px] border border-red-100 bg-white p-4 font-bold shadow-sm shadow-red-600/5 transition hover:border-grillRed hover:text-grillRed">
                  <MapPin size={20} />
                  {site.address}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[8px] border border-red-100 bg-white p-6 text-black shadow-[0_18px_50px_rgba(255,0,0,0.1)] sm:p-8">
              <p className="eyebrow">Opening hours</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none">Open daily</h2>
              <div className="mt-8 grid gap-4">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between gap-4 border-b border-red-100 pb-4 last:border-0 last:pb-0">
                    <span className="flex items-center gap-3 font-bold text-black/65">
                      <Clock size={18} className="text-grillRed" />
                      {day}
                    </span>
                    <span className="font-black">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {site.socials.map((social) => (
                  <a key={social} href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-black transition hover:bg-grillRed hover:text-white">
                    <Instagram size={15} />
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="min-h-[420px] overflow-hidden rounded-[8px] border border-red-100 bg-white shadow-premium">
              <iframe
                title="Google Maps location for Grill Zone Original"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`Grill Zone Original ${site.address}`)}&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grillRed py-12 text-white">
        <div className="container-pad grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Map details</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none">Find us in Colchester</h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/80">
              Grill Zone Original is listed at {site.address}. Open maps for live directions,
              travel time and nearby parking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <Navigation size={18} />
              Get Directions
            </a>
            <a href={site.orderUrl} target="_blank" rel="noreferrer" className="button-primary">
              <ExternalLink size={18} />
              Order Delivery
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
