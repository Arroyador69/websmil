import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { IconArrowRight } from "./icons";

interface ServicesProps {
  dict: Dictionary;
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-slate-900 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400">
            {dict.services.label}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {dict.services.categories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-white">
                <span className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
                {category.name}
                <span className="h-px flex-1 bg-gradient-to-l from-teal-500/50 to-transparent" />
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="group flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:bg-slate-800/80"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-semibold leading-snug text-white">
                        {item.name}
                      </h4>
                      <span className="shrink-0 rounded-lg bg-teal-500/15 px-2.5 py-1 text-sm font-bold text-teal-400 ring-1 ring-teal-500/25">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    {item.priceNote && (
                      <p className="mt-2 text-xs font-medium text-teal-500/80">{item.priceNote}</p>
                    )}

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 transition group-hover:gap-2.5 group-hover:text-teal-300"
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
