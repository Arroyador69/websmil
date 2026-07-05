import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  const links = [
    { href: "#pricing", label: dict.nav.pricing },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#services", label: dict.nav.services },
    { href: "#billing", label: dict.nav.billing },
    { href: "#faq", label: dict.nav.faq },
    { href: "#contact", label: dict.footer.contact },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-slate-400 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href={`/${locale}`} className="text-xl font-bold text-white">
              Webs<span className="text-teal-400">Mil</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{dict.footer.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Links</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex min-h-10 items-center text-sm transition hover:text-teal-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {dict.footer.contact}
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex text-sm font-medium text-teal-400 transition hover:text-teal-300"
            >
              {dict.nav.cta} →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          © {new Date().getFullYear()} WebsMil. {dict.footer.rights}
          {process.env.NEXT_PUBLIC_BUILD_ID && (
            <span className="mt-2 block text-xs text-slate-600">
              build {process.env.NEXT_PUBLIC_BUILD_ID.slice(0, 7)}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
