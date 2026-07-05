"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { portfolioProjects, type PortfolioShotType } from "@/lib/portfolio/projects";

interface PortfolioProps {
  dict: Dictionary;
}

interface LightboxImage {
  src: string;
  alt: string;
  type: PortfolioShotType;
}

const shotBadgeClass: Record<PortfolioShotType, string> = {
  landing: "bg-teal-500/90 text-white",
  dashboard: "bg-violet-500/90 text-white",
  web: "bg-slate-700/90 text-white",
};

export function Portfolio({ dict }: PortfolioProps) {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section id="portfolio" className="section-anchor bg-slate-50 px-4 py-14 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">{dict.portfolio.label}</span>
            <h2 className="section-title mt-4">{dict.portfolio.title}</h2>
            <p className="section-subtitle">{dict.portfolio.subtitle}</p>
          </div>

          <div className="mt-10 space-y-8 sm:mt-16 sm:space-y-10">
            {portfolioProjects.map((project) => {
              const info = dict.portfolio.projects[project.id];

              return (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-4 border-b border-slate-100 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        {info.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-pretty text-slate-600 sm:text-base">
                        {info.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                        {info.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 sm:px-3 sm:py-1"
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
                      className="inline-flex min-h-11 w-full touch-manipulation items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition hover:border-teal-300 hover:bg-teal-100 active:scale-[0.98] sm:w-auto sm:shrink-0"
                    >
                      {dict.portfolio.visitSite}
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Mobile: horizontal scroll · Desktop: grid */}
                  <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:p-6 lg:grid-cols-3">
                    {project.shots.map((shot) => {
                      const alt = `${info.name} — ${dict.portfolio.shotTypes[shot.type]}`;

                      return (
                        <figure
                          key={shot.src}
                          className="group relative w-[85vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 sm:w-auto sm:max-w-none"
                        >
                          <button
                            type="button"
                            onClick={() => setLightbox({ src: shot.src, alt, type: shot.type })}
                            className="relative block w-full touch-manipulation text-left"
                            aria-label={dict.portfolio.expandImage}
                          >
                            <div className="relative aspect-[16/10]">
                              <Image
                                src={shot.src}
                                alt={alt}
                                fill
                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-top transition duration-300 sm:group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 sm:items-center sm:justify-center sm:bg-slate-900/0 sm:transition sm:group-hover:bg-slate-900/20">
                              <span className="rounded-full bg-white/95 p-2 shadow-lg sm:scale-90 sm:opacity-0 sm:transition sm:group-hover:scale-100 sm:group-hover:opacity-100">
                                <svg className="h-4 w-4 text-slate-700 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </span>
                            </div>
                          </button>
                          <figcaption className="pointer-events-none absolute left-2 top-2 sm:left-3 sm:top-3">
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-semibold shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-xs ${shotBadgeClass[shot.type]}`}
                            >
                              {dict.portfolio.shotTypes[shot.type]}
                            </span>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-sm sm:p-6"
          style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-3 top-3 z-10 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-5 sm:top-5"
            style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
            aria-label={dict.portfolio.closeImage}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-h-[85dvh] w-full max-w-6xl overflow-auto rounded-lg shadow-2xl sm:max-h-[90dvh] sm:rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`absolute left-3 top-3 z-10 rounded-md px-2 py-0.5 text-[10px] font-semibold shadow-sm sm:left-4 sm:top-4 sm:px-2.5 sm:py-1 sm:text-xs ${shotBadgeClass[lightbox.type]}`}
            >
              {dict.portfolio.shotTypes[lightbox.type]}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="h-auto max-h-[85dvh] w-full object-contain sm:max-h-[90dvh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
