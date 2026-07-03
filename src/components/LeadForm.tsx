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

      if (!response.ok) {
        throw new Error("Submit failed");
      }

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
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-2xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">{dict.form.successTitle}</h3>
        <p className="mt-3 text-slate-600">{dict.form.successMessage}</p>
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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">{dict.form.title}</h3>
      <p className="mt-2 text-slate-600">{dict.form.subtitle}</p>

      {status === "error" && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {dict.form.errorMessage}
        </div>
      )}

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="plan" className="mb-1.5 block text-sm font-medium text-slate-700">
            {dict.form.plan}
          </label>
          <select
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value as PlanId)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
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
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
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
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
      >
        {status === "loading" ? dict.form.submitting : dict.form.submit}
      </button>

      <p className="mt-4 text-xs text-slate-500">{dict.form.privacy}</p>
    </form>
  );
}
