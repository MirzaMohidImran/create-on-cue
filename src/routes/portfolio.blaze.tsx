import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/portfolio/blaze")({
  head: () => ({
    meta: [
      { title: "Blaze Shopify Theme Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore Blaze, a luxury fashion Shopify theme project developed by Mohid Imran using Online Store 2.0 architecture for Shopify Theme Store submission.",
      },
      {
        property: "og:title",
        content: "Blaze Shopify Theme Development | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Explore Blaze, a luxury fashion Shopify theme project developed by Mohid Imran using Online Store 2.0 architecture for Shopify Theme Store submission.",
      },
    ],
  }),
  component: BlazePage,
});

type PageLink =
  "/contact" | "/portfolio" | "/portfolio/mobuxe" | "/resume" | "/services" | ServicePath;

const overviewItems = [
  { label: "Project Type", value: "Shopify Theme" },
  { label: "My Contribution", value: "Theme Development" },
  { label: "Design Direction", value: "Luxury Fashion" },
  { label: "Platform", value: "Shopify Online Store 2.0" },
  {
    label: "Project Context",
    value: "Developed targeting Shopify Theme Store submission",
  },
  { label: "Technologies", value: "Liquid · HTML · CSS · JavaScript" },
];

const contributions = [
  {
    title: "Theme Structure",
    text: "Developed the project using Online Store 2.0 architecture, organizing the implementation around Shopify templates, sections and supporting theme code.",
  },
  {
    title: "Storefront Implementation",
    text: "Used Liquid, HTML, CSS and JavaScript to build the agreed storefront presentation and functionality.",
  },
  {
    title: "Responsive Layouts",
    text: "Worked on how the theme’s layouts adapt across screen sizes, considering the presentation of content within the fashion-focused design.",
  },
  {
    title: "Code Review",
    text: "Reviewed the theme using Shopify Theme Check as part of the development work.",
  },
];

const faqs = [
  {
    q: "What was your role in Blaze?",
    a: "My contribution was Shopify theme development using Online Store 2.0 architecture and frontend technologies.",
  },
  {
    q: "Is Blaze an approved Shopify Theme Store product?",
    a: "This case study presents Blaze as a development project targeting submission. It does not claim Theme Store approval or commercial availability.",
  },
  {
    q: "Can you develop a similar theme for my business?",
    a: "We can review your requirements and define an appropriate scope. Your implementation would follow your own designs, products and operational needs.",
  },
  {
    q: "Can you work from supplied fashion-store designs?",
    a: "Yes. We would review the required templates, responsive layouts and interactions before agreeing on development.",
  },
];

function BlazePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Theme Development Project"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Blaze" },
        ]}
        title={
          <>
            Bla
            <span className="font-serif italic text-acid">ze</span>
          </>
        }
        subtitle={<>Shopify Theme Development for a Luxury Fashion Storefront</>}
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Theme Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View All Projects
            </MagneticCta>
          </>
        }
        rail="Shopify Theme Development Project"
      >
        <p>
          Blaze is a luxury fashion theme project I developed using Shopify’s Online Store 2.0
          architecture.
        </p>
        <p>
          The project focused on translating a visual direction into storefront templates and
          responsive frontend layouts, with Shopify Theme Store submission as its development
          target.
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
              / Development Focus
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Translate the Design Direction Into a
              <span className="font-serif italic text-acid"> Working Theme</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A fashion storefront needs to present its visual identity alongside the information
                customers use to browse products.
              </p>
              <p>
                My work on Blaze involved implementing the theme within Shopify’s Online Store 2.0
                structure, developing storefront templates and adapting the frontend presentation
                across screen sizes.
              </p>
              <p>
                The project is an example of my theme-development contribution. Its design direction
                and technical implementation are separate from any commercial results a store might
                achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / My Contribution
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            My<span className="font-serif italic text-acid"> Contribution</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {contributions.map((item, i) => (
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
              / Technical Record
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Recorded Theme Check
              <span className="font-serif italic text-acid"> Outcome</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                The supplied project record reports{" "}
                <span className="text-bone">zero Theme Check offenses across 119 files</span>.
              </p>
              <p>
                This describes the recorded check for that project version. It does not establish
                marketplace approval, loading performance or sales results.
              </p>
              <p>Further changes to the theme would require their own checks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Gallery
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Explore the Actual Theme
              <span className="font-serif italic text-acid"> Screens</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Review the storefront screenshots to see the visual implementation and responsive
                layouts.
              </p>
              <p>
                Desktop and mobile examples help show how the design direction was carried through
                the theme. Theme-editor examples can provide additional context for the sections and
                controls demonstrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Relevance to Your Project
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Need a Fashion Storefront With a Defined
              <span className="font-serif italic text-acid"> Visual Direction?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Blaze provides a starting point for discussing a theme-development requirement.</p>
              <p>
                For your store, we would review the brand assets, supplied designs, product
                presentation and functionality needed. That assessment helps determine whether to
                customize a suitable existing theme or develop a new implementation.
              </p>
              <p>
                The scope would also define the templates, editing controls, integrations and
                testing your project requires.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryLink to="/services/shopify-theme-development">
                Explore Theme Development
              </PrimaryLink>
              <SecondaryLink to="/contact">Discuss Your Store</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Related Work
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Explore Another Theme
              <span className="font-serif italic text-acid"> Project</span>
            </h2>
            <div className="mt-10 border-y border-ink/10 py-8">
              <h3 className="font-serif text-2xl italic md:text-3xl">
                Mobuxe — Shopify Online Store 2.0 Theme
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                A separate theme-development project with more than 80 sections, developed for
                Shopify Theme Store submission.
              </p>
              <TextLink to="/portfolio/mobuxe" tone="ink">
                View Mobuxe
              </TextLink>
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
            Bring Your Storefront Design Into
            <span className="font-serif italic text-acid"> Development</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
            <p>
              Share your current store, supplied designs or the visual direction you want to
              implement.
            </p>
            <p>
              We can define the theme structure and functionality needed to turn that requirement
              into a working storefront.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact" tone="ink">
              Discuss Your Theme Project
            </PrimaryLink>
            <Link
              to="/portfolio"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
            >
              Explore My Portfolio
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
