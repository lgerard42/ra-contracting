import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { companyInfo, serviceAreas } from "@/lib/data";

const quickLinks = [
  { href: "/services/roof-replacement", label: "Roof Replacement" },
  { href: "/services/storm-damage-repair", label: "Storm Damage" },
  { href: "/services/ac-installation", label: "AC Installation" },
  { href: "/services/emergency-hvac-repair", label: "Emergency HVAC" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Get a Quote" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316]">
                <Shield className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                  RA Contracting
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Roofing &amp; HVAC
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              {companyInfo.tagline}. Serving the Dallas-Fort Worth metroplex and
              all of Texas since {companyInfo.founded}.
            </p>
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                24/7 Emergency Line
              </p>
              <a
                href={`tel:${companyInfo.emergencyPhone.replace(/\D/g, "")}`}
                className="font-heading text-xl font-bold text-red-400 transition-colors hover:text-red-300"
              >
                {companyInfo.emergencyPhone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#f97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.slice(0, 10).map((city) => (
                <Link
                  key={city}
                  href="/locations"
                  className="rounded-full border border-white/10 px-3 py-1 text-xs transition-colors hover:border-[#f97316]/50 hover:text-[#f97316]"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f97316]" strokeWidth={1.5} />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#f97316]" strokeWidth={1.5} />
                <a href={`tel:${companyInfo.phone.replace(/\D/g, "")}`} className="transition-colors hover:text-white">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#f97316]" strokeWidth={1.5} />
                <a href={`mailto:${companyInfo.email}`} className="transition-colors hover:text-white">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-[#f97316]" strokeWidth={1.5} />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} RA Contracting. All rights reserved.</p>
          <p>{companyInfo.license}</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
