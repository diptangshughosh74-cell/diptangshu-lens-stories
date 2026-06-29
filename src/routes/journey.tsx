import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey & Achievements — Diptangshu Ghosh" },
      {
        name: "description",
        content:
          "The personal journey, milestones, awards and recognitions of Diptangshu Ghosh — a street photographer from Kolkata documenting the streets of India.",
      },
      { property: "og:title", content: "Journey & Achievements — Diptangshu Ghosh" },
      {
        property: "og:description",
        content:
          "Milestones, awards and features from Diptangshu Ghosh's life in street photography.",
      },
      { property: "og:image", content: portraitImg },
    ],
  }),
  component: Journey,
});

function Journey() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Journey & Achievements
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
            A life made of <span className="italic text-gold">small frames</span>.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            A short record of the milestones, recognitions and quiet wins that
            have shaped my practice — from the first frames on Howrah
            Bridge to the exhibitions and features that followed.
          </p>
        </div>
        <div className="md:col-span-4">
          <a
            href="https://www.instagram.com/diptangshu03/"
            target="_blank"
            rel="noreferrer"
            className="group block border border-border/60 hover:border-gold transition-colors p-6"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Follow on Instagram
            </p>
            <p className="font-display text-2xl mt-2 group-hover:text-gold transition-colors">
              @diptangshu03
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Daily frames from Kolkata and beyond →
            </p>
          </a>
        </div>
      </div>

      {/* Numbers */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-y border-border/60 py-12">
        <BigStat value="7+" label="Years walking" />
        <BigStat value="40k+" label="Frames made" />
        <BigStat value="12" label="Cities documented" />
        <BigStat value="6" label="Exhibitions & features" />
      </div>

      {/* Timeline */}
      <div className="mt-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Timeline
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            From a borrowed camera to a body of work.
          </h2>
        </div>
        <ol className="md:col-span-8 space-y-10 relative md:border-l md:border-border/60 md:pl-10">
          <Milestone
            year="2019"
            title="First frames on Howrah Bridge"
            body="Picked up a borrowed camera and spent a week photographing the same bridge at every hour. The beginning of a long habit."
          />
          <Milestone
            year="2020"
            title="Kumartuli, every Sunday for a year"
            body="A self-assigned project documenting the idol-makers' quarter through monsoon, festival and quiet aftermath."
          />
          <Milestone
            year="2025"
            title="VIVEKA AUDITORIUM, BANGALORE"
            body="Featured in 'Videotape Film Festival' — a selection of street visual stories documenting urban life."
          />
          <Milestone
            year="2024"
            title="IGNCA, NEW DELHI"
            body="First solo exhibition: 'Footprint Film Festival' — 32 silver-gelatin prints from the project."
          />
          <Milestone
            year="2024"
            title="KOLKATA CENTER FOR CREATIVITY, KOLKATA"
            body="Selected for 'My Calcutta In Calcutta 2.0', a group exhibition on Indian street life across three cities."
          />
          <Milestone
            year="2026"
            title="GALLERY GOLD, KOLKATA"
            body="Second solo: 'Montage 4.0' — a five-year retrospective with an accompanying limited-run zine."
          />
          <Milestone
            year="2025"
            title="Workshops & teaching"
            body="Began running weekend workshops on slow seeing for photographers visiting Kolkata for the first time."
          />
        </ol>
      </div>

      {/* Awards & Features */}
      <div className="mt-24 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Awards & Recognition
          </p>
          <ul className="space-y-5">
            <Award
              year="2024"
              title="Shortlist · India Street Photography Awards"
              note="Category: Colour street series"
            />
            <Award
              year="2023"
              title="Honourable Mention · Indian Photo Festival"
              note="Hyderabad, IPF Open Call"
            />
            <Award
              year="2022"
              title="Featured Artist · Kolkata International Photo Fest"
            />
            <Award
              year="2025"
              title="Official Selection · Videotape Film Festival"
              note="Bangalore"
            />
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Featured in
          </p>
          <ul className="space-y-5">
            <Award year="2024" title="The Hindu · Sunday Magazine" note="Profile interview" />
            <Award year="2023" title="Better Photography India" note="Portfolio feature" />
            <Award year="2023" title="Method Gallery Journal" note="Essay & images" />
            <Award year="2022" title="Telegraph India · t2" note="Cover story on Kumartuli series" />
            <Award year="2025" title="Videotape Film Festival" note="Festival Showcase" />
          </ul>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-24 border-t border-border/60 pt-12 pb-4">
        <p className="font-display italic text-2xl md:text-3xl text-gold/90 max-w-3xl leading-snug">
          "The streets keep teaching me. The achievements are only the
          footnotes — the walk is the work."
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          — Diptangshu Ghosh
        </p>
      </div>
    </section>
  );
}

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl md:text-6xl text-gold leading-none">
        {value}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function Milestone({
  year,
  title,
  body,
}: {
  year: string;
  title: string;
  body: string;
}) {
  return (
    <li className="relative">
      <span className="hidden md:block absolute -left-[46px] top-2 h-2 w-2 rounded-full bg-gold" />
      <p className="font-display text-gold text-sm tracking-[0.2em]">{year}</p>
      <h3 className="font-display italic text-2xl mt-1">{title}</h3>
      <p className="mt-2 text-foreground/80 leading-relaxed max-w-xl">{body}</p>
    </li>
  );
}

function Award({
  year,
  title,
  note,
}: {
  year: string;
  title: string;
  note?: string;
}) {
  return (
    <li className="grid grid-cols-[60px_1fr] gap-4 border-b border-border/40 pb-4">
      <span className="font-display text-gold">{year}</span>
      <span>
        <span className="font-display italic text-lg block">{title}</span>
        {note && (
          <span className="block text-muted-foreground text-xs uppercase tracking-[0.18em] mt-1">
            {note}
          </span>
        )}
      </span>
    </li>
  );
}
