import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HowItWorksProps {
  dict: Dictionary;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="section-anchor bg-slate-50 px-4 py-14 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{dict.howItWorks.title}</span>
          <h2 className="section-title mt-4">{dict.howItWorks.title}</h2>
          <p className="section-subtitle">{dict.howItWorks.subtitle}</p>
        </div>

        <div className="relative mt-10 sm:mt-16">
          <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.howItWorks.steps.map((step, index) => (
              <div key={step.title} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-sm font-bold text-white shadow-lg shadow-teal-600/30 lg:mx-0">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
