import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HowItWorksProps {
  dict: Dictionary;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-slate-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {dict.howItWorks.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {dict.howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
