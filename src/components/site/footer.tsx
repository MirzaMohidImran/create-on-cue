import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">/ 01 — available Q1</p>
            <h2 className="mt-6 font-serif text-5xl italic leading-[0.95] md:text-7xl">
              Let&apos;s build<br />something<span className="text-acid"> unreasonable.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-bone/40 pb-1 font-display text-lg tracking-tight hover:border-acid hover:text-acid"
            >
              hello@mohidimran.dev
              <span>↗</span>
            </Link>
          </div>
          <div className="grid gap-10 md:col-span-7 md:grid-cols-3">
            <FooterCol title="Studio" items={[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Work", to: "/portfolio" },
              { label: "Resume", to: "/resume" },
            ]} />
            <FooterCol title="Practice" items={[
              { label: "Shopify Plus", to: "/services" },
              { label: "Headless Commerce", to: "/services" },
              { label: "AI Automation", to: "/services" },
              { label: "Full Stack", to: "/services" },
            ]} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">Elsewhere</p>
              <ul className="mt-4 space-y-2 font-display text-sm">
                <li><a className="hover:text-acid" href="#">LinkedIn ↗</a></li>
                <li><a className="hover:text-acid" href="#">GitHub ↗</a></li>
                <li><a className="hover:text-acid" href="#">Read.cv ↗</a></li>
                <li><a className="hover:text-acid" href="#">Calendly ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.2em]">© 2026 Mohid Imran — Independent Studio</p>
          <p className="font-mono uppercase tracking-[0.2em]">Islamabad ⇢ Global · GMT+5</p>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none px-6">
        <p className="w-full text-center font-serif italic text-[22vw] leading-none tracking-tighter text-white/[0.04]">
          mohid.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">{title}</p>
      <ul className="mt-4 space-y-2 font-display text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-acid">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}