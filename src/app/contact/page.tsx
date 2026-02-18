import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Shield } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { WizardForm } from "@/components/WizardForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free inspection and transparent quote from RA Contracting. Roofing and HVAC services across Texas. 24/7 emergency line available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
            Get Started
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
            Let&apos;s Protect{" "}
            <span className="text-[#f97316]">Your Home</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Fill out the quick form below and we&apos;ll get back to you within
            2 hours during business hours. For emergencies, call us directly.
          </p>
        </div>
      </section>

      {/* Split Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left - Contact Info (second on mobile) */}
            <div className="order-2 lg:order-1">
              <h2 className="mb-8 font-heading text-2xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Contact Information
              </h2>

              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#1a1a1a]">
                      Office Address
                    </p>
                    <p className="text-sm text-slate-600">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#1a1a1a]">
                      Phone
                    </p>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                      className="text-sm text-slate-600 transition-colors hover:text-[#f97316]"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#1a1a1a]">
                      Email
                    </p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm text-slate-600 transition-colors hover:text-[#f97316]"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-[#1a1a1a]">
                      Business Hours
                    </p>
                    <p className="text-sm text-slate-600">{companyInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-700">
                      24/7 Emergency Line
                    </p>
                    <a
                      href={`tel:${companyInfo.emergencyPhone.replace(/\D/g, "")}`}
                      className="font-heading text-xl font-bold text-red-600 transition-colors hover:text-red-500"
                    >
                      {companyInfo.emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60911498896!2d-97.01137866328124!3d32.82058389021975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647571f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RA Contracting office location"
                />
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>{companyInfo.license}</span>
              </div>
            </div>

            {/* Right - Wizard Form (first on mobile) */}
            <div className="order-1 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 lg:order-2 lg:p-10">
              <h2 className="mb-2 font-heading text-2xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Request a Free Quote
              </h2>
              <p className="mb-8 text-sm text-slate-500">
                Tell us what you need and we&apos;ll provide a transparent,
                no-obligation quote.
              </p>
              <WizardForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
