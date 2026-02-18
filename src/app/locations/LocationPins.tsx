"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cityPositions = [
  { name: "Dallas", x: 60, y: 32 },
  { name: "Fort Worth", x: 52, y: 33 },
  { name: "Arlington", x: 55, y: 35 },
  { name: "Plano", x: 62, y: 28 },
  { name: "Frisco", x: 60, y: 25 },
  { name: "Irving", x: 57, y: 33 },
  { name: "McKinney", x: 64, y: 25 },
  { name: "Austin", x: 48, y: 58 },
  { name: "Houston", x: 72, y: 62 },
  { name: "San Antonio", x: 42, y: 68 },
  { name: "Waco", x: 50, y: 44 },
  { name: "Lubbock", x: 28, y: 22 },
  { name: "Odessa", x: 18, y: 38 },
  { name: "Tyler", x: 72, y: 30 },
];

export function LocationPins() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Texas outline approximation */}
      <div className="absolute inset-4 rounded-xl border-2 border-dashed border-slate-300/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-[120px] font-bold uppercase leading-none text-slate-200/60">
          TX
        </span>
      </div>

      {cityPositions.map((city, i) => (
        <motion.div
          key={city.name}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5 + i * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="absolute z-10"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
        >
          <div className="group relative -translate-x-1/2 -translate-y-full">
            <MapPin
              className="h-6 w-6 text-[#f97316] drop-shadow-md"
              strokeWidth={1.5}
              fill="#f97316"
            />
            <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1a1a1a] px-2 py-1 text-[10px] font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {city.name}
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block h-2 w-2 animate-ping rounded-full bg-[#f97316]/40" />
            </span>
          </div>
        </motion.div>
      ))}

      {/* DFW highlight */}
      <div
        className="absolute rounded-full border-2 border-[#f97316]/30 bg-[#f97316]/5"
        style={{
          left: "50%",
          top: "25%",
          width: "22%",
          height: "22%",
          transform: "translate(-30%, -10%)",
        }}
      />
      <span
        className="absolute text-[9px] font-bold uppercase tracking-widest text-[#f97316]/60"
        style={{ left: "48%", top: "18%" }}
      >
        DFW Metro
      </span>
    </div>
  );
}
