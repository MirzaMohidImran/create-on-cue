import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/portfolio/mobuxe")({
  head: () => ({
    meta: [
      { title: "Mobuxe Shopify Theme Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore Mobuxe, an Online Store 2.0 theme project by Mohid Imran, featuring more than 80 sections and developed for Shopify Theme Store submission.",
      },
      {
        property: "og:title",
        content: "Mobuxe Shopify Theme Development | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Explore Mobuxe, an Online Store 2.0 theme project by Mohid Imran, featuring more than 80 sections and developed for Shopify Theme Store submission.",
      },
    ],
  }),
  component: MobuxePage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const overviewItems = [
  { label: "Project Type", value: "Shopify Theme" },
  { label: "My Contribution", value: "Theme Development" },
  { label: "Platform", value: "Shopify Online Store 2.0" },
  { label: "Section Library", value: "More than 80 sections" },
  {
    label: "Project Context",
    value: "Developed for Shopify Theme Store submission",
  },
  { label: "Technologies", value: "Liquid · HTML · CSS · JavaScript" },
];

const developmentScope = [
  {
    title: "Theme Architecture",
    text: "Developed the theme using Online Store 2.0, organizing the implementation around templates, sections and supporting code.",
  },
  {
    title: "Section Development",
    text: "Built a library of more than 80 sections as part of the theme project.",
  },
  {
    title: "Configurable Layouts",
    text: "Developed storefront components with settings supporting the agreed editing experience.",
  },
  {
    title: "Responsive Implementation",
    text: "Worked on frontend layouts across screen sizes, with attention to how storefront content is presented.",
  },
  {
    title: "Code Quality",
    text: "Reviewed the theme with Shopify Theme Check as part of the development work.",
  },
];

const relevantServices = [
  {
    title: "Custom Shopify Theme Development",
    text: "For businesses that need a tailored theme or storefront implementation.",
    link: "Explore Theme Development",
    to: "/services/shopify-theme-development" as const,
  },
  {
    title: "Custom Sections & Theme Changes",
    text: "For an existing store that needs specific layouts or reusable components.",
    link: "Discuss a Theme Requirement",
    to: "/contact" as const,
  },
  {
    title: "Store Development & Redesign",
    text: "For a wider project involving storefront planning, templates and launch requirements.",
    link: "Explore Store Development",
    to: "/services/shopify-store-development" as const,
  },
];

const faqs = [
  {
    q: "Did you develop Mobuxe?",
    a: "Yes. Mobuxe is a Shopify theme-development project included in my portfolio.",
  },
  {
    q: "Is Mobuxe approved for the Shopify Theme Store?",
    a: "This page presents Mobuxe as a theme developed for submission. It does not claim marketplace approval.",
  },
  {
    q: "Does every store need this many sections?",
    a: "No. A client theme should include the components and controls that support its requirements. More sections do not automatically make a store better.",
  },
  {
    q: "Can you develop sections for my existing theme?",
    a: "Yes. I can review the theme and required functionality before confirming the scope.",
  },
  {
    q: "Does a clean Theme Check result guarantee performance or sales?",
    a: "No. Code checks, loading performance, usability and commercial outcomes require different assessments.",
  },
];

function MobuxePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Theme Development Project"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Mobuxe" },
        ]}
        title={
          <>
            Mobu
            <span className="font-serif italic text-acid">xe</span>
          </>
        }
        subtitle={<>An Online Store 2.0 Theme With More Than 80 Sections</>}
        actions={
          <>
            <MagneticCta to="/contact">Discuss a Theme Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View All Projects
            </MagneticCta>
          </>
        }
        rail="Shopify Theme Development Project"
      >
        <p>Mobuxe is a Shopify theme project I developed for Shopify Theme Store submission.</p>
        <p>
          The project focused on reusable storefront sections, configurable layouts and a theme
          structure that supports merchant editing.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Project Overview
          </p>
          <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {overviewItems.map((item, i) => (
              <div
                key={item.label}
                className="grid gap-4 py-6 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist md:col-span-3">
                  {item.label}
                </dt>
                <dd className="text-base text-ink md:col-span-8">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Focus
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Build a Theme Around Reusable
              <span className="font-serif italic text-acid"> Storefront Components</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                An editable theme needs to support the people managing the store as well as the
                customers browsing it.
              </p>
              <p>
                Mobuxe was developed around a broad section library and configurable layouts. The
                work involved organizing storefront components within Shopify’s Online Store 2.0
                architecture.
              </p>
              <p>
                The project provides an example of my experience developing a larger theme codebase
                with reusable components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What I<span className="font-serif italic text-acid"> Worked On</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {developmentScope.map((item, i) => (
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Merchant Editing
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Give Store Content a
              <span className="font-serif italic text-acid"> Reusable Structure</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A section library is useful when its components can support practical page-building
                tasks.
              </p>
              <p>
                Mobuxe’s development included reusable sections and configurable layouts, allowing
                content presentation to be organized within the theme’s editing structure.
              </p>
              <p>
                For a client project, the required sections and controls would be defined around the
                store’s actual content needs. A large section count would not be an objective by
                itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Technical Work
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Liquid Development Supported by
              <span className="font-serif italic text-acid"> Frontend Implementation</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The theme-development work combined Liquid with HTML, CSS and JavaScript.</p>
              <p>
                Liquid supported the Shopify theme structure, while frontend implementation handled
                the presentation and interactive behavior included in the project.
              </p>
              <p>
                The section library required attention to how reusable components were organized and
                maintained across the codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Code Review</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Theme Check Results Recorded in the
              <span className="font-serif italic text-acid"> Project</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                The supplied project record reports{" "}
                <span className="text-bone">zero Theme Check errors across 320 files</span>.
              </p>
              <p>
                That result describes the recorded code-check outcome. It does not establish Theme
                Store approval, real-user performance or a measured conversion result.
              </p>
              <p>Any later code changes would need their own review.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Visuals
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              See the Theme
              <span className="font-serif italic text-acid"> Implementation</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Explore the actual theme screens and section examples to review the storefront
                presentation and editing approach.
              </p>
              <p>
                The most useful examples show both the customer-facing layout and the controls used
                to manage the relevant content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Relevant Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            How This Project Relates to
            <span className="font-serif italic text-acid"> Client Work</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {relevantServices.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
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
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Frequently Asked Questions
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Frequently Asked
            <span className="font-serif italic text-acid"> Questions</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.a}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Need a Theme That Fits Your Store’s
            <span className="font-serif italic text-acid"> Requirements?</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/70 md:text-lg">
            <p>Share your current theme, supplied designs or the sections you want to build.</p>
            <p>
              We can define the templates, functionality and editing controls your project needs.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Theme Project</PrimaryLink>
            <SecondaryLink to="/portfolio">Explore More Work</SecondaryLink>
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
