"use client";

import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  city: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
}

export function ReviewCard({
  name,
  city,
  service,
  rating,
  date,
  quote,
}: ReviewCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#f97316]/30 hover:shadow-lg hover:shadow-orange-500/5"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#f97316] text-[#f97316]"
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="text-xs text-slate-400">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <blockquote className="mb-5 text-sm leading-relaxed text-slate-600">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">
            {city} &middot; {service}
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
          <BadgeCheck className="h-3 w-3" strokeWidth={1.5} />
          Verified
        </div>
      </div>
    </motion.div>
  );
}
