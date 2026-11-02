import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/headless-shopify-development")({
  head: () => ({
    meta: [
      { title: "Headless Shopify Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore headless Shopify development with Mohid Imran. Plan a custom storefront using Hydrogen, with clear scope, integrations, testing and handover.",
      },
      { property: "og:title", content: "Headless Shopify Development | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Explore headless Shopify development with Mohid Imran. Plan a custom storefront using Hydrogen, with clear scope, integrations, testing and handover.",
      },
    ],
  }),
  component: HeadlessShopifyDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Required Experience Does Not Fit the Theme Structure",
    text: "The storefront needs interactions, layouts or navigation that would require extensive workarounds in your current theme.",
    follow:
      "We can compare a headless implementation with a custom theme before choosing an approach.",
  },
  {
    title: "Content and Commerce Need to Work Together Differently",
    text: "Your website combines substantial editorial content with product discovery and shopping.",
    follow: "We can review how that content should be managed, presented and connected to Shopify.",
  },
  {
    title: "You Need a Storefront Connected to Other Systems",
    text: "The customer experience depends on information or functionality from more than one source.",
    follow:
      "An architecture review helps establish how those systems should connect and which dependencies affect the build.",
  },
  {
    title: "You Already Have a Headless Storefront That Needs Development",
    text: "Your existing frontend needs new features, integration changes or investigation into a technical problem.",
    follow:
      "I can review the available code, documentation and deployment setup before confirming the scope.",
  },
];

const approachChecks = [
  "What the customer experience needs to do.",
  "Which requirements a suitable theme can support.",
  "How your team manages products and content.",
  "The apps and integrations the storefront depends on.",
  "Who will maintain the frontend after launch.",
  "The budget and resources available for ongoing development.",
];

const scopeItems = [
  {
    title: "Storefront Planning",
    text: "Define the required pages, customer journeys and functionality before selecting the implementation approach.",
  },
  {
    title: "Hydrogen Storefront Development",
    text: "Develop agreed storefront templates and components using Shopify’s headless toolkit.",
  },
  {
    title: "Storefront API Integration",
    text: "Connect the frontend with the Shopify information and shopping functionality required by the project.",
  },
  {
    title: "Product Discovery & Presentation",
    text: "Build the agreed collection, product and navigation experiences, including relevant product-selection interactions.",
  },
  {
    title: "Content-System Integration",
    text: "Assess and implement an agreed content-management connection where the project requires one.",
  },
  {
    title: "Existing Storefront Improvements",
    text: "Review and extend a current headless implementation, subject to the available code, access and technical setup.",
  },
];

const journeyItems = [
  "Navigation and collection browsing.",
  "Product information and variant selection.",
  "Search and filtering requirements.",
  "Cart interactions and checkout handoff.",
  "Mobile layouts and touch interactions.",
  "Loading, empty and error states.",
];

const dependencyItems = [
  "Features that can be retained.",
  "Connections that need development.",
  "Functionality that needs an alternative approach.",
  "Ongoing dependencies and maintenance responsibilities.",
];

const deliverables = [
  "A headless-versus-theme assessment.",
  "Defined storefront templates and functionality.",
  "The agreed frontend implementation.",
  "Shopify and third-party connections.",
  "Responsive and functional testing.",
  "Agreed SEO and performance checks.",
  "Deployment configuration.",
  "Documentation and handover guidance.",
];

const processSteps = [
  {
    title: "Assess the Requirement",
    text: "We review the current store, desired experience and business constraints. The first decision is whether a headless approach is justified.",
  },
  {
    title: "Define the Architecture",
    text: "We agree on the frontend, content sources, integrations, hosting responsibilities and essential customer journeys.",
  },
  {
    title: "Build and Review",
    text: "I develop the agreed templates and functionality, sharing progress at suitable review points.",
  },
  {
    title: "Test the Connected Experience",
    text: "Testing covers the affected layouts, shopping interactions, content flows and integrations.",
  },
  {
    title: "Prepare for Launch",
    text: "We review release requirements, any URL changes and the responsibilities needed for launch.",
  },
  {
    title: "Hand Over and Plan Maintenance",
    text: "You receive the agreed access and documentation. Ongoing development and support are arranged around the delivered setup.",
  },
];

const faqs = [
  {
    q: "How is headless Shopify different from a custom theme?",
    a: "A custom theme works within Shopify’s theme system. A headless project uses a separately developed frontend connected to Shopify. The appropriate choice depends on the experience and functionality you need.",
  },
  {
    q: "Will headless make my store faster?",
    a: "Not automatically. Performance depends on the implementation, media, scripts, data requests and other dependencies. A suitable theme can also perform well.",
  },
  {
    q: "Do I need Shopify Hydrogen?",
    a: "Hydrogen is an option for building a Shopify-connected storefront. We review the frontend requirements and maintenance arrangements before confirming the stack.",
  },
  {
    q: "Can you work on an existing headless storefront?",
    a: "Potentially. I first review the framework, codebase, integrations and deployment setup to understand the work involved.",
  },
  {
    q: "Will my current Shopify apps continue working?",
    a: "Each relevant app needs to be assessed. Some functionality may require a separate integration or an alternative implementation.",
  },
  {
    q: "Can my team continue managing products in Shopify?",
    a: "Product management can remain in Shopify. We define how the frontend uses that information and where any additional website content is maintained.",
  },
  {
    q: "Can you preserve existing URLs during a rebuild?",
    a: "URL preservation and redirects can be included in the scope. We review the existing structure and identify the changes required before release.",
  },
  {
    q: "What determines the project cost and timeline?",
    a: "The number of templates, shopping interactions, content requirements, integrations and testing needs all affect the estimate. A reliable scope follows the initial assessment.",
  },
  {
    q: "Who maintains the storefront after launch?",
    a: "We agree on responsibility for the frontend, hosting, integrations and further development before launch. Ongoing support can be arranged.",
  },
];

function HeadlessShopifyDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Headless Shopify Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development", to: "/services/shopify-development" },
          { label: "Headless Development" },
        ]}
        title={
          <>
            A Custom Shopify Storefront for Requirements That Go{" "}
            <span className="font-serif italic text-acid">Beyond a Theme</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Storefront</MagneticCta>
            <MagneticCta href="#choosing-approach" variant="ghost">
              Compare Headless & Theme Development
            </MagneticCta>
          </>
        }
        rail="Custom storefronts · Hydrogen development · Storefront API integration · Responsive interfaces"
      >
        <p>
          Your business may need a shopping experience that is difficult to deliver through a
          conventional Shopify theme.
        </p>
        <p>
          I’m Mohid Imran, a Shopify and full stack developer. I help assess headless requirements
          and develop custom storefronts using Hydrogen and Shopify’s Storefront API.
        </p>
        <p>We start by establishing whether headless is the right approach for your project.</p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Service Introduction
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What Does Headless Shopify
              <span className="font-serif italic text-acid"> Development Mean?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A headless storefront separates the customer-facing website from Shopify’s theme
                system.
              </p>
              <p>
                Shopify continues to provide the commerce backend, while a separate frontend
                presents your products and shopping experience. This gives the development team more
                control over the interface, alongside responsibility for building and maintaining
                that frontend.
              </p>
              <p>
                The decision should follow your requirements, available resources and ongoing
                maintenance plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Client Problems
              </p>
              <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
                Where Might a Headless Approach
                <span className="font-serif italic text-acid"> Help?</span>
              </h2>
              <TextLink to="/contact" tone="bone">
                Share Your Storefront Requirements
              </TextLink>
            </div>
            <div className="col-span-12 divide-y divide-white/10 border-y border-white/10 md:col-span-8">
              {clientProblems.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05, duration: 0.55 }}
                  className="grid gap-4 py-8 md:grid-cols-12"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-10">
                    <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bone/70 md:text-base">
                      {item.text}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone/55 md:text-base">
                      {item.follow}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="choosing-approach"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Choosing an Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Do You Actually Need
              <span className="font-serif italic text-acid"> Headless Shopify?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Headless is one way to build a storefront. A well-developed Shopify theme may meet
                your requirements with less development and maintenance.
              </p>
              <p>Before recommending a separate frontend, I consider:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {approachChecks.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              You receive a recommendation based on those requirements, including where theme
              development may be sufficient.
            </p>
            <TextLink to="/services/shopify-theme-development" tone="ink">
              Explore Custom Shopify Theme Development
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Can a Headless Project
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {scopeItems.map((item, i) => (
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
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            The final scope depends on your requirements and the capabilities of the connected
            systems.
          </p>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Customer Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan the Complete
              <span className="font-serif italic text-acid"> Shopping Journey</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A custom frontend needs more than a homepage design.</p>
              <p>
                We define how visitors discover products, move between pages, choose options and
                progress toward a purchase. We also consider what happens when information is
                missing, a request takes longer than expected or an item is unavailable.
              </p>
              <p>Depending on the project, planning can cover:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {journeyItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              These details help turn the visual design into a usable application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Content Management
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Keep Everyday Store Updates
              <span className="font-serif italic text-acid"> in the Plan</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The people maintaining the storefront need a clear way to manage its content.</p>
              <p>
                Before development, we identify where product information, promotional content and
                editorial material will live. We also agree on which changes your team should be
                able to make independently.
              </p>
              <p>
                Any content preview, publishing workflow or additional editing interface needs to be
                included in the scope.
              </p>
              <p>
                The handover should explain how the delivered setup works and where development
                support is still required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Apps & Integrations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Review Dependencies Before
              <span className="font-serif italic text-acid"> Committing to the Build</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Existing app functionality needs to be assessed for the proposed frontend.</p>
              <p>
                A feature working in your current theme does not establish how it will work in a
                separate storefront. We review the integrations involved, their available interfaces
                and any additional implementation required.
              </p>
              <p>This review helps identify:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {dependencyItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <TextLink to="/services/shopify-app-development" tone="ink">
              Explore Shopify App Development & Integrations
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / SEO & Performance
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Include Search and Performance Requirements
              <span className="font-serif italic text-acid"> From the Start</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Headless architecture does not automatically improve search rankings or loading
                performance.
              </p>
              <p>
                A storefront project needs deliberate attention to page rendering, crawlable
                content, internal links, page metadata and relevant structured data. A migration
                also needs a plan for any changed URLs.
              </p>
              <p>
                Performance work considers the interface, media, scripts and connected systems
                involved. We agree on suitable checks and compare results under consistent
                conditions.
              </p>
              <p>
                These requirements should form part of the development scope rather than being left
                until launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Relevant Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Shopify Development With
              <span className="font-serif italic text-acid"> a Full Stack Background</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My development experience includes Liquid themes, Shopify app functionality,
                Hydrogen and Storefront API work, alongside custom frontend interfaces and Django
                REST APIs.
              </p>
              <p>
                That background helps me consider how the storefront, commerce functionality and
                connected systems fit together.
              </p>
              <p>
                We can discuss the parts of my experience relevant to your project and identify any
                requirement that needs further investigation.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-acid px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bone md:text-xs"
              >
                View My Development Work
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                to="/resume"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
              >
                Explore My Experience
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Deliverables
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Know What the Engagement
              <span className="font-serif italic text-acid"> Covers</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Depending on the agreed scope, deliverables can include:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Design creation, content migration, hosting, monitoring and ongoing maintenance are
              defined separately where required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From Architecture Review to
            <span className="font-serif italic text-acid"> Storefront Handover</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {processSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-mist md:col-span-7 md:text-base">
                  {step.text}
                </p>
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Let’s Decide Whether Headless Fits
            <span className="font-serif italic text-acid"> Your Store</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Share your current website and explain what you need the storefront to do differently.
            </p>
            <p>
              We can compare the available approaches and define the development work before
              committing to a build.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Storefront</PrimaryLink>
            <SecondaryLink to="/services/shopify-theme-development">
              Explore Theme Development
            </SecondaryLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function PrimaryLink({ children, to }: { children: string; to: PageLink }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-acid px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone md:text-xs"
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
