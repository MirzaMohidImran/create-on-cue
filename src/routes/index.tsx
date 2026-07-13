import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiteShell, Marquee } from "@/components/site/shell";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <Marquee items={["Shopify Plus", "Headless Commerce", "AI Automation", "Full Stack", "Django", "Performance", "CRO", "Django · React · Next"]} />
      <Intro />
      <Capabilities />
      <FeaturedWork />
      <Process />
      <TechStack />
      <Testimonials />
      <ClosingCTA />
    </SiteShell>
  );
}

/* ————————————— HERO ————————————— */
function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => (v - 0.5) * 40);
  const ty = useTransform(sy, (v) => (v - 0.5) * 40);
  const tx2 = useTransform(sx, (v) => (v - 0.5) * -80);
  const ty2 = useTransform(sy, (v) => (v - 0.5) * -60);

  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Karachi" }).format(new Date()));
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink px-6 pt-32 md:px-10"
    >
      {/* animated backdrop */}
      <motion.div
        aria-hidden
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.86_0.19_105_/_0.35),transparent_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_35_/_0.25),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97_0.01_90) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97_0.01_90) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* meta rail */}
      <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <span>N 33.68° · E 73.04°</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          Available · Karachi {time}
        </span>
      </div>

      <div className="relative mt-auto grid flex-1 grid-cols-12 items-end gap-8 pb-14 pt-20">
        <div className="col-span-12 md:col-span-9">
          <RevealWords
            text="Full stack engineering,"
            className="font-serif text-[13vw] italic leading-[0.9] tracking-tight text-bone md:text-[9vw]"
          />
          <RevealWords
            text="Shopify craft,"
            delay={0.15}
            className="mt-2 font-display text-[13vw] leading-[0.9] tracking-tight text-bone md:text-[9vw]"
          />
          <RevealWords
            text="AI automation."
            delay={0.3}
            className="mt-2 font-display text-[13vw] leading-[0.9] tracking-tight text-acid md:text-[9vw]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="col-span-12 space-y-6 md:col-span-3"
        >
          <p className="text-balance text-sm leading-relaxed text-bone/70">
            I&apos;m <span className="text-bone">Mohid Imran</span> — an independent engineer
            partnering with ecommerce brands, SaaS teams and agencies to ship
            revenue-shaped software that actually loads fast.
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticLink to="/portfolio" variant="light">See the work</MagneticLink>
            <MagneticLink to="/contact" variant="ghost">Book a call</MagneticLink>
          </div>
        </motion.div>
      </div>

      {/* stats strip */}
      <div className="relative grid grid-cols-2 gap-6 border-t border-white/10 py-6 md:grid-cols-4">
        {[
          ["100+", "Projects shipped"],
          ["3+", "Years in the trenches"],
          ["24+", "Countries served"],
          ["99", "Lighthouse average"],
        ].map(([n, l]) => (
          <div key={l} className="flex flex-col">
            <Counter value={n} />
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="font-serif text-4xl italic text-bone md:text-5xl"
    >
      {value}
    </motion.span>
  );
}

function RevealWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function MagneticLink({
  to,
  children,
  variant = "light",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "light" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div style={{ x: sx, y: sy }}>
      <Link
        ref={ref}
        to={to}
        onMouseMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
          y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={
          variant === "light"
            ? "group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-acid"
            : "group inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bone transition hover:border-acid hover:text-acid"
        }
      >
        {children}
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}

/* ————————————— INTRO ————————————— */
function Intro() {
  return (
    <section className="relative bg-bone px-6 py-32 text-ink md:px-10 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 02 — Prelude</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <RevealWords
            text="I build the systems behind stores that convert, tools that automate the busywork, and interfaces people actually enjoy."
            className="font-serif text-3xl italic leading-[1.1] tracking-tight text-ink md:text-6xl"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { k: "Ecommerce", v: "Shopify Plus, headless storefronts, custom apps, checkout extensibility." },
              { k: "Software", v: "Python/Django, Node, React, Next.js — durable products with proper tests." },
              { k: "Automation", v: "AI agents, chatbots, scrapers, and internal tools that save real hours." },
            ].map((c, i) => (
              <motion.div
                key={c.k}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="border-t border-ink/20 pt-6"
              >
                <p className="font-serif text-2xl italic">{c.k}</p>
                <p className="mt-3 text-sm text-mist">{c.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————— CAPABILITIES ————————————— */
const services = [
  {
    n: "01",
    t: "Shopify & Shopify Plus",
    d: "Themes, custom apps, checkout UI extensions, and B2B setups engineered around conversion and AOV.",
    tags: ["Liquid", "Hydrogen", "Functions", "Checkout UI"],
  },
  {
    n: "02",
    t: "Headless Commerce",
    d: "Next.js + Storefront API storefronts with edge caching, Sanity/Contentful, and lightning first paint.",
    tags: ["Next.js", "Storefront API", "Sanity", "Edge"],
  },
  {
    n: "03",
    t: "Full Stack Engineering",
    d: "Django, Node, Postgres. Business apps, dashboards, internal tools — with the boring parts done right.",
    tags: ["Django", "Node", "Postgres", "REST"],
  },
  {
    n: "04",
    t: "AI Automation",
    d: "Chatbots, agentic workflows, RAG pipelines and process automation wired into your existing stack.",
    tags: ["OpenAI", "LangChain", "n8n", "Vector"],
  },
  {
    n: "05",
    t: "Web Scraping & Data",
    d: "Resilient scrapers, ETL and enrichment pipelines feeding CRMs, dashboards and market intelligence.",
    tags: ["Playwright", "Scrapy", "ETL"],
  },
  {
    n: "06",
    t: "Performance & CRO",
    d: "Core Web Vitals rescues, funnel instrumentation and experimentation that lifts revenue per session.",
    tags: ["CWV", "GA4", "A/B", "Lighthouse"],
  },
];

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 03 — Capabilities</p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              A studio-sized toolkit, <span className="font-serif italic text-acid">shipped solo</span>.
            </h2>
          </div>
          <Link to="/services" className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-mist hover:text-acid md:inline-flex">
            All services →
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden bg-ink p-8 transition-colors hover:bg-bone hover:text-ink md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.24em] opacity-60">{s.n}</span>
                <span className="font-serif text-3xl italic text-acid">✦</span>
              </div>
              <h3 className="mt-24 font-display text-2xl tracking-tight md:text-3xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed opacity-70">{s.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-current/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————— FEATURED WORK (sticky storytelling) ————————————— */
const featured = [
  {
    n: "01",
    title: "Nordic Grain Co.",
    kind: "Shopify Plus · Headless",
    metric: "+38% AOV",
    line: "A quiet, editorial commerce experience for a Scandinavian coffee roaster.",
    color: "oklch(0.72 0.18 45)",
  },
  {
    n: "02",
    title: "Astra Automations",
    kind: "AI Platform · Support",
    metric: "12k hrs saved",
    line: "An agentic operations layer resolving 60% of tier-1 tickets end to end.",
    color: "oklch(0.68 0.19 275)",
  },
  {
    n: "03",
    title: "Fieldnote Studio",
    kind: "Editorial Commerce",
    metric: "98 CWV",
    line: "Longform meets checkout for an independent print magazine.",
    color: "oklch(0.85 0.12 130)",
  },
  {
    n: "04",
    title: "Meridian Wholesale",
    kind: "B2B Portal",
    metric: "$4.2M GMV",
    line: "A wholesale ordering platform with tiered pricing and NetSuite sync.",
    color: "oklch(0.62 0.16 20)",
  },
];

function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(featured.length - 1, Math.max(0, Math.floor(v * featured.length)));
    setActive(i);
  });

  return (
    <section
      ref={ref}
      className="relative bg-bone text-ink"
      style={{ height: `${featured.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-6 pt-24 md:px-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 04 — Selected Work</p>
            <h2 className="mt-4 font-serif text-4xl italic leading-none md:text-6xl">
              Objects in the wild.
            </h2>
          </div>
          <Link to="/portfolio" className="hidden items-center gap-2 border-b border-ink pb-1 font-display text-sm hover:text-flame md:inline-flex">
            Full index →
          </Link>
        </div>

        <div className="relative mx-auto mt-8 grid w-full max-w-[1400px] flex-1 grid-cols-12 items-center gap-6 px-6 pb-16 md:px-10">
          {/* left: sticky big canvas */}
          <div className="relative col-span-12 h-[52vh] overflow-hidden rounded-3xl md:col-span-7 md:h-[70vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured[active].title}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                style={{ backgroundColor: featured[active].color }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0_/_0.4),transparent_55%)]" />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(0.14_0.01_260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.14_0.01_260) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
                <div className="absolute inset-x-8 top-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-ink md:inset-x-12 md:top-12">
                  <span>{featured[active].kind}</span>
                  <span>{featured[active].n} / 0{featured.length}</span>
                </div>
                <div className="absolute inset-x-8 bottom-8 md:inset-x-12 md:bottom-12">
                  <div className="font-serif text-5xl italic leading-none text-ink md:text-8xl">
                    {featured[active].title}
                  </div>
                  <div className="mt-4 max-w-md text-sm text-ink/80">{featured[active].line}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* right: index list with progress */}
          <div className="col-span-12 md:col-span-5">
            <ol className="space-y-2">
              {featured.map((p, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={p.title}
                    className={`relative overflow-hidden rounded-2xl border transition-colors ${
                      isActive ? "border-ink bg-ink text-bone" : "border-ink/15 text-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-70">{p.n}</span>
                        <span className="font-serif text-2xl italic md:text-3xl">{p.title}</span>
                      </div>
                      <span className={`font-mono text-[10px] uppercase tracking-[0.24em] ${isActive ? "text-acid" : "opacity-60"}`}>
                        {p.metric}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="featured-underline"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-acid"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
            <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              <span>Scroll to advance</span>
              <Link to="/portfolio" className="text-ink hover:text-flame">Enter gallery →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————— PROCESS ————————————— */
const steps = [
  { n: "01", t: "Discover", d: "We map the problem, the constraints, and the number to move. No fluff decks." },
  { n: "02", t: "Architect", d: "Data model, integrations, edge cases. A concrete plan you can actually cost." },
  { n: "03", t: "Build", d: "Weekly async loops, staging from day one, and code you can hand to any team later." },
  { n: "04", t: "Ship & tune", d: "Launch, monitor, iterate. Real metrics — CWV, conversion, revenue per visitor." },
];

function Process() {
  return (
    <section className="relative bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 05 — Process</p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              A four-step loop.<br /><span className="font-serif italic text-acid">No theatre.</span>
            </h2>
          </div>
          <ol className="col-span-12 space-y-6 md:col-span-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group grid grid-cols-12 items-center gap-4 border-t border-white/10 py-6 transition-colors hover:border-acid"
              >
                <span className="col-span-2 font-mono text-xs uppercase tracking-[0.24em] text-mist md:col-span-1">{s.n}</span>
                <span className="col-span-10 font-serif text-3xl italic tracking-tight md:col-span-3 md:text-4xl">{s.t}</span>
                <span className="col-span-12 text-sm text-bone/70 md:col-span-7">{s.d}</span>
                <span className="col-span-12 hidden text-right font-serif text-2xl italic text-acid md:col-span-1 md:block">✦</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ————————————— TECH ————————————— */
function TechStack() {
  const tech = [
    "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
    "Shopify", "Hydrogen", "Liquid", "Node", "Django",
    "Python", "Postgres", "Redis", "OpenAI", "LangChain",
    "Playwright", "n8n", "Vercel", "Cloudflare", "Sanity",
  ];
  return (
    <section className="border-y border-white/10 bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 06 — Instruments</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-display text-3xl tracking-tight text-bone/60 md:text-5xl">
          {tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="cursor-default transition-colors hover:text-acid"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————— SIGNAL ————————————— */
type Signal = {
  q: string;
  highlight: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  metric: { value: string; label: string };
  tint: string;
};

const signals: Signal[] = [
  {
    q: "Mohid rewrote our Shopify checkout logic and killed a 22-second LCP overnight. Revenue per session jumped the next week.",
    highlight: "killed a 22-second LCP overnight",
    name: "Amara Bhatti",
    role: "Head of Ecommerce",
    company: "Lune & Sable — DTC skincare",
    initials: "AB",
    metric: { value: "+38%", label: "Revenue / session, wk 1" },
    tint: "oklch(0.68 0.22 35 / 0.35)",
  },
  {
    q: "He replaced three contractors and shipped an AI agent that now handles 60% of our support tickets end-to-end.",
    highlight: "60% of tickets end-to-end",
    name: "Daniel Reyes",
    role: "Founder & CEO",
    company: "Northlane — B2B SaaS · Series A",
    initials: "DR",
    metric: { value: "3 → 1", label: "Contractors replaced" },
    tint: "oklch(0.5 0.26 295 / 0.35)",
  },
  {
    q: "The kind of engineer you keep on speed dial. Ships, communicates, and thinks about the business, not just the code.",
    highlight: "thinks about the business",
    name: "Sasha Ito",
    role: "Creative Director",
    company: "Field Studio — boutique agency",
    initials: "SI",
    metric: { value: "18 mo", label: "On retainer" },
    tint: "oklch(0.86 0.19 105 / 0.30)",
  },
  {
    q: "Two weeks from kickoff to a headless storefront that outranks Shopify's own theme on Core Web Vitals. Unreal.",
    highlight: "two weeks from kickoff",
    name: "Priya Kohli",
    role: "VP Growth",
    company: "Orbit Goods — headless commerce",
    initials: "PK",
    metric: { value: "98 / 100", label: "Lighthouse mobile" },
    tint: "oklch(0.5 0.26 295 / 0.35)",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "+", label: "Years in the trenches" },
  { value: 12, suffix: "", label: "Countries billed from" },
  { value: 94, suffix: "%", label: "Retainer renewal rate" },
];

function SignalCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1400;
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function SignalCard({ s, index, progress }: { s: Signal; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  // each card occupies a slice of the pinned scroll
  const slice = 1 / signals.length;
  const start = index * slice;
  const end = start + slice;
  const mid = start + slice * 0.55;

  const opacity = useTransform(progress, [start, start + slice * 0.15, end - slice * 0.1, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [80, 0, -80]);
  const scale = useTransform(progress, [start, mid, end], [0.94, 1, 0.96]);
  const blur = useTransform(progress, [start, mid, end], [12, 0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const rotate = index % 2 === 0 ? -1.2 : 1.2;
  const side = index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0";

  // mouse tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 15 });
  const sry = useSpring(ry, { stiffness: 120, damping: 15 });

  const [hover, setHover] = useState(false);

  const parts = s.q.split(s.highlight);

  return (
    <motion.figure
      style={{ opacity, y, scale, filter, rotate }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 8);
        rx.set(-py * 8);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
        setHover(false);
      }}
      onMouseEnter={() => setHover(true)}
      className={`pointer-events-auto absolute inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:w-[62%] ${side}`}
    >
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        className="group relative overflow-hidden rounded-[28px] border border-ink/10 bg-bone/70 p-8 shadow-[0_40px_120px_-40px_rgba(20,20,30,0.35)] backdrop-blur-xl md:p-14"
      >
        {/* dynamic light */}
        <motion.div
          aria-hidden
          animate={{ opacity: hover ? 1 : 0.55 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute -inset-40 -z-10"
          style={{ background: `radial-gradient(500px circle at 30% 20%, ${s.tint}, transparent 60%)` }}
        />
        {/* animated border */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 140deg, transparent, ${s.tint}, transparent 45%)`,
            padding: 1,
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
          <span>Signal · 0{index + 1}</span>
          <span className="hidden sm:inline">{s.company}</span>
        </div>

        <blockquote className="mt-8 font-serif text-[26px] italic leading-[1.15] text-ink md:text-[44px]">
          <span aria-hidden className="mr-2 -ml-2 align-top text-acid">“</span>
          {parts[0]}
          <span className="relative inline">
            <span className="relative z-10">{s.highlight}</span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              style={{ background: s.tint, transformOrigin: "left" }}
              className="absolute inset-x-0 bottom-1 -z-0 h-[38%] rounded-[2px]"
            />
          </span>
          {parts[1]}
          <span aria-hidden className="ml-1 align-top text-acid">”</span>
        </blockquote>

        <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 font-mono text-xs tracking-widest text-ink"
              style={{ background: s.tint }}
            >
              {s.initials}
            </div>
            <div>
              <div className="font-serif text-lg italic leading-tight text-ink">{s.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                {s.role} · {s.company.split(" — ")[0]}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-serif text-3xl italic leading-none text-ink md:text-4xl">{s.metric.value}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{s.metric.label}</div>
          </div>
        </figcaption>
      </motion.div>
    </motion.figure>
  );
}

function Testimonials() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  // background marquee & orbs
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [1, 1, 0.15, 0]);
  const indexActive = useTransform(scrollYProgress, (v) => Math.min(signals.length - 1, Math.floor(v * signals.length)));
  const [active, setActive] = useState(0);
  useMotionValueEvent(indexActive, "change", (v) => setActive(v as number));

  // mouse parallax layer
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 50, damping: 20 });
  const smy = useSpring(my, { stiffness: 50, damping: 20 });
  const pxLayer = useTransform(smx, (v) => (v - 0.5) * -40);
  const pyLayer = useTransform(smy, (v) => (v - 0.5) * -30);

  return (
    <section
      ref={wrapRef}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="grain relative bg-bone text-ink"
      style={{ height: `${signals.length * 100 + 60}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        {/* backdrop grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            color: "oklch(0.14 0.01 260)",
          }}
        />
        {/* floating orbs */}
        <motion.div
          aria-hidden
          style={{ y: orbY, x: pxLayer }}
          className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full blur-3xl"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,oklch(0.5_0.26_295_/_0.25),transparent_65%)]" />
        </motion.div>
        <motion.div
          aria-hidden
          style={{ y: orbY, x: pyLayer }}
          className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full blur-3xl"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_35_/_0.22),transparent_65%)]" />
        </motion.div>

        {/* scrolling background words */}
        <motion.div
          aria-hidden
          style={{ x: bgX }}
          className="pointer-events-none absolute left-0 right-0 top-[18%] whitespace-nowrap font-serif text-[22vw] italic leading-none text-ink/[0.045]"
        >
          signal · signal · signal · signal · signal ·
        </motion.div>
        <motion.div
          aria-hidden
          style={{ x: bgX2 }}
          className="pointer-events-none absolute left-0 right-0 bottom-[8%] whitespace-nowrap font-serif text-[18vw] italic leading-none text-ink/[0.035]"
        >
          shipped · trusted · retained · shipped · trusted ·
        </motion.div>

        {/* header */}
        <motion.header
          style={{ opacity: headerOpacity }}
          className="relative z-10 flex items-start justify-between gap-6 px-6 pt-28 md:px-14 md:pt-24"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 07 — Signal</p>
            <h2 className="mt-5 max-w-[9ch] font-serif text-5xl italic leading-[0.9] md:text-[88px]">
              What the<br />
              <span className="text-acid">receipts</span> say.
            </h2>
          </div>
          <div className="hidden max-w-xs text-right md:block">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Unedited excerpts from<br />operators who signed the PO.
            </p>
          </div>
        </motion.header>

        {/* card stage */}
        <div className="relative z-10 flex-1">
          {signals.map((s, i) => (
            <SignalCard key={i} s={s} index={i} progress={scrollYProgress} />
          ))}

          {/* index rail */}
          <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 md:flex">
            {signals.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <motion.span
                  animate={{
                    width: active === i ? 44 : 18,
                    backgroundColor: active === i ? "oklch(0.14 0.01 260)" : "oklch(0.14 0.01 260 / 0.25)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-px"
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.24em] transition-colors ${
                    active === i ? "text-ink" : "text-mist/70"
                  }`}
                >
                  0{i + 1} · {s.name.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* stats footer */}
        <div className="relative z-10 grid grid-cols-2 gap-y-6 border-t border-ink/10 bg-bone/60 px-6 py-6 backdrop-blur-md md:grid-cols-4 md:px-14 md:py-8">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col">
              <span className="font-serif text-4xl italic leading-none text-ink md:text-5xl">
                <SignalCounter to={st.value} suffix={st.suffix} />
              </span>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————— CLOSING ————————————— */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-48">
      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.19_105_/_0.25),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-[1400px] text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 08 — Next</p>
        <h2 className="mx-auto mt-8 max-w-5xl font-serif text-6xl italic leading-[0.95] tracking-tight md:text-[9vw]">
          Have a problem<br />worth <span className="text-acid">shipping?</span>
        </h2>
        <div className="mt-12 flex justify-center gap-3">
          <MagneticLink to="/contact" variant="light">Start a project</MagneticLink>
          <MagneticLink to="/resume" variant="ghost">View resume</MagneticLink>
        </div>
      </div>
    </section>
  );
}
