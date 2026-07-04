"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";
import type { Locale } from "@/lib/i18n/config";

interface LeadFormProps {
  dict: Dictionary;
  locale: Locale;
  selectedPlan?: PlanId;
}

export function LeadForm({ dict, locale, selectedPlan = "general" }: LeadFormProps) {
  const [plan, setPlan] = useState<PlanId>(selectedPlan);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company, message, plan, locale }),
      });

      if (!response.ok) throw new Error("Submit failed");

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-2xl text-white shadow-lg shadow-teal-600/30">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">{dict.form.successTitle}</h3>
        <p className="mt-3 leading-relaxed text-slate-600">{dict.form.successMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          ←
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5"
    >
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-6">
        <h3 className="text-xl font-bold text-white">{dict.form.title}</h3>
        <p className="mt-1 text-sm text-teal-100">{dict.form.subtitle}</p>
      </div>

      <div className="p-8">
        {status === "error" && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {dict.form.errorMessage}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="plan" className="mb-1.5 block text-sm font-medium text-slate-700">
              {dict.form.plan}
            </label>
            <select
              id="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value as PlanId)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="essential">{dict.form.planOptions.essential}</option>
              <option value="professional">{dict.form.planOptions.professional}</option>
              <option value="premium">{dict.form.planOptions.premium}</option>
              <option value="general">{dict.form.planOptions.general}</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                {dict.form.name}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={dict.form.namePlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                {dict.form.email} *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.form.emailPlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
              {dict.form.company}
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={dict.form.companyPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              {dict.form.message}
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={dict.form.messagePlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary mt-6 w-full disabled:opacity-60"
        >
          {status === "loading" ? dict.form.submitting : dict.form.submit}
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">{dict.form.privacy}</p>
      </div>
    </form>
  );
}
