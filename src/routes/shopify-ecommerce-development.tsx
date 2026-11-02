import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { Marquee, SiteShell } from "@/components/site/shell";

const services = [
  {
    title: "Custom Shopify Store Development",
    description:
      "A complete Shopify storefront built around your products, brand system, content requirements and customer journey. The build uses reusable sections and merchant-friendly controls so your team can manage the store without depending on a developer for routine updates.",
  },
  {
    title: "Shopify Theme Development and Redesign",
    description:
      "Custom Liquid and Online Store 2.0 development for new designs, existing-theme improvements and full storefront redesigns. Templates, sections, product pages, collections, navigation and cart experiences are implemented responsively and tested across devices.",
  },
  {
    title: "Shopify Plus Development",
    description:
      "Development for higher-volume and more complex stores, including Shopify Functions, B2B requirements, Markets, automation and eligible checkout extensions. Scope is based on the plan’s actual capabilities and the commercial reason for using Plus.",
  },
  {
    title: "Shopify Migration Services",
    description:
      "Structured migration from WooCommerce, Magento, BigCommerce or another platform to Shopify. The plan covers products, customers, orders where applicable, redirects, analytics, integrations, SEO-critical URLs and launch verification.",
  },
  {
    title: "Custom Features and Integrations",
    description:
      "Custom storefront features and connections with ERP, CRM, subscription, loyalty, reviews, email, fulfillment, payments and other business systems. Existing apps are assessed before new code is introduced.",
  },
  {
    title: "Shopify Speed and Core Web Vitals",
    description:
      "Performance work focused on theme code, images, fonts, scripts, app overhead, loading behavior and page templates. Changes are measured before and after implementation, with limitations documented.",
  },
  {
    title: "Conversion Focused Development",
    description:
      "Implementation of evidence-based improvements across landing pages, product pages, collections, cart and mobile journeys. Development supports CRO hypotheses and analytics; it does not promise a conversion increase without sufficient traffic and testing.",
  },
  {
    title: "Headless Shopify Development",
    description:
      "Hydrogen or Next.js storefronts using Shopify’s Storefront API when a brand has a justified need for composable architecture, advanced content experiences or frontend flexibility. A conventional Shopify theme remains the recommendation when headless complexity would not create enough value.",
  },
  {
    title: "Ongoing Shopify Support",
    description:
      "Retained development for enhancements, quality assurance, troubleshooting, app changes, performance monitoring and scheduled releases after launch.",
  },
];

const audiences = [
  {
    title: "Growing DTC brands",
    need: "Conversion, speed, merchandising and custom functionality.",
    engagement: "Store redesign, theme development, CRO implementation and ongoing improvement.",
  },
  {
    title: "Startups and new stores",
    need: "A stable launch foundation without unnecessary complexity.",
    engagement: "Theme-led build, essential integrations, analytics and launch support.",
  },
  {
    title: "Shopify Plus teams",
    need: "Checkout, B2B, Markets, automation and deeper integrations.",
    engagement:
      "Plus implementation, Functions, eligible checkout extensions and systems integration.",
  },
  {
    title: "Agency partners",
    need: "Reliable technical delivery within an existing client relationship.",
    engagement: "White-label development, overflow support and documented handoff.",
  },
];

const benefits = [
  {
    title: "Clearer buying journey",
    text: "Customers can understand products, find key information and move toward checkout with less friction.",
  },
  {
    title: "Faster storefront",
    text: "Performance improvements reduce avoidable loading delays and support stronger usability and search performance.",
  },
  {
    title: "Flexible merchandising",
    text: "Reusable sections and structured content let internal teams launch pages and campaigns more efficiently.",
  },
  {
    title: "Reliable custom functionality",
    text: "Features are designed around actual workflows instead of accumulating overlapping apps and workarounds.",
  },
  {
    title: "Scalable foundation",
    text: "Theme architecture, integrations and documentation support future releases and additional developers.",
  },
  {
    title: "Better measurement",
    text: "Analytics and defined events make it easier to evaluate customer behavior and future improvements.",
  },
];

const process = [
  {
    title: "Discover",
    text: "We define the business goal, customer journey, operational requirements, current constraints and the outcome the project needs to support.",
  },
  {
    title: "Audit and plan",
    text: "I review the existing store or requirements, identify technical risks, confirm scope and integrations, and provide a practical delivery plan.",
  },
  {
    title: "Design alignment",
    text: "Existing designs and components are mapped to Shopify templates and reusable sections. Where design work is included, decisions remain consistent with the brand and conversion goals.",
  },
  {
    title: "Build and test",
    text: "Development is completed in a controlled environment with responsive behavior, browser testing, accessibility checks and quality assurance.",
  },
  {
    title: "Launch",
    text: "Content, redirects, analytics, integrations and critical customer journeys are verified before and after release.",
  },
  {
    title: "Improve",
    text: "Post-launch data, issues and new priorities inform ongoing performance, CRO and feature improvements.",
  },
];

const engagementOptions = [
  [
    "Focused project",
    "A redesign, migration, custom feature, performance improvement or defined build.",
  ],
  ["Development sprint", "A prioritized set of improvements delivered within a fixed period."],
  [
    "Ongoing partnership",
    "Regular Shopify development and release support for brands or agencies.",
  ],
  ["Technical audit", "A clear diagnosis and prioritized plan before committing to a build."],
];

const faqs = [
  {
    question: "What Shopify development services do you provide?",
    answer:
      "I provide custom Shopify store development, theme development and redesign, Shopify Plus development, migrations, custom features, integrations, speed improvements, CRO-focused implementation, headless storefronts and ongoing support.",
  },
  {
    question: "Do you work with Shopify and Shopify Plus?",
    answer:
      "Yes. I work with standard Shopify plans and Shopify Plus. The recommended approach depends on store volume, checkout requirements, B2B needs, international markets, automation and integration complexity.",
  },
  {
    question: "Can you redesign an existing Shopify store?",
    answer:
      "Yes. A redesign can cover the full storefront or specific templates such as the homepage, product pages, collections, cart and mobile navigation. Existing brand assets and reusable components can be retained where they still work.",
  },
  {
    question: "Can you migrate WooCommerce or Magento to Shopify?",
    answer:
      "Yes. A migration can include product and customer data, eligible order history, redirects, content, analytics, apps, integrations and launch validation. The exact migration plan depends on the source platform and data quality.",
  },
  {
    question: "Can you improve Shopify speed and Core Web Vitals?",
    answer:
      "Yes. I audit theme code, media, fonts, scripts, apps and template behavior, then address the highest-impact issues that can be safely changed. Results depend on the existing theme, third-party apps and platform constraints.",
  },
  {
    question: "Do I need a headless Shopify store?",
    answer:
      "Not always. Headless can be valuable for advanced content, custom product experiences, composable architecture or specific performance requirements, but it adds development and maintenance complexity. I recommend it only when the business case justifies that tradeoff.",
  },
  {
    question: "Can you customize Shopify checkout?",
    answer:
      "Checkout customization depends on the Shopify plan and extension point. Shopify Plus supports Checkout UI extensions in the information, shipping and payment steps; other extension points and branding capabilities vary. I confirm what is technically available before scoping the work.",
  },
  {
    question: "Do you work with agencies as a Shopify development partner?",
    answer:
      "Yes. I can support agencies with white-label development, technical scoping, theme implementation, complex features, troubleshooting and documented handoff while respecting the agency’s client relationship.",
  },
  {
    question: "How long does a Shopify development project take?",
    answer:
      "A focused feature or sprint may take days or a few weeks, while a full custom build, migration or headless project can take several weeks or longer. A delivery timeline is confirmed after requirements and dependencies are reviewed.",
  },
  {
    question: "How much does Shopify development cost?",
    answer:
      "Cost depends on scope, design readiness, templates, integrations, data migration, Shopify plan and quality-assurance requirements. After reviewing the project, I provide a defined scope, timeline and commercial proposal.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support can cover launch stabilization, ongoing enhancements, performance work, troubleshooting, app changes and planned development releases.",
  },
  {
    question: "Do you work with international ecommerce brands?",
    answer:
      "Yes. I work remotely with brands, startups and agencies across the US, UK, Australia, Europe and other international markets.",
  },
];

const technologies = [
  "Shopify",
  "Shopify Plus",
  "Liquid",
  "Online Store 2.0",
  "Shopify Functions",
  "Checkout UI Extensions",
  "Storefront API",
  "Hydrogen",
  "React",
  "Next.js",
  "GraphQL",
  "JavaScript",
  "TypeScript",
  "Metaobjects",
  "Shopify CLI",
  "GitHub",
  "GA4",
  "Google Tag Manager",
  "Microsoft Clarity",
  "Klaviyo",
];

const whyMohid = [
  "Direct communication and clear tradeoffs",
  "Shopify-specific frontend and integration experience",
  "Business requirements translated into maintainable development",
  "Performance and conversion considered during implementation",
  "Structured testing, documentation and handoff",
  "Remote collaboration across international time zones",
];

const canonicalUrl = "https://www.mohidimran.com/shopify-ecommerce-development/";
const revealEase = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, margin: "-80px" } as const;

export const Route = createFileRoute("/shopify-ecommerce-development")({
  head: () => ({
    meta: [
      { title: "Shopify Development Services for Ecommerce Brands | Mohid Imran" },
      {
        name: "description",
        content:
          "Custom Shopify development for growing ecommerce brands, including themes, Shopify Plus, migrations, integrations, speed and CRO. Discuss your project.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Shopify Development for Growing Ecommerce Brands" },
      {
        property: "og:description",
        content:
          "Custom Shopify builds, redesigns, migrations, integrations and performance improvements delivered by one accountable development partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: ShopifyEcommerceDevelopmentPage,
});

function ShopifyEcommerceDevelopmentPage() {
  const reduceMotion = useReducedMotion();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Shopify Development Services for Ecommerce Brands | Mohid Imran",
        isPartOf: { "@id": "https://www.mohidimran.com/#website" },
        about: { "@id": `${canonicalUrl}#service` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        mainEntity: { "@id": `${canonicalUrl}#faq` },
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Shopify and Ecommerce Development",
        serviceType: "Shopify development services",
        url: canonicalUrl,
        provider: { "@id": "https://www.mohidimran.com/#person" },
        areaServed: "Worldwide",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Ecommerce brands, startups and agencies",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mohidimran.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.mohidimran.com/services/",
          },
          { "@type": "ListItem", position: 3, name: "Shopify and Ecommerce Development" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <noscript>
        <style>{`.shopify-motion { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style>
      </noscript>

      <PageHero
        eyebrow="Shopify and Ecommerce Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify and ecommerce development" },
        ]}
        title={
          <>
            Shopify Development Services for{" "}
            <span className="font-serif italic text-acid">Growing Ecommerce Brands</span>
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
        rail="Remote Shopify development for teams across the US, UK, Australia, Europe and worldwide."
      >
        <p>
          I design, build and improve Shopify stores for brands that need stronger performance,
          clearer customer journeys and reliable custom functionality. From theme development and
          migrations to Shopify Plus, integrations and ongoing improvements, every engagement is
          built around the needs of your business.
        </p>
      </PageHero>

      <Marquee
        items={[
          "Shopify",
          "Liquid",
          "Shopify Plus",
          "Storefront API",
          "Hydrogen",
          "Functions",
          "Core Web Vitals",
        ]}
      />

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 md:gap-12">
          <SectionLabel className="col-span-12 text-mist md:col-span-3">
            / 01 — The problem
          </SectionLabel>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: revealEase }}
            className="shopify-motion col-span-12 md:col-span-9"
          >
            <h2 className="max-w-4xl text-balance font-display text-4xl leading-[0.96] tracking-tight md:text-6xl">
              When Your Shopify Store Starts
              <span className="block font-serif italic text-acid">Holding Growth Back</span>
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-relaxed text-ink/70 md:grid-cols-2 md:text-lg">
              <p>
                A Shopify store can look polished and still create friction. Slow templates, rigid
                theme code, app conflicts, unclear product pages, limited integrations and difficult
                content updates make it harder for customers to buy and harder for your team to
                operate the store.
              </p>
              <p>
                I identify the technical and customer-experience issues affecting the store, then
                build the right solution for its current stage. The goal is a faster,
                easier-to-manage storefront that supports measurable business priorities—not
                unnecessary complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            label="/ 02 — Who it is for"
            title="Shopify Development for Every Stage of Ecommerce Growth"
          />
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.title}
                initial={reduceMotion ? false : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={revealViewport}
                transition={{ delay: index * 0.08, duration: 0.6, ease: revealEase }}
                className="shopify-motion group grid gap-5 py-9 transition-colors hover:border-acid md:grid-cols-12 md:gap-8 md:py-11"
              >
                <div className="md:col-span-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-acid">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl italic md:text-4xl">{audience.title}</h3>
                </div>
                <p className="text-bone/65 md:col-span-4 md:text-lg">{audience.need}</p>
                <p className="text-bone/80 md:col-span-4 md:text-lg">{audience.engagement}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            label="/ 03 — Services"
            title="Shopify Services Built Around Real Store Requirements"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: revealEase }}
                className="shopify-motion group relative flex min-h-80 flex-col justify-between overflow-hidden bg-ink p-7 transition-colors duration-500 hover:bg-bone hover:text-ink md:p-9"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  <span>0{index + 1}</span>
                  <span
                    aria-hidden
                    className="font-serif text-2xl italic text-acid transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                  >
                    ✦
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed opacity-70 md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            dark
            label="/ 04 — Outcomes"
            title="A Store That Works Better for Customers and Your Team"
          />
          <ol className="mt-14 grid gap-x-10 border-y border-ink/10 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: (index % 2) * 0.08, duration: 0.6, ease: revealEase }}
                className="shopify-motion group grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-8 transition-colors hover:border-acid last:border-b-0 md:odd:border-r md:odd:pr-10 md:even:pl-2"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-acid">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-3xl italic">{benefit.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 md:text-base">
                    {benefit.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 md:gap-12">
          <SectionLabel className="col-span-12 md:col-span-3">/ 05 — Selected work</SectionLabel>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: revealEase }}
            className="shopify-motion col-span-12 md:col-span-9"
          >
            <h2 className="max-w-4xl font-display text-4xl leading-[0.96] tracking-tight md:text-6xl">
              Selected Shopify Work
            </h2>
            <div className="mt-10 border-y border-white/10 py-10 md:py-14">
              <p className="max-w-2xl font-serif text-3xl italic leading-tight text-bone/85 md:text-5xl">
                Detailed case studies are shared when publishing permissions allow.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/60 md:text-base">
                Tell me about your store and I&apos;ll share the most relevant examples of Shopify
                builds, migrations, integrations or performance work during our conversation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink to="/contact" data-analytics="shopify-proof-contact">
                  Request Relevant Examples
                </PrimaryLink>
                <SecondaryLink to="/portfolio" data-analytics="shopify-proof-portfolio">
                  View Portfolio
                </SecondaryLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-ink py-24 md:py-32">
        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              label="/ 06 — Technology"
              title="Shopify Technology Used for the Right Reason"
            />
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-2 px-6 md:gap-3 md:px-10">
          {technologies.map((technology, index) => (
            <motion.span
              key={technology}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={
                reduceMotion ? undefined : { y: -3, backgroundColor: "rgba(255,255,255,0.08)" }
              }
              viewport={revealViewport}
              transition={{ delay: index * 0.03, duration: 0.5, ease: revealEase }}
              className="shopify-motion cursor-default rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/70 transition-colors hover:border-acid hover:text-bone md:px-5 md:py-2.5 md:text-xs"
            >
              {technology}
            </motion.span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl px-6 text-center text-sm leading-relaxed text-bone/50 md:px-10">
          The stack is selected around store requirements, team workflow and maintainability—not
          used as a substitute for business outcomes.
        </p>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading dark label="/ 07 — Process" title="A Clear Shopify Development Process" />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <motion.li
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: revealEase }}
                className="shopify-motion group relative flex min-h-64 flex-col justify-between overflow-hidden bg-bone p-7 md:p-9"
              >
                <motion.span
                  aria-hidden
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={revealViewport}
                  transition={{ delay: 0.15 + (index % 3) * 0.08, duration: 0.9, ease: revealEase }}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-acid"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-mist">
                    0{index + 1}
                  </span>
                  <span aria-hidden className="h-2 w-2 rounded-full bg-acid" />
                </div>
                <div className="mt-14">
                  <h3 className="font-serif text-3xl italic md:text-4xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65 md:text-base">
                    {step.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 md:gap-12">
          <SectionLabel className="col-span-12 md:col-span-3">/ 08 — Why Mohid</SectionLabel>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: revealEase }}
            className="shopify-motion col-span-12 md:col-span-9"
          >
            <h2 className="max-w-4xl font-display text-4xl leading-[0.96] tracking-tight md:text-6xl">
              Direct Senior Involvement
              <span className="block font-serif italic text-acid">From Scope to Launch</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
              You work directly with the person responsible for understanding, building and
              delivering the solution. There are fewer handoffs, clearer technical decisions and one
              accountable contact throughout the engagement.
            </p>
            <ul className="mt-12 grid gap-x-10 border-y border-white/10 md:grid-cols-2">
              {whyMohid.map((item, index) => (
                <motion.li
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={revealViewport}
                  transition={{ delay: index * 0.06, duration: 0.55, ease: revealEase }}
                  className="shopify-motion flex gap-4 border-b border-white/10 py-5 text-bone/80 transition-colors hover:border-acid last:border-b-0"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-acid">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.18em]">
              <Link
                to="/about"
                className="border-b border-bone/30 pb-1 hover:border-acid hover:text-acid"
              >
                About Mohid Imran →
              </Link>
              <Link
                to="/resume"
                className="border-b border-bone/30 pb-1 hover:border-acid hover:text-acid"
              >
                Development experience →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading label="/ 09 — Engagements" title="Choose the Shape That Fits the Work" />
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {engagementOptions.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={reduceMotion ? false : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={revealViewport}
                transition={{ delay: index * 0.08, duration: 0.6, ease: revealEase }}
                className="shopify-motion grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-acid md:col-span-1">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-3xl italic md:col-span-4 md:text-4xl">{title}</h3>
                <p className="max-w-2xl text-bone/65 md:col-span-7 md:text-lg">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel className="text-mist">/ 10 — FAQ</SectionLabel>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={revealViewport}
              transition={{ duration: 0.9, ease: revealEase }}
              className="shopify-motion mt-5 font-display text-4xl leading-[0.96] tracking-tight md:text-6xl"
            >
              Shopify Questions,
              <span className="block font-serif italic text-acid">Answered Clearly</span>
            </motion.h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ delay: index * 0.04, duration: 0.6, ease: revealEase }}
                  className="service-faq shopify-motion group py-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm transition-colors hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid">
                    <span className="flex gap-4">
                      <span className="mt-1 font-mono text-[9px] tracking-[0.18em] text-mist">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg tracking-tight md:text-2xl">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 font-serif text-2xl italic text-acid transition-transform duration-300 group-open:rotate-45"
                    >
                      ＋
                    </span>
                  </summary>
                  <div className="service-faq__content">
                    <p className="ml-10 mt-5 max-w-2xl text-sm leading-relaxed text-ink/65 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center">
          <SectionLabel>/ 11 — Next</SectionLabel>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: revealEase }}
            className="shopify-motion mx-auto mt-6 max-w-5xl text-balance font-display text-4xl leading-[0.95] tracking-tight md:text-6xl"
          >
            Need a Shopify Store That Is Ready for
            <span className="block font-serif italic text-acid">What Comes Next?</span>
          </motion.h2>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ delay: 0.08, duration: 0.7, ease: revealEase }}
            className="shopify-motion mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/65 md:text-lg"
          >
            Share your current store, goals and technical requirements. I&apos;ll review the project
            and recommend the most practical next step—whether that is a focused improvement,
            redesign, migration, Shopify Plus build or ongoing development support.
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ delay: 0.16, duration: 0.7, ease: revealEase }}
            className="shopify-motion mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center"
          >
            <PrimaryLink to="/contact" data-analytics="shopify-final-primary">
              Discuss Your Shopify Project
            </PrimaryLink>
            <SecondaryLink to="/portfolio" data-analytics="shopify-final-work">
              View Shopify Work
            </SecondaryLink>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}

function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.p
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.7, ease: revealEase }}
      className={`shopify-motion font-mono text-xs uppercase tracking-[0.24em] text-mist ${className}`}
    >
      {children}
    </motion.p>
  );
}

function SectionHeading({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-12 gap-8">
      <SectionLabel className={`col-span-12 md:col-span-3 ${dark ? "text-mist" : ""}`}>
        {label}
      </SectionLabel>
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={revealViewport}
        transition={{ duration: 0.9, ease: revealEase }}
        className={`shopify-motion col-span-12 max-w-4xl text-balance font-display text-4xl leading-[0.96] tracking-tight md:col-span-9 md:text-6xl ${
          dark ? "text-ink" : "text-bone"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}

function PrimaryLink({
  children,
  ...props
}: {
  children: ReactNode;
  to: "/contact";
  "data-analytics": string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Link
        {...props}
        className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-acid px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid active:bg-bone/90 md:text-xs"
      >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </motion.div>
  );
}

function SecondaryLink({
  children,
  ...props
}: {
  children: ReactNode;
  to: "/portfolio";
  "data-analytics": string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Link
        {...props}
        className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid active:border-acid active:text-acid md:text-xs"
      >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </Link>
    </motion.div>
  );
}
