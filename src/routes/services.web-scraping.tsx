import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/web-scraping")({
  head: () => ({
    meta: [
      { title: "Web Scraping & Data Extraction Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Get web scraping services from Mohid Imran. Collect and organize website data with custom Python scripts, defined fields and practical delivery formats.",
      },
      {
        property: "og:title",
        content: "Web Scraping & Data Extraction Services | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Get web scraping services from Mohid Imran. Collect and organize website data with custom Python scripts, defined fields and practical delivery formats.",
      },
    ],
  }),
  component: WebScrapingPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Team Copies Information Page by Page",
    text: "Staff repeatedly open websites, collect details and organize them in a spreadsheet.",
    follow:
      "We can assess whether a custom collection script would make that process more practical.",
  },
  {
    title: "The Information Changes Regularly",
    text: "A one-time dataset becomes outdated, but manually checking every record takes too much time.",
    follow:
      "We can define the required collection frequency and assess how updates should be handled.",
  },
  {
    title: "Different Sources Use Different Formats",
    text: "The same type of information appears under different labels or structures, making comparison difficult.",
    follow: "A data-preparation step can organize agreed fields into a more consistent format.",
  },
  {
    title: "Your Current Scraper Stops Working",
    text: "A website change affects the extraction, records are missing or the output no longer matches what your workflow needs.",
    follow: "I can review the script and source behavior before confirming the work.",
  },
  {
    title: "You Have Collected Data but Cannot Use It Easily",
    text: "The output contains inconsistent fields, duplicates or values that need preparation before they can be imported elsewhere.",
    follow: "We can define the checks and transformations needed for the intended use.",
  },
];

const dataServices = [
  {
    title: "Custom Web Scraper Development",
    text: "A Python script developed around agreed websites, page types and required information.",
    when: "A collection requirement that available exports or existing tools do not adequately support.",
  },
  {
    title: "Website Data Extraction",
    text: "Collect defined fields from reviewed sources and deliver them in an agreed structure.",
    when: "A one-time dataset with clear source and field requirements.",
  },
  {
    title: "Repeat Data Collection",
    text: "Develop a collection process that can run again as information changes.",
    when: "Recurring research, catalog checks or other requirements where the dataset needs updating.",
  },
  {
    title: "Data Cleaning & Preparation",
    text: "Apply agreed rules to organize extracted information, handle duplicates and prepare output for its intended use.",
    when: "Data that needs a more consistent structure before reporting or import.",
  },
  {
    title: "Existing Scraper Review",
    text: "Investigate a script that produces errors, incomplete records or an unsuitable output.",
    when: "An existing collection workflow that needs repair or further development.",
  },
];

const planningItems = [
  "The website sources and relevant page types.",
  "The fields required for each record.",
  "How records should be identified.",
  "Whether collection is one-time or recurring.",
  "What should happen when a value is missing.",
  "The required output format.",
  "The checks used to assess the result.",
];

const dataStructure = [
  {
    title: "Field Mapping",
    text: "Connect source information with the agreed output columns or properties.",
  },
  {
    title: "Consistent Formatting",
    text: "Apply defined rules for text, dates, units or other relevant values.",
  },
  {
    title: "Duplicate Handling",
    text: "Identify repeated records using an agreed matching rule.",
  },
  {
    title: "Missing-Value Handling",
    text: "Distinguish unavailable information from values that genuinely represent zero or an empty field.",
  },
  {
    title: "Record Validation",
    text: "Check required fields and representative records against the source.",
  },
];

const qualityChecks = [
  "Comparing representative output records with source pages.",
  "Checking required fields.",
  "Reviewing duplicate handling.",
  "Examining missing or unexpected values.",
  "Confirming the output structure.",
  "Reviewing coverage against the agreed sources.",
];

const deliverables = [
  "A defined source and field specification.",
  "A source-feasibility assessment.",
  "An agreed collection script or workflow.",
  "A sample dataset for review.",
  "Selected cleaning and validation rules.",
  "The agreed final output.",
  "Setup and handover documentation.",
  "Known limitations and maintenance requirements.",
];

const processSteps = [
  {
    title: "Define the Requirement",
    text: "You share the sources, required fields and intended use.",
  },
  {
    title: "Review Feasibility",
    text: "I inspect representative pages and assess the collection approach.",
  },
  {
    title: "Agree on a Sample",
    text: "We confirm a small representative output and the rules it should follow.",
  },
  {
    title: "Develop and Collect",
    text: "I implement the agreed workflow and process the defined scope.",
  },
  {
    title: "Validate the Results",
    text: "We review representative records, structure and relevant coverage checks.",
  },
  {
    title: "Deliver and Hand Over",
    text: "You receive the agreed output and documentation. Recurring collection or maintenance can be arranged separately.",
  },
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "AI & Workflow Automation",
    text: "For processes that move, prepare or act on information across business systems.",
    to: "/services/ai-automation",
  },
  {
    title: "Custom Web Application Development",
    text: "For an application that lets users manage and work with the collected information.",
    to: "/services/web-application-development",
  },
  {
    title: "Dashboards, Portals & Internal Tools",
    text: "For interfaces that present the relevant data and support operational tasks.",
    to: "/services/dashboard-portal-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For defined connections and application functionality within a Shopify project.",
    to: "/services/shopify-app-development",
  },
];

const faqs = [
  {
    q: "Can you collect data from any website?",
    a: "That cannot be confirmed without reviewing the source. Access, structure, restrictions and the required information affect feasibility.",
  },
  {
    q: "Can you collect information from several websites?",
    a: "Yes, where the reviewed sources support the agreed approach. Each source may require separate extraction and field-mapping work.",
  },
  {
    q: "Can the collection run regularly?",
    a: "Recurring runs can be scoped. We define the schedule, hosting, update behavior and maintenance responsibilities.",
  },
  {
    q: "Can you clean data after extracting it?",
    a: "Yes. Cleaning rules need to be agreed, including formatting, duplicates and missing-value handling.",
  },
  {
    q: "Will every field always contain a value?",
    a: "Not necessarily. The source may omit information or present it inconsistently. We define how missing values should appear in the output.",
  },
  {
    q: "Can you repair a scraper another developer built?",
    a: "Potentially. I first review the available code, source behavior and intended output before confirming the work.",
  },
  {
    q: "Can I review a sample before the full collection?",
    a: "A representative sample can be included in the engagement to confirm the fields and structure before processing the wider scope.",
  },
  {
    q: "Can you deliver data for import into another system?",
    a: "That can be assessed. The receiving system’s field requirements and import rules need to be included in the specification.",
  },
  {
    q: "What happens if the website changes later?",
    a: "The extraction may need updating. Ongoing maintenance is agreed separately, including responsibility for investigating unsuccessful runs.",
  },
  {
    q: "What determines the price and timeline?",
    a: "The number and complexity of sources, required fields, collection volume, preparation rules and delivery requirements affect the estimate.",
  },
];

function WebScrapingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Web Scraping & Data Solutions"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Web Scraping & Data Solutions" },
        ]}
        title={
          <>
            Turn Website Information Into Data You{" "}
            <span className="font-serif italic text-acid">Can Use</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Data Requirements</MagneticCta>
            <MagneticCta href="#data-services" variant="ghost">
              Explore Data Services
            </MagneticCta>
          </>
        }
        rail="Custom Python scrapers · Website data extraction · Data preparation · Repeat collection"
      >
        <p>
          When useful information is spread across pages, collecting it manually can become slow and
          difficult to maintain.
        </p>
        <p>
          I’m Mohid Imran, a developer working with Python web scraping and automated data
          collection. I build scoped solutions around agreed sources, required fields and the way
          you need to use the results.
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
                What Is Making Data Collection
                <span className="font-serif italic text-acid"> Difficult?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain Your Collection Problem
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

      <section id="data-services" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Data Services</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Work Your Project
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {dataServices.map((item, i) => (
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
              / Project Scope
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Define the Dataset Before Building
              <span className="font-serif italic text-acid"> the Scraper</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A useful collection brief explains more than which website to visit.</p>
              <p>
                We agree on the information required and how it will be used. That helps identify
                which pages matter and what the output should contain.
              </p>
              <p>Planning covers:</p>
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
              These details make the work easier to estimate and the output easier to review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Source Review
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Check Whether the Proposed Collection
              <span className="font-serif italic text-acid"> Is Practical</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Websites differ in how information is presented and accessed.</p>
              <p>
                Before confirming the implementation, I review representative pages and the
                available collection options. If a suitable export or API already provides the
                required information, that may be a better starting point.
              </p>
              <p>
                The review also establishes access requirements and relevant source restrictions.
                Collection methods and any required permissions are agreed before development.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Share a Source Website
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Data Structure
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Organize the Output Around
            <span className="font-serif italic text-acid"> Its Next Use</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>The dataset should fit the task it supports.</p>
            <p>
              A product-data import, research spreadsheet and application feed may require different
              fields and structures. We define that output before building the collection process.
            </p>
            <p>Depending on the scope, preparation can include:</p>
          </div>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {dataStructure.map((item, i) => (
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
            The output reflects the agreed rules. Missing source information is not filled with
            invented values.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Recurring Collection
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan for What Changes Between
              <span className="font-serif italic text-acid"> Runs</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A recurring workflow needs decisions about updates.</p>
              <p>
                We define whether each run produces a fresh dataset, updates existing records or
                captures changes. We also consider how to identify records and recognize information
                that is no longer available.
              </p>
              <p>
                Scheduling, hosting and the response to unsuccessful runs are included only where
                agreed.
              </p>
              <p>
                Website changes can affect extraction, so recurring collection also needs a
                maintenance arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Quality Checks
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Review the Data Alongside
              <span className="font-serif italic text-acid"> the Source</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A script completing successfully does not establish that every record is correct.
              </p>
              <p>Testing follows the agreed dataset and can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {qualityChecks.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Any limits in source access or collection coverage are recorded with the findings.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Delivery</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Choose a Format Your Team
              <span className="font-serif italic text-acid"> Can Work With</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The delivery format is agreed around your next step.</p>
              <p>
                This may be a structured file for review, an import-ready dataset or a connection
                with another application, subject to the project requirements.
              </p>
              <p>
                Common format requirements can include CSV, Excel or JSON. API or database delivery
                needs its own defined implementation scope.
              </p>
              <p>
                If you need the script as well as the output, ownership, dependencies and handover
                requirements are agreed before development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Scrapers
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Investigate the Failure Before
              <span className="font-serif italic text-acid"> Rebuilding</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A scraper may fail because the source structure changed, a field moved or the
                original assumptions no longer hold.
              </p>
              <p>
                I review the available code, examples of the problem and the intended output. The
                scope may involve a focused repair, updated extraction rules or a wider change.
              </p>
              <p>
                Where the source no longer supports a reliable collection method, that limitation
                needs to be established before further work.
              </p>
            </div>
            <TextLink to="/contact" tone="ink">
              Discuss an Existing Scraper
            </TextLink>
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
              Python Development for Automated
              <span className="font-serif italic text-acid"> Data Collection</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My experience includes developing Python scripts for web scraping and automated data
                collection during research and development work.
              </p>
              <p>
                My broader background includes Django REST APIs and custom web development. That
                helps when collected information needs to support another application or business
                workflow.
              </p>
              <p>
                We can review your sources and identify what needs to be demonstrated before
                committing to the full dataset.
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
              Agree on the Sources, Fields
              <span className="font-serif italic text-acid"> and Output</span>
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
              Hosting, recurring runs, third-party costs, integrations and ongoing maintenance are
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
            From Source Review to
            <span className="font-serif italic text-acid"> Data Delivery</span>
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
            Does the Data Need to Support a
            <span className="font-serif italic text-acid"> Wider Workflow?</span>
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
            Show Me the Information You Need
            <span className="font-serif italic text-acid"> to Collect</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Send example source pages, list the required fields and explain how you plan to use
              the results.
            </p>
            <p>We can assess the sources and define a practical collection and delivery scope.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Data Requirements</PrimaryLink>
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
