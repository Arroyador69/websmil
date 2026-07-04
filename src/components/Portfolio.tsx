import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { portfolioProjects, type PortfolioShotType } from "@/lib/portfolio/projects";

interface PortfolioProps {
  dict: Dictionary;
}

const shotBadgeClass: Record<PortfolioShotType, string> = {
  landing: "bg-teal-500/90 text-white",
  dashboard: "bg-violet-500/90 text-white",
  web: "bg-slate-700/90 text-white",
};

export function Portfolio({ dict }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{dict.portfolio.label}</span>
          <h2 className="section-title mt-4">{dict.portfolio.title}</h2>
          <p className="section-subtitle">{dict.portfolio.subtitle}</p>
        </div>

        <div className="mt-16 space-y-10">
          {portfolioProjects.map((project) => {
            const info = dict.portfolio.projects[project.id];

            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:shadow-md hover:shadow-teal-600/5"
              >
                <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {info.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {info.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {info.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition hover:border-teal-300 hover:bg-teal-100"
                  >
                    {dict.portfolio.visitSite}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                  {project.shots.map((shot) => (
                    <figure
                      key={shot.src}
                      className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={shot.src}
                          alt={`${info.name} — ${dict.portfolio.shotTypes[shot.type]}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <figcaption className="absolute left-3 top-3">
                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${shotBadgeClass[shot.type]}`}
                        >
                          {dict.portfolio.shotTypes[shot.type]}
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
