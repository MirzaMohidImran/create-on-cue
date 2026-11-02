import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/wordpress-development")({
  head: () => ({
    meta: [
      { title: "WordPress Development Services | Mohid Imran" },
      {
        name: "description",
        content:
          "Get WordPress development services from Mohid Imran for business websites, Elementor builds, custom themes, integrations and improvements to existing sites.",
      },
      { property: "og:title", content: "WordPress Development Services | Mohid Imran" },
      {
        property: "og:description",
        content:
          "Get WordPress development services from Mohid Imran for business websites, Elementor builds, custom themes, integrations and improvements to existing sites.",
      },
    ],
  }),
  component: WordpressDevelopmentPage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const clientProblems = [
  {
    title: "Visitors Cannot Easily Understand Your Services",
    text: "Important information is buried, pages feel disconnected or the route to making an inquiry is unclear.",
    follow:
      "We can review the structure and develop layouts that help visitors find the information they need.",
  },
  {
    title: "Your Website Does Not Reflect Your Business",
    text: "The design feels outdated or no longer supports your services, brand assets and content.",
    follow:
      "We can define whether selected page improvements or a wider rebuild would be appropriate.",
  },
  {
    title: "Simple Updates Require Too Much Help",
    text: "Your team struggles to change page content, reuse layouts or update recurring information.",
    follow:
      "I can review the editing setup and develop agreed controls around the content your team manages.",
  },
  {
    title: "Plugins and Customizations Have Become Difficult to Manage",
    text: "Features overlap, layouts behave inconsistently or an update affects important functionality.",
    follow: "The first step is to understand the existing setup before recommending changes.",
  },
  {
    title: "You Have a Design but Need It Built Properly",
    text: "Your Figma design needs to become a responsive WordPress website with defined editing controls and working interactions.",
    follow: "We review the required pages and behavior before development starts.",
  },
];

const developmentServices = [
  {
    title: "WordPress Business Websites",
    text: "Develop a website around your services, content and customer journey. The scope can include page templates, navigation, contact forms and the agreed content-management setup.",
    when: "A new business website or a coordinated replacement for an existing one.",
  },
  {
    title: "Elementor Development",
    text: "Build or improve pages using Elementor, with reusable layouts and editing arrangements defined around your content.",
    when: "Businesses using Elementor that need implementation, layout changes or further development.",
  },
  {
    title: "Custom WordPress Themes",
    text: "Develop theme templates and frontend functionality around agreed designs and requirements.",
    when: "Projects that need a tailored implementation beyond the available theme settings.",
  },
  {
    title: "Existing Website Improvements",
    text: "Make focused changes to pages, responsive layouts or functionality without assuming the entire website needs replacing.",
    when: "A website with a useful foundation and a defined list of improvements.",
  },
  {
    title: "Plugin & Third-Party Integrations",
    text: "Configure and connect suitable tools for agreed website requirements.",
    when: "Forms, business workflows and other functionality that depends on supported integrations.",
  },
];

const planningItems = [
  "What visitors need to understand first.",
  "How services or products should be organized.",
  "Which pages need distinct information.",
  "Where relevant project evidence belongs.",
  "How visitors can make an inquiry.",
  "Who will provide and manage the content.",
];

const designImplementationItems = [
  "Responsive page layouts.",
  "Navigation and expandable content.",
  "Reusable sections and templates.",
  "Forms and relevant feedback messages.",
  "Image and content presentation.",
  "Agreed browser and device checks.",
];

const deliverables = [
  "A defined page and template structure.",
  "Implementation from approved designs.",
  "Agreed WordPress or Elementor layouts.",
  "Required theme customization.",
  "Specified forms and integrations.",
  "Responsive and functional testing.",
  "Launch preparation.",
  "Content-management and handover guidance.",
];

const processSteps = [
  {
    title: "Review the Business and Website",
    text: "We discuss the purpose, audience, current setup and requirements.",
  },
  {
    title: "Define the Pages and Functionality",
    text: "We agree on templates, features, editing controls and content responsibilities.",
  },
  {
    title: "Develop and Review",
    text: "I build the agreed implementation and share progress at suitable review points.",
  },
  {
    title: "Test the Website",
    text: "Testing covers the relevant layouts, links, forms and integrations.",
  },
  {
    title: "Prepare for Launch",
    text: "We confirm content readiness, access and release responsibilities.",
  },
  {
    title: "Hand Over and Plan Support",
    text: "You receive the agreed access and guidance. Maintenance and further development can be arranged.",
  },
];

const faqs = [
  {
    q: "Can you improve my existing WordPress website?",
    a: "Yes. I review the relevant pages, theme, plugins and requirements before confirming the work.",
  },
  {
    q: "Do you work with Elementor?",
    a: "Yes. My experience includes Elementor builds, layout changes and responsive improvements. We agree on the editing setup and development requirements before starting.",
  },
  {
    q: "Can you develop a website from Figma designs?",
    a: "Yes. We review the required templates, responsive layouts and interactions, then clarify any missing implementation details.",
  },
  {
    q: "Should I use Elementor or a custom theme?",
    a: "The choice depends on your design, functionality, editing needs and current setup. We assess those requirements before recommending an approach.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "We define which content and layouts your team should be able to manage. The handover explains the controls included in the delivered work.",
  },
  {
    q: "Can you connect forms with another business tool?",
    a: "I can assess the proposed connection. Feasibility depends on the form setup and the supported interfaces of the receiving system.",
  },
  {
    q: "Can you help with plugin conflicts or broken layouts?",
    a: "I can investigate the affected behavior and review the relevant setup. Some issues require diagnosis before the implementation can be estimated.",
  },
  {
    q: "Are paid themes and plugins included?",
    a: "Licenses and third-party costs are identified during scoping. We agree on who purchases and manages them.",
  },
  {
    q: "Will the website be optimized for Google?",
    a: "Relevant development requirements—such as page structure, responsive layouts and editable metadata—can be included. Keyword research, content strategy and a complete technical SEO review are separate scopes unless expressly included.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Further development and maintenance can be arranged. Coverage and responsibilities are agreed as part of the engagement.",
  },
];

function WordpressDevelopmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="WordPress Development"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "WordPress Development" },
        ]}
        title={
          <>
            A WordPress Website That Works for Your Business—and the People{" "}
            <span className="font-serif italic text-acid">Managing It</span>
          </>
        }
        actions={
          <>
            <MagneticCta to="/contact">Discuss Your WordPress Project</MagneticCta>
            <MagneticCta href="#development-services" variant="ghost">
              Find Your Starting Point
            </MagneticCta>
          </>
        }
        rail="Business websites · Elementor development · Custom themes · Website improvements"
      >
        <p>
          Your website needs to explain what you offer, guide visitors toward the next step and make
          everyday updates manageable.
        </p>
        <p>
          I’m Mohid Imran, a WordPress and full stack developer. I build business websites,
          implement supplied designs and improve existing sites through theme development, Elementor
          layouts and relevant integrations.
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
                What Is Your Current Website
                <span className="font-serif italic text-acid"> Making Difficult?</span>
              </h2>
              <TextLink to="/contact" tone="ink">
                Explain What Needs to Improve
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

      <section
        id="development-services"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Choose the Work Your Website
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {developmentServices.map((item, i) => (
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
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      Suitable for:
                    </span>{" "}
                    {item.when}
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
              / Website Planning
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Give Every Page a<span className="font-serif italic text-acid"> Clear Purpose</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>A useful website structure reflects the questions visitors need answered.</p>
              <p>
                Before development, we discuss what your business offers, who the website serves and
                which actions matter. We then define the pages and navigation needed to support that
                journey.
              </p>
              <p>Planning considers:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
              {planningItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist md:text-lg">
              The result is a clearer brief for design and implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Design Implementation
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Turn the Approved Design Into a
              <span className="font-serif italic text-acid"> Working Website</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A visual design needs to account for real content and different screen sizes.</p>
              <p>
                I review the supplied layouts alongside the required templates, interactions and
                editing controls. Where mobile layouts or component states are missing, we identify
                those decisions before implementation.
              </p>
              <p>Development can include:</p>
            </div>
            <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-bone/70 md:text-base">
              {designImplementationItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
              Design creation is included only where arranged in the project scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Content Management
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Make Routine Updates
              <span className="font-serif italic text-acid"> Practical</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                Your team may need to update services, publish articles, change images or introduce
                a new campaign.
              </p>
              <p>
                We identify which changes should be manageable through WordPress and which require
                development. The editing setup is then defined around those tasks.
              </p>
              <p>
                The handover can explain the delivered templates, controls and relevant publishing
                steps, so your team knows how to use the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Functionality & Integrations
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Add Features Around a
              <span className="font-serif italic text-acid"> Defined Requirement</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A plugin should serve a clear purpose within the website.</p>
              <p>
                Before introducing functionality, we review what the existing setup supports and
                what the requirement involves. We consider configuration, compatibility and the
                maintenance responsibilities that follow.
              </p>
              <p>
                Where a third-party connection is needed, feasibility depends on the interfaces and
                access available.
              </p>
            </div>
            <TextLink to="/contact" tone="bone">
              Discuss a Feature or Integration
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Existing Websites
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Improve the Current Site Before
              <span className="font-serif italic text-acid"> Choosing a Rebuild</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                An existing website may already have useful content, templates and functionality.
              </p>
              <p>
                I can review the relevant setup and assess the requested changes. The recommendation
                may involve updating selected pages, replacing a problematic component or planning a
                wider rebuild.
              </p>
              <p>
                Recent changes, known issues and available documentation help establish the work
                involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Performance & Usability
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Review How the Website Behaves With
              <span className="font-serif italic text-acid"> Real Content</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>A page needs to work beyond its initial design.</p>
              <p>
                Depending on the scope, I review responsive behavior, image handling and frontend
                resources affecting the experience. I also check relevant navigation, forms and
                interactive elements after development.
              </p>
              <p>
                A wider performance investigation or technical SEO engagement needs its own defined
                scope. Website development alone does not guarantee search rankings or a particular
                performance score.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ WooCommerce</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Need an Online Store Within
              <span className="font-serif italic text-acid"> WordPress?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                If customers need to browse products and purchase through the website, the project
                also needs ecommerce-specific planning.
              </p>
              <p>
                WooCommerce development can cover the agreed product presentation, shopping
                features, checkout requirements and integrations.
              </p>
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
              / Relevant Experience
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              WordPress Development Across Client
              <span className="font-serif italic text-acid"> and Agency Work</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                My experience includes WordPress websites built with Elementor, custom themes, PHP
                and CSS, alongside responsive development and plugin integrations.
              </p>
              <p>
                I have worked on implementing designs, improving mobile layouts and reviewing
                frontend performance.
              </p>
              <p>
                My broader development background also includes Shopify and custom web applications,
                which helps when a website needs functionality beyond its public pages.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/portfolio">View My Development Work</PrimaryLink>
              <SecondaryLink to="/resume">View My Resume</SecondaryLink>
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
              Know What the Website Engagement
              <span className="font-serif italic text-acid"> Includes</span>
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
              Copywriting, product entry, hosting, paid licenses, migration and ongoing maintenance
              are included only where agreed.
            </p>
          </div>
        </div>
      </section>

      <section
        id="development-process"
        className="scroll-mt-28 bg-ink px-6 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Development Process
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            From Requirements to
            <span className="font-serif italic text-acid"> Website Handover</span>
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
            Let’s Define What Your WordPress Website
            <span className="font-serif italic text-acid"> Needs</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg">
            <p>Share your website URL, supplied designs or the project you want to build.</p>
            <p>
              Explain what visitors should be able to do and what your team needs to manage. We can
              use that information to define the development scope.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <PrimaryLink to="/contact">Discuss Your WordPress Project</PrimaryLink>
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
