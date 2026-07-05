"use client";

import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { setLocaleCookie } from "@/lib/cookies";

const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  fi: "FI",
};

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    setLocaleCookie(locale);
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchLocale(locale)}
          className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors touch-manipulation sm:px-3 ${
            locale === currentLocale
              ? "bg-teal-600 text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
