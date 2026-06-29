import { createFileRoute } from "@tanstack/react-router";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Diptangshu Ghosh, Street Photographer" },
      { name: "description", content: "About Diptangshu Ghosh: a Kolkata-based street photographer working in colour, with a 35mm lens, on the rhythms of Indian streets." },
      { property: "og:title", content: "About — Diptangshu Ghosh" },
      { property: "og:description", content: "Kolkata-based street photographer working in colour." },
      { property: "og:image", content: portraitImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-24">
          <img
            src={portraitImg}
            alt="Portrait of Diptangshu Ghosh"
            width={1024}
            height={1280}
            className="w-full h-auto"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Self-portrait, College Street, 2024
          </p>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">About</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            I make pictures of <span className="italic text-gold">my city,</span> slowly.
          </h1>

          <div className="mt-10 space-y-6 text-foreground/85 leading-relaxed">
            <p className="font-display text-2xl italic text-gold/90">
              "A street photograph is a small contract — a moment offered, a moment received."
            </p>
            <p>
              I'm Diptangshu Ghosh, a street photographer born and based in Kolkata. For
              the last seven years I have been walking the same lanes — Kumartuli before
              sunrise, Mullick Ghat through the flower market, the trams at BBD Bagh,
              College Street in the late afternoon — looking for the city to give me a
              picture.
            </p>
            <p>
              I work in colour, on a 35mm lens, because both choices force me to commit
              to where I am standing. The streets of India are loud with colour — the
              marigolds, the saris, the painted walls, the yellow taxis — and I want my
              pictures to carry that noise honestly.
            </p>
            <p>
              My work has been part of community shows in Kolkata and Mumbai, and lives,
              mostly, in the notebooks and small zines I print between projects. I teach
              occasional weekend workshops on slow seeing for photographers visiting India
              for the first time.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-8 border-t border-border/60 pt-10">
            <Stat label="Based in" value="Kolkata, India" />
            <Stat label="Working since" value="2019" />
            <Stat label="Camera" value="Canon EOS 1100D" />
          </div>

          <div className="mt-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">Selected exhibitions</p>
            <ul className="space-y-4 text-sm">
              <Exhibit year="2024" title="Walking Kolkata" venue="Harrington Street Arts Centre, Kolkata" />
              <Exhibit year="2023" title="Of Rickshaws and Rain" venue="Group Show · Method, Mumbai" />
              <Exhibit year="2022" title="Kumartuli Notebooks" venue="ICCR Gallery, Kolkata" />
              <Exhibit year="2021" title="One Street, One Year" venue="Online · Maptia Editorial" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <p className="font-display text-xl mt-1">{value}</p>
    </div>
  );
}

function Exhibit({ year, title, venue }: { year: string; title: string; venue: string }) {
  return (
    <li className="grid grid-cols-[60px_1fr] gap-4 border-b border-border/40 pb-4">
      <span className="font-display text-gold">{year}</span>
      <span>
        <span className="font-display italic text-lg">{title}</span>
        <span className="block text-muted-foreground text-xs uppercase tracking-[0.18em] mt-1">
          {venue}
        </span>
      </span>
    </li>
  );
}
