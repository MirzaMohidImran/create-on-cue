import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/shell";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/blog/custom-shopify-theme-vs-premium-theme")({
  head: () => ({
    meta: [
      { title: "Custom Shopify Theme vs Premium Theme: Which to Choose?" },
      {
        name: "description",
        content:
          "Compare custom and premium Shopify themes by design flexibility, functionality, maintenance, and cost to choose the right approach for your store.",
      },
      {
        property: "og:title",
        content: "Custom Shopify Theme vs Premium Theme: Which to Choose?",
      },
      {
        property: "og:description",
        content:
          "Compare custom and premium Shopify themes by design flexibility, functionality, maintenance, and cost to choose the right approach for your store.",
      },
    ],
  }),
  component: CustomVsPremiumThemeArticle,
});

type PageLink = "/blog" | "/contact" | "/portfolio" | "/services" | ServicePath;

const comparisonRows = [
  {
    consideration: "Starting point",
    premium: "Existing templates and features",
    custom: "Your documented requirements",
  },
  {
    consideration: "Design flexibility",
    premium: "Shaped by the theme, with scope for customization",
    custom: "Defined through the design and development scope",
  },
  {
    consideration: "Initial work",
    premium: "Theme selection, setup, content, and any modifications",
    custom: "Discovery, design, development, content, and testing",
  },
  {
    consideration: "Budget planning",
    premium: "Include the license, setup, and custom work",
    custom: "Include design, development, testing, and future maintenance",
  },
  {
    consideration: "Content management",
    premium: "Assess the theme’s existing editor controls",
    custom: "Specify the controls your team needs",
  },
  {
    consideration: "Future changes",
    premium: "Consider compatibility with the theme’s structure and updates",
    custom: "Plan who will maintain and extend the implementation",
  },
  {
    consideration: "Best fit",
    premium: "Stores whose needs align with an available theme",
    custom: "Stores with requirements that justify a tailored foundation",
  },
];

const premiumWhen = [
  {
    title: "Your shopping journey is straightforward",
    text: "Customers can browse collections, understand product options, and purchase using layouts the theme already supports.",
  },
  {
    title: "Your requirements match its actual features",
    text: "Check the product templates, navigation, filtering, and content sections you need. A visually impressive homepage does not tell you whether the rest of the store will work for your catalog.",
  },
  {
    title: "You need to control the initial scope",
    text: "Starting with a suitable foundation can reduce the amount of original design and development required. However, extensive modifications can change that calculation.",
  },
  {
    title: "Your team can manage it comfortably",
    text: "Test routine tasks: changing a banner, updating product information, building a landing page, and rearranging sections. The editor experience matters after launch.",
  },
];

const customWhen = [
  {
    title: "Customers need information the existing layouts handle poorly",
    text: "Perhaps shoppers need detailed compatibility information, product comparisons, or a clearer explanation of a configurable product.",
    follow:
      "Document the customer problem first. That will help determine whether you need a custom section, a different theme, or a broader rebuild.",
  },
  {
    title: "Important pages require repeated workarounds",
    text: "If each campaign or product launch requires awkward layout compromises, your storefront structure may no longer suit your content needs.",
  },
  {
    title: "Your design depends on specific interactions",
    text: "A bespoke layout may require development beyond the settings available in a prebuilt theme. Separate essential interactions from decorative ideas before committing to the scope.",
  },
  {
    title: "Your team needs reusable, purpose-built sections",
    text: "Custom development can include editing controls designed around recurring content tasks. Those controls should be part of the requirements, rather than an assumption.",
  },
];

const customMeanings = [
  "An existing theme with visual adjustments.",
  "An existing theme with substantial custom sections and templates.",
  "A new theme developed specifically for your store.",
];

const reviewSteps = [
  "What already works.",
  "Where customers encounter friction.",
  "Which changes the existing theme can support.",
  "What requires additional development.",
  "Whether the combined work still makes the existing theme a sensible foundation.",
];

const briefItems = [
  "Your current store and its main problems.",
  "The products and collections customers need to navigate.",
  "Essential features and integrations.",
  "Reference designs, with an explanation of what you like.",
  "Content your team needs to edit independently.",
  "Budget priorities and any fixed launch deadline.",
];

const faqs = [
  {
    q: "Can a premium Shopify theme look distinctive?",
    a: "Yes. Photography, typography, content, layout choices, and selective customization can give a store a distinctive presentation. Assess whether the theme supports your intended direction before purchasing.",
  },
  {
    q: "Do I need a custom theme because my store is growing?",
    a: "Growth alone does not establish the need for a rebuild. Identify whether the current storefront creates specific limitations for customers or your team.",
  },
  {
    q: "Does a custom theme remove the need for apps?",
    a: "Not automatically. Theme work handles storefront presentation and interactions, while some requirements involve app functionality or external systems. Review each requirement separately.",
  },
  {
    q: "Should I customize my current theme or replace it?",
    a: "Start with a review of the current foundation. Compare the scope of targeted improvements with the work required to move to a new theme.",
  },
];

function CustomVsPremiumThemeArticle() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shopify Theme Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Insights", to: "/blog" },
          { label: "Custom vs Premium Theme" },
        ]}
        title={
          <>
            Custom Shopify Theme vs Premium Theme: Which Is Right for Your{" "}
            <span className="font-serif italic text-acid">Store?</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your Theme Project</MagneticCta>
            <MagneticCta to="/services/shopify-theme-development" variant="ghost">
              Theme Development
            </MagneticCta>
          </>
        }
        rail="Shopify Theme Customization · Choosing a Theme · Custom Development"
      >
        <p>
          Your Shopify store needs to do more than look good in a demo. It needs to explain your
          products, make shopping straightforward, and give your team a practical way to manage
          content.
        </p>
        <p>
          A premium theme may already provide the foundation you need. A custom theme can make sense
          when your requirements go beyond what an existing theme can reasonably support.
        </p>
        <p>
          Before choosing either option, identify what your customers need to do—and where your
          current storefront makes that difficult.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / The Short Answer
            </p>
          </div>
          <div className="col-span-12 space-y-8 md:col-span-9">
            <div>
              <h2 className="font-serif text-2xl italic md:text-3xl">
                Choose a premium Shopify theme
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
                when its existing layouts and features closely match your products, your content,
                and the shopping experience you want.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl italic md:text-3xl">
                Consider custom Shopify theme development
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
                when important customer journeys require layouts or interactions that available
                themes cannot comfortably support.
              </p>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              There is also a middle option: customize a suitable existing theme. You may only need
              a few purpose-built sections or template changes rather than a completely new theme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Premium Theme
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What Is a Premium
              <span className="font-serif italic text-acid"> Shopify Theme?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                A premium Shopify theme is a paid, prebuilt storefront foundation. You start with an
                existing design system, page templates, and configurable features.
              </p>
              <p>
                It is not necessarily a finished website. Your store still needs product
                information, photography, navigation, page content, and careful configuration.
              </p>
              <p>
                Shopify’s theme editor lets you adjust settings and arrange content within the
                options your theme provides. Changes beyond those options may require code
                customization.
              </p>
              <p>
                A premium theme can be a sensible choice when its underlying structure already
                supports how your customers shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Custom Theme
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What Is a Custom
              <span className="font-serif italic text-acid"> Shopify Theme?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                A custom Shopify theme is developed around a defined set of storefront requirements
                rather than adapting your entire store to a prebuilt design.
              </p>
              <p>
                That might include specific product page layouts, reusable merchandising sections,
                or a distinctive way to present product information.
              </p>
              <p>Clarify what “custom” means in any proposal. It could describe:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {customMeanings.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              These approaches involve different amounts of work. A useful proposal should explain
              the foundation, deliverables, and maintenance responsibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Comparison</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Custom vs Premium: A Practical
            <span className="font-serif italic text-acid"> Comparison</span>
          </h2>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Consideration
                  </th>
                  <th className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Premium theme
                  </th>
                  <th className="py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Custom theme
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.consideration} className="border-b border-white/10 align-top">
                    <td className="py-5 pr-6 font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      {row.consideration}
                    </td>
                    <td className="py-5 pr-6 text-sm leading-relaxed text-bone/70 md:text-base">
                      {row.premium}
                    </td>
                    <td className="py-5 text-sm leading-relaxed text-bone/70 md:text-base">
                      {row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / When Premium Fits
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            When a Premium Theme Is the Better
            <span className="font-serif italic text-acid"> Starting Point</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {premiumWhen.map((item, i) => (
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
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / When Custom Fits
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            When Custom Development Deserves
            <span className="font-serif italic text-acid"> Consideration</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {customWhen.map((item, i) => (
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
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Customization First
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Could Theme Customization Solve the
              <span className="font-serif italic text-acid"> Problem?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Before rebuilding, ask:</p>
              <p className="font-serif text-xl italic text-ink md:text-2xl">
                Does the current theme need replacing, or does a specific part of the experience
                need improving?
              </p>
              <p>
                For example, a store with suitable collection pages and navigation may only need a
                better product information section. Replacing the entire theme would be a larger
                intervention than that problem requires.
              </p>
              <p>A focused review should identify:</p>
            </div>
            <ol className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {reviewSteps.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Speed and SEO
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Which Option Is Better for Speed and
              <span className="font-serif italic text-acid"> SEO?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>Neither label guarantees a faster website or stronger search rankings.</p>
              <p>
                Evaluate the finished storefront: its page structure, content, images, scripts,
                apps, mobile usability, and actual loading behavior.
              </p>
              <p>
                A custom design should have clear performance and usability requirements. A premium
                theme should be tested with representative products and content, rather than judged
                only by its demo.
              </p>
              <p>
                Choose the approach that supports a useful, maintainable store—and verify the
                implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Maintenance</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Plan Maintenance Before You
              <span className="font-serif italic text-acid"> Choose</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Ask who will handle updates, compatibility checks, and future changes.</p>
              <p>
                Shopify Theme Store themes can receive updated versions, but custom code may need
                attention during an update. Shopify explains that non-conflicting code edits can
                carry across; edits that cannot be included may need to be transferred manually.
                Review the updated draft before publishing it.
              </p>
              <p>
                For a bespoke theme, establish who maintains the code, how changes are documented,
                and how future work will be tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Before You Speak
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              What to Prepare Before Speaking With a
              <span className="font-serif italic text-acid"> Developer</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Bring a short brief covering:
            </p>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {briefItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              This makes the discussion more useful than starting with “I need a custom theme.”
            </p>
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
            Choose Around Your Store’s
            <span className="font-serif italic text-acid"> Requirements</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/70 md:text-lg">
            <p>
              The right choice is the one that supports your products, customers, and day-to-day
              operations without unnecessary complexity.
            </p>
            <p>
              I can help review your current storefront and assess whether targeted customization or{" "}
              <Link
                to="/services/shopify-theme-development"
                className="text-bone underline decoration-acid/50 underline-offset-4 transition-colors hover:text-acid hover:decoration-acid"
              >
                custom Shopify theme development
              </Link>{" "}
              fits your requirements.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your Shopify Theme Project</PrimaryLink>
            <SecondaryLink to="/blog">More Insights</SecondaryLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function PrimaryLink({
  children,
  to,
  tone = "acid",
}: {
  children: string;
  to: PageLink;
  tone?: "acid" | "ink";
}) {
  const classes =
    tone === "acid"
      ? "bg-acid text-ink hover:bg-bone"
      : "bg-ink text-bone hover:bg-acid hover:text-ink";
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] transition-colors md:text-xs ${classes}`}
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
