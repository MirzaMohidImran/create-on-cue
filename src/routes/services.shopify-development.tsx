import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-development")({
  head: () => ({
    meta: [
      { title: "Shopify Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Build, customize or improve your Shopify store with Mohid Imran. Explore store development, custom themes, apps, integrations and technical support.",
      },
      { property: "og:title", content: "Shopify Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Build, customize or improve your Shopify store with Mohid Imran. Explore store development, custom themes, apps, integrations and technical support.",
      },
    ],
  }),
  component: ShopifyDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Store No Longer Fits Your Business",
    text: "Your product range has changed, your navigation is difficult to manage or your current layouts no longer support how customers shop.",
    follow:
      "We can review whether focused changes will help or whether a wider redesign is appropriate.",
  },
  {
    title: "Your Theme Cannot Support the Feature You Need",
    text: "You want a different product layout, an editable section or an interaction that your theme settings cannot provide.",
    follow:
      "I can assess the requirement and develop suitable Liquid, CSS and JavaScript functionality.",
  },
  {
    title: "Your Apps Create More Work Than They Solve",
    text: "Features overlap, information does not sync reliably or an important workflow still depends on manual updates.",
    follow:
      "We can investigate the existing setup before deciding whether configuration, an integration or a custom app is needed.",
  },
  {
    title: "Something Is Broken",
    text: "A cart interaction fails, a section displays incorrectly or an app update affects the storefront.",
    follow: "I can help reproduce the issue, identify its cause and implement an agreed fix.",
  },
  {
    title: "You Need a Store Built From the Start",
    text: "You have products and a business direction but need help translating them into a working Shopify store.",
    follow: "We can define the templates, features and integrations needed for launch.",
  },
];

const shopifyServices: {
  title: string;
  text: string;
  when: string;
  link: string;
  to: ServicePath;
}[] = [
  {
    title: "Shopify Store Development & Redesign",
    text: "For businesses launching a new store or improving an existing storefront. The scope can include navigation, product and collection templates, responsive layouts, store configuration and relevant app integrations.",
    when: "You need a complete store or a coordinated redesign across several pages.",
    link: "Explore Store Development",
    to: "/services/shopify-store-development",
  },
  {
    title: "Custom Shopify Theme Development",
    text: "For stores that need a custom design or functionality beyond their existing theme settings. I develop Online Store 2.0 themes, reusable sections, templates and Liquid features. I can also implement supplied Figma designs as editable storefront layouts.",
    when: "The main requirement concerns how your storefront looks, behaves or is managed through the theme editor.",
    link: "Explore Theme Development",
    to: "/services/shopify-theme-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For requirements that need an application, extension or connection with another system. Work can include custom merchant functionality, theme app extensions and API integrations. We agree on the workflow and data requirements before choosing the implementation.",
    when: "Your requirement extends beyond the theme or involves information moving between systems.",
    link: "Explore App Development",
    to: "/services/shopify-app-development",
  },
  {
    title: "Headless Shopify Development",
    text: "For projects that need a separate frontend connected to Shopify’s commerce backend. I work with Hydrogen and Storefront API requirements. We first assess whether a headless approach offers enough value for your project to justify its additional development and maintenance.",
    when: "Your storefront requirements extend beyond what a suitable Shopify theme can reasonably provide.",
    link: "Explore Headless Development",
    to: "/services/headless-shopify-development",
  },
  {
    title: "Shopify Troubleshooting & Support",
    text: "For existing stores that need fault investigation, maintenance or further development. Work can include theme errors, app conflicts, broken interactions and integration issues, with support arrangements defined around the engagement.",
    when: "You need help making existing functionality work correctly or maintaining it over time.",
    link: "Explore Shopify Support",
    to: "/services/shopify-support",
  },
];

const approachChecks = [
  "What the feature needs to accomplish.",
  "What your current setup already supports.",
  "How it will interact with existing apps and data.",
  "Who will manage it after delivery.",
  "What maintenance the approach will require.",
];

const deliverables = [
  "A documented requirement and implementation scope.",
  "New or updated storefront templates and sections.",
  "Custom theme or application functionality.",
  "Agreed third-party integrations.",
  "Responsive and functional testing.",
  "Handover notes and relevant configuration guidance.",
];

const projects = [
  {
    title: "SalesForge",
    text: "A Shopify app project covering features such as product bundles, recommendations, pre-orders and a cart drawer.",
    tech: "The development stack includes Remix, Polaris, App Bridge, Shopify Functions, Theme App Extensions and Prisma ORM.",
  },
  {
    title: "Mobuxe",
    text: "An Online Store 2.0 theme project with more than 80 sections, developed for Shopify Theme Store submission.",
  },
  {
    title: "Blaze",
    text: "A luxury fashion theme project developed using Online Store 2.0 architecture, targeting Shopify Theme Store submission.",
  },
];

const processSteps = [
  {
    title: "Review the Store and Requirement",
    text: "Share your store URL, the feature or problem, and any useful designs or examples. I review the relevant setup and clarify what needs investigation.",
  },
  {
    title: "Define the Scope",
    text: "We agree on deliverables, dependencies, access requirements and an estimated timeline. Larger projects can be divided into clear stages.",
  },
  {
    title: "Develop and Review",
    text: "I implement the agreed work in an appropriate development or preview environment and share progress for review.",
  },
  {
    title: "Test the Affected Functionality",
    text: "Testing follows the work involved. It can include responsive layouts, storefront interactions, app behavior and integration flows.",
  },
  {
    title: "Release and Hand Over",
    text: "We agree on the release approach and handover requirements. Further development or support can be included where arranged.",
  },
];

const relatedImprovements: {
  title: string;
  text: string;
  link: string;
  to: ServicePath;
}[] = [
  {
    title: "Your Store Loads Slowly",
    text: "If loading time, responsiveness or layout movement is the main issue, a focused performance review may be the better starting point.",
    link: "Shopify Speed Optimization",
    to: "/services/shopify-speed-optimization",
  },
  {
    title: "Visitors Browse but Do Not Buy",
    text: "If your concern is the buying journey, product-page clarity or cart friction, start with a conversion-focused review.",
    link: "Shopify CRO & Store Optimization",
    to: "/services/shopify-cro",
  },
];

const faqs = [
  {
    q: "Can you work on my existing Shopify store?",
    a: "Yes. I can review an existing store and help with agreed theme changes, custom functionality, integrations and technical issues. The existing code and app setup help determine the scope.",
  },
  {
    q: "Can you customize a purchased Shopify theme?",
    a: "Yes. A suitable existing theme can often be extended. I review its structure and your requirements before recommending customization or a new build.",
  },
  {
    q: "Can you turn a Figma design into a Shopify store?",
    a: "Yes. I can implement supplied designs using Shopify templates and editable sections. We first review the required pages, responsive behavior and functionality.",
  },
  {
    q: "Do I need a custom Shopify app?",
    a: "Not necessarily. The requirement may be covered by Shopify settings, an existing app, a theme change or an integration. A custom app is considered when those options do not adequately meet the need.",
  },
  {
    q: "Can you customize checkout?",
    a: "I can review checkout-related requirements and explain what is feasible within your Shopify plan, available extension points and current platform capabilities. Some requests may have platform restrictions.",
  },
  {
    q: "Will you preserve my existing design?",
    a: "For focused development work, preserving the existing design can be part of the scope. If a requested feature affects the layout or shopping journey, we discuss those changes before implementation.",
  },
  {
    q: "How much will the project cost?",
    a: "Cost depends on the required features, existing setup, integrations and testing involved. Share your requirements so the work can be reviewed and estimated.",
  },
  {
    q: "How long does Shopify development take?",
    a: "A focused fix and a complete custom storefront require different timelines. An estimate follows the initial review and depends on the agreed scope, access and readiness of designs and content.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Maintenance, further development and post-launch support can be arranged. The coverage and responsibilities are agreed as part of the engagement.",
  },
];

function ShopifyDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development" },
        ]}
        title={
          <>
            Shopify Development Services for Your Next Store,{" "}
            <span className="font-serif italic text-acid">Feature or Fix</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Shopify Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View Shopify Work
            </MagneticCta>
          </>
        }
        rail="New stores · Existing store improvements · Custom development · Technical support"
      >
        <p>
          Your store might need a complete build, a custom feature or help with something that has
          stopped working.
        </p>
        <p>
          I’m Mohid Imran, an independent Shopify developer. I work on storefronts, Liquid themes,
          custom apps and integrations, helping businesses turn their requirements into
          functionality they can use and manage.
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
                What Does Your Shopify Store
                <span className="font-serif italic text-acid"> Need to Do Better?</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist md:text-base">
                You do not need to arrive with a technical solution. Start with the problem your
                customers or team are facing.
              </p>
              <TextLink to="/contact" tone="ink">
                Tell Me About Your Store
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
            / Shopify Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Development Work
            <span className="font-serif italic text-acid"> That Matches Your Requirement</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {shopifyServices.map((item, i) => (
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      Choose this when:{" "}
                    </span>
                    {item.when}
                  </p>
                  <TextLink to={item.to} tone="bone" className="mt-5">
                    {item.link}
                  </TextLink>
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
              / Choosing an Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Theme Change, App
              <span className="font-serif italic text-acid"> or Integration?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The same business requirement can sometimes be solved in several ways.</p>
              <p>
                A product-page feature might belong in the theme. A repeated operational task might
                need an integration. A requirement shared across several workflows might justify a
                custom app.
              </p>
              <p>Before recommending development, I consider:</p>
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
              The aim is to choose an implementation that fits the requirement and can be supported
              after launch.
            </p>
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
              Agree on What
              <span className="font-serif italic text-acid"> You Will Receive</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Every engagement has its own scope. Depending on the work, deliverables can include:
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
              Any requirements for analytics, content entry, migration or ongoing maintenance are
              discussed before they become part of the project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Relevant Experience
              </p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                Theme and App Development
                <span className="font-serif italic text-acid"> Behind the Service</span>
              </h2>
            </div>
            <TextLink to="/portfolio" tone="ink" className="mt-0">
              View My Shopify Projects
            </TextLink>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="flex min-h-64 flex-col justify-between bg-bone p-7 md:p-9"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-acid">✦</span>
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{project.text}</p>
                  {project.tech ? (
                    <p className="mt-4 text-sm leading-relaxed text-mist/75">{project.tech}</p>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            My client work also includes theme development, app integration, responsive layouts and
            frontend improvements.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From the First Review
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
            / Related Store Improvements
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Is the Main Problem
            <span className="font-serif italic text-acid"> Speed or Conversion?</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {relatedImprovements.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="bg-bone p-8 md:p-10"
              >
                <h3 className="font-serif text-3xl italic">{item.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-mist md:text-base">{item.text}</p>
                <TextLink to={item.to} tone="ink">
                  {item.link}
                </TextLink>
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
              Work Directly With
              <span className="font-serif italic text-acid"> Your Shopify Developer</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>You discuss the requirement and review the implementation with me directly.</p>
              <p>
                I work remotely with business owners and agencies. Before starting, we agree on
                communication, review points and the responsibilities needed to keep the project
                moving.
              </p>
              <p>
                You can bring a defined development brief or explain the problem in your own words.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss Your Requirements
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
            Let’s Work Out What Your Shopify Store
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Send your store URL and explain what you want to build, change or fix.</p>
            <p>
              Include any useful designs, examples or deadline. I’ll review the information and help
              define the next step.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Shopify Project</PrimaryLink>
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
