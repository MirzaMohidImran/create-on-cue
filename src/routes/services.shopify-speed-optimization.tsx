import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-speed-optimization")({
  head: () => ({
    meta: [
      { title: "Shopify Speed Optimization Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Improve your Shopify store’s loading experience with Mohid Imran. Get a focused review of theme code, images, app scripts and Core Web Vitals.",
      },
      {
        property: "og:title",
        content: "Shopify Speed Optimization Services | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Improve your Shopify store’s loading experience with Mohid Imran. Get a focused review of theme code, images, app scripts and Core Web Vitals.",
      },
    ],
  }),
  component: ShopifySpeedOptimizationPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Main Content Takes Too Long to Appear",
    text: "Customers wait for product images, promotional content or other important page elements before they can start browsing.",
    follow: "I review the affected templates and investigate what delays their presentation.",
  },
  {
    title: "Pages Appear, but Interactions Feel Unresponsive",
    text: "Menus, product options or other controls respond slowly.",
    follow:
      "We can investigate the scripts and page behavior involved, rather than treating every delay as an image problem.",
  },
  {
    title: "Content Moves While the Page Loads",
    text: "Images, banners or other elements shift after appearing, making the page harder to read or use.",
    follow: "I review the affected layout and the resources contributing to that movement.",
  },
  {
    title: "Performance Changed After Adding Apps or Features",
    text: "Your store was easier to use before new scripts, widgets or customizations were introduced.",
    follow: "We can examine the recent changes and assess their effect on the relevant pages.",
  },
  {
    title: "Your Scores Vary, and You Don’t Know What to Fix",
    text: "Different tools, devices and test conditions produce different results.",
    follow:
      "I help interpret the available evidence and identify which findings are relevant to your store.",
  },
];

const optimizationScope = [
  {
    title: "Theme Code Review",
    text: "Investigate the relevant Liquid, CSS and JavaScript implementation, identifying unnecessary work and resources that may affect the loading experience.",
  },
  {
    title: "Image & Media Improvements",
    text: "Review image dimensions, delivery and loading behavior. The implementation should account for both the first visible content and media farther down the page.",
  },
  {
    title: "App & Third-Party Script Review",
    text: "Identify relevant scripts and understand which features depend on them before recommending configuration changes, removal or alternative implementation.",
  },
  {
    title: "JavaScript Loading",
    text: "Review how scripts load and execute, with attention to the interactions and integrations that must continue working.",
  },
  {
    title: "Layout Stability Fixes",
    text: "Investigate elements that move during loading and implement agreed changes to stabilize the affected layouts.",
  },
  {
    title: "Template-Specific Improvements",
    text: "Address problems on the pages where they occur. A product template may need different work from a campaign landing page or collection page.",
  },
];

const webVitals = [
  {
    label: "Loading:",
    text: "How quickly the main content becomes visible.",
  },
  {
    label: "Responsiveness:",
    text: "How promptly the page responds when someone interacts with it.",
  },
  {
    label: "Visual stability:",
    text: "Whether the layout stays in place as content loads.",
  },
];

const testingItems = [
  "Navigation and expandable menus.",
  "Product options and selection.",
  "Add-to-cart and cart-drawer behavior.",
  "Relevant app features.",
  "Mobile and desktop layouts.",
  "Agreed analytics or tracking behavior.",
];

const deliverables = [
  "A baseline review of agreed pages.",
  "A prioritized list of performance findings.",
  "Implementation of the selected improvements.",
  "Relevant storefront testing.",
  "Before-and-after measurements.",
  "A summary of changes and remaining dependencies.",
  "Guidance for maintaining the delivered improvements.",
];

const processSteps = [
  {
    title: "Establish the Baseline",
    text: "You share the affected pages, reported problems and any recent changes. I review the available measurements and storefront behavior.",
  },
  {
    title: "Identify the Main Contributors",
    text: "I investigate the relevant theme resources, media and third-party components.",
  },
  {
    title: "Agree on the Changes",
    text: "We select the improvements, consider feature dependencies and define the testing requirements.",
  },
  {
    title: "Implement and Test",
    text: "I make the agreed changes and check the affected layouts and functionality.",
  },
  {
    title: "Compare and Hand Over",
    text: "We review the measurements, document the work and identify any further action justified by the findings.",
  },
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Shopify CRO & Store Optimization",
    text: "For buying-journey reviews, product-page clarity and conversion-focused improvements.",
    to: "/services/shopify-cro",
  },
  {
    title: "Shopify Troubleshooting & Support",
    text: "For broken functionality, app conflicts and technical faults.",
    to: "/services/shopify-support",
  },
  {
    title: "Custom Shopify Theme Development",
    text: "For new layouts, reusable sections and planned theme features.",
    to: "/services/shopify-theme-development",
  },
  {
    title: "Shopify Store Development & Redesign",
    text: "For a coordinated storefront rebuild.",
    to: "/services/shopify-store-development",
  },
];

const faqs = [
  {
    q: "Can you guarantee a specific PageSpeed score?",
    a: "No. Scores depend on the store, its features, third-party resources and test conditions. The engagement focuses on justified improvements and clear measurement.",
  },
  {
    q: "Why is my mobile result different from desktop?",
    a: "The devices and test conditions can differ. We review the relevant measurements and experience rather than assuming both results should match.",
  },
  {
    q: "Will you remove apps to make the store faster?",
    a: "Not without discussing their purpose and dependencies. We first investigate the relevant resources and agree on any feature or app changes.",
  },
  {
    q: "Is installing a speed app enough?",
    a: "That depends on the problem. A tool may address some issues, while others require changes to the theme, media or third-party implementation. Investigation helps establish the appropriate approach.",
  },
  {
    q: "Can you optimize an existing customized theme?",
    a: "I can assess it. The existing code, app dependencies and required functionality determine what changes are practical.",
  },
  {
    q: "Will speed optimization increase sales or rankings?",
    a: "Those outcomes cannot be guaranteed. Performance is one part of the overall experience, alongside product relevance, traffic, content and other factors.",
  },
  {
    q: "What if the main issue comes from a third-party service?",
    a: "I can document the finding and assess the options available within the scope. Some changes may require the provider’s involvement or a business decision about the feature.",
  },
  {
    q: "How long will optimization take?",
    a: "The estimate depends on the affected pages, identified issues and testing requirements. An initial review helps define the work.",
  },
  {
    q: "Can you monitor performance after delivery?",
    a: "Recurring reviews and further development can be arranged. The coverage, reporting and responsibilities are agreed separately.",
  },
];

function ShopifySpeedOptimizationPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Speed Optimization"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify CRO", to: "/services/shopify-cro" },
          { label: "Speed Optimization" },
        ]}
        title={
          <>
            Find What Is Slowing Your Shopify Store—and Fix{" "}
            <span className="font-serif italic text-acid">the Right Things</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Request a Performance Review</MagneticCta>
            <MagneticCta href="#optimization-process" variant="ghost">
              Explore the Optimization Process
            </MagneticCta>
          </>
        }
        rail="Theme performance · Image loading · App-script review · Core Web Vitals"
      >
        <p>
          Large images, unnecessary scripts and theme changes can gradually make a storefront
          heavier.
        </p>
        <p>
          I’m Mohid Imran, a Shopify developer. I investigate loading and responsiveness problems,
          identify practical improvements and implement agreed changes with attention to the
          features your store depends on.
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
                What Does the Slowdown
                <span className="font-serif italic text-acid"> Look Like?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Share Your Performance Concern
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
              / Performance Review
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Start With the Pages Customers
              <span className="font-serif italic text-acid"> Actually Use</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A homepage score alone does not describe the whole storefront.</p>
              <p>
                The review focuses on agreed templates and shopping journeys. Depending on the
                project, that can include the homepage, collection pages, product pages and cart
                interactions.
              </p>
              <p>
                I consider what loads, when it loads and what happens as customers use the page. The
                findings guide the development work and the checks used afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Optimization Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Can the Work
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {optimizationScope.map((item, i) => (
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
            The final scope follows the findings and your store’s requirements.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Core Web Vitals
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Look Beyond a Single
              <span className="font-serif italic text-acid"> Performance Score</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              The review can consider three aspects of the experience:
            </p>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {webVitals.map((item) => (
                <div key={item.label} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid md:col-span-4">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-bone/70 md:col-span-8 md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Where available, real-user measurements help show how the store performs outside a
                controlled test. Lab tests provide additional information for investigating specific
                issues.
              </p>
              <p>Neither should be treated as a complete explanation on its own.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / App Decisions
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Understand a Feature Before
              <span className="font-serif italic text-acid"> Removing Its Code</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                An app may support subscriptions, reviews, analytics or another important part of
                your store.
              </p>
              <p>
                Before recommending a change, I establish what the relevant component does and where
                it is used. We can then consider its performance impact alongside its business
                purpose.
              </p>
              <p>
                Possible actions depend on the implementation. They may involve changing settings,
                limiting unnecessary loading, cleaning up unused code or discussing an alternative
                approach.
              </p>
              <p>App removal and feature changes require an agreed scope.</p>
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
              Improve Performance While Checking
              <span className="font-serif italic text-acid"> the Store Still Works</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Changes to scripts, styles and media loading can affect storefront behavior.</p>
              <p>
                After implementing the agreed work, I check the relevant layouts and interactions.
                Depending on the change, testing may cover:
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
              The testing scope reflects the resources changed and the access available.
            </p>
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
              Compare Results Under
              <span className="font-serif italic text-acid"> Consistent Conditions</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>The review should explain what changed and how it was checked.</p>
              <p>
                For before-and-after comparisons, we agree on representative URLs, devices and test
                conditions. Where real-user measurements are available, they can provide a broader
                view over time.
              </p>
              <p>
                Results can be influenced by content, third-party services, traffic and later store
                changes. The handover records those limitations alongside the implementation.
              </p>
              <p>
                A perfect score is not the objective. A more usable store, supported by clear
                measurements, is.
              </p>
            </div>
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
              Frontend Development With
              <span className="font-serif italic text-acid"> Performance in Mind</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My Shopify development work includes image compression, lazy loading and code
                splitting, alongside responsive layouts and frontend improvements.
              </p>
              <p>
                I also work with Liquid themes and app functionality. That background helps me
                investigate how storefront components interact when performance problems appear.
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

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Deliverables
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Know What the Performance Engagement
              <span className="font-serif italic text-acid"> Covers</span>
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
              Wider redesigns, replacement features and ongoing monitoring are included only where
              agreed.
            </p>
          </div>
        </div>
      </section>

      <section
        id="optimization-process"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Review, Prioritize, Improve
            <span className="font-serif italic text-acid"> and Recheck</span>
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
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Maintaining Performance
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Keep Future Store Changes
              <span className="font-serif italic text-acid"> in View</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Performance can change as new media, apps and features are introduced.</p>
              <p>
                The handover can identify the components that need attention when your team updates
                the store. If you need recurring checks or development assistance, an ongoing
                arrangement can be discussed separately.
              </p>
            </div>
            <TextLink to="/services/shopify-support" tone="ink">
              Explore Shopify Support
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Related Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Need Help Beyond
            <span className="font-serif italic text-acid"> Loading Performance?</span>
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
            Let’s Find What Is Making Your Store
            <span className="font-serif italic text-acid"> Feel Slow</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Send your store URL, the pages causing concern and any recent changes you believe may
              be relevant.
            </p>
            <p>I’ll review the information and help define a focused performance engagement.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Request a Performance Review</PrimaryLink>
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
