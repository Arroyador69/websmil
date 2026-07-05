import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { BrowserFrame } from "./BrowserFrame";
import { IconArrowRight } from "./icons";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-28">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="section-label">{dict.hero.badge}</span>
            <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-balance text-slate-900 sm:mt-6 sm:text-4xl sm:leading-tight lg:text-[3.25rem] lg:leading-[1.1]">
              {dict.hero.title}{" "}
              <span className="text-gradient">{dict.hero.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-pretty text-slate-600 sm:mt-6 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#pricing" className="btn-primary">
                {dict.hero.ctaPrimary}
                <IconArrowRight />
              </a>
              <a href="#portfolio" className="btn-secondary">
                {dict.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500 sm:mt-6">{dict.hero.trusted}</p>
          </div>

          <div
            className="animate-fade-up mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
            style={{ animationDelay: "0.15s" }}
          >
            <BrowserFrame
              src={dict.hero.imageSrc}
              alt={dict.hero.imageAlt}
              url={dict.hero.imageUrl}
              objectPosition={dict.hero.imagePosition}
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-200/60 bg-slate-50/80">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {dict.stats.items.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 py-5 text-center sm:px-4 sm:py-8 ${
                index % 2 === 0 ? "border-r border-slate-200/60" : ""
              } ${index < 2 ? "border-b border-slate-200/60 sm:border-b-0" : ""} sm:border-r sm:last:border-r-0`}
            >
              <p className="text-xl font-bold text-teal-600 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] leading-tight text-slate-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
