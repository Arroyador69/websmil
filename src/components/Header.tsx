import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export function Header({ dict, locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Webs<span className="text-teal-600">Mil</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-teal-600">
            {dict.nav.benefits}
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-teal-600">
            {dict.nav.pricing}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-teal-600">
            {dict.nav.howItWorks}
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-teal-600">
            {dict.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <a
            href="#contact"
            className="hidden rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 sm:inline-block"
          >
            {dict.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
