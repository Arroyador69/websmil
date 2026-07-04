import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export function Header({ dict, locale }: HeaderProps) {
  const links = [
    { href: "#benefits", label: dict.nav.benefits },
    { href: "#showcase", label: dict.nav.showcase },
    { href: "#pricing", label: dict.nav.pricing },
    { href: "#how-it-works", label: dict.nav.howItWorks },
    { href: "#faq", label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href={`/${locale}`} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-sm font-bold text-white shadow-md shadow-teal-600/30 transition group-hover:shadow-teal-600/40">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Webs<span className="text-teal-600">Mil</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <a href="#contact" className="btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            {dict.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
