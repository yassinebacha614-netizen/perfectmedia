"use client";

import { useState, type FormEvent } from "react";
import { BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FieldError {
  name?: string;
  email?: string;
  website?: string;
}

const BENEFITS = [
  {
    icon: BarChart3,
    title: "Pipeline Analysis",
    text: "We review your current lead sources, conversion rates, and funnel bottlenecks.",
  },
  {
    icon: Lightbulb,
    title: "Custom Recommendations",
    text: "Actionable strategies tailored to your industry, budget, and growth goals.",
  },
  {
    icon: TrendingUp,
    title: "Quick Wins Report",
    text: "High-impact opportunities you can implement immediately to boost lead flow.",
  },
];

function validate(name: string, email: string, website: string): FieldError {
  const errors: FieldError = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!website.trim()) {
    errors.website = "Website URL is required.";
  } else {
    try {
      new URL(website.startsWith("http") ? website : `https://${website}`);
    } catch {
      errors.website = "Please enter a valid URL.";
    }
  }
  return errors;
}

export function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [goals, setGoals] = useState("");
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(name, email, website);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website, company, goals }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setWebsite("");
      setCompany("");
      setGoals("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="lead-magnet"
      className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 py-20 sm:py-24"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 0), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 0)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get a Free Lead Generation Audit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-200">
            We&apos;ll analyze your current lead pipeline and send you a
            personalized report with actionable recommendations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Benefits column */}
          <div className="space-y-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-300 backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-200">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form column */}
          <div>
            {status === "success" ? (
              <div className="rounded-xl border border-green-400/30 bg-white/10 p-8 text-center backdrop-blur-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-400/20 text-green-300">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Audit Request Received!
                </h3>
                <p className="mt-2 text-brand-200">
                  Your personalized audit will arrive in 2-3 business days. Keep an
                  eye on your inbox.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="audit-name" className="block text-sm font-medium text-brand-100">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={cn(
                        "mt-1 block w-full rounded-lg border bg-white/10 px-4 py-2.5 text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400",
                        errors.name ? "border-red-400" : "border-white/20"
                      )}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "audit-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="audit-name-error" className="mt-1 text-sm text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="audit-email" className="block text-sm font-medium text-brand-100">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "mt-1 block w-full rounded-lg border bg-white/10 px-4 py-2.5 text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400",
                        errors.email ? "border-red-400" : "border-white/20"
                      )}
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "audit-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="audit-email-error" className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="audit-website" className="block text-sm font-medium text-brand-100">
                      Website URL <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="audit-website"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className={cn(
                        "mt-1 block w-full rounded-lg border bg-white/10 px-4 py-2.5 text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400",
                        errors.website ? "border-red-400" : "border-white/20"
                      )}
                      placeholder="https://yourwebsite.com"
                      aria-invalid={!!errors.website}
                      aria-describedby={errors.website ? "audit-website-error" : undefined}
                    />
                    {errors.website && (
                      <p id="audit-website-error" className="mt-1 text-sm text-red-400">
                        {errors.website}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="audit-company" className="block text-sm font-medium text-brand-100">
                      Company
                    </label>
                    <input
                      id="audit-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Goals */}
                  <div>
                    <label htmlFor="audit-goals" className="block text-sm font-medium text-brand-100">
                      Marketing Goals
                    </label>
                    <textarea
                      id="audit-goals"
                      rows={3}
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400"
                      placeholder="What are your main lead generation goals?"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="mt-4 rounded-lg bg-red-900/50 p-3 text-sm text-red-300">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="mt-6 w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Get My Free Audit"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
