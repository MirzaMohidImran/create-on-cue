import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-cro")({
  head: () => ({
    meta: [
      { title: "Shopify CRO & Conversion Optimization | Mohid Imran" },
      {
        name: "description",
        content:
          "Find buying friction with Shopify CRO services from Mohid Imran. Review product pages, mobile UX and cart journeys, then implement and measure improvements.",
      },
      {
        property: "og:title",
        content: "Shopify CRO & Conversion Optimization | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Find buying friction with Shopify CRO services from Mohid Imran. Review product pages, mobile UX and cart journeys, then implement and measure improvements.",
      },
    ],
  }),
  component: ShopifyCroPage,
});

type PageLink = "/contact" | "/portfolio" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Visitors Browse but Rarely Add Products to Their Cart",
    text: "The issue may involve product relevance, information, presentation or the steps required to choose an option.",
    follow: "A review helps identify what customers encounter before deciding whether to buy.",
  },
  {
    title: "Customers Add Products but Do Not Complete the Purchase",
    text: "Delivery information, unexpected costs, unclear cart behavior or technical problems may contribute to the drop-off.",
    follow: "We investigate the relevant journey before deciding what to change.",
  },
  {
    title: "Mobile Shoppers Have a Difficult Experience",
    text: "Important information may be hard to find, product options awkward to select or controls difficult to use.",
    follow: "I review mobile layouts and interactions in the context of shopping tasks.",
  },
  {
    title: "You Have Ideas but Do Not Know What to Prioritize",
    text: "Your team has a list of possible changes, but limited evidence about which problem deserves attention first.",
    follow:
      "We can organize the findings around the affected journey, available evidence and implementation effort.",
  },
  {
    title: "A Redesign Is Being Considered Without a Clear Diagnosis",
    text: "A new design may help, but it is useful to understand the existing problems before committing to a wider rebuild.",
    follow: "A focused review can help define what the redesign needs to accomplish.",
  },
];

const croReview = [
  {
    title: "Navigation & Product Discovery",
    text: "Can visitors understand your product range and reach relevant collections? We review the browsing paths, labels and information customers use to find suitable products.",
  },
  {
    title: "Product-Page Clarity",
    text: "Does the page explain the product and answer practical buying questions? We examine the presentation of options, supporting information and the route to adding an item.",
  },
  {
    title: "Mobile Usability",
    text: "Can customers complete the important shopping tasks comfortably on a smaller screen? The review considers content order, controls and responsive behavior.",
  },
  {
    title: "Cart Experience",
    text: "Can shoppers review their selection, change quantities and understand the next step? We look for unclear interactions and missing information.",
  },
  {
    title: "Checkout Journey",
    text: "We review the reported drop-off and the parts of the journey available for investigation. Any checkout changes depend on the platform capabilities and your store setup.",
  },
  {
    title: "Technical Friction",
    text: "Broken interactions and performance problems can affect the shopping experience. Relevant findings can be investigated directly or scoped as separate technical work.",
  },
];

const evidenceItems = [
  "Analytics and funnel reports.",
  "Device-level performance.",
  "Customer questions and recurring support issues.",
  "Storefront behavior during defined shopping tasks.",
  "Existing experiment results.",
  "Session recordings or heatmaps, where available and appropriate.",
];

const prioritization = [
  "How seriously the issue affects a shopping task.",
  "How often customers may encounter it.",
  "The evidence available.",
  "Development effort and dependencies.",
  "Whether the change can be evaluated reliably.",
];

const implementationItems = [
  "Product-page layout adjustments.",
  "Clearer presentation of existing product information.",
  "Mobile interaction improvements.",
  "Navigation and collection-template changes.",
  "Cart usability fixes.",
  "Development required for an agreed experiment.",
];

const engagementOptions = [
  {
    title: "Store Audit & Improvement Plan",
    text: "For businesses that need a structured review and a prioritized set of recommendations.",
    link: "Discuss a Store Audit",
  },
  {
    title: "Focused Implementation",
    text: "For a defined set of improvements or findings that need to be developed and tested.",
    link: "Discuss Implementation",
  },
  {
    title: "Experimentation & Continued Improvement",
    text: "For stores with suitable tracking, traffic and a commitment to reviewing results over time.",
    link: "Discuss Ongoing Optimization",
  },
];

const processSteps = [
  {
    title: "Define the Concern",
    text: "We discuss your store, customers and the part of the buying journey you want to improve.",
  },
  {
    title: "Review the Experience and Evidence",
    text: "I examine the agreed pages and available information, identifying both findings and gaps.",
  },
  {
    title: "Prioritize the Work",
    text: "We choose the changes to implement, their scope and the appropriate measurement approach.",
  },
  {
    title: "Develop and Test",
    text: "I implement the agreed work and check the affected layouts, interactions and dependencies.",
  },
  {
    title: "Review the Results",
    text: "We assess what the available data shows, record limitations and decide whether further work is justified.",
  },
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Shopify Speed Optimization",
    text: "For a focused investigation into loading performance and responsiveness.",
    to: "/services/shopify-speed-optimization",
  },
  {
    title: "Shopify Troubleshooting & Support",
    text: "For broken features, app conflicts and technical faults.",
    to: "/services/shopify-support",
  },
  {
    title: "Custom Shopify Theme Development",
    text: "For new layouts, reusable sections and planned theme functionality.",
    to: "/services/shopify-theme-development",
  },
  {
    title: "Shopify Store Development & Redesign",
    text: "For a coordinated storefront rebuild informed by clear requirements.",
    to: "/services/shopify-store-development",
  },
];

const faqs = [
  {
    q: "Can you guarantee a higher conversion rate?",
    a: "No. Results depend on the store, traffic, products, offer and changes made. The work focuses on identifying problems, implementing justified improvements and evaluating the available evidence.",
  },
  {
    q: "Do I need more traffic before working on CRO?",
    a: "Not necessarily. A store can benefit from resolving usability and technical problems at different traffic levels. Formal experiments need enough relevant activity to produce useful results.",
  },
  {
    q: "Is CRO the same as redesigning the store?",
    a: "No. CRO starts with a defined problem and evidence. Some findings may require design changes, while others can be addressed through focused improvements.",
  },
  {
    q: "Can you investigate cart abandonment?",
    a: "Yes. We can review the available funnel information and the shopping journey. Abandonment can have several causes, so it should not automatically be attributed to the cart design.",
  },
  {
    q: "Do you implement the recommendations?",
    a: "Implementation can be included in the engagement. We agree on the changes, dependencies and testing requirements before development.",
  },
  {
    q: "Will I need paid testing or analytics tools?",
    a: "That depends on the agreed method and current setup. Any additional tool requirements and costs should be identified before the work starts.",
  },
  {
    q: "What if my tracking is incomplete?",
    a: "We identify the measurement gaps and decide what can be assessed reliably. Tracking improvements may need to be included before an experiment or wider optimization programme.",
  },
  {
    q: "How long does CRO take?",
    a: "A focused audit and an ongoing experimentation programme have different timelines. The estimate depends on the scope, available evidence and measurement requirements.",
  },
  {
    q: "What do you need to review my store?",
    a: "Start with your store URL, the main concern, relevant business context and any existing reports. Appropriate access can be arranged after the scope is discussed.",
  },
];

function ShopifyCroPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify CRO & Store Optimization"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify CRO & Store Optimization" },
        ]}
        title={
          <>
            Help More Visitors Move From Browsing{" "}
            <span className="font-serif italic text-acid">to Buying</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Store’s Performance</MagneticCta>
            <MagneticCta href="#cro-process" variant="ghost">
              Explore the CRO Process
            </MagneticCta>
          </>
        }
        rail="Store audits · Product-page improvements · Mobile UX · Cart optimization · A/B testing"
      >
        <p>
          Your store receives visitors, but some leave without finding the right product,
          understanding the offer or completing their purchase.
        </p>
        <p>
          I’m Mohid Imran. I review Shopify shopping journeys, identify potential friction and
          implement agreed improvements to the storefront. Where tracking and traffic support a
          meaningful experiment, A/B testing can help evaluate the changes.
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
                Where Are Customers
                <span className="font-serif italic text-acid"> Getting Stuck?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Share Your Conversion Concerns
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
              What Does Shopify CRO
              <span className="font-serif italic text-acid"> Involve?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Conversion rate optimization is a process for understanding how people use your
                store and improving the experience around a defined action, such as adding a product
                to the cart or completing a purchase.
              </p>
              <p>
                The work starts with a question: what is preventing suitable visitors from taking
                the next step?
              </p>
              <p>
                That question guides the review, the proposed changes and the way results are
                measured. A store audit can identify potential issues; experiments and post-release
                measurement help evaluate whether changes improve the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ CRO Review</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Review the Buying Journey as
            <span className="font-serif italic text-acid"> a Connected Experience</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {croReview.map((item, i) => (
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
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Evidence</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Use the Information Your Store
              <span className="font-serif italic text-acid"> Actually Has</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A useful review combines the visible experience with available evidence.</p>
              <p>Depending on access and the engagement, this may include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {evidenceItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Not every store has complete tracking or enough traffic for testing. We identify those
              limitations early and choose an approach that fits the available information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Recommendations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Turn Findings Into a Practical
              <span className="font-serif italic text-acid"> Improvement Plan</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A long list of suggestions is difficult to act on.</p>
              <p>
                I organize findings around the problem, supporting evidence and proposed action.
                Each recommendation should explain which part of the journey it affects and what
                needs to be checked after implementation.
              </p>
              <p>Prioritization considers:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {prioritization.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              This creates a clearer starting point for implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Implementation
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Move From Recommendations to
              <span className="font-serif italic text-acid"> Working Changes</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                As a Shopify developer, I can implement agreed storefront improvements as part of
                the engagement.
              </p>
              <p>Depending on the findings, work may involve:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {implementationItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Copywriting, design work, tracking implementation and third-party tools are included
              only where defined in the scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ A/B Testing</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Test a Specific Hypothesis When
              <span className="font-serif italic text-acid"> the Data Supports It</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                An A/B test compares variations against a defined objective. Before starting, we
                need a clear hypothesis, suitable tracking and enough relevant activity to make the
                result useful.
              </p>
              <p>
                We agree on what changes, what will be measured and how the result will be assessed.
              </p>
              <p>
                For stores with limited traffic, other work may be more appropriate first: resolving
                obvious faults, improving tracking, reviewing customer feedback or addressing
                usability problems.
              </p>
              <p>
                An inconclusive test is a finding to report. It should not be presented as a
                conversion win.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Measuring Results
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Agree on Success Before
              <span className="font-serif italic text-acid"> Making the Change</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>The measurement should match the problem.</p>
              <p>
                A product-page improvement may be assessed through product interactions and
                add-to-cart behavior. A cart change may focus on progression toward checkout. A
                wider initiative may consider completed purchases alongside revenue and other
                business measures.
              </p>
              <p>
                We also consider factors that can affect interpretation, such as changes in traffic
                sources, promotions, stock availability and seasonality.
              </p>
              <p>
                A simple before-and-after comparison does not always establish that one development
                change caused the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Engagement Options
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Starting Point
            <span className="font-serif italic text-acid"> That Fits Your Store</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {engagementOptions.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="flex flex-col justify-between bg-bone p-7 md:p-9"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
                <TextLink to="/contact" tone="ink">
                  {item.link}
                </TextLink>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            The scope, tools and reporting arrangements are agreed before work begins.
          </p>
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
              Shopify Development With Attention to
              <span className="font-serif italic text-acid"> the Buying Experience</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My work includes Shopify themes, app functionality, mobile layouts and reviews of
                store performance and checkout flows.
              </p>
              <p>
                SalesForge, a Shopify app project I developed, includes features such as bundles,
                product recommendations and a cart drawer. My theme work includes reusable
                storefront sections and product-page layouts.
              </p>
              <p>
                This development experience supports implementation. Any claim about increased sales
                or conversion needs its own measured evidence.
              </p>
            </div>
            <TextLink to="/portfolio" tone="bone">
              View My Shopify Work
            </TextLink>
          </div>
        </div>
      </section>

      <section
        id="cro-process"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Working Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Diagnose, Prioritize, Implement
            <span className="font-serif italic text-acid"> and Evaluate</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
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
                <p className="max-w-2xl text-sm leading-relaxed text-mist md:col-span-7 md:text-base">
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
            When the Main Problem Needs
            <span className="font-serif italic text-acid"> a Different Service</span>
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
            Let’s Find the Friction Before
            <span className="font-serif italic text-acid"> Choosing the Fix</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Share your store URL and explain where you believe customers are dropping off.</p>
            <p>
              We can review the situation and decide whether the next step should be an audit, a
              focused improvement or a measured experiment.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Store’s Performance</PrimaryLink>
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
