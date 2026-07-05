import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export function BrowserFrame({
  src,
  alt,
  url = "tunegocio.com",
  className = "",
  priority = false,
  objectPosition = "center top",
}: BrowserFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/[0.08] sm:rounded-2xl sm:shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2 sm:gap-2 sm:px-4 sm:py-3">
          <div className="flex shrink-0 gap-1 sm:gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/90 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/90 sm:h-2.5 sm:w-2.5" />
          </div>
          <div className="mx-auto min-w-0 flex-1 truncate rounded-md bg-white px-2 py-1 text-center text-[9px] text-slate-400 ring-1 ring-slate-200 sm:max-w-none sm:flex-none sm:w-48 sm:px-3 sm:text-[10px]">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 540px"
            className="object-cover"
            style={{ objectPosition }}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
