import type { Metadata } from "next";
import { Star } from "lucide-react";
import { ReviewGrid } from "@/components/ReviewGrid";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description: `See what ${companyInfo.totalReviews}+ Texas homeowners say about RA Contracting. ${companyInfo.rating}/5 average rating on Google, Yelp, and Angi.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-[#1a1a1a] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#f97316]">
            Testimonials
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
            Don&apos;t Take Our Word for It.{" "}
            <span className="text-[#f97316]">Ask Your Neighbors.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Hundreds of Texas homeowners trust RA Contracting for their roofing
            and HVAC needs. Here&apos;s what they have to say.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-8 text-center shadow-sm">
            <div className="mb-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 fill-[#f97316] text-[#f97316]"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="mb-2 font-heading text-5xl font-bold text-[#1a1a1a]">
              {companyInfo.rating}/5
            </p>
            <p className="text-sm text-slate-500">
              Average Rating &middot; Based on {companyInfo.totalReviews}+
              verified reviews on Google, Yelp, and Angi
            </p>
          </div>

          <ReviewGrid />
        </div>
      </section>
    </>
  );
}
