import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Company = {
  id: string;
  name: string;
  mark: string; // short monogram
  role: string;
  period: string;
  location: string;
  blurb: string;
  responsibilities: string[];
  tech: string[];
  wins: string[];
  accent: string; // css color
  layout: "left" | "right" | "split" | "sticky" | "editorial";
};

const COMPANIES: Company[] = [
  {
    id: "encoders",
    name: "Encoders Studio",
    mark: "ES",
    role: "Full Stack Engineer",
    period: "2024 — Present",
    location: "Remote · Global",
    blurb: "Product studio building bespoke web platforms for founders and creative teams.",
    responsibilities: [
      "Architected multi-tenant SaaS backends on Django + Postgres",
      "Led frontend rewrites in Next.js with type-safe RSC pipelines",
      "Owned deployments, observability and on-call rotations",
    ],
    tech: ["Next.js", "Django", "Postgres", "Redis", "Stripe", "AWS"],
    wins: [
      "Cut p95 API latency 62% via query & cache pass",
      "Shipped 9 client platforms end-to-end",
      "Introduced a shared UI kit reused across 4 products",
    ],
    accent: "var(--color-acid)",
    layout: "left",
  },
  {
    id: "xylo",
    name: "Xylosolutions",
    mark: "XY",
    role: "Senior Shopify Engineer",
    period: "2023 — 2024",
    location: "Hybrid · Lahore",
    blurb: "Ecommerce agency serving DTC brands across the US, UK and GCC.",
    responsibilities: [
      "Built custom Shopify themes & Online Store 2.0 sections",
      "Developed private Shopify apps with Remix + GraphQL Admin",
      "Led Core Web Vitals rescues on high-traffic storefronts",
    ],
    tech: ["Shopify Plus", "Liquid", "Remix", "GraphQL", "Hydrogen"],
    wins: [
      "Lifted mobile CVR +18% on flagship rebuild",
      "All CWV green across 12 shipped stores",
      "Delivered 3 checkout extensions on Plus",
    ],
    accent: "var(--color-flame)",
    layout: "right",
  },
  {
    id: "arnex",
    name: "ARNEX",
    mark: "AX",
    role: "Full Stack Developer",
    period: "2023",
    location: "Remote",
    blurb: "Agency partner building internal tools and dashboards for enterprise clients.",
    responsibilities: [
      "Designed REST & GraphQL APIs for internal ops tools",
      "Built React dashboards with realtime data pipelines",
      "Automated recurring workflows with Python + n8n",
    ],
    tech: ["React", "Node", "Python", "Postgres", "n8n"],
    wins: [
      "Automated 40+ hrs/week of manual reporting",
      "Rolled out an RBAC system used by 200+ staff",
      "Cut deploy time from 25m → 4m",
    ],
    accent: "var(--color-acid)",
    layout: "split",
  },
  {
    id: "blink",
    name: "Blink Devs",
    mark: "BD",
    role: "Shopify & Frontend Engineer",
    period: "2022 — 2023",
    location: "Remote",
    blurb: "Boutique dev shop shipping headless commerce and marketing sites.",
    responsibilities: [
      "Built headless Shopify storefronts on Hydrogen & Next.js",
      "Integrated Sanity, Klaviyo, Rebuy and Stamped stacks",
      "Owned Figma → production handoff for 20+ launches",
    ],
    tech: ["Hydrogen", "Next.js", "Sanity", "Tailwind", "Klaviyo"],
    wins: [
      "Launched 20+ storefronts in 12 months",
      "Reduced JS payload avg −45% vs legacy themes",
      "Set up shared component library across projects",
    ],
    accent: "var(--color-flame)",
    layout: "sticky",
  },
  {
    id: "buildaze",
    name: "Buildaze",
    mark: "BZ",
    role: "Freelance Full Stack Engineer",
    period: "2022 — Present",
    location: "Independent · Worldwide",
    blurb: "Selective freelance engagements for founders, agencies and operators.",
    responsibilities: [
      "End-to-end product builds: discovery → launch → iterate",
      "AI automation workflows with OpenAI, LangChain, Playwright",
      "Long-form retainers with DTC and SaaS teams",
    ],
    tech: ["OpenAI", "LangChain", "Playwright", "Next.js", "Django"],
    wins: [
      "100+ shipped projects across 12 countries",
      "94% retainer renewal rate",
      "Multiple six-figure engagements booked solo",
    ],
    accent: "var(--color-acid)",
    layout: "editorial",
  },
];

const METRICS = [
  { v: 3, s: "+", l: "Years shipping" },
  { v: 100, s: "+", l: "Projects delivered" },
  { v: 5, s: "", l: "Agencies & studios" },
  { v: 12, s: "+", l: "Countries served" },
];

export function ProfessionalExperience() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={wrapRef} className="relative overflow-hidden bg-ink text-bone">
      {/* backdrop */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
      >
        <div className="absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-acid/20 blur-[160px]" />
        <div className="absolute right-[-10%] top-[60%] h-[480px] w-[480px] rounded-full bg-flame/15 blur-[160px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />
      </motion.div>

      {/* left rail progress */}
      <motion.div
        aria-hidden
        style={{ scaleY: railScale }}
        className="pointer-events-none absolute left-4 top-0 hidden h-full w-[2px] origin-top bg-gradient-to-b from-acid via-flame to-transparent md:block"
      />

      <Header />
      <Metrics />

      <div className="relative">
        {COMPANIES.map((c, i) => (
          <ExperiencePanel key={c.id} c={c} index={i} total={COMPANIES.length} />
        ))}
      </div>

      <Closer />
    </section>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <div className="relative mx-auto max-w-[1400px] px-6 pt-32 md:px-10 md:pt-48">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 03b — Professional Experience</p>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <h2 className="col-span-12 max-w-6xl font-display text-5xl leading-[0.92] tracking-tight md:col-span-9 md:text-[6.2vw]">
          A career built in <span className="font-serif italic text-acid">public</span>,<br />
          one shipped product at a time.
        </h2>
        <p className="col-span-12 max-w-md text-base leading-relaxed text-bone/70 md:col-span-3 md:pt-6">
          Building modern digital products, ecommerce solutions and scalable applications across
          startups, agencies and international clients.
        </p>
      </div>
    </div>
  );
}

/* ---------- Metrics ---------- */
function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  return (
    <div ref={ref} className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-0 md:mt-24 md:grid-cols-4">
      {METRICS.map((m, i) => (
        <div key={m.l} className="relative bg-ink/60 p-8 backdrop-blur">
          <div className="flex items-baseline gap-1">
            <Counter to={m.v} active={inView} delay={i * 0.12} />
            <span className="font-display text-3xl text-acid md:text-5xl">{m.s}</span>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">{m.l}</p>
          <span aria-hidden className="absolute right-4 top-4 font-mono text-[10px] text-mist/60">0{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

function Counter({ to, active, delay = 0 }: { to: number; active: boolean; delay?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, delay]);
  return <span className="font-display text-5xl leading-none tracking-tight md:text-7xl">{n}</span>;
}

/* ---------- Experience Panel ---------- */
function ExperiencePanel({ c, index, total }: { c: Company; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [8, 0, 0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const alignRight = c.layout === "right";

  return (
    <div ref={ref} className="relative border-t border-white/10">
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div
          className="absolute h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{ background: c.accent, top: index % 2 === 0 ? "10%" : "40%", left: alignRight ? "70%" : "-10%", opacity: 0.25 }}
        />
      </motion.div>

      <motion.div style={{ scale, filter }} className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        {/* index pill */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">{c.period}</span>
        </div>

        <div className={`grid grid-cols-12 gap-8 ${alignRight ? "md:[direction:rtl]" : ""}`}>
          {/* Visual */}
          <motion.div style={{ y: y1 }} className="col-span-12 md:col-span-5 md:[direction:ltr]">
            <CompanyMark c={c} />
          </motion.div>

          {/* Content */}
          <div className="col-span-12 md:col-span-7 md:[direction:ltr]">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl leading-[0.95] tracking-tight md:text-[5.2vw]"
            >
              {c.name}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2"
            >
              <p className="font-serif text-2xl italic text-bone/90 md:text-3xl">{c.role}</p>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist">{c.location}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg"
            >
              {c.blurb}
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              <BulletBlock label="Responsibilities" items={c.responsibilities} accent={c.accent} />
              <BulletBlock label="Impact" items={c.wins} accent={c.accent} highlight />
            </div>

            <TechRow items={c.tech} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Company mark ---------- */
function CompanyMark({ c }: { c: Company }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 120, damping: 14 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative aspect-[4/5] w-full [perspective:1200px]"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8"
      >
        {/* animated aura */}
        <motion.div
          aria-hidden
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -inset-1 rounded-3xl blur-2xl"
          style={{ background: `radial-gradient(60% 60% at 50% 40%, ${c.accent}, transparent 70%)`, opacity: 0.35 }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* content */}
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-ink/40 font-display text-xl tracking-tight backdrop-blur"
              style={{ boxShadow: `0 20px 60px -20px ${c.accent}` }}
            >
              {c.mark}
            </motion.div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Active</span>
          </div>

          <div className="space-y-3">
            <div className="h-px w-full bg-white/10" />
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
              <span>{c.period}</span>
              <span style={{ color: c.accent }}>●</span>
            </div>
            <p className="font-serif text-2xl italic leading-tight text-bone">{c.name}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Bullets ---------- */
function BulletBlock({ label, items, accent, highlight = false }: { label: string; items: string[]; accent: string; highlight?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">{label}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex gap-3 text-sm leading-relaxed text-bone/80"
          >
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: accent, boxShadow: highlight ? `0 0 12px ${accent}` : undefined }}
            />
            <span className={highlight ? "text-bone" : ""}>{it}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Tech row ---------- */
function TechRow({ items }: { items: string[] }) {
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      {items.map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: i * 0.04, duration: 0.4 }}
          whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
          className="cursor-default rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/80 transition-colors"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

/* ---------- Closer ---------- */
function Closer() {
  return (
    <div className="relative border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 max-w-5xl font-serif text-3xl italic leading-tight md:col-span-9 md:text-[3.4vw]"
          >
            Every project has strengthened my expertise in building
            <span className="text-acid"> high-performing ecommerce experiences</span>,
            scalable software, and intelligent automation for teams worldwide.
          </motion.p>

          <div className="col-span-12 flex md:col-span-3 md:items-end md:justify-end">
            <MagneticCTA href="/portfolio">View Portfolio →</MagneticCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

function MagneticCTA({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="group inline-flex items-center gap-3 rounded-full bg-acid px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-bone"
    >
      {children}
    </motion.a>
  );
}