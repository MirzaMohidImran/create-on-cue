import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mohid Imran | Shopify & Full Stack Developer" },
      {
        name: "description",
        content:
          "Meet Mohid Imran, a Shopify and full stack developer. Explore his experience, development approach and work on stores, websites and custom applications.",
      },
      { property: "og:title", content: "About Mohid Imran | Shopify & Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Meet Mohid Imran, a Shopify and full stack developer. Explore his experience, development approach and work on stores, websites and custom applications.",
      },
    ],
  }),
  component: AboutPage,
});

const clientProblems = [
  {
    title: "“My Store Works, but Shopping Feels Difficult.”",
    text: "I can review the storefront, mobile layouts, product pages and cart interactions to identify friction. We can then agree on practical improvements and how their impact should be assessed.",
  },
  {
    title: "“The Theme or App Doesn’t Do What I Need.”",
    text: "I can investigate whether the requirement belongs in your theme, a custom app or an integration. The aim is to choose an approach that fits the feature and remains manageable after delivery.",
  },
  {
    title: "“Something Broke, and I Don’t Know Why.”",
    text: "Theme errors, app conflicts and integration issues can have several possible causes. I start by reproducing the problem and narrowing down where it comes from before making changes.",
  },
  {
    title: "“Our Business Has Outgrown Spreadsheets.”",
    text: "When manual work becomes difficult to manage, a custom application, dashboard or portal may help. We start with the people using it, the information they need and the tasks the system should support.",
  },
  {
    title: "“We Keep Repeating the Same Manual Tasks.”",
    text: "Python scripts, data collection workflows and API connections can reduce repetitive work. For AI-assisted requirements, a scoped prototype can help establish what is feasible before a wider build.",
  },
];

const projects = [
  {
    title: "SalesForge",
    kind: "Shopify App Development",
    text: "A Shopify sales and conversion suite with features including bundles, product recommendations, pre-orders and a cart drawer.",
    tech: "The project involved Remix, Polaris, App Bridge, Shopify Functions, Theme App Extensions and Prisma ORM.",
  },
  {
    title: "Mobuxe",
    kind: "Shopify Theme Development",
    text: "An Online Store 2.0 theme project with more than 80 sections, developed for Shopify Theme Store submission.",
    tech: "The work focused on reusable storefront components and layouts that merchants can manage through the theme editor.",
  },
  {
    title: "Blaze",
    kind: "Shopify Theme Development",
    text: "A luxury fashion theme project built using Online Store 2.0 architecture, targeting Shopify Theme Store submission.",
    tech: "The project focused on translating a visual direction into responsive storefront templates.",
  },
];

const principles = [
  {
    title: "Understand the Requirement",
    text: "Before choosing a tool or starting development, I want to understand what the business needs, who will use the solution and what is currently getting in their way.",
  },
  {
    title: "Make the Scope Clear",
    text: "We agree on the work, deliverables and dependencies. If an issue needs investigation before it can be estimated properly, I explain that early.",
  },
  {
    title: "Explain the Decisions",
    text: "You should understand why an approach is recommended, what it involves and where its limitations are. Technical discussions should help you make decisions.",
  },
  {
    title: "Review the Work in Context",
    text: "A feature needs to work within the wider website or application. Relevant layouts, interactions and integrations need checking alongside the individual change.",
  },
  {
    title: "Make the Handover Useful",
    text: "The engagement should account for how you or your team will use and maintain the work after delivery. Documentation, access and support requirements are agreed within the project scope.",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Mohid Imran"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        title={
          <>
            Your Business Has a Problem to Solve.{" "}
            <span className="font-serif italic text-acid">That’s Where I Start.</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View My Work
            </MagneticCta>
          </>
        }
        rail="Shopify Development · Full Stack · Store Fixes · Custom Applications"
      >
        <p>
          I’m Mohid Imran, a Shopify and full stack developer based in Lahore, Pakistan, working
          remotely with businesses and agencies.
        </p>
        <p>
          I build online stores, websites and custom web applications. I also help improve existing
          projects when technical issues, missing features or a difficult user experience get in the
          way.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Introduction
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Development Should Make Your Business
              <span className="font-serif italic text-acid"> Easier to Run</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A website can look finished and still leave important problems unresolved.</p>
              <p>
                Customers might struggle to find the right product. A store feature might stop
                working after an app update. Your team might spend hours moving information between
                systems that should be connected.
              </p>
              <p>These are the kinds of problems I work on.</p>
              <p>
                My experience brings together Shopify development, WordPress, frontend interfaces,
                backend APIs and Python automation. That helps me investigate how the different
                parts of a project work together before recommending what to build or change.
              </p>
              <p>
                Sometimes the right answer is a new website. Sometimes it is a focused improvement
                to what you already have.
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
                You Don’t Need a Technical Brief
                <span className="font-serif italic text-acid"> to Start the Conversation</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/65 md:text-base">
                You can come to me with a business problem, an unfinished project or a feature you
                cannot find in your current tools.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 border-b border-bone/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
              >
                Tell Me What Isn’t Working →
              </Link>
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
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Experience</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Experience Across Client Work
              <span className="font-serif italic text-acid"> and Development Teams</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My background includes freelance delivery alongside Shopify and WordPress
                development roles with agency teams.
              </p>
              <p>
                Through Buildaze, my freelance work has included storefronts, custom themes, app
                functionality and web applications. Agency roles have involved translating designs
                into working pages, supporting integrations, resolving technical issues and
                improving frontend performance.
              </p>
              <p>
                My research and development experience also includes Python scripts for automated
                data collection and exploration of AI automation concepts.
              </p>
              <p>
                I hold a BS in Information Technology from the University of Agriculture Faisalabad,
                Sub Campus Burewala.
              </p>
            </div>
            <Link
              to="/resume"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
            >
              Explore My Experience →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Selected Projects
              </p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                Projects That Show
                <span className="font-serif italic text-acid"> How I Work</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border-b border-bone/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
            >
              View Development Projects →
            </Link>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="flex min-h-72 flex-col justify-between bg-ink p-7 md:p-9"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-acid">✦</span>
                </div>
                <div className="mt-16">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-acid">
                    {project.kind}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-bone/70">{project.text}</p>
                  <p className="mt-4 text-sm leading-relaxed text-bone/55">{project.tech}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Principles
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Matters When
            <span className="font-serif italic text-acid"> We Work Together</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {principles.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.55 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl italic md:col-span-4">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-mist md:col-span-7 md:text-base">
                  {item.text}
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
              / Working Relationship
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              A Direct
              <span className="font-serif italic text-acid"> Working Relationship</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                When you work with me, you speak directly with the developer handling the agreed
                work.
              </p>
              <p>
                You can ask about an implementation decision, explain what needs to change and
                review progress without translating the requirement through several people.
              </p>
              <p>
                I work with business owners who need development support, founders planning a
                product and agencies looking for help with client delivery.
              </p>
              <p>
                The project might be a focused fix or a larger build. Either way, we start by
                agreeing on what needs to be achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / International Projects
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Based in Pakistan.
              <span className="font-serif italic text-acid"> Working Remotely.</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Remote work depends on clear communication and an agreed process.</p>
              <p>
                Before starting, we can discuss working-hour overlap, progress updates, review
                points and the access needed to carry out the work.
              </p>
              <p>
                You do not need to be in the same location to explain a problem, review an
                implementation or collaborate on a build.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
            >
              Discuss Your Requirements →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Let’s Start With What You
            <span className="font-serif italic text-acid"> Need to Solve</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/65 md:text-lg">
            Send your website URL, describe the issue or explain the project you have in mind.
            Include any useful designs, examples or requirements. I’ll review the information and
            help define a practical next step.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Project</PrimaryLink>
            <SecondaryLink to="/portfolio">View My Portfolio</SecondaryLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function PrimaryLink({ children, to }: { children: string; to: "/contact" | "/portfolio" }) {
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

function SecondaryLink({ children, to }: { children: string; to: "/contact" | "/portfolio" }) {
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
