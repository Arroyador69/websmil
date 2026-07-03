import type { Locale } from "./config";
import es from "./dictionaries/es.json";
import en from "./dictionaries/en.json";
import fi from "./dictionaries/fi.json";

const dictionaries = { es, en, fi } as const;

export type Dictionary = typeof es;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
