import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { OrderBanner } from "@/components/order-banner";
import { PageTransition } from "@/components/page-transition";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grillzoneoriginal.co.uk"),
  applicationName: site.name,
  title: {
    default: `${site.name} | Freshly Grilled Chicken, Burgers & Peri Peri`,
    template: `%s | ${site.name}`
  },
  description:
    "Premium flame-grilled chicken, crispy fried chicken, burgers, doner wraps, curry dishes and Sunday specials from Grill Zone Original.",
  keywords: [
    "Grill Zone Original",
    "grilled chicken",
    "peri peri chicken",
    "fried chicken",
    "burgers",
    "restaurant"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.name,
    description: "Authentic taste, freshly grilled. Explore the Grill Zone Original menu.",
    url: "/",
    siteName: site.name,
    images: [
      {
        url: "/images/grillzone-hero-red-white-v2.png",
        width: 1200,
        height: 630,
        alt: "Fresh Grill Zone Original food spread"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Freshly grilled chicken, burgers, peri peri, doner wraps and Sunday Nashta.",
    images: ["/images/grillzone-hero-red-white-v2.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <OrderBanner />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
