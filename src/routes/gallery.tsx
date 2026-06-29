import { createFileRoute } from "@tanstack/react-router";
import { Masonry } from "@/components/masonry";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Diptangshu Ghosh" },
      { name: "description", content: "A full archive of street photographs from Kolkata and across India by Diptangshu Ghosh." },
      { property: "og:title", content: "Gallery — Diptangshu Ghosh" },
      { property: "og:description", content: "Street photographs from Kolkata and across India." },
      { property: "og:image", content: photos[0].src },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
      <header className="mb-14 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">The archive</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
          A walking <span className="italic text-gold">notebook</span> of the streets.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
          Frames from Kolkata's lanes, ghats and festivals — and from journeys through
          Banaras, Mumbai and the smaller towns in between. Hover an image for its title.
        </p>
        <div className="mt-8 h-px gold-rule w-32" />
      </header>
      <Masonry photos={photos} />
    </section>
  );
}
