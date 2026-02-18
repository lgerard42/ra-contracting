"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Thermometer,
  CloudRain,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";
import { ServiceSelector } from "@/components/ServiceSelector";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ReviewCard } from "@/components/ReviewCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { reviewsData, partnerLogos, companyInfo } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#1a1a1a]">
        <Image
          src="/images/HomePageBackgroundPhoto.png"
          alt="Modern luxury home with premium roofing"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-sm font-medium text-[#f97316]">
              <Star className="h-3.5 w-3.5 fill-[#f97316]" strokeWidth={1.5} />
              Rated {companyInfo.rating}/5 by {companyInfo.totalReviews}+ Texas homeowners
            </div>

            <h1 className="mb-6 font-heading text-5xl font-bold uppercase leading-tight tracking-tight text-white md:text-7xl">
              Fortifying Texas Homes{" "}
              <span className="text-[#f97316]">Against the Elements</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
              Dallas-based premier Roofing &amp; HVAC. Engineering comfort and
              safety for the Lone Star State.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c] hover:shadow-orange-500/50"
              >
                Get a Free Inspection
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
              <a
                href={`tel:${companyInfo.emergencyPhone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-red-500/50 px-8 py-4 text-base font-semibold text-red-400 transition-all hover:bg-red-500/10"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
                Emergency Repair
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Texas Weather Context Block */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Built for Texas
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              Why Your Home Needs RA Contracting
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                  <Shield className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                  Hail Impact Protection
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Texas sees more hailstorms than almost any other state. Our
                  Class 4 impact-resistant roofing systems are engineered to
                  withstand golf-ball-sized hail without cracking.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                  <Thermometer className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                  Triple-Digit Heat Defense
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  When DFW hits 105°F, your HVAC system is your lifeline. We
                  install and maintain high-SEER systems that keep your home
                  cool without astronomical energy bills.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-orange-500/5">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                  <CloudRain className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                  Storm Season Readiness
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  From tornado-force winds to flash flooding rains, our roofing
                  and HVAC solutions are designed to keep your family safe and
                  comfortable through every Texas storm season.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Service Selector */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-4 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Our Services
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              Expert Solutions for Every Need
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Whether it&apos;s a complete roof overhaul or an emergency AC fix,
              our certified technicians deliver precision craftsmanship backed by
              industry-leading warranties.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ServiceSelector />
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              See the Difference
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              Before &amp; After
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mx-auto max-w-4xl">
            <BeforeAfterSlider
              beforeSrc="/images/sliderBefore.png"
              afterSrc="/images/sliderAfter.png"
              beforeAlt="Before"
              afterAlt="After"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Testimonials
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              What Texas Homeowners Say
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewsData.slice(0, 3).map((review) => (
              <StaggerItem key={review.id}>
                <ReviewCard
                  name={review.name}
                  city={review.city}
                  service={review.service}
                  rating={review.rating}
                  date={review.date}
                  quote={review.quote}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-all hover:border-[#f97316] hover:text-[#f97316]"
            >
              View All {companyInfo.totalReviews}+ Reviews
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="overflow-hidden border-t border-slate-200 bg-white py-16">
        <AnimatedSection className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Trusted Partners &amp; Certifications
          </span>
        </AnimatedSection>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
              (logo, i) => (
                <span
                  key={i}
                  className="font-heading text-2xl font-bold uppercase tracking-wider text-slate-300"
                >
                  {logo}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
              Ready to Protect Your{" "}
              <span className="text-[#f97316]">Investment?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Get a free, no-obligation inspection and transparent quote. Our
              team is standing by to engineer the perfect solution for your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c] hover:shadow-orange-500/50"
              >
                Schedule Free Inspection
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
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
