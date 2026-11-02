import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/shell";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Shopify & Web Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore Shopify, full stack, WordPress and WooCommerce development services. Get help with store fixes, performance, custom applications and automation.",
      },
      { property: "og:title", content: "Shopify & Web Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Explore Shopify, full stack, WordPress and WooCommerce development services. Get help with store fixes, performance, custom applications and automation.",
      },
    ],
  }),
  component: ServicesPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | ServicePath;

const situationRows: { situation: string; service: string; to: ServicePath }[] = [
  {
    situation: "You need a new Shopify store or a complete redesign",
    service: "Shopify Store Development",
    to: "/services/shopify-store-development",
  },
  {
    situation: "Your theme cannot support the design or feature you need",
    service: "Shopify Theme Development",
    to: "/services/shopify-theme-development",
  },
  {
    situation: "You need custom functionality or a connection between systems",
    service: "Shopify App Development & Integrations",
    to: "/services/shopify-app-development",
  },
  {
    situation: "Something in your store is broken or behaving unexpectedly",
    service: "Shopify Troubleshooting & Support",
    to: "/services/shopify-support",
  },
  {
    situation: "Your store is slow or difficult to use on mobile",
    service: "Shopify Speed Optimization",
    to: "/services/shopify-speed-optimization",
  },
  {
    situation: "Visitors browse or add products to their cart but do not complete purchases",
    service: "Shopify CRO & Store Optimization",
    to: "/services/shopify-cro",
  },
  {
    situation: "Your business needs software that existing tools cannot provide",
    service: "Full Stack Development",
    to: "/services/full-stack-development",
  },
  {
    situation: "You need a business website or a WordPress-based online store",
    service: "WordPress & WooCommerce",
    to: "/services/wordpress-development",
  },
  {
    situation: "Your team repeats the same manual tasks or collects data by hand",
    service: "Automation & Data Solutions",
    to: "/services/ai-automation",
  },
];

const shopifyServices: { title: string; text: string; link: string; to: ServicePath }[] = [
  {
    title: "Store Development & Redesign",
    text: "For businesses launching a store or reworking an existing one. The scope can include page layouts, navigation, product templates, store configuration and relevant integrations.",
    link: "Explore Store Development",
    to: "/services/shopify-store-development",
  },
  {
    title: "Custom Theme Development",
    text: "For stores that need more control over design and functionality. I develop editable sections, templates and Liquid features, including implementation from supplied Figma designs.",
    link: "Explore Theme Development",
    to: "/services/shopify-theme-development",
  },
  {
    title: "App Development & Integrations",
    text: "For requirements that need functionality beyond the theme. This can include custom apps, theme app extensions and connections with third-party systems.",
    link: "Explore App Development",
    to: "/services/shopify-app-development",
  },
  {
    title: "Headless Shopify Development",
    text: "For projects that need a separate frontend connected to Shopify. We first assess whether the additional flexibility justifies the development and maintenance involved.",
    link: "Explore Headless Development",
    to: "/services/headless-shopify-development",
  },
  {
    title: "Troubleshooting & Support",
    text: "For theme errors, app conflicts, broken interactions and integration issues. I investigate the cause, agree on the fix and check the affected functionality.",
    link: "Explore Shopify Support",
    to: "/services/shopify-support",
  },
];

const croItems = [
  "A review of product pages and shopping interactions.",
  "Mobile usability improvements.",
  "Cart and checkout-friction investigation.",
  "Implementation of agreed storefront changes.",
  "A/B testing where traffic, tracking and available data support it.",
];

const fullStackServices: { title: string; text: string; link: string; to: ServicePath }[] = [
  {
    title: "Custom Web Applications",
    text: "Browser-based software for business-specific workflows, customer interactions and connected systems.",
    link: "Explore Web Application Development",
    to: "/services/web-application-development",
  },
  {
    title: "SaaS & MVP Development",
    text: "A scoped first version of a software product, built around its core workflow. We define the essential features and relevant requirements for accounts, permissions, billing and integrations.",
    link: "Explore SaaS & MVP Development",
    to: "/services/saas-mvp-development",
  },
  {
    title: "Dashboards, Portals & Internal Tools",
    text: "Interfaces that help staff or customers access information and complete tasks. The scope can include operational views, administration screens and role-based access.",
    link: "Explore Dashboards & Portals",
    to: "/services/dashboard-portal-development",
  },
];

const scopeOptions = [
  {
    title: "Improve What You Already Have",
    text: "For a specific issue, missing feature or existing website that needs development work. We review the relevant setup and agree on a focused scope.",
  },
  {
    title: "Build Something New",
    text: "For a new store, website or application. We define the requirements, plan the structure and work toward an agreed first release.",
  },
  {
    title: "Continue Improving After Launch",
    text: "For businesses that need further development or maintenance. Ongoing work is scoped around priorities, available capacity and the support arrangements we agree on.",
  },
];

const processSteps = [
  {
    title: "Share the Situation",
    text: "Send your website URL or describe the project. Explain what is not working, what you want to achieve and any relevant deadline.",
  },
  {
    title: "Review the Requirements",
    text: "I review the information, clarify dependencies and identify anything that needs investigation before it can be estimated.",
  },
  {
    title: "Agree on the Work",
    text: "We define the deliverables, responsibilities, estimated timeline and review points.",
  },
  {
    title: "Develop, Test & Hand Over",
    text: "I implement the agreed work, share it for review and test the relevant functionality before release or handover.",
  },
];

const faqs = [
  {
    q: "I’m not sure which service I need. Can you help?",
    a: "Yes. Describe the problem in your own words and share your website or relevant examples. We can work out whether you need a focused fix, a wider review or a new build.",
  },
  {
    q: "Can you work on a website another developer built?",
    a: "Yes. I can review an existing project before agreeing to changes. Its code, dependencies and available access help determine the scope.",
  },
  {
    q: "Can you fix a problem without redesigning the entire website?",
    a: "Yes. A focused change may be enough. The recommendation depends on the cause of the problem and how the existing website is built.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes. I can help with agreed development tasks or client projects. Responsibilities, access, communication and handover requirements are defined before work starts.",
  },
  {
    q: "Can one project include several services?",
    a: "Yes. A store redesign may also need theme development, integrations or performance work. We can organize the requirements into one scope with clear priorities.",
  },
  {
    q: "What information do you need to estimate a project?",
    a: "A website URL or project description, the required changes, any designs or examples, and relevant deadlines. Some technical issues require an initial investigation before a reliable estimate is possible.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely. We can agree on communication, review points and appropriate working-hour overlap before starting.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Further development, maintenance and support can be included where agreed. The handover and ongoing arrangements are defined as part of the engagement.",
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Development Services"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title={
          <>
            The Right Development Help for What Your Business{" "}
            <span className="font-serif italic text-acid">Needs Next</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Project</MagneticCta>
            <MagneticCta href="#service-selection" variant="ghost">
              Find Your Service
            </MagneticCta>
          </>
        }
        rail="Shopify · Full Stack · WordPress · WooCommerce · Automation"
      >
        <p>
          Launch a store, fix an existing website or build a custom application around your
          business.
        </p>
        <p>
          I’m Mohid Imran, an independent Shopify and full stack developer. I help businesses and
          agencies turn requirements into working features—and investigate the technical problems
          holding existing projects back.
        </p>
      </PageHero>

      <section
        id="service-selection"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Service Selection
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Start With the Problem
            <span className="font-serif italic text-acid"> You Need to Solve</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            You do not need to know the technology or service name before getting in touch. Start
            with what is happening and what you need to work differently.
          </p>

          <div className="mt-12 overflow-x-auto border-y border-ink/10">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-ink/10 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  <th className="py-4 pr-6 font-normal">Your situation</th>
                  <th className="py-4 font-normal">A suitable starting point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {situationRows.map((row) => (
                  <tr key={row.service} className="align-top">
                    <td className="py-5 pr-6 text-sm leading-relaxed text-mist md:text-base">
                      {row.situation}
                    </td>
                    <td className="py-5">
                      <Link
                        to={row.to}
                        className="inline-flex border-b border-ink/25 pb-0.5 font-serif text-lg italic transition-colors hover:border-acid hover:text-acid md:text-xl"
                      >
                        {row.service}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
            More than one of these may apply. We can review the situation and define the work before
            deciding which service fits.
          </p>
          <TextLink to="/contact" tone="ink">
            Help Me Choose
          </TextLink>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Shopify Development
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Build a Store Around Your Products
            <span className="font-serif italic text-acid"> and the Way Customers Shop</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            A Shopify project can involve a complete store, a custom feature or improvements to an
            existing setup. I work with Liquid themes, Online Store 2.0, apps and integrations to
            help your storefront meet those requirements.
          </p>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {shopifyServices.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
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
                  <TextLink to={item.to} tone="bone" className="mt-5">
                    {item.link}
                  </TextLink>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <PrimaryLink to="/services/shopify-development">
              View Shopify Development Services
            </PrimaryLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Shopify CRO & Store Optimization
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Find What Gets in the Way
            <span className="font-serif italic text-acid"> of a Purchase</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              When a store receives visitors but struggles to turn that interest into orders, the
              next step is to understand where customers encounter friction.
            </p>
            <p>
              I review the relevant buying journey, including mobile layouts, product information,
              navigation, cart interactions and performance. The findings help prioritize what to
              improve and how to assess the changes.
            </p>
            <p>Depending on the engagement, work can include:</p>
          </div>
          <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
            {croItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <TextLink to="/services/shopify-cro" tone="ink">
            Explore Shopify CRO
          </TextLink>

          <div className="mt-16 border-t border-ink/10 pt-12">
            <h3 className="font-serif text-3xl italic md:text-4xl">Need Help With a Slow Store?</h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Speed work focuses on what loads, when it loads and how it affects the shopping
              experience. This can involve theme code, images, app scripts and other resources
              affecting Core Web Vitals.
            </p>
            <TextLink to="/services/shopify-speed-optimization" tone="ink">
              Explore Speed Optimization
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Full Stack Development
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Build Software Around the Work
            <span className="font-serif italic text-acid"> Your Business Needs to Do</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
            <p>Some requirements need more than a standard website or an off-the-shelf tool.</p>
            <p>
              I work across frontend interfaces, backend APIs and integrations to develop custom web
              applications. We begin by defining the users, their tasks and the information the
              application needs to handle.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {fullStackServices.map((item, i) => (
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
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
                  <TextLink to={item.to} tone="bone" className="mt-5">
                    {item.link}
                  </TextLink>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <PrimaryLink to="/services/full-stack-development">
              View Full Stack Development Services
            </PrimaryLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / WordPress & WooCommerce
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Create a Website Your Business
            <span className="font-serif italic text-acid"> Can Use and Manage</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              I build and customize WordPress websites for businesses that need an editable site
              with suitable design and functionality.
            </p>
            <p>
              Work can include Elementor layouts, custom themes, responsive pages, plugin
              integrations and improvements to an existing website.
            </p>
          </div>
          <TextLink to="/services/wordpress-development" tone="ink">
            Explore WordPress Development
          </TextLink>

          <div className="mt-16 border-t border-ink/10 pt-12">
            <h3 className="font-serif text-3xl italic md:text-4xl">Selling Through WordPress?</h3>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
              <p>
                WooCommerce development focuses on the store: product presentation, shopping
                features, checkout requirements and integrations.
              </p>
              <p>We can work on a new store or review the changes an existing one needs.</p>
            </div>
            <TextLink to="/services/woocommerce-development" tone="ink">
              Explore WooCommerce Development
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / AI & Workflow Automation
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Reduce Repetitive Work With a
              <span className="font-serif italic text-acid"> Clearly Defined Workflow</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                If your team repeatedly copies information, updates records or moves data between
                tools, automation may help.
              </p>
              <p>
                I develop Python scripts and API connections around agreed processes. For
                AI-assisted requirements, I can begin with a prototype to assess feasibility and
                identify where human review is needed.
              </p>
              <p>
                The starting point is a specific task, its inputs and the result you need—not simply
                adding another tool.
              </p>
            </div>
            <TextLink to="/services/ai-automation" tone="bone">
              Explore Automation Services
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Web Scraping & Data Solutions
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Get Website Information
              <span className="font-serif italic text-acid"> Into a Usable Format</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                When information is spread across websites and difficult to collect manually, a
                custom data-collection workflow can help organize it.
              </p>
              <p>
                I develop Python scripts around agreed sources, required fields and collection
                frequency. The project scope also defines how the results should be cleaned,
                structured and delivered.
              </p>
              <p>
                This can support reporting, research, product-data collection or another clearly
                defined business need.
              </p>
            </div>
            <TextLink to="/services/web-scraping" tone="ink">
              Explore Web Scraping Services
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Choosing the Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            A Focused Fix or
            <span className="font-serif italic text-acid"> a Complete Build?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {scopeOptions.map((item, i) => (
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
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
          <TextLink to="/contact" tone="bone">
            Discuss the Right Approach
          </TextLink>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Happens After
            <span className="font-serif italic text-acid"> You Get in Touch?</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.55 }}
                className="bg-bone p-7 md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl italic">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Project Evidence
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              See the Work
              <span className="font-serif italic text-acid"> Behind the Service</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My portfolio includes Shopify theme projects, app development and client storefront
                work.
              </p>
              <p>
                Explore the projects to see the technologies used and my contribution. We can also
                discuss which experience is relevant to your requirements.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/portfolio">View My Portfolio</PrimaryLink>
              <SecondaryLink to="/resume">View My Resume</SecondaryLink>
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
            Tell Me What Needs
            <span className="font-serif italic text-acid"> to Work Better</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Whether you need a store, a custom application or help with an existing project, start
              with the problem you want to solve.
            </p>
            <p>Share the details, and we can define a practical next step.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Project</PrimaryLink>
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
