import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiteShell, Marquee } from "@/components/site/shell";
import { CompanyLogos } from "@/components/site/company-logos";
import { ClientProjectLogos } from "@/components/site/client-project-logos";
import { getMainServices } from "@/lib/services-catalog";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <Marquee
        items={[
          "Shopify Plus",
          "Headless Commerce",
          "AI Automation",
          "Full Stack",
          "Django",
          "Performance",
          "CRO",
          "Django · React · Next",
        ]}
      />
      <Intro />
      <Capabilities />
      <CompanyLogos />
      <ClientProjectLogos />
      <FeaturedWork />
      <Process />
      <TechStack />
      <Testimonials />
      <FaqContact />
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
      <div className="relative flex items-center justify-end font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          Available for Projects · Worldwide
        </span>
      </div>

      <div className="relative mt-auto grid flex-1 grid-cols-12 items-end gap-8 pb-14 pt-20">
        <div className="col-span-12 md:col-span-9">
          <RevealWords
            text="Shopify engineering,"
            className="font-serif text-[13vw] italic leading-[0.9] tracking-tight text-bone md:text-[9vw]"
          />
          <RevealWords
            text="AI automation,"
            delay={0.15}
            className="mt-2 font-display text-[13vw] leading-[0.9] tracking-tight text-bone md:text-[9vw]"
          />
          <RevealWords
            text="Full-stack systems."
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
            I&apos;m <span className="text-bone">Mohid Imran</span>, an independent developer
            helping ecommerce brands, SaaS companies, and agencies build high-converting Shopify
            stores, intelligent automations, and scalable web applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticLink to="/portfolio" variant="light">
              View My Work
            </MagneticLink>
            <MagneticLink to="/contact" variant="ghost">
              Book a call
            </MagneticLink>
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
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
              {l}
            </span>
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

function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
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
            text="I build ecommerce experiences that convert, automation that saves time, and scalable software that supports business growth."
            className="font-serif text-3xl italic leading-[1.1] tracking-tight text-ink md:text-6xl"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                k: "Shopify & Ecommerce",
                v: "Custom Shopify stores, Shopify Plus solutions, headless commerce, checkout development, and performance optimization.",
              },
              {
                k: "Full-Stack Applications",
                v: "Scalable SaaS platforms, business portals, dashboards, and internal tools built with Django, Node.js, React, and Next.js.",
              },
              {
                k: "AI Automation",
                v: "AI agents, intelligent chatbots, workflow automation, web scraping, and integrations that reduce manual work.",
              },
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
function Capabilities() {
  const services = getMainServices();

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 03 — Capabilities
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Six core services,
              <br />
              <span className="font-serif italic text-acid">one accountable partner.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-mist hover:text-acid md:inline-flex"
          >
            All services →
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden bg-ink p-8 transition-colors hover:bg-bone hover:text-ink md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.24em] opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-3xl italic text-acid">✦</span>
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-2xl tracking-tight md:text-3xl">{s.title}</h3>
                {s.lead ? (
                  <p className="mt-4 text-sm leading-relaxed opacity-70">{s.lead}</p>
                ) : null}
                {s.stack?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-current/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link
                  to={s.path}
                  className="mt-8 inline-flex items-center gap-2 border-b border-current/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
                >
                  {s.slug === "shopify-development" ? "Explore Shopify development →" : "Explore →"}
                </Link>
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
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 06 — Selected Work
            </p>
            <h2 className="mt-4 font-serif text-4xl italic leading-none md:text-6xl">
              Objects in the wild.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 border-b border-ink pb-1 font-display text-sm hover:text-flame md:inline-flex"
          >
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
                  <span>
                    {featured[active].n} / 0{featured.length}
                  </span>
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-70">
                          {p.n}
                        </span>
                        <span className="font-serif text-2xl italic md:text-3xl">{p.title}</span>
                      </div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.24em] ${isActive ? "text-acid" : "opacity-60"}`}
                      >
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
              <Link to="/portfolio" className="text-ink hover:text-flame">
                Enter gallery →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————— PROCESS ————————————— */
const steps = [
  {
    n: "01",
    t: "Discover",
    d: "We discuss your goals, challenges, users, and the business results you want to achieve.",
  },
  {
    n: "02",
    t: "Plan",
    d: "I define the project scope, technical approach, integrations, timeline, and clear deliverables.",
  },
  {
    n: "03",
    t: "Build",
    d: "Your solution is developed, tested, and shared through regular progress updates and a staging environment.",
  },
  {
    n: "04",
    t: "Launch & Improve",
    d: "After launch, I monitor performance, resolve issues, and improve speed, conversions, and user experience.",
  },
];

function Process() {
  return (
    <section className="relative bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 07 — Process
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              A clear four-step process.
              <br />
              <span className="font-serif italic text-acid">No unnecessary complexity.</span>
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
                <span className="col-span-2 font-mono text-xs uppercase tracking-[0.24em] text-mist md:col-span-1">
                  {s.n}
                </span>
                <span className="col-span-10 font-serif text-3xl italic tracking-tight md:col-span-3 md:text-4xl">
                  {s.t}
                </span>
                <span className="col-span-12 text-sm text-bone/70 md:col-span-7">{s.d}</span>
                <span className="col-span-12 hidden text-right font-serif text-2xl italic text-acid md:col-span-1 md:block">
                  ✦
                </span>
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
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Framer Motion",
    "Shopify",
    "Hydrogen",
    "Liquid",
    "Node",
    "Django",
    "Python",
    "Postgres",
    "Redis",
    "OpenAI",
    "LangChain",
    "Playwright",
    "n8n",
    "Vercel",
    "Cloudflare",
    "Sanity",
  ];
  return (
    <section className="border-y border-white/10 bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
          / 08 — Instruments
        </p>
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
  { value: 24, suffix: "", label: "Countries billed from" },
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
      { threshold: 0.4 },
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

function SignalCard({
  s,
  index,
  progress,
}: {
  s: Signal;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // each card occupies a slice of the pinned scroll
  const slice = 1 / signals.length;
  const start = index * slice;
  const end = start + slice;
  const mid = start + slice * 0.55;

  const opacity = useTransform(
    progress,
    [start, start + slice * 0.15, end - slice * 0.1, end],
    [0, 1, 1, 0],
  );
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
          style={{
            background: `radial-gradient(500px circle at 30% 20%, ${s.tint}, transparent 60%)`,
          }}
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
          <span aria-hidden className="mr-2 -ml-2 align-top text-acid">
            “
          </span>
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
          <span aria-hidden className="ml-1 align-top text-acid">
            ”
          </span>
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
            <div className="font-serif text-3xl italic leading-none text-ink md:text-4xl">
              {s.metric.value}
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              {s.metric.label}
            </div>
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
  const indexActive = useTransform(scrollYProgress, (v) =>
    Math.min(signals.length - 1, Math.floor(v * signals.length)),
  );
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
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 09 — Signal</p>
            <h2 className="mt-5 max-w-[9ch] font-serif text-5xl italic leading-[0.9] md:text-[88px]">
              What the
              <br />
              <span className="text-acid">receipts</span> say.
            </h2>
          </div>
          <div className="hidden max-w-xs text-right md:block">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Unedited excerpts from
              <br />
              operators who signed the PO.
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
                    backgroundColor:
                      active === i ? "oklch(0.14 0.01 260)" : "oklch(0.14 0.01 260 / 0.25)",
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
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                {st.label}
              </span>
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
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 11 — Next</p>
        <h2 className="mx-auto mt-8 max-w-5xl font-serif text-6xl italic leading-[0.95] tracking-tight md:text-[9vw]">
          Have a project
          <br />
          ready to <span className="text-acid">grow?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
          Let&apos;s build a faster, smarter, and more scalable solution for your business.
        </p>
        <div className="mt-12 flex justify-center gap-3">
          <MagneticLink to="/contact" variant="light">
            Start a project
          </MagneticLink>
          <MagneticLink to="/portfolio" variant="ghost">
            View My Work
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}

/* ————————————— FAQ + CONTACT ————————————— */
const faqs = [
  {
    q: "What types of projects do you work on?",
    a: "I build Shopify and ecommerce stores, AI automation systems, and full-stack web applications for growing brands, SaaS companies, and agencies.",
    tag: "Projects",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I work remotely with clients across the US, UK, Europe, Australia, Canada, the GCC, and other international markets.",
    tag: "Global",
  },
  {
    q: "Can you improve an existing Shopify store?",
    a: "Yes. I can improve its design, user experience, speed, checkout, functionality, and conversion performance without rebuilding everything unnecessarily.",
    tag: "Shopify",
  },
  {
    q: "Do you build custom AI automation?",
    a: "Yes. I develop AI agents, chatbots, RAG systems, automated workflows, web-scraping tools, and integrations based on your existing processes.",
    tag: "AI",
  },
  {
    q: "Can you build a custom web application?",
    a: "Yes. I build SaaS platforms, dashboards, B2B portals, internal tools, APIs, and scalable business applications.",
    tag: "Applications",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take between 2 and 8 weeks. The final timeline depends on the scope, integrations, complexity, and required testing.",
    tag: "Timeline",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Ongoing development, maintenance, performance monitoring, and improvement plans are available after launch.",
    tag: "Support",
  },
  {
    q: "How do we get started?",
    a: "Complete the project form with your requirements, budget, and timeline. I’ll review the details and respond within 24 hours.",
    tag: "Kickoff",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-white/10"
    >
      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute -inset-x-4 inset-y-0 -z-10 rounded-2xl"
        style={{
          background:
            "radial-gradient(600px circle at 20% 50%, oklch(0.5 0.26 295 / 0.14), transparent 60%)",
        }}
      />
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-6 py-6 text-left md:py-8"
        aria-expanded={open}
      >
        <span className="w-10 shrink-0 font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
          0{index + 1}
        </span>
        <span className="flex-1 font-serif text-xl italic leading-tight text-bone transition-colors md:text-3xl">
          {item.q}
        </span>
        <span className="hidden shrink-0 rounded-full border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-mist md:inline-block">
          {item.tag}
        </span>
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            backgroundColor: open ? "oklch(0.5 0.26 295)" : "transparent",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex gap-6 pb-8 pl-16 pr-4 md:pr-16">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top" }}
                className="w-px shrink-0 bg-gradient-to-b from-acid via-acid/40 to-transparent"
              />
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="max-w-2xl font-sans text-base leading-relaxed text-bone/70 md:text-lg"
              >
                {item.a}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const orb1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const orb2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "Shopify & Ecommerce",
    budget: "$5K–$10K",
    timeline: "Flexible",
    details: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  // magnetic button
  const btnRef = useRef<HTMLButtonElement>(null);
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const sbx = useSpring(bx, { stiffness: 200, damping: 15 });
  const sby = useSpring(by, { stiffness: 200, damping: 15 });

  const projectTypes = ["Shopify & Ecommerce", "AI Automation", "Full-Stack Application"];
  const budgets = ["$3K–$5K", "$5K–$10K", "$10K–$25K", "$25K+"];
  const timelines = ["As Soon as Possible", "Within 1 Month", "Within 2–3 Months", "Flexible"];

  const trust = [
    { v: "100+", l: "Projects shipped" },
    { v: "24h", l: "Reply time" },
    { v: "24", l: "Countries" },
    { v: "94%", l: "Renewal rate" },
  ];

  return (
    <section
      ref={sectionRef}
      className="grain relative overflow-hidden bg-ink px-6 py-32 text-bone md:px-10 md:py-48"
    >
      {/* background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: "oklch(0.97 0.01 90)",
        }}
      />
      <motion.div
        aria-hidden
        style={{ y: orb1 }}
        className="pointer-events-none absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.26_295_/_0.35),transparent_65%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: orb2 }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_35_/_0.25),transparent_65%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start justify-between gap-6 md:mb-28 md:flex-row md:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 10 — Consult
            </p>
            <h2 className="mt-6 max-w-[14ch] font-serif text-5xl italic leading-[0.9] md:text-[88px]">
              Questions,
              <br />
              then <span className="text-acid">answers</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {trust.map((t) => (
              <div key={t.l} className="flex items-baseline gap-2">
                <span className="font-serif text-2xl italic text-bone">{t.v}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                  {t.l}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT — FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7"
          >
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
              <span className="h-px w-8 bg-acid" />
              Frequently asked
            </div>
            <div>
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  item={f}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:p-10">
                {/* animated gradient border */}
                <motion.span
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[32px] opacity-60"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, oklch(0.5 0.26 295 / 0.55) 20%, transparent 40%, oklch(0.68 0.22 35 / 0.45) 65%, transparent 85%)",
                  }}
                />
                <div className="absolute inset-[1px] -z-10 rounded-[31px] bg-ink/85 backdrop-blur-2xl" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                      Start a project
                    </p>
                    <h3 className="mt-3 font-serif text-3xl italic leading-tight md:text-4xl">
                      Tell me what
                      <br />
                      you&apos;re building.
                    </h3>
                  </div>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-acid" />
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-10 rounded-2xl border border-acid/30 bg-acid/10 p-6 text-center"
                    >
                      <div className="font-serif text-3xl italic text-bone">Message received.</div>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
                        Reply in your inbox within 24h.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!form.name.trim() || !form.email.trim() || !form.details.trim()) return;
                        setSent(true);
                      }}
                      className="mt-8 space-y-5"
                    >
                      {[
                        {
                          key: "name",
                          label: "Your name",
                          type: "text",
                          placeholder: "Ada Lovelace",
                        },
                        {
                          key: "email",
                          label: "Work Email",
                          type: "email",
                          placeholder: "ada@studio.com",
                        },
                        {
                          key: "company",
                          label: "Company",
                          type: "text",
                          placeholder: "Analytical Engines Co.",
                        },
                        {
                          key: "website",
                          label: "Website URL",
                          type: "url",
                          placeholder: "https://example.com",
                        },
                      ].map((field) => (
                        <FloatingField
                          key={field.key}
                          label={field.label}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form] as string}
                          onChange={(v) => setForm({ ...form, [field.key]: v })}
                          focused={focused === field.key}
                          onFocus={() => setFocused(field.key)}
                          onBlur={() => setFocused(null)}
                          maxLength={field.key === "email" ? 255 : 120}
                        />
                      ))}

                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                          Project type
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {projectTypes.map((p) => (
                            <button
                              type="button"
                              key={p}
                              onClick={() => setForm({ ...form, projectType: p })}
                              className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-all ${
                                form.projectType === p
                                  ? "border-acid bg-acid text-ink"
                                  : "border-white/15 bg-white/[0.02] text-bone/70 hover:border-white/40 hover:text-bone"
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                          Budget range
                        </label>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {budgets.map((b) => (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setForm({ ...form, budget: b })}
                              className={`rounded-xl border px-3 py-3 text-left font-mono text-[11px] tracking-wide transition-all ${
                                form.budget === b
                                  ? "border-acid/60 bg-acid/10 text-bone"
                                  : "border-white/10 bg-white/[0.02] text-bone/60 hover:border-white/30 hover:text-bone"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                          Timeline
                        </label>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {timelines.map((timeline) => (
                            <button
                              type="button"
                              key={timeline}
                              onClick={() => setForm({ ...form, timeline })}
                              className={`rounded-xl border px-3 py-3 text-left font-mono text-[11px] tracking-wide transition-all ${
                                form.timeline === timeline
                                  ? "border-acid/60 bg-acid/10 text-bone"
                                  : "border-white/10 bg-white/[0.02] text-bone/60 hover:border-white/30 hover:text-bone"
                              }`}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        <label className="font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
                          Project details
                        </label>
                        <div className="relative mt-3">
                          <textarea
                            value={form.details}
                            onFocus={() => setFocused("details")}
                            onBlur={() => setFocused(null)}
                            onChange={(e) =>
                              setForm({ ...form, details: e.target.value.slice(0, 1000) })
                            }
                            rows={4}
                            placeholder="What are you building, and what does 'shipped' look like?"
                            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 font-sans text-sm text-bone placeholder:text-mist/60 outline-none transition-all focus:border-acid/60 focus:bg-white/[0.04]"
                          />
                          <motion.span
                            aria-hidden
                            initial={false}
                            animate={{ opacity: focused === "details" ? 1 : 0 }}
                            className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-acid/30"
                          />
                          <div className="mt-1 text-right font-mono text-[10px] text-mist/60">
                            {form.details.length}/1000
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-2">
                        <motion.button
                          ref={btnRef}
                          type="submit"
                          onMouseMove={(e) => {
                            const r = e.currentTarget.getBoundingClientRect();
                            bx.set(((e.clientX - r.left) / r.width - 0.5) * 20);
                            by.set(((e.clientY - r.top) / r.height - 0.5) * 20);
                          }}
                          onMouseLeave={() => {
                            bx.set(0);
                            by.set(0);
                          }}
                          style={{ x: sbx, y: sby }}
                          whileTap={{ scale: 0.97 }}
                          className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-acid px-7 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink transition-shadow hover:shadow-[0_20px_60px_-10px_oklch(0.5_0.26_295_/_0.6)]"
                        >
                          <span className="relative z-10">Send Project Details</span>
                          <motion.span
                            aria-hidden
                            className="relative z-10"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                          >
                            →
                          </motion.span>
                          <span
                            aria-hidden
                            className="absolute inset-0 -z-0 bg-gradient-to-r from-acid via-flame to-acid opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </motion.button>
                        <a
                          href="https://cal.com"
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist underline-offset-4 transition-colors hover:text-bone hover:underline"
                        >
                          or book a call ↗
                        </a>
                      </div>

                      <p className="pt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                        <span className="inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-acid" />{" "}
                        I usually respond within 24 hours.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  label,
  type,
  placeholder,
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
  maxLength,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  maxLength: number;
}) {
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <motion.label
        animate={{
          y: active ? -8 : 14,
          fontSize: active ? "10px" : "13px",
          color: focused ? "oklch(0.5 0.26 295)" : "oklch(0.55 0.02 260)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-4 top-0 origin-left font-mono uppercase tracking-[0.24em]"
      >
        {label}
      </motion.label>
      <input
        type={type}
        value={value}
        placeholder={active ? placeholder : ""}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 pb-3 pt-6 font-sans text-sm text-bone placeholder:text-mist/40 outline-none transition-all focus:border-acid/60 focus:bg-white/[0.04]"
      />
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="pointer-events-none absolute inset-x-4 bottom-2 h-px bg-acid"
      />
    </div>
  );
}
