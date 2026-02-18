"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
} from "lucide-react";
import { servicesData } from "@/lib/data";

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

const tabs = ["Roofing", "HVAC"] as const;

export function ServiceSelector() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Roofing");

  const filtered = servicesData.filter((s) => s.category === activeTab);

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-colors ${
                activeTab === tab
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="serviceTab"
                  className="absolute inset-0 rounded-full bg-[#1a1a1a]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {filtered.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#f97316] transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
