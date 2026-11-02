import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-app-development")({
  head: () => ({
    meta: [
      { title: "Shopify App Development & Integrations | Mohid Imran" },
      {
        name: "description",
        content:
          "Get custom Shopify app development and integrations from Mohid Imran. Build store features, connect business systems and reduce repetitive manual work.",
      },
      {
        property: "og:title",
        content: "Shopify App Development & Integrations | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Get custom Shopify app development and integrations from Mohid Imran. Build store features, connect business systems and reduce repetitive manual work.",
      },
    ],
  }),
  component: ShopifyAppDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "An Existing App Almost Does What You Need",
    text: "It handles the standard workflow, but an important rule, interaction or integration is missing.",
    follow:
      "I can review the requirement and assess whether configuration, an extension or custom development is the appropriate next step.",
  },
  {
    title: "Your Team Keeps Moving Data by Hand",
    text: "Staff copy information between Shopify, spreadsheets and other business tools. Updates take time, and it becomes difficult to know which system holds the current information.",
    follow: "We can map the workflow and investigate a suitable integration.",
  },
  {
    title: "Several Apps Are Being Used for One Requirement",
    text: "Features overlap, settings become difficult to manage and changes in one app affect another.",
    follow:
      "I can review what each component does before recommending whether to retain, replace or consolidate functionality.",
  },
  {
    title: "You Need a Feature Built Around Your Products",
    text: "Your bundles, product options or cart interactions do not fit the available tools.",
    follow:
      "We can define the required customer experience and determine which parts belong in the theme, an app or an extension.",
  },
  {
    title: "You Have an App Idea but Need a Development Scope",
    text: "You know the merchant problem you want to solve, but need to define the users, essential features and first working release.",
    follow: "I can help turn that requirement into an implementation plan.",
  },
];

const appServices = [
  {
    title: "Custom Shopify Apps",
    text: "Functionality developed for a defined store or merchant workflow.",
    follow:
      "The scope starts with the task, business rules and information involved. We then agree on the interface, integrations and maintenance requirements.",
    suitable:
      "Store-specific features and workflows that available apps do not adequately support.",
  },
  {
    title: "Storefront Features & Theme App Extensions",
    text: "App functionality that connects with the storefront, such as agreed product, promotional or cart-related features.",
    follow:
      "We define how the feature appears, how customers interact with it and which controls the merchant needs.",
    suitable: "App-based features that need a manageable storefront presentation.",
  },
  {
    title: "Shopify API Integrations",
    text: "Connections between Shopify and an external application or business system.",
    follow:
      "We review what information needs to move, which system owns it and how updates should be handled.",
    suitable: "Reducing repeated data entry and keeping connected workflows coordinated.",
  },
  {
    title: "Workflow Automation",
    text: "Development around recurring tasks such as transferring information, applying agreed rules or preparing data for another system.",
    follow: "",
    suitable: "A repeatable process with clear inputs, actions and expected results.",
  },
  {
    title: "Existing App Improvements",
    text: "Review and development work on an existing application, subject to available source code, access and documentation.",
    follow: "",
    suitable:
      "A feature extension, integration change or an application that needs investigation before further development.",
  },
];

const featurePlanning = [
  "Who will use the feature.",
  "What triggers the workflow.",
  "Which information it needs.",
  "What rules it must follow.",
  "What the user or merchant should see.",
  "How exceptions and incomplete actions should be handled.",
];

const integrationAreas = [
  "Product and catalog information.",
  "Inventory or availability updates.",
  "Order information and operational records.",
  "Reporting and data exports.",
  "Connections with existing business applications.",
];

const salesforgeFeatures = [
  "Product bundles and a bundle builder.",
  "Frequently bought together recommendations.",
  "Announcement bars and countdown timers.",
  "Pre-order functionality.",
  "A cart drawer.",
];

const deliverables = [
  "A documented workflow and feature scope.",
  "Application interfaces and merchant settings.",
  "Agreed app or extension functionality.",
  "Connections with the specified systems.",
  "Relevant data handling and exception behavior.",
  "Functional and integration testing.",
  "Setup instructions and handover documentation.",
];

const processSteps = [
  {
    title: "Review the Requirement",
    text: "We discuss the problem, current tools and intended users. For an integration, we review the connected systems and available access.",
  },
  {
    title: "Define the First Release",
    text: "We identify the essential features, business rules and dependencies. Larger ideas can be divided into manageable stages.",
  },
  {
    title: "Plan the Interface and Data Flow",
    text: "We agree on merchant controls, information exchange and expected behavior before building the implementation.",
  },
  {
    title: "Develop and Review",
    text: "I develop the agreed functionality and share progress at suitable review points.",
  },
  {
    title: "Test the Workflow",
    text: "Testing covers relevant user actions, connected-system behavior and agreed exception scenarios.",
  },
  {
    title: "Deploy and Hand Over",
    text: "We confirm the release requirements, document the delivered work and agree on any ongoing support.",
  },
];

const faqs = [
  {
    q: "Can you build an app specifically for my Shopify store?",
    a: "Yes. We start with your workflow and assess whether a custom app is the appropriate implementation. The scope depends on the required functionality and available platform capabilities.",
  },
  {
    q: "Can you connect Shopify with software we already use?",
    a: "I can review the proposed connection. Feasibility depends on the external system’s interfaces, documentation, access and data requirements.",
  },
  {
    q: "Can you help with a public Shopify app idea?",
    a: "Yes. We can scope the merchant problem, core features and development requirements. Any submission work needs to be included in the engagement; marketplace approval is a separate platform decision.",
  },
  {
    q: "Can you improve an application another developer built?",
    a: "Potentially. I first review the available code, documentation and current implementation before confirming the work.",
  },
  {
    q: "Can an integration eliminate all manual work?",
    a: "That depends on the process. Some steps can be automated, while exceptions or business decisions may still need review. We identify those boundaries during planning.",
  },
  {
    q: "Will the feature work with my current theme and apps?",
    a: "Relevant compatibility needs to be assessed and tested. Existing customizations and third-party dependencies can affect the implementation.",
  },
  {
    q: "Who owns the application and source code?",
    a: "Ownership, access and handover terms are agreed before development. This also includes any third-party components or services involved.",
  },
  {
    q: "How much does Shopify app development cost?",
    a: "Cost depends on the features, interfaces, integrations, deployment requirements and testing involved. A focused integration and a larger merchant application require different scopes.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Maintenance and further development can be arranged. We agree on coverage, responsibilities and the support process as part of the engagement.",
  },
];

function ShopifyAppDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify App Development & Integrations"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development", to: "/services/shopify-development" },
          { label: "App Development & Integrations" },
        ]}
        title={
          <>
            Build the Shopify Functionality Your Business{" "}
            <span className="font-serif italic text-acid">Is Missing</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your App or Integration</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View App Development Work
            </MagneticCta>
          </>
        }
        rail="Custom Shopify apps · Storefront extensions · API integrations · Workflow automation"
      >
        <p>
          Your store may need a feature that existing apps cannot provide—or a reliable connection
          between Shopify and the systems your team already uses.
        </p>
        <p>
          I’m Mohid Imran. I develop Shopify app functionality, extensions and integrations around
          defined merchant requirements, from custom storefront features to connected operational
          workflows.
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
                Where Is Your Current Setup
                <span className="font-serif italic text-acid"> Falling Short?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain What You Need
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / App Development Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Right Type
            <span className="font-serif italic text-acid"> of Development</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {appServices.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
                  {item.follow ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                      {item.follow}
                    </p>
                  ) : null}
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      Suitable for:{" "}
                    </span>
                    {item.suitable}
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
              / Feature Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define the Behavior Before
              <span className="font-serif italic text-acid"> Building the Feature</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A feature name rarely explains the full requirement.</p>
              <p>
                A bundle builder, for example, may need rules for product selection, quantities,
                pricing, availability and cart behavior. An integration needs decisions about update
                frequency, record matching and what happens when a transfer fails.
              </p>
              <p>Before development, we clarify:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {featurePlanning.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              These decisions make the scope more useful and reduce assumptions during
              implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Integrations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Connect the Workflow,
              <span className="font-serif italic text-acid"> Not Just the Systems</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>An integration needs to support the way your business actually operates.</p>
              <p>
                We start by identifying the information exchanged and its direction of travel. We
                also consider how existing records should be matched, when changes should be sent
                and how your team will recognize a problem.
              </p>
              <p>
                Depending on the connected system and agreed scope, integration work can involve:
              </p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {integrationAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Feasibility depends on the interfaces and access available from each system. An
              initial review helps establish what can be delivered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Merchant Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Make the App Understandable for
              <span className="font-serif italic text-acid"> the People Using It</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Your team needs to understand what the app does and how to operate it.</p>
              <p>
                During planning, we define the settings and controls the merchant needs. Where
                relevant, the interface should make the current state visible: whether a feature is
                configured, a task has completed or an action needs attention.
              </p>
              <p>
                Useful controls and clear feedback matter alongside the underlying functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Choosing an Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Do You Need an App, a Theme Change
              <span className="font-serif italic text-acid"> or an Existing Tool?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Custom development is one option.</p>
              <p>
                A requirement may already be supported by your current setup, an appropriate
                existing app or a focused theme change. I review those possibilities before
                recommending a custom application.
              </p>
              <p>
                The decision considers the required functionality, dependencies, maintenance and how
                closely available options fit the workflow.
              </p>
            </div>
            <TextLink to="/services/shopify-theme-development" tone="bone">
              Explore Shopify Theme Development
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Relevant Project
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            SalesForge —
            <span className="font-serif italic text-acid"> Shopify App Development</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            SalesForge is a Shopify sales and conversion suite I developed with features including:
          </p>
          <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
            {salesforgeFeatures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              The project stack includes Remix, Polaris, App Bridge, Shopify Functions, Theme App
              Extensions and Prisma ORM.
            </p>
            <p>
              This project provides a starting point for discussing relevant app features, merchant
              controls and storefront interactions.
            </p>
          </div>
          <TextLink to="/portfolio" tone="ink">
            View App Development Work
          </TextLink>
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
              Agree on the Application Scope
              <span className="font-serif italic text-acid"> and Handover</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Depending on the engagement, deliverables can include:
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
              Hosting, submission assistance, monitoring and ongoing maintenance are defined
              separately where required.
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
            From the Merchant Problem to
            <span className="font-serif italic text-acid"> a Working Implementation</span>
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
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Maintenance</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan for What Happens
              <span className="font-serif italic text-acid"> After Launch</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Apps and integrations need an owner after delivery.</p>
              <p>
                Requirements may change, connected systems may introduce updates and new use cases
                may emerge. Before launch, we agree on who manages hosting, monitors the application
                and handles further development.
              </p>
              <p>
                Maintenance can be arranged as part of the engagement, with coverage and
                responsibilities clearly defined.
              </p>
            </div>
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
            Tell Me What Your Store
            <span className="font-serif italic text-acid"> Needs to Do</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Describe the missing feature, the manual workflow or the systems you want to connect.
            </p>
            <p>
              Share your store URL and any useful examples. We can review the requirement and define
              an appropriate development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your App or Integration</PrimaryLink>
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
