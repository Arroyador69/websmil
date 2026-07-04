import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { IconCheck } from "./icons";
import { DashboardMockup } from "./DashboardMockup";

interface ShowcaseProps {
  dict: Dictionary;
}

export function Showcase({ dict }: ShowcaseProps) {
  return (
    <section id="showcase" className="relative overflow-hidden bg-slate-900 px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15),_transparent_60%)]" />
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

            <a href="#pricing" className="btn-primary mt-10">
              {dict.hero.ctaPrimary}
            </a>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
                alt={dict.showcase.imageAlt}
                width={800}
                height={320}
                className="h-44 w-full object-cover sm:h-52"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
