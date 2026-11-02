import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-theme-development")({
  head: () => ({
    meta: [
      { title: "Custom Shopify Theme Development | Mohid Imran" },
      {
        name: "description",
        content:
          "Get custom Shopify theme development, Liquid customization and Figma-to-Shopify implementation from Mohid Imran, with editable sections and responsive layouts.",
      },
      { property: "og:title", content: "Custom Shopify Theme Development | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Get custom Shopify theme development, Liquid customization and Figma-to-Shopify implementation from Mohid Imran, with editable sections and responsive layouts.",
      },
    ],
  }),
  component: ShopifyThemeDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Your Store Looks Too Much Like the Original Template",
    text: "You have a clear brand direction, but changing colors and fonts does not give you the layout or product presentation you need.",
    follow: "Custom theme work can help translate that direction into a more suitable storefront.",
  },
  {
    title: "A Required Feature Is Missing From the Theme Settings",
    text: "You need a different product layout, navigation interaction or reusable content section.",
    follow:
      "I can review whether the requirement can be added to your existing theme or needs a broader change.",
  },
  {
    title: "Simple Content Updates Require a Developer",
    text: "Your team cannot rearrange sections, update recurring content or reuse layouts without editing code.",
    follow:
      "We can identify which controls should be available in the theme editor and develop the agreed sections around them.",
  },
  {
    title: "Your Figma Design Has Not Been Implemented Properly",
    text: "The working store does not match the approved design, or its mobile layouts and interactive states were never fully defined.",
    follow:
      "I can review the design and implementation together, then scope the required development.",
  },
  {
    title: "Repeated Changes Have Made the Theme Difficult to Maintain",
    text: "Styles conflict, features behave differently across templates or nobody is sure which code supports an important section.",
    follow:
      "The first step is to understand the existing implementation before deciding what to extend, reorganize or rebuild.",
  },
];

const themeServices = [
  {
    title: "Custom Shopify Theme Development",
    text: "A theme developed around agreed designs, templates and storefront requirements.",
    follow:
      "We define its structure, reusable components and editing controls before building the implementation.",
  },
  {
    title: "Existing Theme Customization",
    text: "Focused changes to a theme that already provides a suitable foundation.",
    follow:
      "This can include layout adjustments, new sections, product-template changes and custom storefront interactions.",
  },
  {
    title: "Shopify Liquid Development",
    text: "Development work involving Liquid templates, snippets and the storefront logic needed for agreed features.",
    follow:
      "The scope is based on how the feature should behave and how it interacts with the existing theme.",
  },
  {
    title: "Figma-to-Shopify Implementation",
    text: "Turn supplied designs into working Shopify templates and sections.",
    follow:
      "We review desktop and mobile layouts, content requirements and interactive states before implementation.",
  },
  {
    title: "Custom Sections & Blocks",
    text: "Reusable storefront components with agreed settings for content, layout and presentation.",
    follow:
      "These can help your team build and update pages using the controls provided in the theme editor.",
  },
  {
    title: "Product & Collection Templates",
    text: "Layouts that support your product information, browsing requirements and content structure.",
    follow:
      "The work can include responsive presentation, reusable content areas and agreed product-selection interactions.",
  },
];

const approachChecks = [
  "How closely the current theme fits your requirements.",
  "The number of templates and components affected.",
  "Existing app dependencies and custom code.",
  "The editing controls your team needs.",
  "The effort required to maintain either approach.",
];

const responsiveChecks = [
  "Mobile, tablet and desktop layouts.",
  "Navigation and expandable content.",
  "Product options and agreed cart interactions.",
  "Long headings and different content lengths.",
  "Image presentation and missing-content states.",
  "Relevant browser behavior.",
];

const projects = [
  {
    title: "Mobuxe",
    text: "An Online Store 2.0 theme project with more than 80 sections, developed for Shopify Theme Store submission.",
    follow: "The work involved reusable storefront components and configurable layouts.",
  },
  {
    title: "Blaze",
    text: "A luxury fashion theme project developed using Online Store 2.0 architecture, targeting Shopify Theme Store submission.",
    follow:
      "The project focused on responsive templates and implementing a defined visual direction.",
  },
];

const deliverables = [
  "A defined list of templates, sections and features.",
  "Implementation from approved designs.",
  "Custom Liquid templates, snippets and frontend code.",
  "Agreed theme-editor controls.",
  "Relevant app-compatibility checks.",
  "Responsive and functional testing.",
  "Theme Check review of the delivered code.",
  "Handover notes for using and maintaining the work.",
];

const processSteps = [
  {
    title: "Review the Theme and Requirements",
    text: "Share your current store, theme and any supplied designs. We identify the changes, dependencies and unanswered questions.",
  },
  {
    title: "Define Templates and Editing Controls",
    text: "We agree on the page types, components, behavior and settings needed for the project.",
  },
  {
    title: "Develop and Share for Review",
    text: "I implement the agreed work in a development or preview environment and share progress at suitable review points.",
  },
  {
    title: "Test With Representative Content",
    text: "I check the affected layouts and functionality using relevant content and product examples.",
  },
  {
    title: "Prepare the Release and Handover",
    text: "We review the completed scope, agree on the release approach and cover how to use the delivered sections and settings.",
  },
];

const relatedServices: { title: string; text: string; to: ServicePath }[] = [
  {
    title: "Shopify Store Development & Redesign",
    text: "For a complete storefront project involving planning, setup and multiple areas of development.",
    to: "/services/shopify-store-development",
  },
  {
    title: "Shopify App Development & Integrations",
    text: "For functionality that requires an app, extension or connection with another system.",
    to: "/services/shopify-app-development",
  },
  {
    title: "Shopify Troubleshooting & Support",
    text: "For existing faults, app conflicts and ongoing development assistance.",
    to: "/services/shopify-support",
  },
  {
    title: "Shopify Speed Optimization",
    text: "For a focused review of loading performance and responsiveness.",
    to: "/services/shopify-speed-optimization",
  },
];

const faqs = [
  {
    q: "Can you customize my existing Shopify theme?",
    a: "Yes. I review the theme and requested changes before confirming the scope. If it provides a suitable foundation, customization may be the appropriate option.",
  },
  {
    q: "Can you develop a theme from my Figma designs?",
    a: "Yes. The designs need to cover the required templates and provide enough information about responsive layouts and interactions. We identify any gaps before development.",
  },
  {
    q: "Can you create a single custom section?",
    a: "Yes. A focused section or component can be scoped separately. We agree on its content, behavior and theme-editor controls.",
  },
  {
    q: "Will I be able to edit the content myself?",
    a: "You will be able to use the editing controls included in the delivered sections and templates. We define those controls during planning and explain them at handover.",
  },
  {
    q: "Will my existing apps still work?",
    a: "I review relevant app dependencies and test the affected features. Compatibility depends on how each app integrates with the theme; any limitations or additional work need to be identified during the project.",
  },
  {
    q: "Can you update an older customized theme?",
    a: "I can assess it. Existing customizations and dependencies determine whether an update, selective rebuild or replacement is the more practical approach.",
  },
  {
    q: "Is theme development the same as complete store development?",
    a: "No. Theme development focuses on storefront templates, components and behavior. A complete store project may also include configuration, product organization, integrations and launch preparation.",
  },
  {
    q: "Does a custom theme guarantee better performance or sales?",
    a: "No. Results depend on the implementation, content, apps, customer experience and other factors. We can define appropriate checks and measurements for the agreed work.",
  },
  {
    q: "How much does custom theme development cost?",
    a: "The estimate depends on the designs, number of templates, custom interactions, editing requirements and integrations. A small customization and a complete theme build have different scopes.",
  },
  {
    q: "Do you provide theme maintenance?",
    a: "Further development and maintenance can be arranged. Support coverage and responsibilities are agreed as part of the engagement.",
  },
];

function ShopifyThemeDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Custom Shopify Theme Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Shopify Development", to: "/services/shopify-development" },
          { label: "Theme Development" },
        ]}
        title={
          <>
            A Shopify Theme That Fits Your Brand and Gives You{" "}
            <span className="font-serif italic text-acid">Room to Grow</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Theme Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View Theme Projects
            </MagneticCta>
          </>
        }
        rail="Custom themes · Liquid customization · Editable sections · Figma-to-Shopify development"
      >
        <p>
          Your theme should support how you present products and manage content. When its settings
          cannot deliver the layout or functionality you need, custom development can help.
        </p>
        <p>
          I’m Mohid Imran. I build and customize Shopify themes using Liquid and Online Store 2.0,
          turning design requirements into responsive templates and editable sections.
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
                Where Is Your Current Theme
                <span className="font-serif italic text-acid"> Holding You Back?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Show Me What Needs to Change
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
            / Theme Development Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Work Your Store
            <span className="font-serif italic text-acid"> Actually Needs</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {themeServices.map((item, i) => (
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
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    {item.follow}
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
              / Choosing an Approach
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Customize Your Existing Theme or
              <span className="font-serif italic text-acid"> Build a New One?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A custom theme is not necessary for every project.</p>
              <p>
                If your current theme has a suitable structure, extending it may be enough. A new
                build becomes worth considering when the required changes affect much of the
                storefront or the existing implementation creates significant limitations.
              </p>
              <p>I review:</p>
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
              You receive a recommendation tied to the work involved, so you can make an informed
              decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Merchant Editing
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Decide What Your Team Should
              <span className="font-serif italic text-acid"> Be Able to Change</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Theme development should account for everyday store management.</p>
              <p>
                During planning, we identify the content your team updates regularly and the
                controls each component needs. These might include images, text, links, section
                ordering or selected layout options.
              </p>
              <p>
                The aim is to give your team useful flexibility while keeping the storefront
                consistent. Features that require development remain clearly distinguished from
                settings available in the editor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Responsive Development
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Design the Experience Beyond
              <span className="font-serif italic text-acid"> the Desktop Screenshot</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A desktop design does not answer every implementation question.</p>
              <p>
                We also need to consider how navigation opens on a smaller screen, how product
                information is ordered, what happens when text becomes longer and how customers use
                interactive controls.
              </p>
              <p>Depending on the scope, review can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {responsiveChecks.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              Any additional design decisions are clarified before they become assumptions in the
              build.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Performance & Compatibility
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Check the Theme Within
              <span className="font-serif italic text-acid"> the Working Store</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A theme operates alongside apps, tracking scripts and store content.</p>
              <p>
                I consider those dependencies when implementing changes and test the affected
                functionality. Relevant work can include image handling, script loading and reducing
                unnecessary frontend code.
              </p>
              <p>
                If the store needs a deeper performance investigation, that can be scoped through{" "}
                <Link
                  to="/services/shopify-speed-optimization"
                  className="border-b border-bone/30 transition-colors hover:border-acid hover:text-acid"
                >
                  Shopify Speed Optimization
                </Link>
                .
              </p>
              <p>
                A theme build does not come with a guaranteed Lighthouse score, conversion increase
                or search position.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
                / Relevant Projects
              </p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                Theme Development Experience
                <span className="font-serif italic text-acid"> Behind the Service</span>
              </h2>
            </div>
            <TextLink to="/portfolio" tone="ink" className="mt-0">
              Explore Theme Projects
            </TextLink>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
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
                  <p className="mt-4 text-sm leading-relaxed text-mist/75">{project.follow}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
            My client work also includes theme customization, app integration and frontend
            improvements.
          </p>
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
              Know What Is Included
              <span className="font-serif italic text-acid"> Before Development Starts</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Depending on the agreed scope, your project can include:
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
              Design creation, product entry, copywriting and ongoing maintenance are included only
              where agreed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From Design Review to
            <span className="font-serif italic text-acid"> Theme Handover</span>
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
            Need More Than
            <span className="font-serif italic text-acid"> Theme Development?</span>
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
            Tell Me What Your Theme
            <span className="font-serif italic text-acid"> Needs to Do</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>
              Share your store URL, current theme and the design or feature you want to implement.
            </p>
            <p>
              Whether you need one reusable section or a wider theme build, we can start by defining
              the requirement.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Theme Project</PrimaryLink>
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
