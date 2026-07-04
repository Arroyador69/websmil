import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { IconArrowRight } from "./icons";

interface ServicesProps {
  dict: Dictionary;
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 border-t-4 border-teal-500 bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 px-6 py-4 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-800">
            ↓ {dict.services.label} ↓
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {dict.services.categories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-5 border-b border-slate-200 pb-2 text-lg font-bold text-teal-800">
                {category.name}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-semibold leading-snug text-slate-900">
                        {item.name}
                      </h4>
                      <span className="shrink-0 rounded-lg bg-teal-600 px-2.5 py-1 text-sm font-bold text-white">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    {item.priceNote && (
                      <p className="mt-2 text-xs font-semibold text-teal-700">{item.priceNote}</p>
                    )}

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition group-hover:gap-2.5"
                    >
                      {dict.services.cta}
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
