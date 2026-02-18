"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  RefreshCw,
  Snowflake,
  Wrench,
  Building2,
  TreePine,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  Zap,
} from "lucide-react";

const serviceOptions = [
  { id: "roof-repair", label: "Roof Repair", icon: Wrench },
  { id: "roof-replacement", label: "Roof Replacement", icon: RefreshCw },
  { id: "ac-repair", label: "AC Repair", icon: Snowflake },
  { id: "new-ac", label: "New AC Installation", icon: Home },
];

const propertyTypes = [
  { id: "residential", label: "Residential", icon: TreePine },
  { id: "commercial", label: "Commercial", icon: Building2 },
];

const urgencyLevels = [
  {
    id: "low",
    label: "Low",
    description: "No rush — flexible scheduling",
    icon: Clock,
    color: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    id: "medium",
    label: "Medium",
    description: "Within the next week or two",
    icon: AlertTriangle,
    color: "border-amber-300 bg-amber-50 text-amber-700",
  },
  {
    id: "emergency",
    label: "EMERGENCY",
    description: "Immediate attention needed",
    icon: Zap,
    color: "border-red-300 bg-red-50 text-red-700",
  },
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Enter a valid phone number"
    ),
  email: z.string().email("Enter a valid email address"),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const TOTAL_STEPS = 4;

export function WizardForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const progress = (step / TOTAL_STEPS) * 100;

  const canAdvance = () => {
    if (step === 1) return selectedService !== "";
    if (step === 2) return selectedProperty !== "";
    if (step === 4) return selectedUrgency !== "";
    return true;
  };

  const onSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        </div>
        <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-[#1a1a1a]">
          Request Received!
        </h3>
        <p className="max-w-md text-slate-600">
          We&apos;ll review your information and get back to you within 2 hours
          during business hours. For emergencies, call us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="font-semibold text-[#f97316]">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-slate-100" />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <StepWrapper key="step1">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              What do you need help with?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedService(opt.id)}
                    className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all ${
                      selectedService === opt.id
                        ? "border-[#f97316] bg-[#f97316]/5 shadow-md shadow-orange-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        selectedService === opt.id
                          ? "text-[#f97316]"
                          : "text-slate-400"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        selectedService === opt.id
                          ? "text-[#1a1a1a]"
                          : "text-slate-600"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </StepWrapper>
        )}

        {step === 2 && (
          <StepWrapper key="step2">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              Property Type
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {propertyTypes.map((pt) => {
                const Icon = pt.icon;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setSelectedProperty(pt.id)}
                    className={`flex flex-col items-center gap-4 rounded-xl border-2 p-8 transition-all ${
                      selectedProperty === pt.id
                        ? "border-[#f97316] bg-[#f97316]/5 shadow-md shadow-orange-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon
                      className={`h-12 w-12 ${
                        selectedProperty === pt.id
                          ? "text-[#f97316]"
                          : "text-slate-400"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-lg font-semibold ${
                        selectedProperty === pt.id
                          ? "text-[#1a1a1a]"
                          : "text-slate-600"
                      }`}
                    >
                      {pt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </StepWrapper>
        )}

        {step === 3 && (
          <StepWrapper key="step3">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              Contact Details
            </h3>
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Smith"
                  className="mt-1.5"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="address" className="text-sm font-medium text-slate-700">
                  Property Address
                </Label>
                <Input
                  id="address"
                  {...register("address")}
                  placeholder="123 Main St, Dallas, TX"
                  className="mt-1.5"
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(469) 555-0127"
                    className="mt-1.5"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="mt-1.5"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="notes" className="text-sm font-medium text-slate-700">
                  Additional Notes (optional)
                </Label>
                <Textarea
                  id="notes"
                  {...register("notes")}
                  placeholder="Tell us more about your situation..."
                  className="mt-1.5"
                  rows={3}
                />
              </div>
            </form>
          </StepWrapper>
        )}

        {step === 4 && (
          <StepWrapper key="step4">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wide text-[#1a1a1a]">
              How urgent is this?
            </h3>
            <div className="space-y-4">
              {urgencyLevels.map((level) => {
                const Icon = level.icon;
                return (
                  <button
                    key={level.id}
                    onClick={() => setSelectedUrgency(level.id)}
                    className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all ${
                      selectedUrgency === level.id
                        ? `${level.color} border-current shadow-md`
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 shrink-0 ${
                        selectedUrgency === level.id ? "" : "text-slate-400"
                      }`}
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-semibold">{level.label}</p>
                      <p
                        className={`text-sm ${
                          selectedUrgency === level.id
                            ? "opacity-80"
                            : "text-slate-500"
                        }`}
                      >
                        {level.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </StepWrapper>
        )}
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            onClick={handleNext}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        ) : (
          <button
            type="submit"
            form="contact-form"
            onClick={() => {
              if (step === 4 && selectedUrgency) {
                setSubmitted(true);
              }
            }}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <CheckCircle className="h-4 w-4" strokeWidth={1.5} />
            Submit Request
          </button>
        )}
      </div>
    </div>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
