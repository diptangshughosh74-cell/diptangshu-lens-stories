import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-foreground">
            Diptangshu <span className="italic text-gold">Ghosh</span>
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="transition-colors hover:text-gold [&.active]:text-gold"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="md:hidden text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
