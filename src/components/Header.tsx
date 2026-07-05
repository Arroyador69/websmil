"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#pricing", label: dict.nav.pricing },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#services", label: dict.nav.services },
    { href: "#billing", label: dict.nav.billing },
    { href: "#faq", label: dict.nav.faq },
  ];

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 glass supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <Link href={`/${locale}`} className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-sm font-bold text-white shadow-md shadow-teal-600/30">
            W
          </span>
          <span className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            Webs<span className="text-teal-600">Mil</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <a href="#contact" className="btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
            {dict.nav.cta}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200/60 bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 touch-manipulation items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex min-h-11 touch-manipulation items-center justify-center rounded-xl bg-teal-600 px-3 text-center text-sm font-semibold text-white"
              >
                {dict.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
