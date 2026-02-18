import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  CloudLightning,
  Search,
  Shield,
  Snowflake,
  Zap,
  Wind,
  Flame,
  ArrowRight,
  Phone,
  FileText,
  CheckCircle,
} from "lucide-react";
import { servicesData, companyInfo } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Home,
  CloudLightning,
  Search,
  Shield,
  Snowflake,
  Zap,
  Wind,
  Flame,
};

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "RA Contracting offers comprehensive roofing and HVAC services across Texas — from full roof replacements and storm damage repair to AC installation and 24/7 emergency HVAC repair.",
};

export default function ServicesPage() {
  const roofingServices = servicesData.filter((s) => s.category === "Roofing");
  const hvacServices = servicesData.filter((s) => s.category === "HVAC");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pb-20 pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              What We Do
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg leading-relaxed text-slate-400">
              From protecting your home with a premium roof to keeping your
              family comfortable year-round, RA Contracting delivers expert
              craftsmanship backed by industry-leading warranties.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Roofing Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-14">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Roofing
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              Roofing Services
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Built to withstand Texas storms. We handle everything from
              inspections and repairs to full replacements and specialty
              installations — all with our 25-year workmanship guarantee.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {roofingServices.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#f97316]/30 hover:shadow-lg hover:shadow-orange-500/5"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f97316] transition-colors group-hover:text-[#ea580c]">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* HVAC Services */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-14">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              HVAC
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              HVAC Services
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Texas heat demands serious cooling power. Our certified technicians
              install, repair, and maintain systems from the industry&apos;s top
              brands — with 24/7 emergency availability when you need it most.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {hvacServices.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#f97316]/30 hover:shadow-lg hover:shadow-orange-500/5"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f97316] transition-colors group-hover:text-[#ea580c]">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Insurance Claims */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
                Insurance
              </span>
              <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
                Insurance Claims Assistance
              </h2>
              <p className="mb-6 text-slate-600">
                Don&apos;t navigate the insurance process alone. RA Contracting
                manages your entire claim from start to finish — documenting
                damage, meeting with adjusters, filing supplements, and fighting
                for every dollar your policy covers.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Free drone & thermal imaging damage assessment",
                  "Xactimate estimates matching insurer standards",
                  "On-site adjuster meetings with our claims specialist",
                  "Supplement filing for underpaid claims",
                  "You only pay your deductible — we bill insurance directly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]"
                      strokeWidth={1.5}
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/insurance-claims"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c]"
              >
                Learn About Our Claims Process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f97316] text-white">
                  <FileText className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-heading text-3xl font-bold text-[#1a1a1a]">
                      40%
                    </p>
                    <p className="text-sm text-slate-600">
                      Higher average payout with our claims management
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-[#1a1a1a]">
                      3x
                    </p>
                    <p className="text-sm text-slate-600">
                      Faster claim processing with Xactimate estimates
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-[#1a1a1a]">
                      800+
                    </p>
                    <p className="text-sm text-slate-600">
                      Successful insurance claims managed in Texas
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-[#1a1a1a]">
                      $0
                    </p>
                    <p className="text-sm text-slate-600">
                      Upfront cost for inspection & damage assessment
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
              Not Sure What You Need?{" "}
              <span className="text-[#f97316]">We&apos;ll Help.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Schedule a free inspection and our team will assess your property,
              answer your questions, and provide a transparent, no-obligation
              quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c]"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
                {companyInfo.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
