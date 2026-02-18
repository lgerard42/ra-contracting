"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { reviewsData } from "@/lib/data";
import { ReviewCard } from "./ReviewCard";

const filters = ["All", "Roofing", "HVAC"] as const;

export function ReviewGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All"
      ? reviewsData
      : reviewsData.filter((r) => r.category === active);

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                active === f ? "text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {active === f && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-[#1a1a1a]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="columns-1 gap-6 md:columns-2 lg:columns-3"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          key={active}
        >
          {filtered.map((review) => (
            <div key={review.id} className="mb-6 break-inside-avoid">
              <ReviewCard
                name={review.name}
                city={review.city}
                service={review.service}
                rating={review.rating}
                date={review.date}
                quote={review.quote}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
