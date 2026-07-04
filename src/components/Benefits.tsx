import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { benefitIcons } from "./icons";

interface BenefitsProps {
  dict: Dictionary;
}

export function Benefits({ dict }: BenefitsProps) {
  return (
    <section id="benefits" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{dict.benefits.title}</span>
          <h2 className="section-title mt-4">{dict.benefits.title}</h2>
          <p className="section-subtitle">{dict.benefits.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.benefits.items.map((item, index) => {
            const Icon = benefitIcons[index];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/0 transition group-hover:from-teal-50/80 group-hover:to-transparent" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-600/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
