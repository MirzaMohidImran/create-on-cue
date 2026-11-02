import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-store-development")({
  head: () => ({
    meta: [
      { title: "Shopify Store Development & Redesign | Mohid Imran" },
      {
        name: "description",
        content:
          "Launch or redesign your Shopify store with Mohid Imran. Get responsive layouts, clear navigation, editable pages and integrations scoped to your business.",
      },
      { property: "og:title", content: "Shopify Store Development & Redesign | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Launch or redesign your Shopify store with Mohid Imran. Get responsive layouts, clear navigation, editable pages and integrations scoped to your business.",
      },
    ],
  }),
  component: ShopifyStoreDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/services" | ServicePath;

const situations = [
  {
    title: "You’re Ready to Sell, but Your Store Isn’t Ready",
    text: "You have products and a business direction, but need help organizing the storefront, setting up its pages and connecting the required functionality.",
  },
  {
    title: "Your Current Store Feels Disconnected",
    text: "The homepage, collections and product pages look different from one another. Features have been added over time, and the shopping experience has become difficult to follow.",
  },
  {
    title: "Customers Struggle to Find the Right Product",
    text: "Navigation, collections or product information make it harder than necessary to browse and compare what you sell.",
  },
  {
    title: "Mobile Shopping Needs Attention",
    text: "Important information is buried, controls are awkward to use or layouts do not adapt well to smaller screens.",
  },
  {
    title: "Updating the Store Has Become Difficult",
    text: "Simple changes depend on code edits, repeated work or sections that no longer support the content your team needs to publish.",
  },
];

const startingPoints = [
  {
    title: "New Shopify Store Development",
    text: "For businesses building their first Shopify storefront or creating a new store for an established brand.",
    follow:
      "We define the required pages, organize the product-browsing journey and develop the agreed templates and functionality. Configuration, integrations and content responsibilities are included in the scope where required.",
    link: "Plan a New Store",
  },
  {
    title: "Shopify Store Redesign",
    text: "For businesses with an existing store that needs a more coherent design, clearer shopping experience or updated functionality.",
    follow:
      "I review the current storefront before recommending changes. The scope can focus on selected templates or cover a wider redesign, depending on what needs improvement.",
    link: "Discuss a Store Redesign",
  },
];

const scopeItems = [
  {
    title: "Store Structure & Navigation",
    text: "Plan the main navigation, collection structure and routes customers use to reach relevant products.",
  },
  {
    title: "Homepage Development",
    text: "Build a homepage that introduces the brand, presents important collections and helps visitors choose where to go next.",
  },
  {
    title: "Product & Collection Templates",
    text: "Develop layouts that support the information customers need to browse, compare and select products.",
  },
  {
    title: "Responsive Layouts",
    text: "Adapt the agreed design for mobile, tablet and desktop use, with attention to readable content and usable controls.",
  },
  {
    title: "Editable Sections",
    text: "Create or configure sections that let your team manage the agreed content through the theme editor.",
  },
  {
    title: "Apps & Integrations",
    text: "Set up relevant connections and storefront features included in the project. Any custom app development is assessed and scoped separately.",
  },
  {
    title: "Store Configuration",
    text: "Review agreed settings for payments, shipping and other operational requirements, with business-specific information supplied by you.",
  },
  {
    title: "Testing & Handover",
    text: "Check the affected pages and shopping interactions, then explain how to manage the delivered work.",
  },
];

const shoppingQuestions = [
  {
    label: "On the homepage:",
    text: "What do you sell, and where should a new visitor start?",
  },
  {
    label: "On collection pages:",
    text: "Can customers narrow down the range and find suitable products?",
  },
  {
    label: "On product pages:",
    text: "Is the information clear enough to help someone choose the right option?",
  },
  {
    label: "In the cart:",
    text: "Can customers review their selection and understand the next step?",
  },
];

const processSteps = [
  {
    title: "Review Your Business and Store",
    text: "We discuss your products, current setup, required features and the problems the project needs to solve.",
  },
  {
    title: "Agree on the Structure and Scope",
    text: "We define the templates, functionality, integrations and content responsibilities. Any design or content gaps are identified before development depends on them.",
  },
  {
    title: "Develop and Review",
    text: "I build the agreed storefront and share it for review. Feedback is checked against the scope so changes remain clear.",
  },
  {
    title: "Test and Prepare for Release",
    text: "We review the relevant layouts, links, product interactions and integrations. Launch responsibilities and any remaining requirements are confirmed.",
  },
  {
    title: "Hand Over the Store",
    text: "You receive access to the delivered work and the agreed guidance for managing it. Further improvements can be planned after launch.",
  },
];

const prepareItems = [
  "Your existing store URL, if you have one.",
  "A description of your products and target customers.",
  "Brand assets and any supplied designs.",
  "Examples of features or layouts you find useful.",
  "Required apps and integrations.",
  "The main problems you want to resolve.",
  "Your preferred timeline and approximate budget.",
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Custom Shopify Theme Development",
    text: "For a specific design, reusable section or theme feature.",
    to: "/services/shopify-theme-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For custom functionality or connections that extend beyond the theme.",
    to: "/services/shopify-app-development",
  },
  {
    title: "Shopify Troubleshooting & Support",
    text: "For faults or maintenance needs in an otherwise suitable store.",
    to: "/services/shopify-support",
  },
  {
    title: "Shopify Speed Optimization",
    text: "For a focused investigation into loading and responsiveness.",
    to: "/services/shopify-speed-optimization",
  },
  {
    title: "Shopify CRO & Store Optimization",
    text: "For a buying-journey review and measurable improvement plan.",
    to: "/services/shopify-cro",
  },
];

const faqs = [
  {
    q: "Can you build a store using an existing Shopify theme?",
    a: "Yes. A suitable existing theme may provide a practical starting point. We review your design and functionality requirements before choosing between theme customization and a custom build.",
  },
  {
    q: "Do I need a complete redesign?",
    a: "Not always. Selected template changes, improved navigation or focused development may address the problem. The recommendation follows a review of the current store.",
  },
  {
    q: "Can you develop a store from my Figma designs?",
    a: "Yes. We review the supplied designs, required templates and responsive behavior before agreeing on implementation. Any missing states or functionality need to be clarified during planning.",
  },
  {
    q: "Will my team be able to edit the store?",
    a: "We agree on which content and sections should be manageable through the theme editor. The handover explains the controls included in the delivered work.",
  },
  {
    q: "Can you preserve existing URLs during a redesign?",
    a: "Preserving suitable URLs can be part of the project. Where changes are necessary, we identify them and include the agreed redirect work. Search performance cannot be guaranteed.",
  },
  {
    q: "Are product uploads and copywriting included?",
    a: "They are included only when agreed in the scope. We define who supplies and uploads product information, images, page copy and business policies before development begins.",
  },
  {
    q: "How much does Shopify store development cost?",
    a: "The cost depends on the number of templates, design requirements, custom features, integrations and content work. A reliable estimate follows a review of those requirements.",
  },
  {
    q: "How long will my store take to build?",
    a: "The timeline depends on the scope and readiness of designs, content, access and feedback. We agree on an estimated schedule before development starts.",
  },
  {
    q: "Can you help after launch?",
    a: "Yes. Further development and maintenance can be arranged. Support coverage and responsibilities are agreed as part of the engagement.",
  },
];

function ShopifyStoreDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Store Development & Redesign"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development", to: "/services/shopify-development" },
          { label: "Store Development & Redesign" },
        ]}
        title={
          <>
            A Shopify Store Built Around Your Products
            <span className="font-serif italic text-acid"> and Customers</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Store</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View Shopify Projects
            </MagneticCta>
          </>
        }
        rail="New store builds · Existing store redesigns · Responsive development · Store setup"
      >
        <p>Starting a new store or improving one that no longer fits your business?</p>
        <p>
          I develop Shopify storefronts with clear navigation, practical product pages and
          responsive layouts. We plan the shopping experience alongside the features and
          integrations your business needs to operate.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Recognize Your Situation
              </p>
              <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
                Does Any of This Sound
                <span className="font-serif italic text-acid"> Like Your Store?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Share Your Store’s Challenges
              </TextLink>
            </div>
            <div className="col-span-12 divide-y divide-ink/10 border-y border-ink/10 md:col-span-8">
              {situations.map((item, i) => (
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
            / Choose Your Starting Point
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Launch a New Store or
            <span className="font-serif italic text-acid"> Improve an Existing One</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {startingPoints.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="flex flex-col justify-between bg-ink p-8 md:p-10"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl italic">{item.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.text}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-bone/55 md:text-base">
                    {item.follow}
                  </p>
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
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Scope
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Can Your Store Project
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {scopeItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
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
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Shopping Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Help Customers Move From
              <span className="font-serif italic text-acid"> Browsing to Buying</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              A store needs to answer practical questions throughout the visit.
            </p>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {shoppingQuestions.map((item) => (
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
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              These questions guide layout and functionality decisions. The exact implementation
              depends on your products, available content and customers’ needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Redesign Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Understand What Needs Changing
              <span className="font-serif italic text-acid"> Before Rebuilding</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>An existing store may already have useful layouts, content and functionality.</p>
              <p>
                Before a redesign, I review the relevant pages, theme setup and app dependencies. We
                discuss what needs to improve and what should be preserved.
              </p>
              <p>
                If the project involves changed URLs, a redirect plan should be included in the
                scope. Existing integrations, tracking and content also need to be considered before
                release.
              </p>
              <p>
                The objective is a coordinated improvement with a clear implementation plan. A
                redesign alone does not guarantee higher sales or search rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Store Management
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan for the People
              <span className="font-serif italic text-acid"> Updating the Store</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Your store will continue changing after launch.</p>
              <p>
                You may need to update banners, introduce collections, adjust product information or
                publish a campaign. During planning, we identify which changes your team should be
                able to make without development help.
              </p>
              <p>
                The handover can cover the delivered sections, template settings and relevant
                configuration. Ongoing maintenance or additional development can be arranged
                separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Relevant Work
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Storefront Experience
              <span className="font-serif italic text-acid"> Behind the Development</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                My Shopify work includes client theme development, app integrations, responsive
                layouts and frontend improvements.
              </p>
              <p>
                I have also developed Mobuxe and Blaze, two Online Store 2.0 theme projects
                targeting Shopify Theme Store submission. These projects involved building
                storefront templates and reusable sections.
              </p>
              <p>
                My portfolio provides a starting point for discussing the type of implementation
                your store requires.
              </p>
            </div>
            <TextLink to="/portfolio" tone="ink">
              Explore My Shopify Work
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Project Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            A Clear Plan From
            <span className="font-serif italic text-acid"> Requirements to Release</span>
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
              / Prepare for Your Project
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What to Share
              <span className="font-serif italic text-acid"> Before We Start</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Helpful information includes:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {prepareItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              If some details are undecided, we can identify what needs to be clarified during
              planning.
            </p>
            <TextLink to="/contact" tone="ink">
              Send Your Project Details
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
            Need a More
            <span className="font-serif italic text-acid"> Focused Change?</span>
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
            Let’s Plan a Store That Fits
            <span className="font-serif italic text-acid"> Your Business</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Share your existing store or explain what you want to launch.</p>
            <p>
              Tell me what customers need to do, what your team needs to manage and what is
              currently getting in the way.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Store</PrimaryLink>
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
