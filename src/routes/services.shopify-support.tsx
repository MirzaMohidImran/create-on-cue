import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-support")({
  head: () => ({
    meta: [
      { title: "Shopify Support & Troubleshooting | Mohid Imran" },
      {
        name: "description",
        content:
          "Get Shopify support from Mohid Imran for theme errors, app conflicts, broken cart features and integration issues. Start with a focused technical review.",
      },
      { property: "og:title", content: "Shopify Support & Troubleshooting | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Get Shopify support from Mohid Imran for theme errors, app conflicts, broken cart features and integration issues. Start with a focused technical review.",
      },
    ],
  }),
  component: ShopifySupportPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const problems = [
  {
    title: "A Page Looks Wrong",
    text: "Text overlaps, images display incorrectly or a section breaks on mobile. The issue may affect one template, a particular device or the entire storefront.",
    follow: "I can review the affected layout and investigate the code or configuration involved.",
  },
  {
    title: "Customers Cannot Complete an Interaction",
    text: "A product selector, add-to-cart button, menu or cart drawer does not behave as expected.",
    follow:
      "I work to reproduce the problem and identify the conditions that trigger it before implementing a fix.",
  },
  {
    title: "An App or Theme Change Caused Problems",
    text: "A feature stopped working after an installation, update or customization.",
    follow:
      "We can review the recent changes and investigate how they interact with the existing store.",
  },
  {
    title: "Information Is Not Moving Between Systems",
    text: "Product, order or other agreed data is missing, delayed or inconsistent across a connected workflow.",
    follow:
      "I can assess the integration, available access and relevant records to help narrow down the cause.",
  },
  {
    title: "You Need a Developer for Ongoing Changes",
    text: "Small fixes and development requests keep building up, but your team does not have someone responsible for the technical work.",
    follow: "We can define an ongoing arrangement around the tasks and support you need.",
  },
];

const supportServices = [
  {
    title: "Shopify Theme Fixes",
    text: "Investigation and repair of layout issues, broken sections and unexpected behavior in existing theme code.",
  },
  {
    title: "App Conflict Investigation",
    text: "Review of features affected by app installations, configuration changes or overlapping functionality.",
  },
  {
    title: "Product & Cart Troubleshooting",
    text: "Help with agreed product-selection interactions, cart drawers, quantity controls and other storefront behavior.",
  },
  {
    title: "Checkout-Related Investigation",
    text: "Review of reported checkout or payment problems to determine whether the issue involves the storefront, configuration, an integration or a platform dependency.",
    follow: "Any changes depend on the available access and supported functionality.",
  },
  {
    title: "Integration Troubleshooting",
    text: "Investigation of existing connections, including the information exchanged and where the workflow is failing.",
  },
  {
    title: "Ongoing Development Support",
    text: "Agreed maintenance tasks, small enhancements and recurring development work for an existing Shopify store.",
  },
];

const supportOptions = [
  {
    title: "One Specific Issue",
    text: "For a clearly reported problem affecting a page, feature or integration.",
    follow:
      "We define the investigation, affected functionality and expected result before agreeing on the work.",
    link: "Request a Focused Fix",
  },
  {
    title: "Several Issues to Review",
    text: "For stores with a growing list of bugs, inconsistent behavior or changes left unfinished.",
    follow: "We organize the issues, identify dependencies and agree on a practical order of work.",
    link: "Discuss Your Issue List",
  },
  {
    title: "Ongoing Support",
    text: "For businesses that need recurring development assistance after launch.",
    follow:
      "We agree on the type of work covered, communication, available capacity and how new requests will be handled.",
    link: "Discuss Ongoing Support",
  },
];

const testingItems = [
  "The reported steps that caused the problem.",
  "Relevant product types or options.",
  "Mobile and desktop layouts.",
  "Connected app behavior.",
  "Cart interactions and agreed purchase-flow checks.",
  "Integration outputs and exception scenarios.",
];

const beforeContact = [
  "Your store URL and the affected page.",
  "What you expected to happen.",
  "What actually happens.",
  "The steps needed to reproduce the issue.",
  "A screenshot or short screen recording, if available.",
  "The device and browser involved.",
  "Any recent theme, app or configuration changes.",
  "Whether the problem affects purchases or daily operations.",
];

const handoverItems = [
  "A summary of the investigated issue.",
  "The identified cause, where established.",
  "The changes implemented.",
  "Relevant testing results.",
  "Any remaining dependencies or limitations.",
  "Recommendations for further work where needed.",
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Shopify Speed Optimization",
    text: "For a store that works but needs a focused review of loading performance and responsiveness.",
    to: "/services/shopify-speed-optimization",
  },
  {
    title: "Shopify CRO & Store Optimization",
    text: "For shopping-journey improvements and investigation into conversion friction.",
    to: "/services/shopify-cro",
  },
  {
    title: "Custom Shopify Theme Development",
    text: "For a planned layout, reusable section or new theme feature.",
    to: "/services/shopify-theme-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For new application functionality or a connection that needs to be developed.",
    to: "/services/shopify-app-development",
  },
  {
    title: "Shopify Store Development & Redesign",
    text: "For a wider storefront rebuild involving multiple templates and requirements.",
    to: "/services/shopify-store-development",
  },
];

const faqs = [
  {
    q: "Can you investigate a store another developer built?",
    a: "Yes. I review the available setup, code and access before confirming the work. Documentation and information about previous changes can help the investigation.",
  },
  {
    q: "Can you fix an issue without redesigning the store?",
    a: "Often, a focused change is appropriate. The recommendation depends on the cause and condition of the existing implementation.",
  },
  {
    q: "Do you provide Shopify platform customer support?",
    a: "This service covers independent development assistance for your store. Issues involving Shopify’s platform or a third-party provider may need to be handled by that provider.",
  },
  {
    q: "Can you help if an app update broke a feature?",
    a: "I can investigate the affected behavior and its relationship with the theme or other apps. The solution may involve configuration, code changes or assistance from the app provider.",
  },
  {
    q: "Do you offer emergency or round-the-clock support?",
    a: "Availability and response arrangements are agreed before the engagement. Share the impact and urgency of the issue so we can establish whether I can take it on within your required timeframe.",
  },
  {
    q: "How long will a fix take?",
    a: "That depends on the cause, complexity, access and external dependencies. A clear issue report helps, but some problems require investigation before a reliable estimate is possible.",
  },
  {
    q: "Will you work directly on the live store?",
    a: "The approach depends on the issue and available environments. We agree on how changes will be developed, reviewed and released before implementation.",
  },
  {
    q: "Can you maintain the store after the fix?",
    a: "Yes. Further development and ongoing support can be arranged with a defined scope and responsibilities.",
  },
  {
    q: "How is the work priced?",
    a: "A clearly understood fix can be scoped as a defined task. Where the cause is unknown, an initial investigation may be needed before estimating the implementation.",
  },
];

function ShopifySupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Troubleshooting & Support"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development", to: "/services/shopify-development" },
          { label: "Troubleshooting & Support" },
        ]}
        title={
          <>
            Something Broken in Your Shopify Store?{" "}
            <span className="font-serif italic text-acid">Let’s Find the Cause.</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Get Help With Your Store</MagneticCta>
            <MagneticCta href="#support-options" variant="ghost">
              Explore Support Options
            </MagneticCta>
          </>
        }
        rail="Theme fixes · App conflicts · Cart issues · Integration troubleshooting"
      >
        <p>
          A product option stops responding. The cart behaves unexpectedly. A theme update changes a
          layout your customers depend on.
        </p>
        <p>
          I’m Mohid Imran, a Shopify developer helping businesses investigate storefront problems
          and implement practical fixes. Share what is happening, where it happens and what changed
          recently—we can start there.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Recognize the Problem
              </p>
              <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
                What Is Happening
                <span className="font-serif italic text-acid"> in Your Store?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Describe the Issue
              </TextLink>
            </div>
            <div className="col-span-12 divide-y divide-ink/10 border-y border-ink/10 md:col-span-8">
              {problems.map((item, i) => (
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
            / Support Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Help With the Parts of Your Store
            <span className="font-serif italic text-acid"> That Need Attention</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {supportServices.map((item, i) => (
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
                  {item.follow ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                      {item.follow}
                    </p>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Diagnosis</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Identify the Cause Before
              <span className="font-serif italic text-acid"> Changing the Store</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A visible problem does not always show where the fault begins.</p>
              <p>
                A cart error could involve theme code, an app or product configuration. A layout
                problem may appear only with certain content or screen sizes.
              </p>
              <p>
                I begin by reviewing the affected pages and trying to reproduce the issue. Recent
                changes, error details and the steps leading to the problem help narrow down the
                investigation.
              </p>
              <p>
                The proposed fix follows what we find. If the issue needs more investigation before
                it can be estimated, that is explained as part of the scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="support-options" className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Support Options
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            A Focused Fix or
            <span className="font-serif italic text-acid"> Ongoing Developer Help?</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {supportOptions.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="flex flex-col justify-between bg-ink p-7 md:p-9"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-bone/70">{item.text}</p>
                  <p className="mt-4 text-sm leading-relaxed text-bone/55">{item.follow}</p>
                </div>
                <TextLink to="/contact" tone="bone">
                  {item.link}
                </TextLink>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Priorities</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Deal With the Problems
              <span className="font-serif italic text-acid"> That Matter Most</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                When several issues are present, we consider how each one affects customers and
                operations.
              </p>
              <p>
                A problem preventing purchases needs different attention from a cosmetic issue on a
                rarely visited page. We also consider whether a temporary workaround is available
                and whether several symptoms share the same cause.
              </p>
              <p>
                The work is prioritized around the agreed business impact and technical
                dependencies.
              </p>
              <p>Response times and availability are confirmed for the engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Testing</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Check the Fix in the Context
              <span className="font-serif italic text-acid"> of Your Store</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Resolving one symptom is only part of the job.</p>
              <p>
                After implementing a change, I test the affected interaction and relevant
                surrounding functionality. Depending on the issue, that may include:
              </p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {testingItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              The testing scope follows the change and the access available.
            </p>
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
              Store Troubleshooting Is Part of
              <span className="font-serif italic text-acid"> My Development Work</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My Shopify experience includes investigating checkout-related issues, app conflicts
                and theme errors on client stores.
              </p>
              <p>
                I also work on Liquid themes, app functionality, responsive layouts and frontend
                performance. That background helps me examine how different parts of the storefront
                interact when something stops working.
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
                Explore My Experience
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
              / Before You Get in Touch
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Send the Details That Make
              <span className="font-serif italic text-acid"> Investigation Easier</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Useful information includes:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {beforeContact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Please keep passwords, API keys and other credentials out of the inquiry form. We can
              arrange appropriate access after discussing the work.
            </p>
            <TextLink to="/contact" tone="bone">
              Send Your Issue Details
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Scope & Handover
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Know What Has Been Fixed and
              <span className="font-serif italic text-acid"> What Happens Next</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Depending on the engagement, the handover can include:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {handoverItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Some issues depend on an app provider, payment service or Shopify itself. Where that
              is the case, I can explain the finding and identify the next action within the agreed
              scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Related Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Is Your Main Requirement
            <span className="font-serif italic text-acid"> Different?</span>
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
            Show Me What Is
            <span className="font-serif italic text-acid"> Not Working</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Send your store URL, describe the issue and explain how it affects your customers or
              team.
            </p>
            <p>I’ll review the information and help define the next step.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Get Help With Your Store</PrimaryLink>
            <SecondaryLink to="/contact">Discuss Ongoing Support</SecondaryLink>
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
