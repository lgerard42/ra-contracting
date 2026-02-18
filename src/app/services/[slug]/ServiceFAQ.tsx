"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  q: string;
  a: string;
}

export function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="rounded-xl border border-slate-200 bg-white px-6 shadow-sm"
        >
          <AccordionTrigger className="py-5 text-left font-semibold text-[#1a1a1a] hover:text-[#f97316] hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
