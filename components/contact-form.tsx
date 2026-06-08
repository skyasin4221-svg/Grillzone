"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="premium-card grid gap-4 rounded-[8px] p-5 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
          Name
          <input className="min-h-12 rounded-[8px] border border-red-100 px-4 font-medium outline-none transition focus:border-grillRed focus:ring-4 focus:ring-red-200" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
          Phone
          <input className="min-h-12 rounded-[8px] border border-red-100 px-4 font-medium outline-none transition focus:border-grillRed focus:ring-4 focus:ring-red-200" placeholder="Your phone" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
        Email
        <input type="email" className="min-h-12 rounded-[8px] border border-red-100 px-4 font-medium outline-none transition focus:border-grillRed focus:ring-4 focus:ring-red-200" placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-black uppercase tracking-wide">
        Message
        <textarea className="min-h-36 resize-y rounded-[8px] border border-red-100 px-4 py-3 font-medium outline-none transition focus:border-grillRed focus:ring-4 focus:ring-red-200" placeholder="Tell us what you need" />
      </label>
      <button type="submit" className="button-primary justify-self-start">
        Send Message
        <Send size={18} />
      </button>
      {sent ? (
        <p className="rounded-[8px] bg-red-50 px-4 py-3 text-sm font-bold text-grillRed ring-1 ring-red-100">
          Thanks. Your message is ready for the Grill Zone team.
        </p>
      ) : null}
    </form>
  );
}
