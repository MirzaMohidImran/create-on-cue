import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist sm:text-xs">
              Mohid Imran
            </p>
            <h2 className="mt-4 max-w-md text-pretty font-serif text-4xl italic leading-[1.05] sm:mt-6 sm:text-5xl md:text-7xl md:leading-[0.95]">
              Shopify &amp; Full Stack
              <span className="text-acid"> Developer</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/70 sm:mt-6 md:text-base">
              Shopify stores, custom themes, apps, websites and practical business tools.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-10 md:col-span-7">
            <FooterCol
              title="Navigation"
              items={[
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Resume", to: "/resume" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <FooterCol
              title="Practice"
              items={[
                { label: "Shopify Development", to: "/services/shopify-development" },
                { label: "Full Stack Development", to: "/services/full-stack-development" },
                { label: "AI Automation", to: "/services/ai-automation" },
                { label: "WordPress Development", to: "/services/wordpress-development" },
              ]}
            />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-mist sm:mt-20 sm:gap-4 sm:text-xs md:mt-24 md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em]">
            © 2026 Mohid Imran. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em]">
            Islamabad ⇢ Global · GMT+5
          </p>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none px-6">
        <p className="w-full text-center font-serif italic text-[18vw] leading-none tracking-tighter text-white/[0.04] md:text-[22vw]">
          mohid.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist sm:text-xs">{title}</p>
      <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-2">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              to={i.to}
              className="inline-flex min-h-10 items-center font-display text-sm leading-snug text-bone transition-colors hover:text-acid"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
