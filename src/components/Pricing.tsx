"use client";

import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";

type PricingPlanId = Exclude<PlanId, "general">;
const planIds: PricingPlanId[] = ["essential", "professional", "premium"];

interface PricingProps {
  dict: Dictionary;
  locale: Locale;
  onSelectPlan: (plan: PricingPlanId) => void;
}

export function Pricing({ dict, locale, onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {dict.pricing.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {dict.pricing.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {planIds.map((planId) => {
            const plan = dict.pricing.plans[planId];
            const isPopular = planId === "professional";

            return (
              <div
                key={planId}
                className={`relative flex flex-col rounded-2xl border p-8 transition hover:shadow-lg ${
                  isPopular
                    ? "border-teal-500 bg-teal-50/30 shadow-md ring-2 ring-teal-500/20"
                    : "border-slate-200 bg-white"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                    {dict.pricing.popular}
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price.toLocaleString(locale === "fi" ? "fi-FI" : locale === "en" ? "en-GB" : "es-ES")}
                  </span>
                  <span className="text-lg font-medium text-slate-500">{dict.pricing.currency}</span>
                </div>
                <p className="text-xs text-slate-500">{dict.pricing.oneTime}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(planId)}
                    className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${
                      isPopular
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {dict.pricing.cta}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(planId)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {dict.pricing.moreInfo}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
