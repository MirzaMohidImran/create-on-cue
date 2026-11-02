import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Workflow Automation Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore AI workflow automation services with Mohid Imran. Assess repetitive tasks, connect systems and prototype practical solutions around your business.",
      },
      { property: "og:title", content: "AI Workflow Automation Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Explore AI workflow automation services with Mohid Imran. Assess repetitive tasks, connect systems and prototype practical solutions around your business.",
      },
    ],
  }),
  component: AiAutomationPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "You Copy the Same Information Between Tools",
    text: "A record arrives in one system, but someone has to re-enter it elsewhere.",
    follow:
      "We can map where the information starts, where it needs to go and what rules apply before it is transferred.",
  },
  {
    title: "Regular Reports Require Repeated Preparation",
    text: "Your team collects information, reorganizes it and produces a similar output each time.",
    follow: "A defined data workflow may help reduce those repeated steps.",
  },
  {
    title: "A Process Depends on Someone Remembering Every Action",
    text: "Tasks wait for manual checks, follow-ups or updates. It is difficult to see which step needs attention.",
    follow: "We can review the process and identify which actions can be connected.",
  },
  {
    title: "You Want to Explore AI but Have No Clear Use Case",
    text: "You have heard about AI tools, but do not know where they would fit within your operations.",
    follow:
      "We start with an actual task and assess whether AI would add value compared with a simpler solution.",
  },
  {
    title: "You Have an Automation Idea That Needs Testing",
    text: "The concept sounds useful, but its accuracy, dependencies or practical limitations are unclear.",
    follow: "A scoped prototype can help evaluate the approach before a wider implementation.",
  },
];

const automationServices = [
  {
    title: "Python Automation",
    text: "Scripts developed around a defined repetitive task, such as organizing files, preparing data or producing an agreed output.",
    when: "Work that follows clear steps but currently requires repeated manual effort.",
  },
  {
    title: "API Connections & Data Transfer",
    text: "Connections that move agreed information between systems with supported interfaces.",
    when: "Reducing repeated entry and coordinating updates between existing tools.",
  },
  {
    title: "Data Processing Workflows",
    text: "Development around cleaning, organizing and transforming information for a defined business use.",
    when: "Recurring preparation work before information can be used in a report or another system.",
  },
  {
    title: "AI Automation Prototyping",
    text: "A limited implementation used to assess whether an AI-assisted approach can meet a specific requirement.",
    when: "Testing feasibility, output quality and review requirements before committing to a broader solution.",
  },
  {
    title: "Technical Feasibility Review",
    text: "An assessment of the systems, data and constraints involved in a proposed automation.",
    when: "Establishing what can be connected, what needs investigation and what the first scope should include.",
  },
];

const approachItems = [
  "How consistently the input arrives.",
  "Whether the required action follows fixed rules.",
  "How an incorrect result would affect the workflow.",
  "What review a person needs to perform.",
  "The cost and maintenance involved.",
  "Whether the approach performs reliably enough for its intended use.",
];

const planningItems = [
  "The input and expected output.",
  "The systems involved.",
  "Required transformations or decisions.",
  "Human review points.",
  "Completion and failure states.",
  "Responsibility for resolving exceptions.",
];

const measurementItems = [
  "Time spent completing a recurring process.",
  "The amount of repeated data entry.",
  "Records needing correction or review.",
  "Turnaround time between agreed steps.",
  "The share of examples handled successfully.",
  "Ongoing operating and maintenance costs.",
];

const deliverables = [
  "A documented process and requirement.",
  "A technical feasibility assessment.",
  "An agreed script, integration or prototype.",
  "Defined input and output formats.",
  "Relevant review and exception handling.",
  "Testing against agreed examples.",
  "Setup and handover documentation.",
  "Findings and recommendations for the next stage.",
];

const processSteps = [
  {
    title: "Review the Current Task",
    text: "We discuss what your team does, how often it happens and where the effort is concentrated.",
  },
  {
    title: "Define the Scope",
    text: "We agree on the systems, information, expected output and boundaries.",
  },
  {
    title: "Assess or Prototype",
    text: "Where needed, I investigate the interfaces or build a limited prototype to test the proposed approach.",
  },
  {
    title: "Develop and Review",
    text: "I implement the agreed work and review its behavior against representative examples.",
  },
  {
    title: "Document the Result",
    text: "We record what works, what requires human input and what limitations remain.",
  },
  {
    title: "Decide the Next Stage",
    text: "Further implementation is planned around the findings and operational requirements.",
  },
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Web Scraping & Data Solutions",
    text: "For collecting and structuring information from agreed website sources.",
    to: "/services/web-scraping",
  },
  {
    title: "Custom Web Application Development",
    text: "For a wider system with its own interfaces, records and business workflows.",
    to: "/services/web-application-development",
  },
  {
    title: "Dashboards, Portals & Internal Tools",
    text: "For a focused interface where staff review information and complete tasks.",
    to: "/services/dashboard-portal-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For automation or connected functionality within a Shopify project.",
    to: "/services/shopify-app-development",
  },
];

const faqs = [
  {
    q: "Can you help me identify a suitable automation task?",
    a: "Yes. Start with a recurring process that takes time or creates repeated manual work. We can assess its steps and dependencies.",
  },
  {
    q: "Do I need AI to automate my workflow?",
    a: "Not necessarily. A script, configuration change or supported integration may be sufficient. AI is considered where it provides a useful function.",
  },
  {
    q: "Can you connect the tools we already use?",
    a: "I can assess the proposed connection. Feasibility depends on the interfaces, documentation and access available.",
  },
  {
    q: "What is included in an AI prototype?",
    a: "The scope defines the task, examples, implementation and evaluation. It is intended to test specific assumptions before wider development.",
  },
  {
    q: "Can the workflow operate without human review?",
    a: "That depends on the task and the reliability demonstrated. Review requirements are agreed around the consequences of incorrect or incomplete actions.",
  },
  {
    q: "Will there be ongoing costs?",
    a: "There may be hosting, third-party service or usage charges, depending on the approach. These are identified during scoping.",
  },
  {
    q: "Can you guarantee a particular amount of time saved?",
    a: "No. Savings depend on the current process and the delivered solution. We define suitable measurements rather than assuming an outcome.",
  },
  {
    q: "Can you turn a successful prototype into a production workflow?",
    a: "That can be assessed as a separate stage. Production requirements may include additional integration work, monitoring, exception handling and operational support.",
  },
  {
    q: "How do we get started?",
    a: "Describe the task, the tools involved and the result your team needs. Include a non-sensitive example where possible.",
  },
];

function AiAutomationPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="AI & Workflow Automation"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "AI & Workflow Automation" },
        ]}
        title={
          <>
            Spend Less Time Moving Information—and More Time{" "}
            <span className="font-serif italic text-acid">Using It</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Workflow</MagneticCta>
            <MagneticCta href="#automation-services" variant="ghost">
              Find a Starting Point
            </MagneticCta>
          </>
        }
        rail="Python automation · API connections · Data workflows · AI prototypes"
      >
        <p>
          Copying records, collecting updates and repeating the same steps can take time away from
          the work your team needs to do.
        </p>
        <p>
          I’m Mohid Imran, a developer working with Python scripts, API connections and AI
          automation prototypes. I help review repetitive processes and develop scoped solutions
          around a clearly defined task.
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
                Which Task Keeps Coming Back
                <span className="font-serif italic text-acid"> to Your Team?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Describe the Repetitive Task
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
              What Does Workflow Automation
              <span className="font-serif italic text-acid"> Involve?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Workflow automation connects defined inputs, rules and actions so that a repeatable
                task requires less manual handling.
              </p>
              <p>
                Some processes can be handled through straightforward code and integrations. Others
                may benefit from an AI-assisted step, such as interpreting information that does not
                arrive in a consistent format.
              </p>
              <p>
                The starting point is the process itself: what happens today, what should happen
                next and where a person still needs to make a decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="automation-services"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Automation Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Work That Fits
            <span className="font-serif italic text-acid"> Your Process</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {automationServices.map((item, i) => (
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
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist/80 md:text-base">
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Choosing an Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Does This Task
              <span className="font-serif italic text-acid"> Need AI?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Not every repetitive process needs an AI model.</p>
              <p>
                If the rules are clear and the information is structured, a script or integration
                may be sufficient. Where the task involves interpretation, an AI-assisted approach
                can be evaluated against representative examples.
              </p>
              <p>The decision considers:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {approachItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              The objective is a useful process your team can understand and operate.
            </p>
          </div>
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
              Map the Task Before Connecting
              <span className="font-serif italic text-acid"> the Tools</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Before development, we follow the current process from beginning to end.</p>
              <p>
                We identify what triggers the task, which information is required and who uses the
                result. We also discuss exceptions: missing records, unavailable services and
                situations where the process should pause.
              </p>
              <p>This helps establish:</p>
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
              These decisions make the scope clearer and the eventual workflow easier to support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Prototyping</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Test the Idea Against
              <span className="font-serif italic text-acid"> Representative Examples</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A prototype should answer a practical question about the proposed solution.</p>
              <p>
                We agree on the task, a limited set of examples and how the output will be reviewed.
                The assessment can consider accuracy, consistency, handling of incomplete
                information and the effort still required from your team.
              </p>
              <p>
                The findings help decide whether to continue, adjust the approach or use a simpler
                method.
              </p>
              <p>
                A prototype demonstrates what has been tested. It does not establish that the same
                approach will handle every future input.
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
              Review How the Workflow Fits Your
              <span className="font-serif italic text-acid"> Existing Systems</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Your business may already have tools that handle part of the process.</p>
              <p>
                We review their supported interfaces, access requirements and relevant limitations
                before introducing another component. The scope identifies which system owns the
                information and how updates should be coordinated.
              </p>
              <p>
                Any third-party services, subscriptions and operating costs are discussed as part of
                the proposed implementation.
              </p>
            </div>
            <TextLink to="/contact" tone="ink">
              Discuss Your Systems and Requirements
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Human Review
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Keep Important Decisions
              <span className="font-serif italic text-acid"> Visible</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Automation should make responsibilities clearer.</p>
              <p>
                We agree on which actions can proceed automatically and which require confirmation.
                Users should understand when a task has completed, when information needs review and
                when the process has stopped.
              </p>
              <p>
                For AI-assisted work, the review approach is defined around the task and the
                consequences of an incorrect output.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Measurement</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Establish What Improvement
              <span className="font-serif italic text-acid"> Would Look Like</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Before implementation, we define what the workflow is intended to improve.</p>
              <p>Depending on the task, relevant measures may include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {measurementItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              The measurement should include the work that remains manual. Time-saving claims need
              evidence from the actual process.
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
              Python Development and
              <span className="font-serif italic text-acid"> Automation Research</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My experience includes developing Python scripts for web scraping and automated data
                collection.
              </p>
              <p>
                During my research and development work at ARNEX, I also prototyped AI automation
                concepts and documented their technical feasibility and potential business
                applications.
              </p>
              <p>
                My broader background includes web development and API integrations. We can use that
                experience to assess your requirement and identify what needs to be demonstrated
                before further development.
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
              Agree on the Workflow and
              <span className="font-serif italic text-acid"> Its Boundaries</span>
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
              Hosting, third-party usage charges, ongoing monitoring and production deployment are
              included only where arranged.
            </p>
          </div>
        </div>
      </section>

      <section id="working-process" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Start With One Process and
            <span className="font-serif italic text-acid"> Evaluate the Result</span>
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

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Related Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Does Your Requirement Need
            <span className="font-serif italic text-acid"> Something Else?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {relatedServices.map((item, i) => (
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
                  <h3 className="font-serif text-2xl italic md:text-3xl">
                    <Link to={item.to} className="transition-colors hover:text-acid">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
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
            Show Me the Task Your Team Keeps
            <span className="font-serif italic text-acid"> Repeating</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Explain what starts the process, what people do manually and what a useful result
              would look like.
            </p>
            <p>
              We can assess the requirement and decide whether the next step should be a script, an
              integration or a scoped AI prototype.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Workflow</PrimaryLink>
            <SecondaryLink to="/portfolio">Explore My Work</SecondaryLink>
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
