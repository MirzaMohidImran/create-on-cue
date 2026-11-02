import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/portfolio/salesforge")({
  head: () => ({
    meta: [
      { title: "SalesForge Shopify App Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore SalesForge, a Shopify app project developed by Mohid Imran, featuring bundles, recommendations, pre-orders, promotional tools and a cart drawer.",
      },
      {
        property: "og:title",
        content: "SalesForge Shopify App Development | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Explore SalesForge, a Shopify app project developed by Mohid Imran, featuring bundles, recommendations, pre-orders, promotional tools and a cart drawer.",
      },
    ],
  }),
  component: SalesforgePage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const overviewItems = [
  { label: "Project Type", value: "Shopify App" },
  { label: "My Contribution", value: "App Development" },
  {
    label: "Feature Areas",
    value:
      "Product Bundles · Recommendations · Promotional Messaging · Pre-Orders · Cart Functionality",
  },
  {
    label: "Technologies",
    value: "Remix · Polaris · App Bridge · Shopify Functions · Theme App Extensions · Prisma ORM",
  },
];

const features = [
  {
    title: "Product Bundles & Bundle Builder",
    text: "Functionality for presenting product bundles and supporting a bundle-building experience.",
    follow: "This formed part of the application’s product-selection and sales-feature scope.",
  },
  {
    title: "Frequently Bought Together Recommendations",
    text: "A recommendation feature for presenting related products within the shopping experience.",
  },
  {
    title: "Announcement Bars",
    text: "Storefront messaging components for displaying promotional information.",
  },
  {
    title: "Countdown Timers",
    text: "A timer feature included within the promotional-tool scope.",
  },
  {
    title: "Pre-Order Functionality",
    text: "Functionality supporting pre-order requirements within the application.",
  },
  {
    title: "Cart Drawer",
    text: "A cart-drawer feature included as part of the storefront interaction work.",
  },
];

const stackItems = [
  "App development with Remix.",
  "Interface components using Polaris.",
  "Shopify app integration using App Bridge.",
  "Functionality involving Shopify Functions.",
  "Storefront components through Theme App Extensions.",
  "Data handling with Prisma ORM.",
];

const relevantServices = [
  {
    title: "Shopify App Development",
    text: "Relevant when your store needs functionality beyond the available theme settings or existing app configuration.",
    link: "Explore Shopify App Development",
    to: "/services/shopify-app-development" as const,
  },
  {
    title: "Storefront Feature Development",
    text: "Relevant when a feature needs to appear within product pages, promotional areas or the cart experience.",
    link: "Explore Shopify Development",
    to: "/services/shopify-development" as const,
  },
  {
    title: "Theme Development",
    text: "If your requirement concerns a layout or reusable section rather than an application, theme development may be a more suitable starting point.",
    link: "Explore Theme Development",
    to: "/services/shopify-theme-development" as const,
  },
];

const faqs = [
  {
    q: "Did you develop SalesForge?",
    a: "Yes. SalesForge is included in my development work, with the feature scope and technology stack described on this page.",
  },
  {
    q: "Does this case study show measured conversion results?",
    a: "No measured sales or conversion uplift is presented here. This page documents the development contribution and functionality.",
  },
  {
    q: "Can you build a similar feature for my store?",
    a: "We can review the requirement. The scope depends on your store setup, intended behavior and relevant platform or integration capabilities.",
  },
  {
    q: "Would my store need the complete feature suite?",
    a: "Not necessarily. Your requirement may involve one focused feature, an existing tool or a different implementation approach.",
  },
  {
    q: "Can you connect a custom app with our existing systems?",
    a: "I can assess the proposed integration. Feasibility depends on the available interfaces, documentation and access.",
  },
];

function SalesforgePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify App Development Project"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "SalesForge" },
        ]}
        title={
          <>
            Sales
            <span className="font-serif italic text-acid">Forge</span>
          </>
        }
        subtitle={<>Shopify App Development for Bundles, Promotions and Cart Features</>}
        actions={
          <>
            <MagneticCta to="/contact">Discuss an App Requirement</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              Explore More Projects
            </MagneticCta>
          </>
        }
        rail="Shopify App Development Project"
      >
        <p>
          SalesForge is a Shopify sales and conversion suite I developed with features spanning
          product recommendations, promotional messaging and cart interactions.
        </p>
        <p>
          The project brings several merchant requirements into one application-development scope.
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
              / Project Purpose
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Bring Related Storefront Features Into a
              <span className="font-serif italic text-acid"> Connected Suite</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>An ecommerce feature involves more than its visible component.</p>
              <p>
                A product bundle needs functionality behind the selection. Promotional messaging
                needs a storefront presentation. Cart features need to work within the wider
                shopping journey.
              </p>
              <p>
                SalesForge brought these requirements into an app project covering both application
                functionality and customer-facing components.
              </p>
              <p>
                The project demonstrates my development work across the Shopify app stack and
                storefront features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Feature Scope</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What I<span className="font-serif italic text-acid"> Developed</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {features.map((item, i) => (
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
                  {item.follow ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist/80 md:text-base">
                      {item.follow}
                    </p>
                  ) : null}
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
              / Development Contribution
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Work Across the Application
              <span className="font-serif italic text-acid"> and Storefront</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My contribution covered the development of the SalesForge feature suite using a
                stack that included application interfaces, Shopify platform components and data
                handling.
              </p>
              <p>The work connected several areas of Shopify development:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {stackItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              These technologies supported the project’s implementation. The appropriate stack for
              another application would depend on its own requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Technical Scope
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Different Features Require Different
              <span className="font-serif italic text-acid"> Implementation Decisions</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Bundles, promotional components and cart interactions serve different purposes
                within a store.
              </p>
              <p>
                The SalesForge scope covered those feature areas within one application project. It
                provides an example of the breadth of work involved when an app includes both
                application functionality and storefront presentation.
              </p>
              <p>
                For a new project, the planning would define the exact business rules, merchant
                controls, dependencies and expected behavior before development begins.
              </p>
            </div>
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
              Explore the
              <span className="font-serif italic text-acid"> Implementation</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The project visuals show the relevant interfaces and storefront features.</p>
              <p>
                When reviewing the work, consider which part is relevant to your requirement: the
                application interface, bundle experience, promotional components or cart
                interaction.
              </p>
              <p>
                The feature scope demonstrates implementation work. Its commercial effect would
                require separate measurement within an operating store.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Relevant Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What This Project Can Help You
            <span className="font-serif italic text-acid"> Assess</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.text}
                  </p>
                  <TextLink to={item.to} tone="ink">
                    {item.link}
                  </TextLink>
                </div>
              </motion.article>
            ))}
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
            Need Custom Functionality for Your Shopify
            <span className="font-serif italic text-acid"> Store?</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
            <p>Describe the feature or workflow your business needs.</p>
            <p>
              Share your store URL, any useful examples and what your current setup cannot do. We
              can use that information to define the appropriate development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact" tone="ink">
              Discuss Your App Requirement
            </PrimaryLink>
            <Link
              to="/portfolio"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
            >
              View All Projects
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
