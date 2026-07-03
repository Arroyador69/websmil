import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface FAQProps {
  dict: Dictionary;
}

export function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {dict.faq.title}
        </h2>

        <dl className="mt-12 space-y-6">
          {dict.faq.items.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <dt className="text-base font-semibold text-slate-900">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
