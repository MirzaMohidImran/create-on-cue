import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/woocommerce-development")({
  head: () => ({
    meta: [
      { title: "WooCommerce Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Get WooCommerce development services from Mohid Imran for custom stores, product pages, checkout improvements, integrations and existing-store fixes.",
      },
      { property: "og:title", content: "WooCommerce Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Get WooCommerce development services from Mohid Imran for custom stores, product pages, checkout improvements, integrations and existing-store fixes.",
      },
    ],
  }),
  component: WoocommerceDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Product Pages Do Not Explain the Offer Clearly",
    text: "Customers struggle to find important information, choose the right option or understand what they are purchasing.",
    follow: "We can review the templates and develop a more suitable product presentation.",
  },
  {
    title: "Checkout Has Become Complicated",
    text: "Forms, payment options or added functionality make the purchase journey harder to follow.",
    follow:
      "I can review the affected experience and investigate the implementation before recommending changes.",
  },
  {
    title: "Plugins Overlap or Conflict",
    text: "Several plugins support similar features, and updates affect layouts or shopping behavior.",
    follow:
      "We start by understanding what each component does and which functionality your business needs to retain.",
  },
  {
    title: "Your Team Relies on Manual Updates",
    text: "Staff move information between the store and other tools, creating repeated work and inconsistent records.",
    follow: "We can assess whether a supported integration would improve the workflow.",
  },
  {
    title: "You Need a New Store or a Wider Rebuild",
    text: "Your current website does not provide the structure or functionality required for online selling.",
    follow:
      "We can define the templates, configuration and connections needed for a coordinated store project.",
  },
];

const developmentServices = [
  {
    title: "WooCommerce Store Development",
    text: "Plan and develop a new store around your product range and shopping requirements. The scope can include storefront templates, product organization, configuration and relevant integrations.",
    when: "Businesses launching an online store through WordPress.",
  },
  {
    title: "Existing Store Customization",
    text: "Develop agreed layouts and features within a suitable existing store.",
    when: "Stores that need focused improvements rather than a complete replacement.",
  },
  {
    title: "Product & Collection Templates",
    text: "Improve how customers browse products, understand their options and reach relevant details.",
    when: "Catalogs that need clearer presentation or more useful page layouts.",
  },
  {
    title: "Cart & Checkout Improvements",
    text: "Investigate and implement agreed changes to the purchase journey.",
    when: "Stores with confusing interactions, reported faults or specific checkout requirements.",
  },
  {
    title: "Plugin & Third-Party Integrations",
    text: "Connect suitable tools and business systems around a defined workflow.",
    when: "Requirements involving payments, shipping or information exchange between systems.",
  },
  {
    title: "Store Troubleshooting",
    text: "Review reported layout issues, plugin conflicts and broken shopping functionality.",
    when: "Existing stores with problems that need diagnosis before further development.",
  },
];

const planningItems = [
  "Which product and category templates are required.",
  "How customers find and compare relevant items.",
  "What information belongs on product pages.",
  "Which options customers need to select.",
  "What your team needs to manage after launch.",
];

const shoppingExperience = [
  {
    title: "Navigation & Product Discovery",
    text: "Organize agreed categories, menus and browsing paths around the product range.",
  },
  {
    title: "Product-Page Presentation",
    text: "Present descriptions, options, images and supporting information in a coherent layout.",
  },
  {
    title: "Cart Interactions",
    text: "Make the agreed selection and quantity controls understandable and functional.",
  },
  {
    title: "Checkout Requirements",
    text: "Review the fields, payment connections and other functionality required for the purchase flow.",
  },
  {
    title: "Mobile Layouts",
    text: "Adapt the relevant pages and interactions for smaller screens.",
  },
];

const testingItems = [
  "Relevant product types and options.",
  "Add-to-cart and quantity interactions.",
  "Cart totals and configured rules.",
  "Agreed payment and shipping scenarios.",
  "Order confirmation and related behavior.",
  "Mobile and desktop layouts.",
  "Connected plugin functionality.",
];

const deliverables = [
  "A defined storefront and functionality scope.",
  "Agreed templates and responsive layouts.",
  "Required store configuration.",
  "Specified plugin and system integrations.",
  "Selected shopping-journey improvements.",
  "Functional testing.",
  "Launch preparation.",
  "Store-management and handover guidance.",
];

const processSteps = [
  {
    title: "Review the Business and Store",
    text: "We discuss your products, current setup and the problems the project should address.",
  },
  {
    title: "Define the Scope",
    text: "We agree on templates, features, integrations, content responsibilities and testing requirements.",
  },
  {
    title: "Develop and Review",
    text: "I implement the agreed work and share progress at suitable review points.",
  },
  {
    title: "Test the Shopping Journey",
    text: "We check representative products, interactions and relevant connected functionality.",
  },
  {
    title: "Prepare for Release",
    text: "We confirm content readiness, configuration and launch responsibilities.",
  },
  {
    title: "Hand Over and Plan Support",
    text: "You receive the agreed access and guidance. Further development and maintenance can be arranged.",
  },
];

const faqs = [
  {
    q: "Can you improve an existing WooCommerce store?",
    a: "Yes. I review the relevant setup and requirements before confirming the work. Some issues need investigation before implementation can be estimated.",
  },
  {
    q: "Can you develop the store from supplied designs?",
    a: "Yes. We review the templates, responsive layouts and shopping interactions, then clarify any missing requirements before development.",
  },
  {
    q: "Can you customize product pages?",
    a: "Yes. Product-page layouts and agreed functionality can be scoped around your catalog and customer needs.",
  },
  {
    q: "Can you help with checkout problems?",
    a: "I can investigate the reported behavior and relevant configuration. The solution depends on the cause and any third-party dependencies.",
  },
  {
    q: "Can you connect a payment or shipping service?",
    a: "I can assess the proposed connection and supported integration options. Availability and functionality depend on the provider and your business requirements.",
  },
  {
    q: "Do I need to replace my current theme?",
    a: "Not necessarily. A suitable theme may be extended. We compare that approach with the requirements and condition of the existing implementation.",
  },
  {
    q: "Are paid plugins and licenses included?",
    a: "Third-party costs are identified during scoping. We agree on who purchases, owns and maintains the required licenses.",
  },
  {
    q: "Will I be able to manage products myself?",
    a: "The handover can cover the product-management tasks included in the delivered setup. Any training requirements are agreed in advance.",
  },
  {
    q: "Is WooCommerce the right platform for my business?",
    a: "That depends on your existing website, selling requirements and maintenance arrangements. We can assess the fit before committing to development.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Maintenance and further development can be arranged. Coverage and responsibilities are agreed as part of the engagement.",
  },
];

function WoocommerceDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="WooCommerce Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "WooCommerce Development" },
        ]}
        title={
          <>
            Build a WooCommerce Store That Fits How You{" "}
            <span className="font-serif italic text-acid">Sell</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your WooCommerce Store</MagneticCta>
            <MagneticCta href="#development-services" variant="ghost">
              Find Your Starting Point
            </MagneticCta>
          </>
        }
        rail="New store builds · Store customization · Shopping improvements · Integrations"
      >
        <p>Your products, customers and operations may need more than a standard store setup.</p>
        <p>
          I’m Mohid Imran, a WordPress and ecommerce developer. I build and customize WooCommerce
          stores, improve existing shopping experiences and implement agreed functionality around
          your business requirements.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Client Problems
              </p>
              <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
                What Is Making Your Store Difficult to Use
                <span className="font-serif italic text-acid"> or Manage?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain What Needs to Improve
              </TextLink>
            </div>
            <div className="col-span-12 divide-y divide-ink/10 border-y border-ink/10 md:col-span-8">
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
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
                      {item.text}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist/80 md:text-base">
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
        id="development-services"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Work Your Store
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {developmentServices.map((item, i) => (
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
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      Suitable for:
                    </span>{" "}
                    {item.when}
                  </p>
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
              / Product Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Build Around the Way Customers Choose
              <span className="font-serif italic text-acid"> Your Products</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The product range affects how a store should be organized.</p>
              <p>
                Before development, we discuss product types, options, categories and the
                information customers need before buying. We also review how your team maintains
                that information.
              </p>
              <p>Planning helps establish:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {planningItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              The implementation follows those requirements rather than applying the same layout to
              every catalog.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Shopping Experience
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Connect Browsing, Product Selection
            <span className="font-serif italic text-acid"> and Purchase</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
            <p>A useful storefront provides a clear route through the buying journey.</p>
            <p>
              Customers should be able to reach suitable products, understand the available options
              and review their selection before proceeding.
            </p>
            <p>Depending on the scope, development can include:</p>
          </div>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {shoppingExperience.map((item, i) => (
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
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Integrations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Review the Complete Workflow Behind
              <span className="font-serif italic text-acid"> a Connection</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A store integration needs to support how your business operates.</p>
              <p>
                We identify what information should move, which system owns it and when updates need
                to happen. We also consider what your team should see when a connection fails or a
                record needs attention.
              </p>
              <p>
                Depending on the project, the review may cover payment services, shipping tools or
                other business applications.
              </p>
              <p>Feasibility depends on the available interfaces, documentation and access.</p>
            </div>
            <TextLink to="/contact" tone="ink">
              Discuss an Integration Requirement
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Plugin Decisions
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Use Functionality Your Store
              <span className="font-serif italic text-acid"> Can Maintain</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Adding a plugin introduces both a feature and an ongoing dependency.</p>
              <p>
                Before recommending a tool or change, I review what your existing setup supports and
                what the requirement actually needs.
              </p>
              <p>
                We consider compatibility, configuration, license costs and maintenance
                responsibilities. If a requirement needs additional development, that work is
                defined separately.
              </p>
              <p>The objective is a setup your business can operate and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Stores
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Understand the Current Setup Before
              <span className="font-serif italic text-acid"> Making Changes</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                An existing store may have custom code, integrations and operational rules that are
                not immediately visible.
              </p>
              <p>
                I review the relevant theme, plugins and reported behavior before agreeing on the
                implementation. Recent changes and documentation help establish the starting point.
              </p>
              <p>
                The recommendation may involve a focused fix, selected template improvements or a
                wider redevelopment phase.
              </p>
              <p>
                If the project changes existing URLs or moves content, that work needs an agreed
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Testing & Release
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Check the Store Through Representative
              <span className="font-serif italic text-acid"> Shopping Tasks</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The testing scope follows the changes being delivered.</p>
              <p>Depending on the work, checks can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {testingItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              We agree on suitable test scenarios and access before implementation. Release
              responsibilities are confirmed before changes reach the live store.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Store Management
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Make Everyday Updates Part of
              <span className="font-serif italic text-acid"> the Handover</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Your team may need to update products, change page content or manage store settings
                after launch.
              </p>
              <p>
                We identify which tasks the delivered setup should support and include relevant
                guidance in the handover.
              </p>
              <p>
                Ongoing maintenance, further development and operational assistance can be arranged
                with a defined scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Relevant Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              WordPress Development With
              <span className="font-serif italic text-acid"> Ecommerce Experience</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My development background includes WordPress, WooCommerce, Elementor, custom themes,
                PHP and plugin integrations.
              </p>
              <p>
                I also work on responsive layouts, frontend performance and Shopify storefront
                functionality. That experience helps me consider the relationship between
                presentation, shopping interactions and connected features.
              </p>
              <p>
                We can discuss the requirements relevant to your store and identify anything that
                needs further investigation.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/portfolio">View My Development Work</PrimaryLink>
              <SecondaryLink to="/resume">View My Resume</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Deliverables
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Agree on What the Store Project
              <span className="font-serif italic text-acid"> Includes</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Depending on the engagement, deliverables can include:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Copywriting, product entry, hosting, licenses, migration and ongoing maintenance are
              included only where agreed.
            </p>
          </div>
        </div>
      </section>

      <section
        id="development-process"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From Store Requirements
            <span className="font-serif italic text-acid"> to Handover</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
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
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base">
                  {step.text}
                </p>
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
            Let’s Define What Your WooCommerce Store
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Share your website URL and explain what you want to launch, change or fix.</p>
            <p>
              Include any useful designs, product requirements or integration details. We can use
              that information to define a practical development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your WooCommerce Store</PrimaryLink>
            <SecondaryLink to="/portfolio">View My Work</SecondaryLink>
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
