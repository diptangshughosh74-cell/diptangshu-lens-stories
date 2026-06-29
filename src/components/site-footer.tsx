import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <p className="font-display text-2xl">
            Diptangshu <span className="italic text-gold">Ghosh</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Street photographer documenting Kolkata and the streets of India.
          </p>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-[0.2em] text-[11px] text-muted-foreground mb-3">
            Navigate
          </p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gold">Work</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-[0.2em] text-[11px] text-muted-foreground mb-3">
            Elsewhere
          </p>
          <ul className="space-y-2">
            <li><a href="https://www.instagram.com/diptangshu03/" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram · @diptangshu03</a></li>
            <li><a href="mailto:diptangshughosh74@gmail.com" className="hover:text-gold">diptangshughosh74@gmail.com</a></li>
            <li><span className="text-muted-foreground">Kolkata, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Diptangshu Ghosh. All photographs are the property of the artist.</span>
          <span className="italic font-display text-gold/80">Kolkata · est. on the streets</span>
        </div>
      </div>
    </footer>
  );
}
