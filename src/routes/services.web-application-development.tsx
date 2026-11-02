import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [
      { title: "Custom Web Application Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Build a custom web application with Mohid Imran. Turn business workflows into responsive interfaces, Django APIs and integrations with a clearly defined scope.",
      },
      {
        property: "og:title",
        content: "Custom Web Application Development | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Build a custom web application with Mohid Imran. Turn business workflows into responsive interfaces, Django APIs and integrations with a clearly defined scope.",
      },
    ],
  }),
  component: WebApplicationDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Information Is Spread Across Several Tools",
    text: "Your team searches through spreadsheets, emails and separate applications to understand the status of a task or record.",
    follow:
      "A custom application can bring the relevant information into a defined workflow, with connections to existing systems where appropriate.",
  },
  {
    title: "The Same Information Gets Entered More Than Once",
    text: "Staff repeatedly copy details between tools, creating extra work and opportunities for inconsistency.",
    follow:
      "We can map where the information starts, where it needs to go and which steps can be connected.",
  },
  {
    title: "Your Team Cannot Easily Track Progress",
    text: "Updates depend on messages and manual follow-ups. It is difficult to see what is complete, what is waiting and who needs to act.",
    follow: "The application can provide agreed status views and actions around the process.",
  },
  {
    title: "Existing Software Does Not Fit an Important Requirement",
    text: "Your team has built workarounds around a tool that cannot support the way your business operates.",
    follow:
      "We can assess whether configuration, an integration or a custom application is the appropriate next step.",
  },
  {
    title: "An Existing Application Needs New Functionality",
    text: "Your current system works in part, but a feature is missing or a connected workflow needs improvement.",
    follow: "I can review the implementation before confirming the development scope.",
  },
];

const applicationTypes = [
  {
    title: "Manage Requests and Records",
    text: "Create structured forms, record views and update workflows so information can be submitted and managed consistently.",
  },
  {
    title: "Coordinate Multi-Step Work",
    text: "Define how a task moves between users, what information is required at each stage and which actions become available.",
  },
  {
    title: "Support Customer Interactions",
    text: "Provide an account-based way for customers to submit information, view relevant records or complete agreed tasks.",
  },
  {
    title: "Connect Existing Systems",
    text: "Build an application layer that brings together information or actions from the tools your business already uses.",
  },
  {
    title: "Replace a Manual Process",
    text: "Turn an agreed spreadsheet or email-based workflow into a more structured system, while preserving the business rules that make it useful.",
  },
];

const discoveryItems = [
  "Who starts the process.",
  "What information they provide.",
  "Who can view or change a record.",
  "Which rules apply before the next step.",
  "What happens when information is incomplete.",
  "How completion or failure should be communicated.",
];

const testingItems = [
  "User inputs and validation.",
  "Relevant account roles.",
  "Record creation and updates.",
  "Connected-system behavior.",
  "Loading, empty and error states.",
  "Responsive layouts.",
  "The complete path through an agreed task.",
];

const deliverables = [
  "A defined workflow and first-release requirements.",
  "Agreed application screens and interactions.",
  "Backend APIs and application logic.",
  "The required data structure.",
  "Specified system integrations.",
  "Functional and responsive testing.",
  "Deployment preparation.",
  "Documentation and handover guidance.",
];

const processSteps = [
  {
    title: "Understand the Work",
    text: "We discuss the users, current process, existing tools and problems the application should address.",
  },
  {
    title: "Define the First Release",
    text: "We agree on essential workflows, features, dependencies and responsibilities.",
  },
  {
    title: "Plan the Interface and Data",
    text: "We clarify how users move through the application and how information is stored and exchanged.",
  },
  {
    title: "Develop and Review",
    text: "I build the agreed functionality and share progress at suitable review points.",
  },
  {
    title: "Test and Prepare for Release",
    text: "We check the relevant scenarios and confirm any remaining launch requirements.",
  },
  {
    title: "Hand Over and Plan Further Work",
    text: "You receive the agreed access and documentation. Maintenance and later enhancements can be arranged around the delivered application.",
  },
];

const faqs = [
  {
    q: "How do I know whether I need a custom web application?",
    a: "Start with the process that is difficult to manage. We can assess whether an existing tool, integration or custom implementation is appropriate.",
  },
  {
    q: "Can you turn a spreadsheet-based process into an application?",
    a: "I can review the spreadsheet, its rules and how people use it. The scope depends on the required workflows, data and connected systems.",
  },
  {
    q: "Can you build the frontend and backend?",
    a: "Yes. My experience includes frontend interfaces and Python/Django REST APIs. We confirm the technology and scope after reviewing the requirement.",
  },
  {
    q: "Can the application work on mobile devices?",
    a: "Responsive behavior can be included for the agreed screens and tasks. We discuss the devices and usage conditions the application needs to support.",
  },
  {
    q: "Can you integrate with our existing software?",
    a: "I can assess the proposed connection. Feasibility depends on the available interfaces, documentation and access.",
  },
  {
    q: "Can you work from supplied designs?",
    a: "Yes. We review the screens, responsive layouts and interaction states before development. Missing details need to be clarified during planning.",
  },
  {
    q: "Can you improve an application built by another developer?",
    a: "Potentially. I first review the available code, documentation and setup to understand the work involved.",
  },
  {
    q: "How much will the project cost?",
    a: "The estimate depends on the workflows, interfaces, integrations and testing requirements. A defined first release helps make the estimate more useful.",
  },
  {
    q: "Who manages hosting and maintenance?",
    a: "Responsibilities are agreed before release. Hosting, maintenance and further development can be included where arranged.",
  },
];

function WebApplicationDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Custom Web Application Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Web Application Development" },
        ]}
        title={
          <>
            Software Built Around the Way Your Business{" "}
            <span className="font-serif italic text-acid">Works</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Application</MagneticCta>
            <MagneticCta href="#application-types" variant="ghost">
              Explore What I Can Build
            </MagneticCta>
          </>
        }
        rail="Business applications · Responsive interfaces · Backend APIs · System integrations"
      >
        <p>
          When spreadsheets and disconnected tools make everyday work difficult, your business may
          need a more suitable system.
        </p>
        <p>
          I’m Mohid Imran, a full stack developer. I build custom web applications that connect user
          interfaces, backend logic and business data around clearly defined workflows.
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
                What Is Your Current Process
                <span className="font-serif italic text-acid"> Making Difficult?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain Your Current Process
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
              What Is a Custom
              <span className="font-serif italic text-acid"> Web Application?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A custom web application is browser-based software developed around particular
                users, tasks and business rules.
              </p>
              <p>
                Unlike a website that mainly presents information, an application lets people take
                actions: submit requests, update records, review progress or manage a process.
              </p>
              <p>
                The scope begins with what users need to accomplish. We then define the screens,
                data and logic required to support those tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="application-types"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Application Types
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Could the Application Help
            <span className="font-serif italic text-acid"> Your Team Do?</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {applicationTypes.map((item, i) => (
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
                <p className="max-w-2xl text-sm leading-relaxed text-mist md:col-span-7 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            These are possible application patterns. The features for your project are defined after
            reviewing the requirement.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Discovery</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Map the Workflow Before
              <span className="font-serif italic text-acid"> Defining the Screens</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A list of screens does not explain everything an application needs to do.</p>
              <p>
                We start with the people involved and follow the process from beginning to end. That
                helps identify required information, decisions, exceptions and dependencies.
              </p>
              <p>Planning considers:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {discoveryItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              The result is a clearer basis for development and estimation.
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
              Give Users a Clear Way to
              <span className="font-serif italic text-acid"> Complete Their Tasks</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The interface should make the available actions understandable.</p>
              <p>
                I develop responsive layouts around the agreed designs and workflows. Depending on
                the application, this can include forms, record lists, filters, detail views and
                administration screens.
              </p>
              <p>
                We also define the states between actions: loading information, finding no results,
                receiving validation feedback or recovering from an unsuccessful request.
              </p>
              <p>These details help users understand what happened and what to do next.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Backend & Data
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Build the Logic Behind
              <span className="font-serif italic text-acid"> Each Action</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The backend handles the application’s agreed rules and data operations.</p>
              <p>
                My experience includes Python, Django and Django REST Framework. I use these
                technologies to develop API behavior and application logic around the defined
                requirements.
              </p>
              <p>
                The scope can include creating and updating records, validating inputs, applying
                access rules and preparing information for the frontend.
              </p>
              <p>Data relationships and responsibilities are planned alongside the interface.</p>
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
              Connect the Application With
              <span className="font-serif italic text-acid"> Your Existing Tools</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A custom application may need to exchange information with another system.</p>
              <p>
                Before developing a connection, we review the available interfaces, required access
                and data involved. We identify which system owns each record and how updates should
                move between them.
              </p>
              <p>
                The scope also considers unsuccessful transfers, duplicate records and the
                information your team needs when something requires attention.
              </p>
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
              / Access & Administration
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define What Each User Needs
              <span className="font-serif italic text-acid"> to See and Do</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Different users may have different responsibilities.</p>
              <p>
                During planning, we agree on the relevant roles and actions. A customer may need
                access to their own information, while a staff member may need to review or update
                records within an agreed responsibility.
              </p>
              <p>
                Administration requirements also need to be defined: managing accounts, reviewing
                activity or changing approved settings.
              </p>
              <p>
                The implementation follows the application’s actual requirements rather than
                assuming every project needs the same controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / First Release
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Build the Essential Workflow
              <span className="font-serif italic text-acid"> First</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A custom application can grow into a long feature list before anyone uses it.</p>
              <p>
                We identify the tasks that make the first release useful and separate them from
                later enhancements. That gives the project a manageable scope and a clearer basis
                for review.
              </p>
              <p>
                If the application is intended to become a subscription product sold to multiple
                customers, we should also consider the SaaS-specific requirements.
              </p>
            </div>
            <TextLink to="/services/saas-mvp-development" tone="ink">
              Explore SaaS & MVP Development
            </TextLink>
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
              Extend What Works Before
              <span className="font-serif italic text-acid"> Planning a Replacement</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>You may already have an application that handles part of the process.</p>
              <p>
                I can review the relevant code, dependencies and documentation to assess a feature
                addition or change. The recommendation depends on the condition of the current
                system and how well it supports the requirement.
              </p>
              <p>
                Where investigation is needed before implementation can be estimated, we define that
                as an initial stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Development & Testing
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Check the Workflow Across
              <span className="font-serif italic text-acid"> the Application</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A feature needs to work beyond an individual screen.</p>
              <p>Testing follows the agreed requirements and can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {testingItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              The testing scope and representative scenarios are defined around the work being
              delivered.
            </p>
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
              Frontend and Backend Development
              <span className="font-serif italic text-acid"> in One Engagement</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My development experience includes Angular interfaces, Python/Django REST APIs and
                third-party integrations.
              </p>
              <p>
                I also work on Shopify applications and storefront functionality, including projects
                where interfaces and backend behavior need to work together.
              </p>
              <p>
                We can discuss the experience relevant to your application and identify any
                requirement that needs a prototype or further investigation.
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
              Know What Your Application Project
              <span className="font-serif italic text-acid"> Includes</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Depending on the scope, deliverables can include:
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
              Design creation, hosting, data migration, monitoring and ongoing maintenance are
              included only where agreed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From the Current Process to
            <span className="font-serif italic text-acid"> a Working Application</span>
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
            Show Me the Process You Want
            <span className="font-serif italic text-acid"> to Improve</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Describe the users, the tasks they complete and what makes the current approach
              difficult.
            </p>
            <p>
              Share any existing application, spreadsheet, designs or requirements. We can use that
              information to define a practical development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Application</PrimaryLink>
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
