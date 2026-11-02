import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/dashboard-portal-development")({
  head: () => ({
    meta: [
      { title: "Custom Dashboard & Portal Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Get custom dashboard and portal development from Mohid Imran. Build admin interfaces, customer portals and internal tools around your business workflows.",
      },
      {
        property: "og:title",
        content: "Custom Dashboard & Portal Development | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Get custom dashboard and portal development from Mohid Imran. Build admin interfaces, customer portals and internal tools around your business workflows.",
      },
    ],
  }),
  component: DashboardPortalDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Team Keeps Asking for Updates",
    text: "Task status and customer information sit across messages, spreadsheets and separate tools. Finding an answer takes more effort than it should.",
    follow:
      "We can define a shared view of the relevant information and the actions needed to keep it current.",
  },
  {
    title: "Customers Contact You for Information You Already Hold",
    text: "Your team repeatedly answers questions about progress, records or next steps.",
    follow:
      "A customer portal may provide a more suitable way for users to access their own information and complete agreed tasks.",
  },
  {
    title: "Staff Work Around the Software",
    text: "Employees maintain separate spreadsheets because the existing system does not support an important part of their job.",
    follow:
      "We can review that process and assess whether a focused internal tool or integration would help.",
  },
  {
    title: "Reports Take Too Long to Prepare",
    text: "Information needs to be collected and organized before anyone can use it.",
    follow:
      "We can investigate the data sources and define a dashboard around the decisions your team needs to make.",
  },
  {
    title: "Different People Need Different Access",
    text: "Customers, staff and administrators have different responsibilities, but the current setup does not reflect them clearly.",
    follow:
      "We can define the relevant roles and develop interfaces around those responsibilities.",
  },
];

const applicationTypes = [
  {
    title: "Custom Dashboard Development",
    text: "A dashboard brings relevant information into a view that helps users understand what is happening. The scope can include filters, record summaries, status views and links to the underlying information.",
    when: "Your main need is operational visibility and a clear route to the details.",
  },
  {
    title: "Customer Portal Development",
    text: "A portal gives a defined group of users access to their information and available actions. Depending on the requirements, users may submit details, review records or follow the progress of an agreed process.",
    when: "Customers or partners need an account-based place to interact with your business.",
  },
  {
    title: "Admin Dashboard Development",
    text: "An administration interface lets authorized staff manage the records and settings that support an application.",
    when: "Your team needs structured controls behind a customer-facing website or product.",
  },
  {
    title: "Internal Tools Development",
    text: "An internal tool supports a particular staff task, such as reviewing submissions, updating records or coordinating work.",
    when: "The priority is completing a workflow rather than displaying information alone.",
  },
];

const planningItems = [
  "Who uses the application.",
  "What questions they need answered.",
  "Which actions they are responsible for.",
  "Where the information comes from.",
  "How current the information needs to be.",
  "What should happen when a record needs attention.",
];

const applicationFeatures = [
  {
    title: "Record Lists & Detail Views",
    text: "Browse relevant records and open the information needed for a task.",
  },
  {
    title: "Search & Filters",
    text: "Narrow a view using agreed fields, categories or status values.",
  },
  {
    title: "Forms & Record Updates",
    text: "Submit information or make permitted changes, with appropriate validation and feedback.",
  },
  {
    title: "Operational Summaries",
    text: "Present agreed counts, statuses or other measures with clear definitions.",
  },
  {
    title: "Workflow Actions",
    text: "Move a record through the stages your business process requires.",
  },
  {
    title: "Account & Access Controls",
    text: "Provide relevant views and actions for the user types included in the scope.",
  },
  {
    title: "Exports & System Connections",
    text: "Make agreed information available for another workflow or connected application.",
  },
];

const deliverables = [
  "Defined user roles and workflows.",
  "A documented list of screens and features.",
  "Agreed dashboard or portal interfaces.",
  "Backend APIs and data handling.",
  "Specified integrations.",
  "Functional and responsive testing.",
  "Deployment preparation.",
  "Documentation and handover guidance.",
];

const processSteps = [
  {
    title: "Review the Process",
    text: "We discuss the users, existing tools and tasks the application should support.",
  },
  {
    title: "Define the Information and Actions",
    text: "We identify data sources, required views and the decisions users need to make.",
  },
  {
    title: "Agree on the Scope",
    text: "We confirm roles, interfaces, integrations and the first release.",
  },
  {
    title: "Develop and Review",
    text: "I build the agreed functionality and share progress at suitable review points.",
  },
  {
    title: "Test Representative Tasks",
    text: "We check relevant records, access rules, user actions and connected-system behavior.",
  },
  {
    title: "Release and Hand Over",
    text: "You receive the agreed access and documentation. Maintenance and further development can be arranged.",
  },
];

const faqs = [
  {
    q: "Can you turn our spreadsheet process into an internal tool?",
    a: "I can review how the spreadsheet is used, the rules it contains and the information it exchanges. That review helps establish whether a custom tool is appropriate.",
  },
  {
    q: "Can customers access their own information?",
    a: "That can be scoped. We define account ownership, permitted information and available actions before implementation.",
  },
  {
    q: "Can you connect the dashboard with our existing software?",
    a: "I can assess the proposed connection. Feasibility depends on the available interfaces, documentation and access.",
  },
  {
    q: "Will the information update in real time?",
    a: "The required update frequency is agreed during planning. It depends on the business need and what the source systems support.",
  },
  {
    q: "Can the dashboard include charts and reports?",
    a: "Yes, where agreed. We define what each measure represents, where its data comes from and how users should interpret it.",
  },
  {
    q: "Is this the same as Power BI or Tableau development?",
    a: "This service focuses on custom web interfaces and operational workflows. A packaged business-intelligence solution is a different implementation choice and needs its own assessment.",
  },
  {
    q: "Can the application work on phones and tablets?",
    a: "Responsive behavior can be included for the relevant screens and tasks. The intended devices and usage conditions are discussed during planning.",
  },
  {
    q: "Can you improve a dashboard another developer built?",
    a: "Potentially. I first review the code, dependencies, documentation and available access before confirming the work.",
  },
  {
    q: "What determines the cost and timeline?",
    a: "The number of views, user roles, workflow actions, integrations and testing requirements determine the estimate.",
  },
  {
    q: "Can you provide support after launch?",
    a: "Maintenance and further development can be arranged. Coverage and responsibilities are agreed as part of the engagement.",
  },
];

function DashboardPortalDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Dashboards, Portals & Internal Tools"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Dashboards, Portals & Internal Tools" },
        ]}
        title={
          <>
            Give Your Team and Customers a Clear Place to Get Things{" "}
            <span className="font-serif italic text-acid">Done</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Dashboard or Portal</MagneticCta>
            <MagneticCta href="#choose-your-application" variant="ghost">
              Find the Right Starting Point
            </MagneticCta>
          </>
        }
        rail="Admin dashboards · Customer portals · Internal tools · Connected workflows"
      >
        <p>Important information should be easy to find, understand and act on.</p>
        <p>
          I’m Mohid Imran, a full stack developer. I develop custom dashboards, portals and internal
          tools around defined business workflows, connecting the interface with the data and
          actions users need.
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
                Where Is Your Current Process
                <span className="font-serif italic text-acid"> Breaking Down?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain Your Current Workflow
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
        id="choose-your-application"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Choose Your Application
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Dashboard, Portal or
            <span className="font-serif italic text-acid"> Internal Tool?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
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
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      Choose this when:
                    </span>{" "}
                    {item.when}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            One application can combine these functions where the requirements justify it.
          </p>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Workflow Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Start With the Decisions
              <span className="font-serif italic text-acid"> and Tasks</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A dashboard should do more than fill a screen with numbers.</p>
              <p>
                We first establish what users need to understand and what they should be able to do
                next. That helps determine which information belongs on the main view and which
                details belong elsewhere.
              </p>
              <p>Planning considers:</p>
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
              These decisions guide the interface and the development scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Data & Integrations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Connect the Information Behind
              <span className="font-serif italic text-acid"> the Interface</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                The application may use an existing database, another business system or a new data
                structure developed for the project.
              </p>
              <p>
                Before implementation, we review the sources, available interfaces and access
                requirements. We identify which system owns each record and how updates should move
                between them.
              </p>
              <p>
                The scope also considers missing values, duplicate records and unsuccessful
                transfers. Users need to understand when information is unavailable or requires
                review.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss Your Data Sources
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Application Features
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Could Your Dashboard or Portal
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            Depending on the agreed workflow, features can include:
          </p>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {applicationFeatures.map((item, i) => (
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
            The feature list follows your requirements. It is not a fixed package applied to every
            project.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ User Access</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define What Each Person Can See
              <span className="font-serif italic text-acid"> and Change</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A customer may need access to their own records. A staff member may need to manage a
                queue. An administrator may need a wider view.
              </p>
              <p>We define those boundaries before development.</p>
              <p>
                The planning also covers how users join the system, who manages their access and
                what happens when responsibilities change. Any approval steps or activity history
                need to be included in the scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Interface Design
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Make the Next Action Easy
              <span className="font-serif italic text-acid"> to Understand</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A useful interface helps people complete their work with fewer questions.</p>
              <p>
                I develop the agreed screens around task order, readable information and clear
                actions. We also define what users see when a list is empty, information is loading
                or an action cannot be completed.
              </p>
              <p>
                Responsive behavior is planned around the devices and working conditions the
                application needs to support.
              </p>
              <p>
                If your team supplies designs, we review these states alongside the main layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Systems
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Add a Focused Tool Without
              <span className="font-serif italic text-acid"> Replacing Everything</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A new dashboard or portal does not always require a complete system replacement.
              </p>
              <p>
                Where suitable interfaces are available, a focused application can work alongside
                existing tools. We review the current setup and identify what can be connected,
                retained or extended.
              </p>
              <p>
                If the underlying system creates limitations, those findings inform the
                recommendation before development begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Scope Boundaries
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              When Your Requirement Belongs in
              <span className="font-serif italic text-acid"> a Different Project</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A dashboard or portal is often intended for a defined group of users within an
                existing business process.
              </p>
              <p>
                If you plan to sell the application as a subscription product to multiple customer
                organizations, we should assess the wider SaaS requirements.
              </p>
            </div>
            <TextLink to="/services/saas-mvp-development" tone="ink">
              Explore SaaS & MVP Development
            </TextLink>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              If the requirement involves several interconnected workflows beyond a focused
              operational interface, a broader application scope may be appropriate.
            </p>
            <TextLink to="/services/web-application-development" tone="ink">
              Explore Web Application Development
            </TextLink>
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
              Frontend Interfaces Connected With
              <span className="font-serif italic text-acid"> Backend Logic</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My development experience includes Angular interfaces, Python/Django REST APIs and
                third-party integrations.
              </p>
              <p>
                That background supports work across the screens users interact with and the
                application behavior behind them.
              </p>
              <p>
                We can discuss your proposed dashboard or portal, review its data requirements and
                identify any part that needs a prototype or further investigation.
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
              Agree on the Views, Actions
              <span className="font-serif italic text-acid"> and Connections</span>
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
              Data migration, report-definition work, hosting and ongoing maintenance are included
              only where arranged.
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
            From the Current Workflow to
            <span className="font-serif italic text-acid"> a Usable Tool</span>
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
            Show Me What Your Team Needs to See
            <span className="font-serif italic text-acid"> and Do</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Describe the users, information and tasks involved.</p>
            <p>
              Share any existing spreadsheet, application or design. We can use that information to
              define a practical dashboard, portal or internal tool.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Dashboard or Portal</PrimaryLink>
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
