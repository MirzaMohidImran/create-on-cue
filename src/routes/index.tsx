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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohid Imran | Shopify & Full Stack Developer" },
      {
        name: "description",
        content:
          "Work with Mohid Imran for Shopify stores, custom themes, apps and web applications. Get help with store performance, user experience and technical fixes.",
      },
      { property: "og:title", content: "Mohid Imran | Shopify & Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Work with Mohid Imran for Shopify stores, custom themes, apps and web applications. Get help with store performance, user experience and technical fixes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <Marquee
        items={[
          "Shopify Development",
          "Custom Themes & Apps",
          "Full Stack Development",
          "Store Optimization",
        ]}
      />
      <Intro />
      <Capabilities />
      <Experience />
      <FeaturedWork />
      <Process />
      <TechStack />
      <WorkingTogether />
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
      <div className="relative flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <span>Independent Developer · Working Remotely</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          Available for Projects · Worldwide
        </span>
      </div>

      <div className="relative mt-auto grid flex-1 grid-cols-12 items-end gap-8 pb-14 pt-20">
        <div className="col-span-12 md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-balance font-display text-4xl leading-[0.95] tracking-tight text-bone sm:text-5xl md:text-[4.8vw]"
          >
            Shopify &amp; Full Stack Developer for Your Next Build
            <span className="font-serif italic text-acid">—or the Fix You Need Today</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="col-span-12 space-y-6 md:col-span-4"
        >
          <p className="text-balance text-sm leading-relaxed text-bone/70 md:text-base">
            I&apos;m Mohid Imran. I build Shopify stores, custom themes, apps and web applications.
            If your existing website is slow, difficult to use or missing functionality, I can help
            identify the problem and implement a practical solution.
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticLink to="/contact" variant="light">
              Discuss Your Project
            </MagneticLink>
            <MagneticLink to="/portfolio" variant="ghost">
              Explore My Work
            </MagneticLink>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist md:text-xs">
          Shopify Development · Custom Themes &amp; Apps · Full Stack Development · Store
          Optimization
        </p>
      </div>
    </section>
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
          <h2 className="max-w-4xl font-serif text-3xl italic leading-[1.1] tracking-tight text-ink md:text-6xl">
            What does your business need its website to do?
          </h2>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              You might need to launch a store, improve an existing buying experience or build
              software around the way your team works.
            </p>
            <p>
              I work across the storefront, application and integration layers, helping turn those
              requirements into usable features. That could mean an editable Shopify theme, a custom
              app, a customer portal or a Python workflow that reduces manual data entry.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                k: "Ecommerce",
                v: "Stores and shopping experiences built around your products, customers and day-to-day operations.",
              },
              {
                k: "Web Applications",
                v: "Custom interfaces, backend APIs and business tools that connect your users with the information they need.",
              },
              {
                k: "Automation & Data",
                v: "Scripts, integrations and scoped automation tools that help information move between websites and business systems.",
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
const homepageServices = [
  {
    title: "Shopify Development",
    description:
      "Launch a Shopify store or extend what your current store can do. I develop custom themes, reusable sections, apps and integrations, with headless storefront development available for projects that need a separate frontend.",
    cta: "Explore Shopify Development",
    to: "/services/shopify-development" as const,
  },
  {
    title: "Shopify CRO & Store Optimization",
    description:
      "Find the friction in your shopping journey. I review mobile usability, product pages, cart interactions and performance, then help implement improvements. Where traffic and data support it, A/B testing can help evaluate changes.",
    cta: "Explore Store Optimization",
    to: "/services/shopify-cro" as const,
  },
  {
    title: "Full Stack Development",
    description:
      "Build a website or web application around your business requirements. I work on frontend interfaces, backend APIs and integrations for custom applications, SaaS MVPs, dashboards and portals.",
    cta: "Explore Full Stack Development",
    to: "/services/full-stack-development" as const,
  },
  {
    title: "WordPress & WooCommerce",
    description:
      "Create a manageable business website or customize an online store. My work includes Elementor builds, custom themes, WooCommerce functionality, plugin integrations and improvements to existing websites.",
    cta: "Explore WordPress Development",
    to: "/services/wordpress-development" as const,
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Explore how automation could help with a specific business process. I develop Python workflows and API connections, and prototype AI-assisted tools to assess how they could fit your requirements.",
    cta: "Explore Automation",
    to: "/services/ai-automation" as const,
  },
  {
    title: "Web Scraping & Data Solutions",
    description:
      "Turn website information into structured data. I build Python scripts for agreed data sources and collection requirements, helping organize the results for reporting, analysis or use in another system.",
    cta: "Explore Web Scraping",
    to: "/services/web-scraping" as const,
  },
];

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 03 — Capabilities
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Find the Right Help
              <br />
              <span className="font-serif italic text-acid">for Your Project</span>
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
          {homepageServices.map((s, i) => (
            <motion.div
              key={s.title}
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
                <p className="mt-4 text-sm leading-relaxed opacity-70">{s.description}</p>
                <Link
                  to={s.to}
                  className="mt-8 inline-flex items-center gap-2 border-b border-current/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
                >
                  {s.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————— EXPERIENCE ————————————— */
const experience = [
  {
    company: "Encoders Studio",
    role: "Web Developer — Shopify & WordPress",
    period: "November 2025–Present",
    text: "Building and maintaining storefronts, translating designs into responsive pages, troubleshooting theme and app issues, and improving frontend performance.",
  },
  {
    company: "Buildaze",
    role: "Freelance Full Stack Developer",
    period: "July 2023–Present",
    text: "Delivering Shopify, WordPress and custom web projects. Work includes theme development, app functionality, headless storefronts, Angular interfaces and Django REST APIs.",
  },
  {
    company: "Xylosolutions",
    role: "Shopify & WordPress Developer",
    period: "June 2025–January 2026",
    text: "Developing mobile-first storefronts and WordPress websites, supporting integrations, and testing layouts across browsers and devices.",
  },
  {
    company: "ARNEX",
    role: "Research & Development Intern",
    period: "September 2025–December 2025",
    text: "Developing Python scripts for web scraping and data collection, alongside AI automation prototyping and technical feasibility research.",
  },
  {
    company: "Blink Devs",
    role: "Shopify & WordPress Developer",
    period: "February 2025–May 2025",
    text: "Building Shopify themes, implementing responsive layouts and improving image and script loading.",
  },
];

function Experience() {
  return (
    <section className="relative bg-bone px-6 py-32 text-ink md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 04 — Experience
            </p>
            <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Experience Across Client Projects,
              <span className="font-serif italic text-acid"> Agencies and Product Development</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist md:text-base">
              My work combines Shopify and WordPress development with custom web applications,
              performance improvements and automated data collection.
            </p>
            <Link
              to="/resume"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
            >
              View My Resume →
            </Link>
          </div>
          <div className="col-span-12 divide-y divide-ink/10 border-y border-ink/10 md:col-span-8">
            {experience.map((job, i) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist md:col-span-3">
                  {job.period}
                </span>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl italic">{job.company}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-acid">
                    {job.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
                    {job.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————— FEATURED WORK (sticky storytelling) ————————————— */
const featured = [
  {
    n: "01",
    title: "SalesForge",
    kind: "Shopify App Development",
    metric: "App suite",
    line: "A sales and conversion suite with features including product bundles, recommendations, pre-orders, a cart drawer and a bundle builder.",
    tech: "Remix · Polaris · App Bridge · Shopify Functions · Theme App Extensions · Prisma",
    color: "oklch(0.72 0.18 45)",
  },
  {
    n: "02",
    title: "Mobuxe",
    kind: "Shopify Theme Development",
    metric: "80+ sections",
    line: "An Online Store 2.0 theme project with more than 80 sections, developed for Shopify Theme Store submission.",
    tech: "Liquid · Online Store 2.0 · HTML · CSS · JavaScript",
    color: "oklch(0.68 0.19 275)",
  },
  {
    n: "03",
    title: "Blaze",
    kind: "Shopify Theme Development",
    metric: "Theme Store",
    line: "A luxury fashion theme project developed around Shopify’s Online Store 2.0 architecture, targeting Theme Store submission.",
    tech: "Liquid · Online Store 2.0 · Responsive Frontend Development",
    color: "oklch(0.85 0.12 130)",
  },
  {
    n: "04",
    title: "Client Storefront Work",
    kind: "Shopify Development & Optimization",
    metric: "Multi-brand",
    line: "Theme development, app integrations, responsive layouts and frontend improvements across client projects including Apolo-Untold, SweetNyWellness, Kaasida, Outstanding Nutrition and ArtfullyWalls.",
    tech: "Shopify · Liquid · Apps · Performance",
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
              / 05 — Selected Work
            </p>
            <h2 className="mt-4 font-serif text-4xl italic leading-none md:text-6xl">
              A Closer Look at What I Build
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 border-b border-ink pb-1 font-display text-sm hover:text-flame md:inline-flex"
          >
            Explore My Portfolio →
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
                  <div className="mt-3 max-w-lg font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
                    {featured[active].tech}
                  </div>
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
                Explore My Portfolio →
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
    t: "Understand the Requirement",
    d: "We discuss your business, current website and the problem you want to solve. For an existing store or application, I review the relevant setup before recommending the work.",
  },
  {
    n: "02",
    t: "Define the Scope",
    d: "We agree on the features, priorities, dependencies and deliverables. You get a clear understanding of what the project includes and what needs further investigation.",
  },
  {
    n: "03",
    t: "Build & Review",
    d: "I develop the agreed solution and share progress for review. Feedback helps check that the work meets your requirements before launch.",
  },
  {
    n: "04",
    t: "Test & Hand Over",
    d: "I test the relevant functionality, responsive layouts and integrations, then prepare the work for release and handover. Any ongoing support is agreed as part of the project.",
  },
];

function Process() {
  return (
    <section className="relative bg-ink px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / 06 — Process
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Know What Happens
              <br />
              <span className="font-serif italic text-acid">Before Development Starts</span>
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
  const groups = [
    {
      label: "Shopify",
      items:
        "Liquid · Online Store 2.0 · Hydrogen · Remix · Shopify Functions · Theme App Extensions",
    },
    {
      label: "Frontend",
      items: "HTML · CSS · JavaScript · TypeScript · React · Next.js · Angular",
    },
    {
      label: "Backend & Data",
      items: "Python · Django · Django REST Framework · REST APIs · Prisma",
    },
    {
      label: "WordPress",
      items: "WordPress · WooCommerce · Elementor · PHP",
    },
    {
      label: "Development & Performance",
      items: "Git · GitHub · Figma · Lighthouse · PageSpeed Insights · GTmetrix",
    },
  ];
  return (
    <section className="border-y border-white/10 bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
          / 07 — Instruments
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
          Tools Selected
          <span className="font-serif italic text-acid"> Around the Work</span>
        </h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist md:col-span-3">
                {group.label}
              </p>
              <p className="font-display text-xl tracking-tight text-bone/75 md:col-span-9 md:text-3xl">
                {group.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————— WORKING TOGETHER ————————————— */
function WorkingTogether() {
  return (
    <section className="relative bg-bone px-6 py-32 text-ink md:px-10 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / 08 — Working Together
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Work Directly With the Developer
            <span className="font-serif italic text-acid"> Building Your Project</span>
          </h2>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              You can explain the issue, review the proposed approach and discuss the implementation
              with me directly.
            </p>
            <p>
              I aim to make technical decisions understandable: what needs fixing, why a particular
              approach fits, and what its limitations are. If the requirement needs investigation
              first, that becomes part of the scope.
            </p>
            <p>
              Whether you need a focused store fix or a complete build, the starting point is the
              same: understand the requirement and agree on a workable next step.
            </p>
          </div>
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
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ 10 — Next</p>
        <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl italic leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          Have a Store Problem
          <br />
          or a <span className="text-acid">Project in Mind?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
          Let&apos;s define what needs to happen and the best way to move it forward.
        </p>
        <div className="mt-12 flex justify-center gap-3">
          <MagneticLink to="/contact" variant="light">
            Discuss Your Project
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
    q: "Can you improve my existing Shopify store?",
    a: "Yes. I can review an existing store and help with theme changes, app conflicts, broken features, mobile usability and performance. A full redesign is only one possible option; the scope depends on the problems we find.",
    tag: "Shopify",
  },
  {
    q: "Do you build custom Shopify themes and apps?",
    a: "Yes. My work includes Liquid themes, Online Store 2.0 sections, Shopify app functionality and integrations. Share the feature or workflow you need so we can determine the appropriate approach.",
    tag: "Themes",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I work remotely with clients and agencies. We can agree on communication, review points and suitable working-hour overlap before starting.",
    tag: "Global",
  },
  {
    q: "Can you build a custom web application or SaaS MVP?",
    a: "Yes. I can help scope and develop a custom application, dashboard, portal or SaaS MVP. We start by defining its users, core workflow and required integrations so the first release has a clear purpose.",
    tag: "Applications",
  },
  {
    q: "Do you work with WordPress and WooCommerce?",
    a: "Yes. I build and customize WordPress websites and WooCommerce stores, including Elementor layouts, themes, integrations and improvements to existing functionality.",
    tag: "WordPress",
  },
  {
    q: "Can you help with automation and web scraping?",
    a: "Yes. I develop Python scripts for data collection and repetitive workflows. AI-assisted requirements can begin with a scoped prototype to assess feasibility before committing to a wider implementation.",
    tag: "Automation",
  },
  {
    q: "How long will my project take?",
    a: "The timeline depends on the scope, current codebase, integrations and content readiness. A focused fix and a complete application require different plans. We agree on an estimated timeline after reviewing the requirements.",
    tag: "Timeline",
  },
  {
    q: "Do you offer support after launch?",
    a: "Post-launch fixes, maintenance and further development can be included in the engagement. We agree on the scope and support arrangements before work begins.",
    tag: "Support",
  },
  {
    q: "How do we get started?",
    a: "Send your website URL, describe what you need and include any relevant designs or examples. If you are starting from scratch, explain what you want users to be able to do. I’ll review the information and suggest the next step.",
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
    projectType: "Shopify Store",
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

  const projectTypes = [
    "Shopify Store",
    "Theme or App Development",
    "Store Fixes & Optimization",
    "WordPress or WooCommerce",
    "Web Application",
    "Automation & Data",
    "Not Sure Yet",
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
              / 09 — Consult
            </p>
            <h2 className="mt-6 max-w-[14ch] font-serif text-5xl italic leading-[0.9] md:text-[88px]">
              Questions,
              <br />
              then <span className="text-acid">answers</span>.
            </h2>
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
                      Project inquiry
                    </p>
                    <h3 className="mt-3 font-serif text-3xl italic leading-tight md:text-4xl">
                      Tell Me What You Want to Build or Improve
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-bone/65">
                      Share your current website, the issue you are facing or the feature you have in
                      mind. A clear starting point helps us work out what the project needs.
                    </p>
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
                          label: "Email address",
                          type: "email",
                          placeholder: "ada@studio.com",
                        },
                        {
                          key: "company",
                          label: "Company or website",
                          type: "text",
                          placeholder: "studio.com",
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
                            placeholder="What needs to work better? Include your website URL, required features and any deadline you are working toward."
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
