"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Shield, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const serviceDropdownItems = [
  { href: "/services/roof-replacement", label: "Roofing" },
  { href: "/services/ac-installation", label: "HVAC" },
  { href: "/services/storm-damage-repair", label: "Storm Damage" },
  { href: "/services/emergency-hvac-repair", label: "Emergency HVAC" },
  { href: "/services/insurance-claims", label: "Insurance Claims" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/locations", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

function DesktopServicesDropdown() {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href="/services"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white",
          open && "bg-white/10 text-white"
        )}
      >
        Services
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          strokeWidth={2}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-2"
          >
            <div className="min-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl">
              {serviceDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mx-2 my-1.5 border-t border-white/10" />
              <Link
                href="/services"
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#f97316] transition-colors hover:bg-orange-500/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316]">
            <Shield className="h-5 w-5 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              RA Contracting
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Roofing &amp; HVAC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <DesktopServicesDropdown />

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c] hover:shadow-orange-500/40"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l border-white/10 bg-slate-900 p-0 sm:max-w-md"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <span className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                  RA Contracting
                </span>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
                <AnimatePresence>
                  {/* Home */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Home
                    </Link>
                  </motion.div>

                  {/* Services accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                  >
                    <div className="flex items-center">
                      <Link
                        href="/services"
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-l-xl px-4 py-4 text-lg font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        Services
                      </Link>
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="rounded-r-xl px-4 py-4 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Expand services"
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            servicesExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 border-l border-white/10 pl-4">
                            {serviceDropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Remaining links */}
                  {navLinks.slice(1).map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i + 2) * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
              <div className="border-t border-white/10 p-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c]"
                >
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+14695550199"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/50 px-6 py-4 text-lg font-semibold text-red-400 transition-colors hover:bg-red-500/10"
                >
                  24/7 Emergency Line
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
