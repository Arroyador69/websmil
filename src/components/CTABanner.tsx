import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { IconArrowRight } from "./icons";

interface CTABannerProps {
  dict: Dictionary;
}

export function CTABanner({ dict }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-600 to-teal-700 px-8 py-12 text-center shadow-2xl shadow-teal-600/30 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_60%)]" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-teal-400/20 blur-2xl" />

        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {dict.ctaBanner.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-teal-100 sm:text-lg">
            {dict.ctaBanner.subtitle}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-teal-700 shadow-lg transition hover:bg-teal-50"
          >
            {dict.ctaBanner.button}
            <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
