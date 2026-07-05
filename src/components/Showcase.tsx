import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { IconCheck } from "./icons";
import { BrowserFrame } from "./BrowserFrame";

interface ShowcaseProps {
  dict: Dictionary;
}

export function Showcase({ dict }: ShowcaseProps) {
  return (
    <section id="showcase" className="relative overflow-hidden bg-slate-900 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400">
              {dict.showcase.label}
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {dict.showcase.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              {dict.showcase.subtitle}
            </p>

            <ul className="mt-8 space-y-4">
              {dict.showcase.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#portfolio" className="btn-primary mt-10">
              {dict.showcase.cta}
            </a>
          </div>

          <BrowserFrame
            src={dict.showcase.imageSrc}
            alt={dict.showcase.imageAlt}
            url={dict.showcase.imageUrl}
            className="shadow-teal-900/20"
          />
        </div>
      </div>
    </section>
  );
}
