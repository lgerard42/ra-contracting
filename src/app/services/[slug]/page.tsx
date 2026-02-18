import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
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
  CheckCircle,
} from "lucide-react";
import { servicesData, processSteps, companyInfo } from "@/lib/data";
import { ServiceFAQ } from "./ServiceFAQ";
import { ServiceAnimations } from "./ServiceAnimations";

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

const heroImages: Record<string, string> = {
  Roofing:
    "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80",
  HVAC: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80",
};

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Shield;
  const heroImage = heroImages[service.category];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: "RA Contracting",
            },
            areaServed: {
              "@type": "State",
              name: "Texas",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[#1a1a1a]">
        <Image
          src={heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-40">
          <ServiceAnimations>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316] text-white">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm">
                {service.category}
              </span>
            </div>
            <h1 className="mb-4 max-w-3xl font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
              {service.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c]"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Call Now
              </a>
            </div>
          </ServiceAnimations>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
                What&apos;s Included
              </span>
              <h2 className="mb-8 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Service Highlights
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]" strokeWidth={1.5} />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt={`${service.title} service`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Process Timeline */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              How It Works
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              The RA Contracting Process
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px border-l-2 border-dashed border-[#f97316]/30 md:left-1/2" />

            <div className="space-y-12">
              {processSteps.map((ps, i) => (
                <div
                  key={ps.step}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#f97316] font-heading text-lg font-bold text-white shadow-lg md:left-1/2">
                    {ps.step}
                  </div>
                  <div
                    className={`ml-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-[#1a1a1a]">
                      {ps.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {ps.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              FAQ
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              Common Questions
            </h2>
          </div>
          <ServiceFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Ready for Your{" "}
            <span className="text-[#f97316]">{service.title}</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Get started with a free, no-obligation inspection and transparent
            quote today.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c]"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
