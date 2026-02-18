"use client";

import { useState, useRef, useCallback } from "react";

const SLIDER_BEFORE_SRC = "/images/sliderBefore.png";
const SLIDER_AFTER_SRC = "/images/sliderAfter.png";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeSrc = SLIDER_BEFORE_SRC,
  afterSrc = SLIDER_AFTER_SRC,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-slate-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image: full width background */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Before image: clipped to left position% so more/less shows as user drags */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <div
        className="absolute inset-y-0 z-10 w-1 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#f97316] shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        Before
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        After
      </div>
    </div>
  );
}
