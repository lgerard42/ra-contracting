import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileText,
  Camera,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  BadgeCheck,
  Scale,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Insurance Claims Assistance",
  description:
    "RA Contracting guides Texas homeowners through every step of the insurance claims process — from damage documentation to adjuster meetings — maximizing your payout and minimizing your stress.",
};

const claimSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Free Damage Assessment",
    description:
      "Call us as soon as damage occurs. We dispatch an expert within hours to assess your property using drone technology and thermal imaging — completely free of charge, no obligation attached.",
  },
  {
    step: 2,
    icon: Camera,
    title: "Professional Documentation",
    description:
      "We compile a comprehensive damage report with high-resolution drone photos, thermal scans, detailed measurements, and itemized repair estimates that insurance companies cannot ignore.",
  },
  {
    step: 3,
    icon: FileText,
    title: "Claim Filing & Submission",
    description:
      "Our claims specialists prepare and file your insurance claim using industry-standard Xactimate software — the same tool your adjuster uses — so there are no discrepancies in scope or pricing.",
  },
  {
    step: 4,
    icon: Users,
    title: "Adjuster Meeting & Negotiation",
    description:
      "We meet your insurance adjuster on-site, walk them through every documented issue, and advocate for full coverage. Our presence has been shown to increase approved claim values significantly.",
  },
  {
    step: 5,
    icon: DollarSign,
    title: "Maximize Your Payout",
    description:
      "We review the adjuster's estimate line by line, identify any missed or undervalued items, and file supplements to ensure you receive every dollar you're entitled to under your policy.",
  },
  {
    step: 6,
    icon: CheckCircle,
    title: "Quality Restoration",
    description:
      "Once approved, our certified crews complete all repairs to manufacturer specifications. You only pay your deductible — we collect the remainder directly from your insurance company.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Higher Claim Payouts",
    description:
      "Homeowners who work with RA Contracting receive an average of 40% higher claim payouts compared to filing on their own. We know what to look for and how to document it.",
  },
  {
    icon: Clock,
    title: "Faster Processing",
    description:
      "Our established relationships with major insurance carriers and use of Xactimate software means claims are processed and approved up to 3x faster than typical timelines.",
  },
  {
    icon: Shield,
    title: "Zero Out-of-Pocket Surprises",
    description:
      "We guarantee transparent pricing. Your out-of-pocket cost is your deductible — period. If your insurance doesn't cover the full scope, we work with the carrier until it does.",
  },
  {
    icon: Scale,
    title: "We Fight for You",
    description:
      "If your claim is underpaid or denied, we don't give up. Our team files detailed supplements and, when necessary, connects you with trusted public adjusters or legal counsel.",
  },
  {
    icon: BadgeCheck,
    title: "Certified & Trusted",
    description:
      "RA Contracting is a certified storm restoration contractor with Owens Corning, GAF, and CertainTeed. Insurance companies know and trust our documentation and workmanship.",
  },
  {
    icon: Star,
    title: "800+ Happy Homeowners",
    description:
      "We've helped hundreds of Texas families navigate the claims process after hail storms, wind damage, and other covered events — with a 4.9-star average rating.",
  },
];

const faqs = [
  {
    q: "Do I have to pay RA Contracting anything upfront?",
    a: "No. Our inspection and damage assessment are completely free. If you proceed with an insurance claim, you only pay your policy deductible. We collect the rest directly from your insurance company after the work is completed.",
  },
  {
    q: "Will filing a claim raise my insurance premiums?",
    a: "In Texas, insurers cannot raise your rates solely for filing a weather-related claim. Hail and wind damage are considered \"Acts of God\" and are treated differently from at-fault claims. Your rates are more influenced by regional risk factors.",
  },
  {
    q: "What if my insurance company denies my claim?",
    a: "Denials are more common than they should be, but they're not the final word. We help you file a formal appeal with additional documentation, and can connect you with reputable public adjusters or insurance attorneys who specialize in denied claims.",
  },
  {
    q: "How long does the insurance claim process take?",
    a: "With our assistance, most claims are approved within 7–14 days of filing. The full process from inspection to completed repairs typically takes 3–6 weeks, depending on the scope of work and material availability.",
  },
  {
    q: "Can I choose my own contractor, or does my insurance company choose for me?",
    a: "You always have the right to choose your own contractor — it's your home and your policy. Insurance companies may suggest preferred vendors, but you are never required to use them. We recommend choosing a contractor who works for you, not the insurance company.",
  },
  {
    q: "What types of damage does homeowner's insurance cover?",
    a: "Most Texas homeowner policies cover damage from hail, wind, tornadoes, fallen trees, and fire. They typically do not cover damage from flooding (separate flood policy required), normal wear and tear, or neglected maintenance. We help you understand exactly what your policy covers.",
  },
  {
    q: "Do you use Xactimate for estimates?",
    a: "Yes. We use Xactimate, the industry-standard estimating software used by virtually all insurance carriers. This means our estimates speak the same language as your adjuster's, eliminating discrepancies and speeding up approval.",
  },
];

const insurancePartners = [
  "State Farm",
  "Allstate",
  "USAA",
  "Liberty Mutual",
  "Farmers",
  "Nationwide",
  "Travelers",
  "American Family",
];

export default function InsuranceClaimsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pb-20 pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-sm font-medium text-[#f97316]">
              <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
              We Handle Everything
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
              Insurance Claims{" "}
              <span className="text-[#f97316]">Made Easy</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-400">
              Storm damage is stressful enough. Let RA Contracting handle your
              entire insurance claim — from the initial inspection to the final
              repair — so you get the maximum payout with zero hassle.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c]"
              >
                File a Claim Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                {companyInfo.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem + Solution */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
                The Problem
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Why Most Homeowners Get Underpaid
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Insurance companies are businesses — their goal is to minimize
                  payouts. Without professional documentation and representation,
                  homeowners routinely leave thousands of dollars on the table.
                </p>
                <p>
                  Common tactics that reduce your payout include: undervaluing
                  damage scope, using below-market labor rates, missing secondary
                  damage like gutters and soffit, and pressuring homeowners to
                  accept the first offer.
                </p>
                <p>
                  Most homeowners don&apos;t know what to look for, what their
                  policy actually covers, or how to challenge an adjuster&apos;s
                  estimate. That&apos;s where RA Contracting steps in.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
                Our Solution
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                Full-Service Claims Management
              </h2>
              <ul className="space-y-4">
                {[
                  "Free professional inspection with drone & thermal imaging",
                  "Detailed Xactimate estimates matching insurer standards",
                  "On-site adjuster meetings with our claims specialist",
                  "Line-by-line estimate review and supplement filing",
                  "Direct billing — you only pay your deductible",
                  "Appeal assistance for denied or underpaid claims",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]"
                      strokeWidth={1.5}
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works — Step by Step */}
      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              How It Works
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              Our 6-Step Claims Process
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We manage every detail so you can focus on what matters. Here&apos;s
              exactly what happens when you call RA Contracting after storm
              damage.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {claimSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                        <StepIcon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-sm font-bold uppercase tracking-widest text-slate-400">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wide text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Why RA Contracting
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-4xl">
              The RA Contracting Advantage
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We&apos;re not just contractors — we&apos;re your advocates. Our
              team has recovered millions for Texas homeowners through strategic
              claims management.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#f97316]/30 hover:shadow-lg hover:shadow-orange-500/5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                      <BenefitIcon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-[#1a1a1a]">
                      {benefit.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Insurance Carriers We Work With */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              Experience With All Major Carriers
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              We Work With Your Insurance
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              No matter who your carrier is, we have experience navigating their
              claims process and know how to communicate effectively with their
              adjusters.
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {insurancePartners.map((name) => (
              <div
                key={name}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {name}
              </div>
            ))}
            <div className="rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-6 py-3 text-sm font-semibold text-[#f97316]">
              + All Other Carriers
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
              FAQ
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              Common Insurance Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[#1a1a1a] transition-colors hover:text-[#f97316] [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
              Storm Damage?{" "}
              <span className="text-[#f97316]">
                Don&apos;t Settle for Less.
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Every day you wait, evidence fades and deadlines approach. Contact
              us now for a free damage assessment and let us fight for the full
              payout you deserve.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-[#ea580c]"
              >
                Get a Free Assessment
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${companyInfo.emergencyPhone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 px-8 py-4 text-base font-semibold text-red-400 transition-all hover:bg-red-500/10"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
                24/7 Storm Hotline
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
