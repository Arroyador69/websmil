import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface BillingProps {
  dict: Dictionary;
}

export function Billing({ dict }: BillingProps) {
  return (
    <section id="billing" className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="section-label">{dict.billing.label}</span>
          <h2 className="section-title mt-4">{dict.billing.title}</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5">
          <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50 to-white px-8 py-6 sm:px-10">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {dict.billing.intro}
            </p>
          </div>

          <div className="px-8 py-8 sm:px-10 sm:py-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              {dict.billing.basicsTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {dict.billing.basics}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {dict.billing.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
