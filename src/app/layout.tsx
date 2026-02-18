import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActionBtn } from "@/components/FloatingActionBtn";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RA Contracting | Premier Roofing & HVAC in Dallas, TX",
    template: "%s | RA Contracting",
  },
  description:
    "Dallas-based premier Roofing & HVAC contractor. Engineering comfort and safety for the Lone Star State. Free inspections, 24/7 emergency service, and 25-year warranties.",
  keywords: [
    "roofing contractor Dallas",
    "HVAC Dallas TX",
    "roof replacement DFW",
    "AC installation Texas",
    "storm damage repair",
    "emergency HVAC repair",
  ],
  openGraph: {
    title: "RA Contracting | Premier Roofing & HVAC in Dallas, TX",
    description:
      "Engineering comfort and safety for the Lone Star State. Free inspections and 24/7 emergency service.",
    type: "website",
    locale: "en_US",
    siteName: "RA Contracting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RA Contracting",
              description:
                "Premier Roofing & HVAC contractor serving Dallas-Fort Worth and all of Texas.",
              url: "https://racontracting.com",
              telephone: "(469) 555-0127",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4521 Cedar Springs Rd, Suite 200",
                addressLocality: "Dallas",
                addressRegion: "TX",
                postalCode: "75219",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7767,
                longitude: -96.797,
              },
              areaServed: {
                "@type": "State",
                name: "Texas",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "847",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActionBtn />
      </body>
    </html>
  );
}
