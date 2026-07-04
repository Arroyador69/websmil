"use client";

import { useState, useCallback } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { Showcase } from "./Showcase";
import { HowItWorks } from "./HowItWorks";
import { Pricing } from "./Pricing";
import { Services } from "./Services";
import { Billing } from "./Billing";
import { CTABanner } from "./CTABanner";
import { LeadForm } from "./LeadForm";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

const SITE_VERSION = "7337f3c-services-v2";

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
      <div className="bg-teal-700 py-1.5 text-center text-xs font-semibold text-white">
        WebsMil {SITE_VERSION} — {dict.nav.services} + {dict.nav.billing} activos
      </div>
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Benefits dict={dict} />
        <Showcase dict={dict} />
        <HowItWorks dict={dict} />

        {/* Precios + servicios + facturación en bloque continuo */}
        <Pricing dict={dict} locale={locale} onSelectPlan={handleSelectPlan} />
        <Services dict={dict} />
        <Billing dict={dict} />

        <CTABanner dict={dict} />
        <section id="contact" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
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
