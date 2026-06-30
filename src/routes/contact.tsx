import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Diptangshu Ghosh" },
      { name: "description", content: "Get in touch with Diptangshu Ghosh for prints, editorial commissions and exhibitions in Kolkata." },
      { property: "og:title", content: "Contact — Diptangshu Ghosh" },
      { property: "og:description", content: "Prints, editorial commissions and exhibitions in Kolkata." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">Get in touch</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance max-w-3xl">
        Let's make <span className="italic text-gold">something quiet</span> together.
      </h1>
      <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
        For print enquiries, editorial commissions or exhibition invitations — I
        read every message, and reply within a week.
      </p>

      <div className="mt-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          <ContactRow label="Email" value="diptangshughosh74@gmail.com" href="mailto:diptangshughosh74@gmail.com" />
          <ContactRow label="Instagram" value="@diptangshu03" href="https://www.instagram.com/diptangshu03/" />
          <ContactRow label="Instagram" value="@calcutta_chronicle" href="https://www.instagram.com/calcutta_chronicle/" />
          <ContactRow label="YouTube" value="EkTara Productions" href="https://www.youtube.com/@EkTaraProductions" />
          <ContactRow label="OFFICE" value="Santoshpur, Kolkata 700075" />
          <ContactRow label="Hours" value="Any time On Call or Text" />
        </div>

        <form
          className="md:col-span-7 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            window.location.href = `mailto:diptangshughosh74@gmail.com?subject=${encodeURIComponent(
              `Enquiry from ${data.get("name")}`
            )}&body=${encodeURIComponent(String(data.get("message") ?? ""))}`;
          }}
        >
          <Field name="name" label="Your name" />
          <Field name="email" label="Email" type="email" />
          <Field name="subject" label="Subject" />
          <div>
            <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-foreground resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-3 border border-gold text-gold px-8 py-3 text-sm uppercase tracking-[0.25em] hover:bg-gold hover:text-background transition-colors"
          >
            Send message
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <p className="font-display text-2xl mt-1 group-hover:text-gold transition-colors">{value}</p>
    </>
  );
  return href ? (
    <a href={href} className="group block border-b border-border/60 pb-5">{content}</a>
  ) : (
    <div className="group block border-b border-border/60 pb-5">{content}</div>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-foreground transition-colors"
      />
    </div>
  );
}
