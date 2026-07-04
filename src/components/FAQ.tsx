"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface FAQProps {
  dict: Dictionary;
}

export function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="section-label">{dict.faq.title}</span>
          <h2 className="section-title mt-4">{dict.faq.title}</h2>
        </div>

        <dl className="mt-12 space-y-3">
          {dict.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-teal-200 bg-white shadow-md shadow-teal-600/5"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900">{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
