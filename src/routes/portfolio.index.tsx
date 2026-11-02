import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Shopify Development Portfolio | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore Mohid Imran’s Shopify development portfolio, including custom theme projects, app functionality, client storefront work and the technologies involved.",
      },
      { property: "og:title", content: "Shopify Development Portfolio | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Explore Mohid Imran’s Shopify development portfolio, including custom theme projects, app functionality, client storefront work and the technologies involved.",
      },
    ],
  }),
  component: PortfolioPage,
});

type PageLink =
  | "/contact"
  | "/portfolio"
  | "/portfolio/salesforge"
  | "/portfolio/mobuxe"
  | "/portfolio/blaze"
  | "/resume"
  | "/services"
  | ServicePath;

type FilterId = "all" | "themes" | "apps" | "clients";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "themes", label: "Shopify Themes" },
  { id: "apps", label: "Shopify App Development" },
  { id: "clients", label: "Client Storefront Work" },
];

const salesforgeFeatures = [
  "Product bundles and a bundle builder.",
  "Frequently bought together recommendations.",
  "Announcement bars and countdown timers.",
  "Pre-order functionality.",
  "A cart drawer.",
];

const salesforgeTech = [
  "Remix",
  "Polaris",
  "App Bridge",
  "Shopify Functions",
  "Theme App Extensions",
  "Prisma ORM",
];

const mobuxeFocus = [
  "Online Store 2.0 theme architecture.",
  "Reusable sections and templates.",
  "Merchant editing controls.",
  "Responsive storefront layouts.",
];

const blazeFocus = [
  "Fashion-focused storefront presentation.",
  "Online Store 2.0 templates and sections.",
  "Responsive frontend implementation.",
  "Theme structure and code quality.",
];

const themeTech = ["Liquid", "Online Store 2.0", "HTML", "CSS", "JavaScript"];

const clientProjects = [
  "Apolo-Untold",
  "SweetNyWellness",
  "Kaasida",
  "Outstanding Nutrition",
  "ArtfullyWalls",
];

const experienceGuides = [
  {
    title: "You Need a Custom Theme or Editable Sections",
    text: "Mobuxe and Blaze provide examples of my Shopify theme-development work.",
    follow:
      "For your project, we would define the required templates, components and editing controls around your design and content.",
    link: "Explore Theme Development",
    to: "/services/shopify-theme-development" as const,
  },
  {
    title: "You Need App Functionality",
    text: "SalesForge provides an example of development involving merchant controls, storefront features and Shopify app components.",
    follow:
      "Your requirement would receive its own scope, including the business rules and integrations involved.",
    link: "Explore App Development",
    to: "/services/shopify-app-development" as const,
  },
  {
    title: "You Need an Existing Store Improved",
    text: "My client work includes theme changes, app integrations, responsive implementation and frontend improvements.",
    follow:
      "Share the current store and the issue so we can determine which experience is relevant.",
    link: "Explore Shopify Support",
    to: "/services/shopify-support" as const,
  },
];

const faqs = [
  {
    q: "Did you develop the projects shown here?",
    a: "The descriptions identify my development contribution and the project context. Client-project responsibilities varied by engagement.",
  },
  {
    q: "Are Mobuxe and Blaze approved Shopify Theme Store products?",
    a: "They are presented here as theme-development projects targeting Shopify Theme Store submission. That description does not establish marketplace approval or commercial availability.",
  },
  {
    q: "Can you build similar functionality for my store?",
    a: "We can review the requirement. Feasibility and scope depend on your store, the intended behavior and relevant platform or integration constraints.",
  },
  {
    q: "Can you explain the technical work behind a project?",
    a: "Yes. We can discuss the parts relevant to your requirement, subject to any client confidentiality or access restrictions.",
  },
  {
    q: "Do you take projects outside Shopify?",
    a: "Yes. My broader development work includes WordPress, WooCommerce, frontend interfaces, Python/Django REST APIs and automated data collection. We can discuss the scope and relevant experience for your requirement.",
  },
  {
    q: "How do I start a project?",
    a: "Share your website or application, describe what you want to build or improve and include any useful designs or examples.",
  },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<FilterId>("all");
  const showApps = filter === "all" || filter === "apps";
  const showThemes = filter === "all" || filter === "themes";
  const showClients = filter === "all" || filter === "clients";

  return (
    <SiteShell>
      <PageHero
        eyebrow="Development Portfolio"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
        title={
          <>
            Explore the Projects Behind My Development{" "}
            <span className="font-serif italic text-acid">Work</span>
          </>
        }
        actions={
          <>
            <MagneticCta href="#project-navigation">Explore Projects</MagneticCta>
            <MagneticCta to="/contact" variant="ghost">
              Discuss Your Project
            </MagneticCta>
          </>
        }
        rail="Development Portfolio"
      >
        <p>A closer look at Shopify themes, app functionality and client storefront development.</p>
        <p>
          I’m Mohid Imran. My work includes custom Liquid development, editable storefront sections,
          app integrations and responsive interfaces. The projects below show different parts of
          that experience.
        </p>
      </PageHero>

      <section
        id="project-navigation"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Project Navigation
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Find Work Relevant to
            <span className="font-serif italic text-acid"> Your Requirement</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`min-h-11 border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors md:text-xs ${
                    active
                      ? "border-ink bg-ink text-bone"
                      : "border-ink/20 text-ink hover:border-acid hover:text-acid"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Looking for a particular feature or implementation? Tell me what you need, and we can
            discuss the experience relevant to your project.
          </p>
          <TextLink to="/contact" tone="ink">
            Discuss Relevant Experience
          </TextLink>
        </div>
      </section>

      {showApps ? (
        <section id="salesforge" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Shopify App Development
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              <Link to="/portfolio/salesforge" className="transition-colors hover:text-acid">
                Sales
                <span className="font-serif italic text-acid">Forge</span>
              </Link>
            </h2>
            <dl className="mt-8 grid max-w-3xl gap-4 text-sm md:grid-cols-2 md:text-base">
              <MetaItem label="Project Type" value="Shopify App" />
              <MetaItem label="My Contribution" value="App development" />
            </dl>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                SalesForge is a Shopify sales and conversion suite with functionality spanning
                product discovery, promotional features and cart interactions.
              </p>
              <p>
                The project includes product bundles, frequently bought together recommendations,
                announcement bars, countdown timers, pre-orders, a cart drawer and a bundle builder.
              </p>
            </div>

            <div className="mt-14 border-t border-white/10 pt-10">
              <h3 className="font-serif text-2xl italic md:text-3xl">Development Scope</h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                The work brought together merchant-facing controls and storefront functionality
                across several features. It involved app interfaces, configurable components and the
                application logic supporting the agreed behavior.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-serif text-2xl italic md:text-3xl">Features Developed</h3>
              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
                {salesforgeFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-serif text-2xl italic md:text-3xl">Technologies</h3>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mist md:text-xs">
                {salesforgeTech.join(" · ")}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <TextLink to="/portfolio/salesforge" tone="bone" className="mt-0">
                View SalesForge Case Study
              </TextLink>
              <TextLink to="/services/shopify-app-development" tone="bone" className="mt-0">
                Shopify App Development & Integrations
              </TextLink>
              <PrimaryLink to="/contact">Discuss an App Requirement</PrimaryLink>
            </div>
          </div>
        </section>
      ) : null}

      {showThemes ? (
        <>
          <section
            id="mobuxe"
            className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
          >
            <div className="mx-auto max-w-[1400px]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Shopify Theme Development
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                <Link to="/portfolio/mobuxe" className="transition-colors hover:text-acid">
                  Mobu
                  <span className="font-serif italic text-acid">xe</span>
                </Link>
              </h2>
              <dl className="mt-8 grid max-w-3xl gap-4 text-sm md:grid-cols-2 md:text-base">
                <MetaItem
                  label="Project Type"
                  value="Shopify Online Store 2.0 Theme"
                  light={false}
                />
                <MetaItem
                  label="Project Context"
                  value="Developed for Shopify Theme Store submission"
                  light={false}
                />
                <MetaItem label="My Contribution" value="Theme development" light={false} />
              </dl>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
                <p>Mobuxe is a Shopify theme project with more than 80 sections.</p>
                <p>
                  The development work focused on reusable storefront components, configurable
                  layouts and the theme structure supporting an editable shopping experience.
                </p>
              </div>

              <div className="mt-14 border-t border-ink/10 pt-10">
                <h3 className="font-serif text-2xl italic md:text-3xl">Development Focus</h3>
                <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
                  {mobuxeFocus.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl italic md:text-3xl">Technologies</h3>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mist md:text-xs">
                  {themeTech.join(" · ")}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <TextLink to="/portfolio/mobuxe" tone="ink" className="mt-0">
                  View Mobuxe Case Study
                </TextLink>
                <TextLink to="/services/shopify-theme-development" tone="ink" className="mt-0">
                  Custom Shopify Theme Development
                </TextLink>
                <PrimaryLink to="/contact" tone="ink">
                  Discuss a Theme Project
                </PrimaryLink>
              </div>
            </div>
          </section>

          <section id="blaze" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Shopify Theme Development
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                <Link to="/portfolio/blaze" className="transition-colors hover:text-acid">
                  Bla
                  <span className="font-serif italic text-acid">ze</span>
                </Link>
              </h2>
              <dl className="mt-8 grid max-w-3xl gap-4 text-sm md:grid-cols-2 md:text-base">
                <MetaItem label="Project Type" value="Shopify Online Store 2.0 Theme" />
                <MetaItem
                  label="Project Context"
                  value="Developed targeting Shopify Theme Store submission"
                />
                <MetaItem label="My Contribution" value="Theme development" />
              </dl>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
                <p>
                  Blaze is a luxury fashion theme project built using Shopify’s Online Store 2.0
                  architecture.
                </p>
                <p>
                  The work focused on translating a visual direction into responsive storefront
                  templates, with attention to product presentation and reusable theme components.
                </p>
              </div>

              <div className="mt-14 border-t border-white/10 pt-10">
                <h3 className="font-serif text-2xl italic md:text-3xl">Development Focus</h3>
                <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
                  {blazeFocus.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl italic md:text-3xl">Technologies</h3>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mist md:text-xs">
                  {themeTech.join(" · ")}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <TextLink to="/portfolio/blaze" tone="bone" className="mt-0">
                  View Blaze Case Study
                </TextLink>
                <TextLink to="/services/shopify-theme-development" tone="bone" className="mt-0">
                  Custom Shopify Theme Development
                </TextLink>
                <PrimaryLink to="/contact">Discuss a Similar Requirement</PrimaryLink>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {showClients ? (
        <section
          id="client-storefront-work"
          className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1400px]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Client Storefront Work
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Development Across Client
              <span className="font-serif italic text-acid"> Ecommerce Projects</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My client project experience includes Apolo-Untold, SweetNyWellness, Kaasida,
                Outstanding Nutrition and ArtfullyWalls.
              </p>
              <p>
                Across these projects, my work has included Shopify theme development, app
                integration, responsive layouts and frontend optimization. The scope varied between
                engagements.
              </p>
            </div>

            <div className="mt-14">
              <h3 className="font-serif text-2xl italic md:text-3xl">Selected Client Projects</h3>
              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
                {clientProjects.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/contact" tone="ink">
                Discuss Your Storefront
              </PrimaryLink>
              <Link
                to="/services/shopify-development"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
              >
                Explore Shopify Development
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
      ) : null}

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Choosing Relevant Experience
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Look for the Work That Matches
            <span className="font-serif italic text-acid"> Your Problem</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {experienceGuides.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    {item.follow}
                  </p>
                  <TextLink to={item.to} tone="bone">
                    {item.link}
                  </TextLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              The Requirement Determines
              <span className="font-serif italic text-acid"> the Implementation</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A visual example is useful, but your project may have different products, users and
                operational needs.
              </p>
              <p>
                Before recommending an implementation, I review what you want to achieve, the
                current setup and the functionality required. That helps establish what can be
                reused, what needs development and how the work should be reviewed.
              </p>
              <p>
                You can bring a complete brief, a supplied design or a problem that needs
                investigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Frequently Asked Questions
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Frequently Asked
            <span className="font-serif italic text-acid"> Questions</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, i) => (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.q}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.a}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-ink/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Have a Requirement Similar to Something You’ve
            <span className="font-serif italic text-acid"> Seen?</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
            <p>
              Tell me which feature, layout or workflow is relevant—and what your business needs it
              to do.
            </p>
            <p>We can use that as a starting point for defining your project.</p>
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

function MetaItem({
  label,
  value,
  light = true,
}: {
  label: string;
  value: string;
  light?: boolean;
}) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{label}</dt>
      <dd className={`mt-2 ${light ? "text-bone/80" : "text-ink"}`}>{value}</dd>
    </div>
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
