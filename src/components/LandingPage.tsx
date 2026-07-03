"use client";

import { useState, useCallback } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { HowItWorks } from "./HowItWorks";
import { Pricing } from "./Pricing";
import { LeadForm } from "./LeadForm";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

interface LandingPageProps {
  dict: Dictionary;
  locale: Locale;
}

export function LandingPage({ dict, locale }: LandingPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("general");
  const [formKey, setFormKey] = useState(0);

  const handleSelectPlan = useCallback((plan: PlanId) => {
    setSelectedPlan(plan);
    setFormKey((k) => k + 1);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Benefits dict={dict} />
        <HowItWorks dict={dict} />
        <Pricing dict={dict} locale={locale} onSelectPlan={handleSelectPlan} />
        <section id="contact" className="bg-slate-50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-xl">
            <LeadForm key={formKey} dict={dict} locale={locale} selectedPlan={selectedPlan} />
          </div>
        </section>
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
