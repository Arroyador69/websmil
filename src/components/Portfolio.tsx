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
                    {project.shots.map((shot) => {
                      const alt = `${info.name} — ${dict.portfolio.shotTypes[shot.type]}`;

                      return (
                        <figure
                          key={shot.src}
                          className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100"
                        >
                          <button
                            type="button"
                            onClick={() => setLightbox({ src: shot.src, alt, type: shot.type })}
                            className="relative block w-full cursor-zoom-in text-left"
                            aria-label={dict.portfolio.expandImage}
                          >
                            <div className="relative aspect-[16/10]">
                              <Image
                                src={shot.src}
                                alt={alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/0 transition group-hover:bg-slate-900/20">
                              <span className="scale-90 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
                                <svg className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </span>
                            </div>
                          </button>
                          <figcaption className="pointer-events-none absolute left-3 top-3">
                            <span
                              className={`rounded-md px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${shotBadgeClass[shot.type]}`}
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label={dict.portfolio.closeImage}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`absolute left-4 top-4 z-10 rounded-md px-2.5 py-1 text-xs font-semibold shadow-sm ${shotBadgeClass[lightbox.type]}`}
            >
              {dict.portfolio.shotTypes[lightbox.type]}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
