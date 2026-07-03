import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,148,136,0.08),_transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
          {dict.hero.badge}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {dict.hero.subtitle}
        </p>

        <div className="mt-10 inline-flex flex-col items-center rounded-2xl border border-teal-100 bg-white px-8 py-5 shadow-sm sm:flex-row sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold text-teal-600">{dict.hero.stat}</p>
            <p className="text-sm text-slate-500">{dict.hero.statLabel}</p>
          </div>
          <div className="hidden h-12 w-px bg-slate-200 sm:block" />
          <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
