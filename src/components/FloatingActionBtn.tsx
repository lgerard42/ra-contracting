"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { companyInfo } from "@/lib/data";

export function FloatingActionBtn() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 800);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.a
        href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: shake ? [0, -10, 10, -10, 10, 0] : 0,
        }}
        transition={{
          scale: { delay: 1, type: "spring", stiffness: 260, damping: 20 },
          rotate: { duration: 0.5 },
        }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white shadow-lg shadow-orange-500/40 transition-shadow hover:shadow-xl hover:shadow-orange-500/50 lg:hidden"
        aria-label="Call RA Contracting"
      >
        <Phone className="h-6 w-6" strokeWidth={1.5} />
      </motion.a>
    </AnimatePresence>
  );
}
