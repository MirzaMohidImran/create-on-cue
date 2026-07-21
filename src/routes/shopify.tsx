import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell, Marquee } from "@/components/site/shell";

export const Route = createFileRoute("/shopify")({
  head: () => ({
    meta: [
      { title: "Shopify Services — Mohid Imran" },
      { name: "description", content: "Shopify Plus builds, headless Hydrogen storefronts, checkout UI extensions, custom apps, theme engineering and CRO — engineered around revenue." },
      { property: "og:title", content: "Shopify Services — Mohid Imran" },
      { property: "og:description", content: "Plus rollouts, Hydrogen storefronts, checkout extensions, custom apps and CRO by an accountable operator." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopifyPage,
});

const practices = [
  {
    n: "01",
    t: "Shopify Plus Rollouts",
    lead: "Replatforms, B2B channels, expansion stores and Launchpad orchestration for brands moving from Advanced to Plus.",
    stack: ["Plus", "B2B", "Launchpad", "Flow", "Markets"],
    outcomes: ["Zero-downtime launch", "Multi-store ops", "Wholesale channel live"],
  },
  {
    n: "02",
    t: "Theme & Storefront Engineering",
    lead: "Custom Liquid themes, section-everything architecture and merchant-friendly CMS your team actually enjoys editing.",
    stack: ["Liquid", "Dawn", "Sections", "Metaobjects", "Alpine"],
    outcomes: ["≤2s LCP", "98+ Lighthouse", "Editor freedom"],
  },
  {
    n: "03",
    t: "Headless with Hydrogen",
    lead: "Hydrogen + Oxygen storefronts on the edge, wired to Storefront API, Sanity or Contentful, and personalization layers.",
    stack: ["Hydrogen", "Oxygen", "Storefront API", "Sanity", "Remix"],
    outcomes: ["Global edge cache", "Composable stack", "Sub-second nav"],
  },
  {
    n: "04",
    t: "Checkout UI Extensions",
    lead: "Upsells, custom fields, delivery gating, gift options and post-purchase flows built on Checkout Extensibility.",
    stack: ["Checkout UI", "Functions", "UI Extensions", "App Bridge"],
    outcomes: ["+8–18% AOV", "Fewer discount leaks", "PCI-safe UX"],
  },
  {
    n: "05",
    t: "Custom Apps & Functions",
    lead: "Embedded admin apps, Shopify Functions for discounts, delivery and payments, and private integrations with your ERP.",
    stack: ["Remix", "Polaris", "GraphQL", "Functions", "Webhooks"],
    outcomes: ["Automations shipped", "Ops hours saved", "Data in sync"],
  },
  {
    n: "06",
    t: "CRO & Performance",
    lead: "Core Web Vitals rescues, PDP/PLP experiments, analytics instrumentation and a testing cadence that compounds.",
    stack: ["Lighthouse", "GA4", "PostHog", "Intelligems"],
    outcomes: ["+20–40% RPV", "Cleaner funnels", "Real experiments"],
  },
];

const process = [
  { n: "01", t: "Audit", d: "Store teardown: theme, apps, funnel, CWV, ops. You get a scored report and a prioritized backlog in week one." },
  { n: "02", t: "Architect", d: "Data model, metaobjects, app boundaries and integration map. We design for merchant ergonomics, not just code." },
  { n: "03", t: "Build", d: "Weekly demos on a preview store. Every PR ships behind a flag, every change is measurable." },
  { n: "04", t: "Launch", d: "Zero-downtime cutover, redirects mapped, analytics parity verified, on-call for 14 days post-launch." },
  { n: "05", t: "Compound", d: "Retainer of experiments, extensions and performance work. Ship weekly, review monthly, grow quarterly." },
];

const engagements = [
  {
    tag: "Sprint",
    price: "from $6k",
    dur: "2 weeks",
    lead: "A focused strike — checkout extension, CWV rescue, or a bottleneck migration.",
    incl: ["Audit + backlog", "1 shipped feature", "Handoff docs"],
  },
  {
    tag: "Build",
    price: "from $24k",
    dur: "6–10 weeks",
    lead: "New theme, headless storefront, or a custom Plus app end-to-end.",
    incl: ["Design system", "Full build", "Launch + 14d support"],
    featured: true,
  },
  {
    tag: "Retainer",
    price: "from $4k / mo",
    dur: "Ongoing",
    lead: "A fractional Shopify engineer on your team — experiments, extensions and perf.",
    incl: ["Weekly shipping", "Monthly review", "Priority Slack"],
  },
];

const faqs = [
  { q: "Do you work with Basic and Advanced, or only Plus?", a: "Both. Most builds start on Advanced and I'll flag the exact revenue and feature triggers that justify Plus — no upsell before it pays for itself." },
  { q: "Can you take over an existing theme or app?", a: "Yes. I inherit codebases regularly. Week one is always a teardown so we agree on what to keep, refactor, or replace." },
  { q: "Do you handle design too?", a: "I ship production-ready UI and partner with a small bench of product designers when a brand-level system is needed." },
  { q: "What about apps, integrations and Klaviyo?", a: "Klaviyo, Gorgias, Rebuy, Judge.me, Loop, Shipstation, NetSuite — I've wired most of them. Custom middleware when the off-the-shelf app taxes conversion." },
];

function ShopifyPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 md:px-10 md:pt-56 md:pb-32">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-acid/20 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-acid/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" /> Shopify Practice
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Since 2019 · 40+ stores</p>
          </div>
          <h1 className="mt-8 max-w-6xl font-display text-6xl leading-[0.9] tracking-tight md:text-[8vw]">
            Shopify, engineered for<br />
            <span className="font-serif italic text-acid">revenue — not vibes.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/80 md:text-xl">
            I build, rescue and scale Shopify stores end-to-end — from Liquid themes and Hydrogen storefronts to checkout extensions, custom apps and CRO programs that compound.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-ink"
            >
              Book a store audit
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bone hover:border-acid hover:text-acid"
            >
              See Shopify work ↗
            </Link>
          </div>

          {/* metric row */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { k: "40+", v: "Stores shipped" },
              { k: "$18M+", v: "GMV influenced" },
              { k: "≤ 2s", v: "LCP standard" },
              { k: "14 days", v: "Post-launch on-call" },
            ].map((m) => (
              <div key={m.v}>
                <p className="font-serif text-5xl italic text-acid md:text-6xl">{m.k}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["Shopify Plus", "Hydrogen", "Checkout Extensions", "Liquid", "Functions", "Metaobjects", "Oxygen", "B2B", "Markets"]} />

      {/* Practices */}
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 01 — Practice</p>
              <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Six ways I show up<br />inside your <span className="font-serif italic text-acid">Shopify stack.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-bone/70">
              Pick the one that maps to your quarter — or stitch several into a retainer. Every engagement is scoped to a measurable outcome.
            </p>
          </div>

          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {practices.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="group grid grid-cols-12 items-start gap-6 py-12 md:gap-10 md:py-14"
              >
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-mist">{s.n}</span>
                  <h3 className="font-serif text-4xl italic leading-none md:text-5xl">{s.t}</h3>
                </div>
                <p className="col-span-12 text-lg text-bone/80 md:col-span-4">{s.lead}</p>
                <div className="col-span-12 md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.stack.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">{t}</span>
                    ))}
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Outcomes</p>
                  <ul className="mt-2 space-y-1 text-sm text-bone/80">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2"><span className="text-acid">✦</span>{o}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 02 — Process</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Audit → Architect → Build → <span className="font-serif italic text-acid">Compound.</span>
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{p.n}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                </div>
                <h3 className="mt-4 font-serif text-3xl italic text-bone">{p.t}</h3>
                <p className="mt-3 text-sm text-bone/70">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 03 — Engagements</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Three shapes. <span className="font-serif italic text-acid">Zero retainers you can&apos;t leave.</span>
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {engagements.map((e) => (
              <div
                key={e.tag}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  e.featured
                    ? "border-acid/60 bg-acid/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {e.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-acid px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
                    Most requested
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{e.tag}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">{e.dur}</p>
                </div>
                <p className="mt-4 font-serif text-5xl italic text-bone">{e.price}</p>
                <p className="mt-4 text-sm text-bone/75">{e.lead}</p>
                <ul className="mt-6 space-y-2 text-sm text-bone/80">
                  {e.incl.map((i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-acid">✦</span>{i}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition ${
                    e.featured
                      ? "bg-acid text-ink hover:opacity-90"
                      : "border border-white/15 bg-white/5 text-bone hover:border-acid hover:text-acid"
                  }`}
                >
                  Start with {e.tag} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 04 — FAQ</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Answered before <span className="font-serif italic text-acid">you ask.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-6">
                    <span className="font-display text-xl tracking-tight md:text-2xl">{f.q}</span>
                    <span className="font-mono text-xs text-acid transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm text-bone/75 md:text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto max-w-[1400px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-10 md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mt-4 max-w-4xl font-serif text-5xl italic leading-[0.95] md:text-7xl">
            Bring me the store.<br />
            <span className="text-acid">I&apos;ll bring the numbers.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-ink">
              Book a store audit →
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bone hover:border-acid hover:text-acid">
              All services ↗
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}