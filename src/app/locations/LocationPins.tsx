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

function TexasOutline() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* Simplified Texas state outline */}
      <path
        d="M155 45 L175 45 L180 50 L195 48 L210 42 L225 40 L240 42 L255 40
           L270 38 L285 40 L300 42 L315 40 L330 42 L345 45 L360 48 L370 50
           L375 55 L378 65 L380 80 L382 95 L385 110 L387 125 L390 140 L392 155
           L393 170 L395 185 L397 200 L398 215 L400 230 L402 245 L405 260
           L408 275 L410 285 L405 290 L398 295 L390 300 L382 305 L375 310
           L370 318 L365 325 L358 332 L350 340 L342 348 L335 355 L328 360
           L320 365 L312 370 L305 375 L298 380 L290 385 L282 388 L275 392
           L268 395 L260 398 L252 400 L245 402 L238 405 L230 408 L222 410
           L215 412 L208 415 L200 418 L192 420 L185 422 L178 418 L170 412
           L165 405 L160 398 L155 390 L150 382 L148 375 L145 368 L142 360
           L140 352 L138 345 L136 338 L134 330 L132 322 L130 315 L125 308
           L118 302 L110 298 L102 295 L95 290 L90 285 L88 278 L85 270
           L83 260 L82 250 L80 240 L78 230 L77 220 L78 210 L80 200
           L82 190 L85 180 L88 170 L90 160 L92 150 L95 140 L98 130
           L100 120 L105 110 L110 100 L115 90 L120 80 L125 70 L130 62
           L138 55 L145 48 L155 45 Z"
        fill="rgba(249, 115, 22, 0.04)"
        stroke="rgba(249, 115, 22, 0.15)"
        strokeWidth="1.5"
      />
      {/* Grid lines for map feel */}
      {[100, 150, 200, 250, 300, 350, 400].map((y) => (
        <line
          key={`h-${y}`}
          x1="60"
          y1={y}
          x2="420"
          y2={y}
          stroke="rgba(148, 163, 184, 0.08)"
          strokeWidth="0.5"
        />
      ))}
      {[100, 150, 200, 250, 300, 350, 400].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="30"
          x2={x}
          y2="430"
          stroke="rgba(148, 163, 184, 0.08)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

export function LocationPins() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <TexasOutline />

      {/* DFW highlight */}
      <div
        className="absolute rounded-full border-2 border-[#f97316]/20 bg-[#f97316]/5"
        style={{
          left: "50%",
          top: "25%",
          width: "22%",
          height: "22%",
          transform: "translate(-30%, -10%)",
        }}
      />
      <span
        className="absolute text-[9px] font-bold uppercase tracking-widest text-[#f97316]/50"
        style={{ left: "48%", top: "18%" }}
      >
        DFW Metro
      </span>

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
    </div>
  );
}
