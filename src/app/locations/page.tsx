import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Truck } from "lucide-react";
import { serviceAreas, companyInfo } from "@/lib/data";
import { LocationPins } from "./LocationPins";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "RA Contracting serves Dallas, Fort Worth, Austin, Houston, San Antonio, and all of Texas. Find roofing and HVAC services near you.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
            Service Areas
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
            From the Heart of Dallas to the{" "}
            <span className="text-[#f97316]">Texas Panhandle</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Our fleet is ready to deploy. RA Contracting serves homeowners and
            businesses across the entire state of Texas.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="relative">
              <LocationPins />
            </div>
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
                Coverage
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Statewide Service
              </h2>
              <p className="mb-8 leading-relaxed text-slate-600">
                Based in Dallas, Texas, RA Contracting has expanded our
                operations across the entire Lone Star State. Our fleet of
                fully-equipped service trucks and certified technicians can reach
                any corner of Texas.
              </p>
              <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 text-[#1a1a1a]">
                  <Truck className="h-5 w-5 text-[#f97316]" strokeWidth={1.5} />
                  <span className="font-semibold">DFW Metroplex:</span>
                  <span className="text-slate-600">Same-day service available</span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[#1a1a1a]">
                  <Truck className="h-5 w-5 text-[#f97316]" strokeWidth={1.5} />
                  <span className="font-semibold">Statewide:</span>
                  <span className="text-slate-600">Typically 24–48 hour deployment</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c]"
              >
                Check Availability in Your Area
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Cities We Serve
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              Find Us Near You
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <Link
                key={city}
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-[#f97316] hover:text-[#f97316] hover:shadow-md hover:shadow-orange-500/10"
              >
                <MapPin
                  className="h-3.5 w-3.5 text-[#f97316]"
                  strokeWidth={1.5}
                />
                {city}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Don&apos;t See Your City?{" "}
            <span className="text-[#f97316]">We Still Serve You.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Our coverage extends beyond the cities listed above. Contact us and
            we&apos;ll confirm service availability for your location.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c]"
          >
            Contact Us Today
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
