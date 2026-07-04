"use client";

import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";
import { IconCheck } from "./icons";

type PricingPlanId = Exclude<PlanId, "general">;
const planIds: PricingPlanId[] = ["essential", "professional", "premium"];

const planGradients: Record<PricingPlanId, string> = {
  essential: "from-slate-600 to-slate-800",
  professional: "from-teal-500 to-teal-700",
  premium: "from-violet-500 to-purple-700",
};

interface PricingProps {
  dict: Dictionary;
  locale: Locale;
  onSelectPlan: (plan: PricingPlanId) => void;
}

export function Pricing({ dict, locale, onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{dict.pricing.title}</span>
          <h2 className="section-title mt-4">{dict.pricing.title}</h2>
          <p className="section-subtitle">{dict.pricing.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {planIds.map((planId) => {
            const plan = dict.pricing.plans[planId];
            const isPopular = planId === "professional";

            return (
              <div
                key={planId}
                className={`relative flex flex-col overflow-hidden rounded-2xl border transition hover:-translate-y-1 hover:shadow-xl ${
                  isPopular
                    ? "border-teal-300 bg-white shadow-lg shadow-teal-600/10 ring-2 ring-teal-500/20"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${planGradients[planId]}`} />

                <div className="flex flex-1 flex-col p-8">
                  {isPopular && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                      {dict.pricing.popular}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price.toLocaleString(locale === "fi" ? "fi-FI" : locale === "en" ? "en-GB" : "es-ES")}
                    </span>
                    <span className="text-lg font-medium text-slate-500">{dict.pricing.currency}</span>
                  </div>
                  <p className="text-xs text-slate-500">{dict.pricing.oneTime}</p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <IconCheck className="h-2.5 w-2.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(planId)}
                      className={`w-full rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        isPopular
                          ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-600/25 hover:from-teal-700 hover:to-teal-600"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {dict.pricing.cta}
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectPlan(planId)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {dict.pricing.moreInfo}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
