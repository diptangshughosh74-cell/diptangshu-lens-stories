import type { Photo } from "@/lib/photos";

export function Masonry({ photos }: { photos: Photo[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
      {photos.map((p, i) => (
        <figure
          key={p.src}
          className="group mb-5 break-inside-avoid relative overflow-hidden bg-ink"
        >
          <img
            src={p.src}
            alt={`${p.title} — ${p.place}, ${p.year}`}
            width={p.w}
            height={p.h}
            loading={i < 2 ? "eager" : "lazy"}
            className="w-full h-auto block transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display italic text-lg leading-tight text-gold">
                  {p.title}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {p.place}
                </p>
              </div>
              <span className="font-display text-sm text-foreground/70">{p.year}</span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
