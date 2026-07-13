import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Mohid Imran" },
      { name: "description", content: "A cinematic index of shipped work — Shopify Plus, headless commerce, AI automation, full stack engineering." },
      { property: "og:title", content: "Work — Mohid Imran" },
      { property: "og:description", content: "An interactive exhibition of shipped work." },
    ],
  }),
  component: PortfolioPage,
});

/* —————————————————————————————— DATA —————————————————————————————— */
type Category = "Shopify" | "Full Stack" | "AI Automation" | "Web Scraping" | "WordPress";

type Project = {
  id: string;
  index: string;
  title: string;
  industry: string;
  year: string;
  category: Category;
  services: string[];
  stack: string[];
  impact: string;
  summary: string;
  hue: string; // oklch color
  device: "browser" | "phone" | "dashboard";
  challenge: string;
  solution: string;
  results: string[];
};

const projects: Project[] = [
  {
    id: "nordic",
    index: "01",
    title: "Nordic Grain Co.",
    industry: "Premium Coffee · DTC",
    year: "2025",
    category: "Shopify",
    services: ["Theme Development", "Checkout Extensibility", "CRO"],
    stack: ["Shopify Plus", "Liquid", "Hydrogen", "GA4"],
    impact: "Rebuilt a legacy Shopify store into a headless flagship. AOV up 38%, LCP under 1.1s, checkout drop-off cut by a third.",
    summary: "A quiet, editorial commerce experience for a Scandinavian coffee roaster.",
    hue: "oklch(0.72 0.18 45)",
    device: "browser",
    challenge: "A 6-second LCP, checkout hemorrhaging carts, and a theme too fragile to iterate on.",
    solution: "A headless Hydrogen storefront with edge-cached collections, a custom checkout UI extension for subscriptions, and a rebuilt design system.",
    results: ["+38% AOV", "1.1s LCP", "-33% checkout drop-off", "99 Lighthouse"],
  },
  {
    id: "astra",
    index: "02",
    title: "Astra Automations",
    industry: "B2B SaaS · Support",
    year: "2025",
    category: "AI Automation",
    services: ["AI Agent", "RAG Pipeline", "Integrations"],
    stack: ["OpenAI", "LangChain", "Postgres", "n8n"],
    impact: "Shipped an agentic support platform now resolving 60% of tier-1 tickets end to end — 12,000 human hours reclaimed.",
    summary: "An AI operations layer wired into HubSpot, Intercom and Notion.",
    hue: "oklch(0.68 0.19 275)",
    device: "dashboard",
    challenge: "Support headcount doubling every quarter with a queue that never emptied.",
    solution: "A RAG-backed agent with tool-use, an approval console for edge cases, and workflow triggers into the existing stack.",
    results: ["60% auto-resolve", "12k hrs saved", "3.1s avg reply", "9.4/10 CSAT"],
  },
  {
    id: "fieldnote",
    index: "03",
    title: "Fieldnote Studio",
    industry: "Editorial · Print Commerce",
    year: "2024",
    category: "Shopify",
    services: ["Headless Storefront", "CMS", "Performance"],
    stack: ["Next.js", "Storefront API", "Sanity", "Vercel"],
    impact: "An editorial-first commerce build where every product is a longform story. 98 CWV score, 3.4× time-on-site.",
    summary: "Longform meets checkout for an independent print magazine.",
    hue: "oklch(0.85 0.12 130)",
    device: "browser",
    challenge: "A Squarespace store that could not carry the brand's editorial weight or scale to weekly issues.",
    solution: "A Next.js + Sanity storefront with issue-based routing, an art-directed product template, and edge-rendered category pages.",
    results: ["98 CWV", "3.4× time-on-site", "+52% conversion", "0 CLS"],
  },
  {
    id: "meridian",
    index: "04",
    title: "Meridian Wholesale",
    industry: "B2B · Industrial",
    year: "2024",
    category: "Full Stack",
    services: ["Custom Portal", "ERP Integration", "Pricing Engine"],
    stack: ["Django", "Postgres", "React", "Redis"],
    impact: "A B2B ordering portal replacing 14 spreadsheets and a decade-old ERP UI. $4.2M GMV processed in the first year.",
    summary: "A wholesale ordering platform with tiered pricing and NetSuite sync.",
    hue: "oklch(0.62 0.16 20)",
    device: "dashboard",
    challenge: "Reps re-keying orders from email into NetSuite. Pricing errors on every large PO.",
    solution: "A Django + React portal with role-based pricing, one-click reorders, and a hardened NetSuite sync layer.",
    results: ["$4.2M GMV", "-92% order errors", "4h → 6min per PO", "38 reps live"],
  },
  {
    id: "verso",
    index: "05",
    title: "Verso Insights",
    industry: "Market Intelligence",
    year: "2024",
    category: "Web Scraping",
    services: ["Scraping Infra", "ETL", "Enrichment"],
    stack: ["Playwright", "Scrapy", "Airflow", "BigQuery"],
    impact: "A resilient scraping platform ingesting 1.2M rows daily across 40+ competitor sites, feeding a live pricing dashboard.",
    summary: "A distributed scraping mesh with anti-bot resilience and cost caps.",
    hue: "oklch(0.78 0.14 200)",
    device: "phone",
    challenge: "A brittle scraping script that broke every week and couldn't cross a 200k row/day ceiling.",
    solution: "A Playwright/Scrapy mesh with proxy rotation, self-healing selectors and an Airflow orchestration layer feeding BigQuery.",
    results: ["1.2M rows/day", "99.7% uptime", "40+ sources", "-71% infra cost"],
  },
  {
    id: "halcyon",
    index: "06",
    title: "Halcyon Studio",
    industry: "Fashion · Migration",
    year: "2023",
    category: "WordPress",
    services: ["Platform Migration", "Theme Build", "SEO Preserve"],
    stack: ["WooCommerce", "Shopify Plus", "Liquid", "Screaming Frog"],
    impact: "Migrated a fashion brand off WooCommerce to Shopify Plus with zero SEO loss and a 3× lift in revenue within 90 days.",
    summary: "A quiet WooCommerce → Shopify migration with every 301 accounted for.",
    hue: "oklch(0.66 0.16 90)",
    device: "browser",
    challenge: "A slow, hacked WooCommerce store bleeding rankings and revenue.",
    solution: "A full audit, 1:1 URL mapping, a fresh Shopify theme in the brand's voice, and a staged cutover with fallback DNS.",
    results: ["3× revenue in 90d", "0 SEO loss", "2.4s → 0.9s LCP", "Zero downtime"],
  },
];

const categories: ("All" | Category)[] = ["All", "Shopify", "Full Stack", "AI Automation", "Web Scraping", "WordPress"];

/* —————————————————————————————— PAGE —————————————————————————————— */
function PortfolioPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <SiteShell>
      <PortfolioHero />
      <CategoryRail cat={cat} setCat={setCat} />
      <ProjectStream projects={filtered} />
      <HorizontalMore />
      <PortfolioCTA />
    </SiteShell>
  );
}

/* —————————————————————————————— HERO —————————————————————————————— */
function PortfolioHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [count, setCount] = useState("00");
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bx = useTransform(sx, (v) => (v - 0.5) * -60);
  const by = useTransform(sy, (v) => (v - 0.5) * -40);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCount(String(Math.min(6, Math.round(v * 6))).padStart(2, "0"));
  });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink px-6 pt-36 md:px-10 md:pt-44"
    >
      <motion.div
        aria-hidden
        style={{ x: bx, y: by }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.26_295_/_0.28),transparent_65%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: bx, y: by, scale: 1.1 }}
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_35_/_0.18),transparent_70%)] blur-3xl"
      />

      <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <span>/ Portfolio · 2023 — 2025</span>
        <span className="tabular-nums">{count} / 06</span>
      </div>

      <motion.div style={{ y, opacity }} className="relative mt-auto pb-16 pt-24">
        <LetterReveal
          text="Selected"
          className="block font-serif text-[18vw] italic leading-[0.85] tracking-tight text-bone md:text-[14vw]"
        />
        <LetterReveal
          text="Work."
          delay={0.35}
          className="block font-display text-[18vw] leading-[0.85] tracking-tight text-acid md:text-[14vw]"
        />
        <div className="mt-12 grid grid-cols-12 gap-6">
          <p className="col-span-12 max-w-xl text-balance text-sm leading-relaxed text-bone/70 md:col-span-6 md:col-start-7">
            A living exhibition of shipped work — commerce systems that convert, agents that
            operate, tools that hum. Scroll to walk the gallery.
          </p>
        </div>
      </motion.div>

      <div className="relative flex items-center justify-between border-t border-white/10 py-6 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <span>Scroll to enter</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="text-acid">↓</motion.span>
      </div>
    </section>
  );
}

function LetterReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split("").map((c, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.04, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* —————————————————————————————— CATEGORY RAIL —————————————————————————————— */
function CategoryRail({
  cat,
  setCat,
}: {
  cat: "All" | Category;
  setCat: (v: "All" | Category) => void;
}) {
  return (
    <section className="sticky top-0 z-30 border-y border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 overflow-x-auto px-6 py-4 md:px-10">
        <span className="mr-4 hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-mist md:inline">
          Filter /
        </span>
        {categories.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative shrink-0 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                active ? "text-ink" : "text-bone/70 hover:text-bone"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-acid"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* —————————————————————————————— PROJECT STREAM —————————————————————————————— */
function ProjectStream({ projects }: { projects: Project[] }) {
  return (
    <div className="relative bg-ink">
      <AnimatePresence mode="popLayout">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectStory project={p} flip={i % 2 === 1} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function ProjectStory({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMock = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const scaleMock = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const rotate = useTransform(scrollYProgress, [0, 1], [flip ? 3 : -3, flip ? -3 : 3]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const clip = useTransform(scrollYProgress, [0, 0.3, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)", "inset(0% 0 0 0)"]);
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-t border-white/5 px-6 py-24 md:px-10 md:py-32"
    >
      {/* floating background wash */}
      <motion.div
        aria-hidden
        style={{ y: bgY, backgroundColor: project.hue }}
        className="pointer-events-none absolute -inset-[20%] opacity-[0.09] blur-3xl"
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-x-8 gap-y-16">
        {/* copy */}
        <div className={`col-span-12 md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
          <div className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
            <span className="text-acid">{project.index}</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>

          <h2 className="mt-6 overflow-hidden font-serif text-6xl italic leading-[0.9] tracking-tight text-bone md:text-8xl">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {project.title}
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 max-w-md text-balance text-lg leading-relaxed text-bone/75"
          >
            {project.impact}
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.2em]">
            <div>
              <div className="text-mist">Industry</div>
              <div className="mt-2 text-bone">{project.industry}</div>
            </div>
            <div>
              <div className="text-mist">Services</div>
              <div className="mt-2 text-bone">{project.services.join(" · ")}</div>
            </div>
            <div className="col-span-2">
              <div className="text-mist">Stack</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-bone/85">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-bone/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition hover:border-acid hover:text-acid"
          >
            <span>{open ? "Hide case study" : "View case study"}</span>
            <motion.span animate={{ rotate: open ? 90 : 0 }} className="inline-block">→</motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2">
                  <CaseBlock label="Challenge" body={project.challenge} />
                  <CaseBlock label="Solution" body={project.solution} />
                  <div className="md:col-span-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Results</div>
                    <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                      {project.results.map((r) => (
                        <div key={r} className="rounded-xl border border-white/10 bg-ink px-4 py-3 font-serif text-lg italic text-acid">
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* device mockup */}
        <div className={`col-span-12 md:col-span-7 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
          <motion.div
            style={{ y: yMock, scale: scaleMock, rotate, clipPath: clip }}
            className="relative"
          >
            <DeviceMockup project={project} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-mist"
          >
            <span>{project.summary}</span>
            <span>—— {project.index} / 06</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{label}</div>
      <p className="mt-3 text-sm leading-relaxed text-bone/85">{body}</p>
    </div>
  );
}

/* —————————————————————————————— DEVICE MOCKUPS —————————————————————————————— */
function DeviceMockup({ project }: { project: Project }) {
  if (project.device === "phone") return <PhoneMock project={project} />;
  if (project.device === "dashboard") return <DashboardMock project={project} />;
  return <BrowserMock project={project} />;
}

function BrowserMock({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.18_0.02_260)] shadow-[0_60px_120px_-30px_oklch(0_0_0_/_0.6)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-flame/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-acid/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-bone/40" />
        <span className="mx-auto rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-bone/60">
          {project.id}.co / collections
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: project.hue }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,oklch(1_0_0_/_0.35),transparent_55%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.14_0.01_260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.14_0.01_260) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-x-6 top-6 flex items-center justify-between text-ink md:inset-x-10 md:top-10">
          <span className="font-serif text-2xl italic md:text-3xl">{project.title}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">est · {project.year}</span>
        </div>
        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 md:inset-x-10 md:bottom-10">
          <div className="font-serif text-4xl italic leading-none text-ink md:text-6xl">{project.impact.split(".")[0]}.</div>
          <div className="flex gap-3">
            <span className="rounded-full bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">Shop</span>
            <span className="rounded-full border border-ink/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">Story</span>
          </div>
        </div>
        <FloatingBadge>{project.stack[0]}</FloatingBadge>
      </div>
    </div>
  );
}

function PhoneMock({ project }: { project: Project }) {
  return (
    <div className="mx-auto flex items-end gap-6 md:gap-10">
      {/* accent stack */}
      <div className="hidden flex-1 space-y-3 md:block">
        {project.results.slice(0, 3).map((r) => (
          <div
            key={r}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-serif text-2xl italic text-acid"
          >
            {r}
          </div>
        ))}
      </div>
      {/* phone */}
      <div className="relative w-[280px] shrink-0 overflow-hidden rounded-[42px] border border-white/15 bg-ink p-2 shadow-[0_60px_120px_-30px_oklch(0_0_0_/_0.6)]">
        <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[34px]" style={{ backgroundColor: project.hue }}>
          <div className="absolute inset-x-0 top-0 z-10 mx-auto mt-2 h-6 w-24 rounded-full bg-ink" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,oklch(1_0_0_/_0.3),transparent_55%)]" />
          <div className="absolute inset-x-4 bottom-6 space-y-3 text-ink">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em]">{project.category}</div>
            <div className="font-serif text-3xl italic leading-none">{project.title}</div>
            <div className="rounded-2xl bg-ink/90 p-3 text-bone">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Live</div>
              <div className="mt-1 font-serif text-lg italic text-acid">{project.results[0]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMock({ project }: { project: Project }) {
  const bars = [42, 68, 55, 82, 71, 90, 63, 78];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.18_0.02_260)] p-4 shadow-[0_60px_120px_-30px_oklch(0_0_0_/_0.6)] md:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/70">{project.title} · Live</span>
        </div>
        <span className="font-mono text-[10px] text-mist">v2.4.1</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {project.results.map((r) => (
          <div key={r} className="rounded-xl border border-white/10 bg-ink px-3 py-3">
            <div className="font-serif text-xl italic text-acid md:text-2xl">{r}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="col-span-2 rounded-xl border border-white/10 bg-ink p-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
            <span>Throughput / 24h</span>
            <span className="text-acid">▲ 12.4%</span>
          </div>
          <div className="flex h-32 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full rounded-t"
                style={{ backgroundColor: project.hue }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-ink p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Stack</div>
          <div className="mt-3 space-y-2">
            {project.stack.map((s) => (
              <div key={s} className="flex items-center justify-between font-mono text-[10px] text-bone/80">
                <span>{s}</span>
                <span className="text-acid">●</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingBadge>{project.industry}</FloatingBadge>
    </div>
  );
}

function FloatingBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/85 backdrop-blur"
    >
      {children}
    </motion.div>
  );
}

/* —————————————————————————————— HORIZONTAL MORE —————————————————————————————— */
const more = [
  { t: "Palette Journal", k: "Headless CMS", m: "4× traffic", h: "oklch(0.7 0.14 340)" },
  { t: "Northline Ops", k: "Internal Tooling", m: "45% faster ops", h: "oklch(0.6 0.15 300)" },
  { t: "Kite & Co.", k: "Shopify Theme", m: "72 → 98 CWV", h: "oklch(0.82 0.14 160)" },
  { t: "Ledger AI", k: "Agent · Fintech", m: "9k reconciliations/wk", h: "oklch(0.65 0.18 240)" },
  { t: "Aster Print", k: "WooCommerce", m: "2.6× conversion", h: "oklch(0.76 0.16 60)" },
];

function HorizontalMore() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-bone text-ink">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-6 pt-24 md:px-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Also in rotation</p>
            <h2 className="mt-4 font-serif text-5xl italic leading-none md:text-7xl">
              The rest of<br />the shelf.
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-mist md:block">
            Scroll →
          </span>
        </div>

        <motion.div style={{ x }} className="mt-16 flex flex-1 items-center gap-6 pl-6 md:gap-8 md:pl-10">
          {more.map((m, i) => (
            <div
              key={m.t}
              className="group relative flex h-[60vh] w-[70vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 p-8 md:w-[38vw] md:p-10"
              style={{ backgroundColor: m.h }}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-ink/80">
                <span>0{i + 7}</span>
                <span>{m.k}</span>
              </div>
              <div>
                <h3 className="font-serif text-4xl italic leading-none text-ink md:text-6xl">{m.t}</h3>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink">{m.m}</div>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.14_0.01_260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.14_0.01_260) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>
          ))}
          <div className="w-[20vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}

/* —————————————————————————————— CTA —————————————————————————————— */
function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-48">
      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.26_295_/_0.28),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-[1400px] text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ End of exhibition</p>
        <h2 className="mx-auto mt-8 max-w-5xl font-serif text-6xl italic leading-[0.9] tracking-tight md:text-[8vw]">
          Yours could be<br />the next <span className="text-acid">one</span>.
        </h2>
        <div className="mt-12 flex justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-acid"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bone transition hover:border-acid hover:text-acid"
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}