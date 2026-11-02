import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Shopify & Web Development Insights | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore practical insights from Mohid Imran on Shopify development, store performance, WordPress, web applications and business automation.",
      },
      {
        property: "og:title",
        content: "Shopify & Web Development Insights | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Explore practical insights from Mohid Imran on Shopify development, store performance, WordPress, web applications and business automation.",
      },
    ],
  }),
  component: BlogPage,
});

type PageLink =
  | "/contact"
  | "/portfolio"
  | "/resume"
  | "/services"
  | "/blog/custom-shopify-theme-vs-premium-theme"
  | ServicePath;

const topics: {
  title: string;
  lead: string;
  text: string;
  links: { label: string; to: ServicePath }[];
}[] = [
  {
    title: "Shopify Development",
    lead: "Theme customization, editable sections, app functionality and storefront architecture.",
    text: "Explore the decisions behind a Shopify implementation, including when to extend an existing setup and when a different approach may be appropriate.",
    links: [{ label: "Shopify Development", to: "/services/shopify-development" }],
  },
  {
    title: "Store Performance & Buying Experience",
    lead: "Loading behavior, mobile usability, product-page clarity and shopping interactions.",
    text: "Understand how to investigate a reported problem, interpret available measurements and choose an improvement that can be evaluated.",
    links: [
      { label: "Shopify Speed Optimization", to: "/services/shopify-speed-optimization" },
      { label: "Shopify CRO", to: "/services/shopify-cro" },
    ],
  },
  {
    title: "WordPress & WooCommerce",
    lead: "Website structure, editing requirements, theme choices and connected store functionality.",
    text: "Consider how a website will be used and maintained alongside the design and features it needs at launch.",
    links: [
      { label: "WordPress Development", to: "/services/wordpress-development" },
      { label: "WooCommerce Development", to: "/services/woocommerce-development" },
    ],
  },
  {
    title: "Custom Applications & SaaS MVPs",
    lead: "Workflow planning, frontend interfaces, backend APIs and first-release requirements.",
    text: "Explore the questions that help turn a software idea into a development scope, including what belongs in the initial release and what can wait.",
    links: [{ label: "Full Stack Development", to: "/services/full-stack-development" }],
  },
  {
    title: "Automation & Data Workflows",
    lead: "Repetitive tasks, API connections, web scraping and scoped AI prototypes.",
    text: "Consider the process, data and review requirements before choosing an automation approach.",
    links: [
      { label: "AI & Workflow Automation", to: "/services/ai-automation" },
      { label: "Web Scraping", to: "/services/web-scraping" },
    ],
  },
];

const articles = [
  {
    title: "Custom Shopify Theme vs Premium Theme: Which Is Right for Your Store?",
    description:
      "Compare custom and premium Shopify themes by design flexibility, functionality, maintenance, and cost to choose the right approach for your store.",
    to: "/blog/custom-shopify-theme-vs-premium-theme" as const,
  },
];

function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Development Insights"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Insights" }]}
        title={
          <>
            Make Better Decisions About Your Website, Store{" "}
            <span className="font-serif italic text-acid">and Software</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/services">Explore Services</MagneticCta>
            <MagneticCta to="/contact" variant="ghost">
              Discuss a Project
            </MagneticCta>
          </>
        }
        rail="Development Insights"
      >
        <p>
          Practical explanations of development choices, common technical problems and the work
          involved in improving a digital product.
        </p>
        <p>
          I’m Mohid Imran, a Shopify and full stack developer. This is where I share what to
          consider before starting a build, choosing a tool or changing an existing implementation.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Introduction
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Start With the Question You Need
              <span className="font-serif italic text-acid"> Answered</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Should you customize your Shopify theme or build a new one? Does your store need a
                redesign, or would a focused fix be enough? Is a custom application justified when
                an existing tool already handles part of the process?
              </p>
              <p>The useful answer depends on your requirements.</p>
              <p>
                My approach is to explain the options, their limitations and the questions worth
                asking before committing to development. Where an example comes from a project, its
                context and my contribution should be clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Topics</p>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {topics.map((topic, i) => (
              <motion.article
                key={topic.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h2 className="font-display text-3xl leading-[0.95] tracking-tight md:text-5xl">
                    {topic.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {topic.lead}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    {topic.text}
                  </p>
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      {topic.links.length > 1 ? "Related Services" : "Related Service"}
                    </span>
                    {topic.links.map((link) => (
                      <TextLink key={link.to} to={link.to} tone="bone" className="mt-0">
                        {link.label}
                      </TextLink>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Articles</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Latest
            <span className="font-serif italic text-acid"> Articles</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            Browse the published guides below. Each article focuses on a specific question, with
            relevant examples and links to further information where useful.
          </p>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {articles.map((article, i) => (
              <article key={article.to} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">
                    <Link to={article.to} className="transition-colors hover:text-acid">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {article.description}
                  </p>
                  <TextLink to={article.to} tone="ink">
                    Read Article
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Evidence
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Looking for Examples of My Development
              <span className="font-serif italic text-acid"> Work?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My portfolio includes Shopify theme projects, app functionality and client
                storefront work.
              </p>
              <p>
                Explore the projects to understand the technologies involved and my contribution,
                then discuss the experience relevant to your requirement.
              </p>
            </div>
            <div className="mt-10">
              <PrimaryLink to="/portfolio">View My Portfolio</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-ink/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Need an Answer Specific to
            <span className="font-serif italic text-acid"> Your Project?</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
            <p>
              A general guide can explain the options. Your website, codebase and business
              requirements determine which approach fits.
            </p>
            <p>Share your current setup and the problem you want to solve.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact" tone="ink">
              Discuss Your Project
            </PrimaryLink>
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
            >
              Explore Services
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function PrimaryLink({
  children,
  to,
  tone = "acid",
}: {
  children: string;
  to: PageLink;
  tone?: "acid" | "ink";
}) {
  const classes =
    tone === "acid"
      ? "bg-acid text-ink hover:bg-bone"
      : "bg-ink text-bone hover:bg-acid hover:text-ink";
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] transition-colors md:text-xs ${classes}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

function SecondaryLink({ children, to }: { children: string; to: PageLink }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid md:text-xs"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </Link>
  );
}

function TextLink({
  children,
  to,
  tone,
  className = "mt-8",
}: {
  children: string;
  to: PageLink;
  tone: "ink" | "bone";
  className?: string;
}) {
  const border = tone === "ink" ? "border-ink/30" : "border-bone/30";
  return (
    <Link
      to={to}
      className={`${className} inline-flex items-center gap-2 border-b ${border} pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid`}
    >
      {children} →
    </Link>
  );
}
