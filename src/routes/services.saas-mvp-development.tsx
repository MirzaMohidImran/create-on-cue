import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/saas-mvp-development")({
  head: () => ({
    meta: [
      { title: "SaaS & MVP Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Plan and build your SaaS MVP with Mohid Imran. Define the core workflow, user accounts, billing requirements and integrations for a focused first release.",
      },
      { property: "og:title", content: "SaaS & MVP Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Plan and build your SaaS MVP with Mohid Imran. Define the core workflow, user accounts, billing requirements and integrations for a focused first release.",
      },
    ],
  }),
  component: SaasMvpDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "The Idea Has Become a Long Feature List",
    text: "Every conversation adds another dashboard, integration or user role. It is difficult to decide what the first version needs.",
    follow:
      "We can identify the central problem and define the smallest release that gives users a useful way to solve it.",
  },
  {
    title: "You Have Designs but Need a Working Product",
    text: "The screens explain the visual direction, but account behavior, business rules and data requirements still need decisions.",
    follow:
      "I can review the designs alongside the workflow and identify what must be clarified before development.",
  },
  {
    title: "You Need to Test the Product With Real Users",
    text: "You want people to complete the core task and provide feedback before committing to a wider roadmap.",
    follow:
      "The first release can focus on that task, with agreed ways to observe usage and collect feedback.",
  },
  {
    title: "An Existing Prototype Needs Further Development",
    text: "Your prototype demonstrates the idea but may need changes before it can support the intended users.",
    follow:
      "I can review the code, dependencies and missing functionality before recommending a development scope.",
  },
  {
    title: "You Need Someone to Connect the Frontend and Backend",
    text: "The interface, API and data model need to work together around the product’s rules.",
    follow:
      "I work across these layers so the implementation can be planned as a connected workflow.",
  },
];

const scopingQuestions = [
  "What problem brings someone to the product?",
  "How do they handle it today?",
  "What must they be able to complete in the first version?",
  "What information do they need to provide?",
  "What result should they receive?",
  "Which assumptions need feedback from actual users?",
];

const developmentScope = [
  {
    title: "Core Product Workflow",
    text: "The main task your customer uses the product to complete, including its inputs, rules and expected result.",
  },
  {
    title: "User Accounts & Onboarding",
    text: "The agreed registration, sign-in and first-use experience needed to access the product.",
  },
  {
    title: "Roles & Permissions",
    text: "Access rules for the user types included in the first release.",
  },
  {
    title: "Subscription & Billing Requirements",
    text: "Agreed connections and application behavior around plans, payments or subscriptions, where relevant to the product.",
  },
  {
    title: "Administration Tools",
    text: "Interfaces for the operational tasks your team needs to perform, such as managing users or reviewing records.",
  },
  {
    title: "Third-Party Integrations",
    text: "Connections required to support the core workflow, subject to the available interfaces and access.",
  },
  {
    title: "Usage Measurement",
    text: "Agreed events or reporting points that help you understand whether users are completing the intended tasks.",
  },
];

const releasePlan = [
  {
    title: "Required for the core task",
    text: "Functionality users need to receive the product’s intended value.",
  },
  {
    title: "Required to operate the release",
    text: "The account, administration and support capabilities needed to manage the initial product.",
  },
  {
    title: "Suitable for a later stage",
    text: "Enhancements that may be useful but do not need to delay the first release.",
  },
];

const deliverables = [
  "A documented first-release scope.",
  "Defined user journeys and application requirements.",
  "Agreed frontend screens and interactions.",
  "Backend APIs and the required data structure.",
  "Specified integrations.",
  "Functional and responsive testing.",
  "Deployment preparation.",
  "Setup and handover documentation.",
  "A list of agreed follow-up work.",
];

const processSteps = [
  {
    title: "Understand the Product",
    text: "We discuss the users, problem, existing alternatives and intended value.",
  },
  {
    title: "Define the MVP",
    text: "We agree on the essential workflow, supporting features and the boundaries of the first release.",
  },
  {
    title: "Plan the Application",
    text: "We clarify the interface, account structure, data flow and required integrations.",
  },
  {
    title: "Build and Review",
    text: "I implement the agreed functionality and share progress at suitable review points.",
  },
  {
    title: "Test and Prepare for Launch",
    text: "We check relevant scenarios and confirm the configuration, content and responsibilities needed for release.",
  },
  {
    title: "Review Feedback and Next Steps",
    text: "After release, further development can be prioritized around actual usage, customer feedback and business requirements.",
  },
];

const faqs = [
  {
    q: "Can you help if I only have an idea?",
    a: "Yes. We can begin by defining the users, problem and core workflow. A clear initial scope is needed before estimating development reliably.",
  },
  {
    q: "Is an MVP the same as a prototype?",
    a: "A prototype can demonstrate an idea or interaction. An MVP is intended to deliver a useful core experience to its initial users. We define which outcome your project needs.",
  },
  {
    q: "Do I need subscriptions in the first version?",
    a: "Not necessarily. Billing requirements depend on how you plan to release and operate the product. We include the functionality needed for the agreed model.",
  },
  {
    q: "Can the MVP support several customer organizations?",
    a: "That can be scoped. Account structure, data access and organization-level permissions need to be defined before implementation.",
  },
  {
    q: "Can you work from supplied designs?",
    a: "Yes. We review the designs alongside the workflows, responsive behavior and application states they need to support.",
  },
  {
    q: "Can you continue an existing SaaS project?",
    a: "Potentially. I first review its code, documentation, dependencies and current behavior before confirming the work.",
  },
  {
    q: "Can we add more features after launch?",
    a: "Yes. Further development can be planned around the delivered application. Some additions may require architectural changes, so requirements are reviewed before implementation.",
  },
  {
    q: "Can you guarantee the product will attract paying customers?",
    a: "No. Development can provide the agreed functionality, but customer demand also depends on the problem, offer, pricing, distribution and product experience.",
  },
  {
    q: "What determines cost and timeline?",
    a: "The workflows, interfaces, integrations, billing requirements and testing involved determine the estimate. A clearly defined first release makes planning more useful.",
  },
  {
    q: "Who handles hosting and ongoing maintenance?",
    a: "Those responsibilities are agreed before launch. Hosting, monitoring, maintenance and further development can be included where arranged.",
  },
];

function SaasMvpDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="SaaS & MVP Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "SaaS & MVP Development" },
        ]}
        title={
          <>
            Turn Your Software Idea Into a First Release People{" "}
            <span className="font-serif italic text-acid">Can Use</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Product Idea</MagneticCta>
            <MagneticCta href="#development-process" variant="ghost">
              Explore the Development Process
            </MagneticCta>
          </>
        }
        rail="Product scoping · SaaS MVPs · Frontend development · Backend APIs · Integrations"
      >
        <p>
          You have a problem worth solving and an idea for a product. The next step is deciding what
          needs to be built first.
        </p>
        <p>
          I’m Mohid Imran, a full stack developer. I help scope and develop SaaS MVPs around a
          defined user need, core workflow and practical release plan.
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
                What Is Holding Your Product
                <span className="font-serif italic text-acid"> Back?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain Your Product’s Starting Point
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
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Service Introduction
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What Should a SaaS MVP
              <span className="font-serif italic text-acid"> Accomplish?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>An MVP is a first usable version of a product built around its essential value.</p>
              <p>
                For a SaaS product, that means defining what customers need to achieve and the
                supporting functionality required to deliver it. Accounts, access rules,
                administration and billing may be part of that scope, depending on the product.
              </p>
              <p>
                The first release should give users a coherent experience. Features that do not
                support its purpose can remain on a later roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Product Scoping
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Start With One User and
              <span className="font-serif italic text-acid"> One Important Job</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Before discussing a large feature list, we define who the product serves and what
                they need to accomplish.
              </p>
              <p>We work through questions such as:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {scopingQuestions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              These decisions help turn the idea into a development brief that can be reviewed and
              estimated.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Can the First Release
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
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
            Each feature is included only where it supports the defined release.
          </p>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / SaaS Architecture
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Decide How Customers and Their Information
              <span className="font-serif italic text-acid"> Are Organized</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A product serving several customer organizations needs clear decisions about
                accounts, workspaces and access.
              </p>
              <p>
                During planning, we define which information belongs to an individual, which belongs
                to an organization and what can be shared. We also consider who manages invitations,
                permissions and account changes.
              </p>
              <p>
                These requirements affect the interface, data structure and backend behavior. They
                need to be explicit before implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Billing</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan What Happens Around
              <span className="font-serif italic text-acid"> a Subscription</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Connecting a payment service is only part of a subscription workflow.</p>
              <p>
                The application may also need to handle plan selection, access changes, unsuccessful
                payments or cancellations. Which behaviors are required depends on the commercial
                model.
              </p>
              <p>
                We define the relevant account states and responsibilities before implementing the
                agreed billing connection.
              </p>
              <p>
                Payment-provider charges and operational requirements are reviewed separately from
                development costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / First Release Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Separate What Is Essential From
              <span className="font-serif italic text-acid"> What Can Wait</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              A useful release plan distinguishes between:
            </p>
            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {releasePlan.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-mist md:col-span-7 md:text-base">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              This gives the project clearer boundaries and makes proposed additions easier to
              assess.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Prototypes
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Understand the Current Build Before
              <span className="font-serif italic text-acid"> Extending It</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                If development has already started, I can review the available code, documentation
                and deployment setup.
              </p>
              <p>
                We identify what is working, what is missing and which parts need investigation. The
                scope may involve completing a workflow, repairing an integration or developing the
                next feature.
              </p>
              <p>
                Where a prototype needs substantial changes, the recommendation should explain why
                and what can be retained.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss an Existing Prototype
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Development Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Review Working Functionality as
              <span className="font-serif italic text-acid"> the Product Takes Shape</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The review process should let you assess more than isolated screens.</p>
              <p>
                I develop the agreed functionality and share progress at suitable stages. We review
                how the user moves through the task and how the frontend, backend and integrations
                behave together.
              </p>
              <p>
                Testing follows the requirements and can include account actions, permissions, data
                operations, billing states and relevant exception scenarios.
              </p>
              <p>
                The launch plan also defines any remaining content, configuration or operational
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Relevant Background
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Full Stack Development for Connected
              <span className="font-serif italic text-acid"> Product Workflows</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My development background includes Angular interfaces, Python/Django REST APIs,
                Shopify app functionality and third-party integrations.
              </p>
              <p>
                SalesForge, a Shopify app project I developed, includes merchant controls and
                connected storefront features. This provides relevant application-development
                experience, while the architecture and operating requirements of your SaaS product
                need their own assessment.
              </p>
              <p>
                We can discuss the requirements in detail and identify anything that needs a
                prototype or further technical review.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-acid px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone md:text-xs"
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
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid md:text-xs"
              >
                View My Resume
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

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Deliverables
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define What You Receive
              <span className="font-serif italic text-acid"> at Each Stage</span>
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
              Design creation, hosting, third-party subscriptions, content entry and ongoing
              maintenance are included only where arranged.
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
            From Product Idea to
            <span className="font-serif italic text-acid"> an Agreed First Release</span>
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
            Let’s Define the First Version Your Users
            <span className="font-serif italic text-acid"> Actually Need</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Describe your product idea, who it serves and the main task it should help them
              complete.
            </p>
            <p>
              Share any existing designs, prototype or requirements. We can turn that information
              into a practical first-release scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Product Idea</PrimaryLink>
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
