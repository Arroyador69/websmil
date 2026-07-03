import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-4 py-12 text-slate-400 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link href={`/${locale}`} className="text-lg font-bold text-white">
            Webs<span className="text-teal-400">Mil</span>
          </Link>
          <p className="mt-2 text-sm">{dict.footer.tagline}</p>
        </div>
        <div className="text-center text-sm sm:text-right">
          <a
            href="#contact"
            className="font-medium text-teal-400 hover:text-teal-300"
          >
            {dict.footer.contact}
          </a>
          <p className="mt-2">© {new Date().getFullYear()} WebsMil. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
