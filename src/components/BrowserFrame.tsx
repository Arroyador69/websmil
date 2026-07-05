import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
}

export function BrowserFrame({
  src,
  alt,
  url = "tunegocio.com",
  className = "",
  priority = false,
}: BrowserFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/[0.08]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="mx-auto flex h-6 max-w-[12rem] flex-1 items-center justify-center rounded-md bg-white px-3 text-[10px] text-slate-400 ring-1 ring-slate-200 sm:max-w-none sm:flex-none sm:w-48">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
