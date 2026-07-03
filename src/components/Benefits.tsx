import type { Dictionary } from "@/lib/i18n/get-dictionary";

const icons = ["📊", "⚡", "🚀", "📈"];

interface BenefitsProps {
  dict: Dictionary;
}

export function Benefits({ dict }: BenefitsProps) {
  return (
    <section id="benefits" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {dict.benefits.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {dict.benefits.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-teal-200 hover:shadow-md"
            >
              <span className="text-3xl">{icons[index]}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
