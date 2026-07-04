import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { DashboardMockup } from "./DashboardMockup";
import { IconArrowRight } from "./icons";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-mesh bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className="section-label">{dict.hero.badge}</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {dict.hero.title}{" "}
              <span className="text-gradient">{dict.hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#pricing" className="btn-primary">
                {dict.hero.ctaPrimary}
                <IconArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                {dict.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">{dict.hero.trusted}</p>
          </div>

          {/* Dashboard mockup */}
          <div className="animate-fade-up mx-auto w-full max-w-lg lg:max-w-none" style={{ animationDelay: "0.15s" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-slate-200/60 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200/60 sm:grid-cols-4">
          {dict.stats.items.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:py-8">
              <p className="text-2xl font-bold text-teal-600 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
