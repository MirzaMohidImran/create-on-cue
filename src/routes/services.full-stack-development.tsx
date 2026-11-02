import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/full-stack-development")({
  head: () => ({
    meta: [
      { title: "Full Stack Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore full stack development services from Mohid Imran for custom websites, web applications, SaaS MVPs, dashboards and connected business systems.",
      },
      { property: "og:title", content: "Full Stack Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Explore full stack development services from Mohid Imran for custom websites, web applications, SaaS MVPs, dashboards and connected business systems.",
      },
    ],
  }),
  component: FullStackDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Website Needs Functionality a Template Cannot Provide",
    text: "You need more than standard pages: custom forms, account-based features, connected data or a workflow specific to your business.",
    follow: "We can define the requirement and assess the appropriate implementation.",
  },
  {
    title: "Your Team Depends on Disconnected Tools",
    text: "Information sits in spreadsheets, inboxes and separate applications. Staff repeatedly copy records or chase updates.",
    follow:
      "A custom application or integration may help bring the relevant work into a clearer process.",
  },
  {
    title: "Customers Need Their Own Place to Complete Tasks",
    text: "You want customers to submit information, view records or follow progress through an account-based interface.",
    follow: "We start by defining what each user needs to access and do.",
  },
  {
    title: "You Have a Software Idea but Need a First Release",
    text: "The idea includes many possible features, but the essential workflow is not yet clear.",
    follow:
      "We can scope an MVP around the users, tasks and functionality needed for an initial working product.",
  },
  {
    title: "An Existing Application Needs Further Development",
    text: "A feature is missing, an integration needs updating or a previous build has become difficult to extend.",
    follow: "I can review the available code and documentation before confirming the work.",
  },
];

const developmentServices: {
  title: string;
  text: string;
  follow: string;
  suitable?: string;
  link?: string;
  to?: ServicePath;
}[] = [
  {
    title: "Custom Website Development",
    text: "For businesses that need a website with specific layouts, content structures or functionality.",
    follow:
      "We define the pages, editing requirements and connections needed to support the site’s purpose.",
    suitable: "A business website that needs a tailored implementation.",
  },
  {
    title: "Custom Web Application Development",
    text: "For browser-based software that lets people complete tasks, manage information or follow a business workflow.",
    follow:
      "The scope can include interfaces, backend APIs, database requirements and agreed integrations.",
    link: "Explore Web Application Development",
    to: "/services/web-application-development",
  },
  {
    title: "SaaS & MVP Development",
    text: "For a software product that needs a clearly defined first release.",
    follow:
      "We establish the core workflow and relevant requirements for user accounts, permissions, billing and administration before development.",
    link: "Explore SaaS & MVP Development",
    to: "/services/saas-mvp-development",
  },
  {
    title: "Dashboards, Portals & Internal Tools",
    text: "For staff or customers who need a focused interface to access information and carry out agreed tasks.",
    follow: "We define the users, relevant data and actions the system should support.",
    link: "Explore Dashboards & Portals",
    to: "/services/dashboard-portal-development",
  },
];

const planningQuestions = [
  "Which tasks belong in the first release?",
  "What information does each task require?",
  "Who can view or change that information?",
  "Which systems need to connect?",
  "What happens when an action cannot be completed?",
  "Who will manage the application after delivery?",
];

const frontendItems = [
  "Forms and validation feedback.",
  "Account and administration screens.",
  "Lists, filters and record views.",
  "Loading, empty and error states.",
  "Responsive layouts for relevant devices.",
  "Confirmation and status messages.",
];

const deliverables = [
  "A documented project scope and first-release requirements.",
  "Agreed frontend screens and interactions.",
  "Backend APIs and application logic.",
  "The required data structure.",
  "Specified third-party integrations.",
  "Functional and responsive testing.",
  "Deployment preparation.",
  "Documentation and handover guidance.",
];

const processSteps = [
  {
    title: "Understand the Requirement",
    text: "We discuss your users, business process and intended outcome. Existing systems and constraints help define the starting point.",
  },
  {
    title: "Plan the Scope",
    text: "We agree on the essential features, dependencies, responsibilities and review stages.",
  },
  {
    title: "Define the Interface and Data Flow",
    text: "We clarify how users move through the application and how information is created, stored and exchanged.",
  },
  {
    title: "Build and Review",
    text: "I develop the agreed functionality and share progress at suitable review points.",
  },
  {
    title: "Test the Connected Workflow",
    text: "Testing covers relevant user actions, application rules and integrations, including agreed exception scenarios.",
  },
  {
    title: "Release and Hand Over",
    text: "We confirm the release requirements and provide the agreed access and documentation. Further development can be planned around the delivered application.",
  },
];

const faqs = [
  {
    q: "Can you handle both frontend and backend development?",
    a: "Yes. My work includes frontend interfaces and Python/Django REST APIs. We review the project requirements before confirming the implementation and scope.",
  },
  {
    q: "Do I need a custom application or a standard website?",
    a: "A website may be enough when the main purpose is presenting information and collecting inquiries. An application becomes relevant when users need to complete tasks, manage records or follow an account-based workflow.",
  },
  {
    q: "Can you work from supplied designs?",
    a: "Yes. We review the designs, responsive layouts and interactive states before development. Any missing requirements need to be clarified during planning.",
  },
  {
    q: "Can you continue a project another developer started?",
    a: "Potentially. I first review the available code, documentation, access and dependencies before confirming the work.",
  },
  {
    q: "Which technologies will you use?",
    a: "The choice depends on your requirements and existing setup. My experience includes Angular, React, Next.js, Python, Django and Django REST Framework.",
  },
  {
    q: "Can the project connect with our existing tools?",
    a: "I can assess the proposed connections. Feasibility depends on the interfaces, documentation and access each system provides.",
  },
  {
    q: "Who owns the source code?",
    a: "Ownership, third-party components, access and handover terms are agreed before development.",
  },
  {
    q: "How much will development cost?",
    a: "The estimate depends on the screens, workflows, integrations and testing involved. A defined first-release scope helps make the estimate more useful.",
  },
  {
    q: "How long does a project take?",
    a: "A business website, a focused feature and a custom application require different timelines. We agree on an estimated schedule after reviewing the requirements.",
  },
  {
    q: "Can you maintain the application after launch?",
    a: "Further development and maintenance can be arranged. Coverage and responsibilities are agreed as part of the engagement.",
  },
];

function FullStackDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Full Stack Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Full Stack Development" },
        ]}
        title={
          <>
            Build the Website or Application Your Business Needs{" "}
            <span className="font-serif italic text-acid">to Work Better</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Project</MagneticCta>
            <MagneticCta href="#development-services" variant="ghost">
              Explore Development Services
            </MagneticCta>
          </>
        }
        rail="Custom websites · Web applications · SaaS MVPs · Dashboards & portals"
      >
        <p>
          Your project may need more than a public website. Customers might need an account, staff
          may need a dashboard, or an important workflow may depend on several disconnected tools.
        </p>
        <p>
          I’m Mohid Imran, a full stack developer working across frontend interfaces, backend APIs
          and integrations. I help turn those requirements into a defined development scope and a
          working implementation.
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
                What Do You Need Your Software
                <span className="font-serif italic text-acid"> to Do?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain Your Requirement
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
              What Does Full Stack Development
              <span className="font-serif italic text-acid"> Cover?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Full stack development connects the interface people use with the application logic
                and data behind it.
              </p>
              <p>
                The frontend presents information and handles user interactions. The backend
                processes requests, applies business rules and communicates with databases or
                external systems.
              </p>
              <p>
                Working across these layers helps me consider how a feature behaves from the first
                interaction through to the information it creates or updates.
              </p>
              <p>
                The technology follows the project requirements and the setup your team needs to
                maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="development-services"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Right
            <span className="font-serif italic text-acid"> Starting Point</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {developmentServices.map((item, i) => (
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.text}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist/80 md:text-base">
                    {item.follow}
                  </p>
                  {item.suitable ? (
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist/80 md:text-base">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                        Suitable for:{" "}
                      </span>
                      {item.suitable}
                    </p>
                  ) : null}
                  {item.link && item.to ? (
                    <TextLink to={item.to} tone="ink" className="mt-5">
                      {item.link}
                    </TextLink>
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
              / Project Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Start With the People
              <span className="font-serif italic text-acid"> and the Work</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A feature list is useful, but it does not explain the whole project.</p>
              <p>
                Before development, we discuss who will use the system, what they need to accomplish
                and what currently makes that difficult. We also identify existing tools,
                information sources and operational constraints.
              </p>
              <p>That discussion helps answer practical questions:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {planningQuestions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              These decisions give the implementation a clearer direction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Frontend Development
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Make the Interface Work
              <span className="font-serif italic text-acid"> for Its Users</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                The interface should help people understand what they can do and what happens next.
              </p>
              <p>
                I develop responsive frontend layouts around the agreed designs and workflows. The
                scope considers the screens and states users encounter while completing a task.
              </p>
              <p>Depending on the project, this can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {frontendItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Any design gaps are identified before they become assumptions in the build.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Backend & APIs
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Connect User Actions With the Right
              <span className="font-serif italic text-acid"> Application Behavior</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A working interface needs application logic behind it.</p>
              <p>
                I develop Python/Django and Django REST Framework implementations for agreed
                requirements, including the API behavior and data handling needed by the frontend.
              </p>
              <p>
                Planning covers how records are created and updated, which rules apply and how the
                application communicates with connected systems.
              </p>
              <p>
                Access requirements and handling of incomplete or unsuccessful actions are included
                in the scope where relevant.
              </p>
            </div>
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
              Make Information Move Through
              <span className="font-serif italic text-acid"> a Defined Workflow</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Your application may need to exchange information with another website, service or
                business tool.
              </p>
              <p>
                Before implementing a connection, we identify the required data, its direction of
                travel and which system is responsible for each record.
              </p>
              <p>
                We also consider update frequency, duplicate handling and what your team should see
                when a connection needs attention.
              </p>
              <p>
                Feasibility depends on the interfaces, documentation and access available from the
                connected system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Applications
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Improve a Current Build Before
              <span className="font-serif italic text-acid"> Deciding to Replace It</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>An existing application may already provide a useful foundation.</p>
              <p>
                I can review the relevant code, dependencies and documentation to understand the
                requested work. The scope may involve a new feature, a focused repair, an
                integration change or a wider development phase.
              </p>
              <p>
                A replacement is considered against the condition of the current system and the
                requirements it needs to support.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss an Existing Application
            </TextLink>
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
              Shopify Development With a Broader
              <span className="font-serif italic text-acid"> Engineering Background</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My experience includes Angular interfaces, Python/Django REST APIs and third-party
                integrations, alongside Shopify and WordPress development.
              </p>
              <p>
                That combination supports projects where the public website, application interface
                and connected functionality need to work together.
              </p>
              <p>
                My portfolio includes development projects and storefront work. We can discuss the
                experience relevant to your requirements and identify anything that needs a
                prototype or further technical review.
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Deliverables
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define What Your Project
              <span className="font-serif italic text-acid"> Includes</span>
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
              Design creation, content entry, hosting, data migration and ongoing support are
              included only where agreed.
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
            From Requirements to
            <span className="font-serif italic text-acid"> a Working Release</span>
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
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Working Together
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Direct Communication Throughout
              <span className="font-serif italic text-acid"> the Build</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>You discuss the project and implementation decisions with me directly.</p>
              <p>
                I work remotely with businesses, founders and agencies. Before starting, we agree on
                communication, review points and the information needed to keep the project moving.
              </p>
              <p>
                If a requirement needs investigation before it can be estimated, I explain that
                early.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss Your Project
            </TextLink>
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
            Tell Me What Your Business Needs
            <span className="font-serif italic text-acid"> to Build</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Share the problem, the users involved and the tasks the website or application needs
              to support.
            </p>
            <p>
              Include any existing system, designs or requirements. We can turn that information
              into a practical development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Project</PrimaryLink>
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
