import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-kolkata.jpg";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
import { Masonry } from "@/components/masonry";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diptangshu Ghosh — Street Photographer, Kolkata" },
      { name: "description", content: "Portfolio of Diptangshu Ghosh, a street photographer documenting Kolkata and the streets of India in light, shadow and stillness." },
      { property: "og:title", content: "Diptangshu Ghosh — Street Photographer, Kolkata" },
      { property: "og:description", content: "Portfolio of Diptangshu Ghosh, a street photographer documenting Kolkata and the streets of India." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = photos.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Hand-pulled rickshaw at dawn on a Kolkata street"
          width={1600}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
            Vol. I · Kolkata Notebooks
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-balance max-w-4xl">
            The streets remember,
            <br />
            <span className="italic text-gold">the camera listens.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
            Street photography from Kolkata and the wider roads of India by{" "}
            <span className="text-gold">Diptangshu Ghosh</span> — a slow archive
            of rickshaws, rituals, monsoon afternoons and the quiet faces in between.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 border border-gold text-gold px-7 py-3 text-sm uppercase tracking-[0.25em] hover:bg-gold hover:text-background transition-colors"
            >
              Enter the archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/about"
              className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
            >
              About the photographer
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-3 text-[11px] uppercase tracking-[0.3em] text-gold pt-3">
            — A note
          </p>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
              I photograph the city the way a friend remembers a name —
              <span className="italic text-gold"> imperfectly, tenderly, again and again.</span>
            </p>
            <p className="mt-8 text-base text-muted-foreground max-w-2xl leading-relaxed">
              Kolkata is my home and my classroom. Most mornings begin before sunrise,
              walking from Kumartuli to Mullick Ghat, then a tram east, listening for
              the moment a stranger becomes a photograph.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 border-b border-border/60 pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Selected work</p>
            <h2 className="font-display text-4xl md:text-5xl">Recent frames</h2>
          </div>
          <Link to="/gallery" className="hidden md:inline text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-gold">
            View all →
          </Link>
        </div>
        <Masonry photos={featured} />
        <div className="mt-10 text-center md:hidden">
          <Link to="/gallery" className="text-sm uppercase tracking-[0.25em] text-gold">
            View the full gallery →
          </Link>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <img
              src={portraitAsset.url}
              alt="Diptangshu Ghosh photographing"
              width={1065}
              height={1600}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Diptangshu Ghosh,
              <br />
              <span className="italic text-gold">on patience.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              Born and based in Kolkata. Self-taught. I work in colour with a 35mm
              lens because it forces me closer — close enough to be accountable to
              the people I photograph. My pictures are small testimonies to a city
              that refuses to stand still.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold hover:text-gold-soft"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 mt-32 text-center">
        <div className="h-px gold-rule mb-12 mx-auto w-40" />
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6">Commissions · Prints · Workshops</p>
        <h2 className="font-display text-4xl md:text-6xl text-balance">
          Have a story <span className="italic text-gold">worth walking for?</span>
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 border border-gold text-gold px-8 py-3 text-sm uppercase tracking-[0.25em] hover:bg-gold hover:text-background transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
