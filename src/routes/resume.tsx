import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import type { ServicePath } from "@/lib/services-catalog";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Mohid Imran Resume | Shopify & Full Stack Developer" },
      {
        name: "description",
        content:
          "View Mohid Imran’s development experience, technical skills, education and projects across Shopify, WordPress, web applications and Python automation.",
      },
      {
        property: "og:title",
        content: "Mohid Imran Resume | Shopify & Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "View Mohid Imran’s development experience, technical skills, education and projects across Shopify, WordPress, web applications and Python automation.",
      },
    ],
  }),
  component: ResumePage,
});

type PageLink = "/contact" | "/portfolio" | "/resume" | "/services" | ServicePath;

const skillGroups = [
  {
    title: "Shopify Development",
    items:
      "Liquid · Online Store 2.0 · Sections & Schema · Metafields · Metaobjects · Storefront API · Shopify Functions · Theme App Extensions · Hydrogen · Remix · Polaris · App Bridge · Shopify CLI · Theme Check",
  },
  {
    title: "Frontend Development",
    items:
      "HTML5 · CSS3 · JavaScript · TypeScript · React · Next.js · Angular · jQuery · Responsive Design · Accessibility · Cross-Browser Testing",
  },
  {
    title: "Backend & Data",
    items:
      "Python · Django · Django REST Framework · REST APIs · Prisma ORM · Web Scraping · Data Pipelines",
  },
  {
    title: "WordPress & Ecommerce",
    items: "WordPress · WooCommerce · Elementor · Custom Themes · PHP · Plugin Integration",
  },
  {
    title: "Development & Optimization Tools",
    items:
      "Git · GitHub · Figma · Adobe XD · VS Code · Lighthouse · PageSpeed Insights · GTmetrix · Core Web Vitals",
  },
];

const experience = [
  {
    company: "Encoders Studio",
    role: "Web Developer — Shopify & WordPress",
    period: "November 2025–Present · Lahore, Pakistan",
    bullets: [
      "Build and maintain Shopify and WordPress storefronts.",
      "Translate Figma and Adobe XD designs into responsive interfaces using Liquid, HTML, CSS and JavaScript.",
      "Investigate checkout-related issues, app conflicts and theme errors.",
      "Improve frontend performance through techniques including lazy loading, image compression and code splitting.",
    ],
  },
  {
    company: "Buildaze",
    role: "Freelance Full Stack Developer — Self-Employed",
    period: "July 2023–Present · Remote",
    bullets: [
      "Deliver Shopify stores, WordPress websites and custom web projects for client requirements.",
      "Develop themes, app functionality and headless storefronts using Liquid, Remix, Hydrogen, Shopify Functions and Theme App Extensions.",
      "Build Angular interfaces and Python/Django REST APIs.",
      "Review storefront performance, mobile usability and checkout flows.",
      "Work directly with clients to clarify requirements and implement agreed changes.",
    ],
  },
  {
    company: "Xylosolutions",
    role: "Shopify & WordPress Developer",
    period: "June 2025–January 2026 · Lahore, Pakistan",
    bullets: [
      "Develop mobile-first Shopify storefronts using Liquid, HTML, CSS and jQuery.",
      "Build WordPress websites with Elementor and custom PHP/CSS.",
      "Collaborate on third-party API and payment-gateway integrations, including Stripe and PayPal.",
      "Test websites across relevant browsers and mobile devices.",
      "Consider page speed, SEO structure and usability during implementation.",
    ],
  },
  {
    company: "ARNEX",
    role: "Research & Development Intern",
    period: "September 2025–December 2025 · Lahore, Pakistan",
    bullets: [
      "Develop Python scripts for web scraping and automated data collection.",
      "Explore ways to reduce repeated manual data entry.",
      "Prototype AI automation concepts.",
      "Document technical feasibility and potential business applications.",
    ],
  },
  {
    company: "Blink Devs",
    role: "Shopify & WordPress Developer",
    period: "February 2025–May 2025 · Lahore, Pakistan",
    bullets: [
      "Develop production Shopify themes using Liquid, HTML, CSS and JavaScript.",
      "Work with designers on responsive storefront layouts.",
      "Support payment-integration work.",
      "Improve image handling, lazy loading and render-blocking resources.",
    ],
  },
];

const projects = [
  {
    title: "SalesForge",
    type: "Shopify App Development",
    text: "Developed a sales and conversion suite with product bundles, frequently bought together recommendations, announcement bars, countdown timers, pre-orders, a cart drawer and a bundle builder.",
    tech: "Remix · Polaris · App Bridge · Shopify Functions · Theme App Extensions · Prisma ORM",
    link: "Shopify App Development & Integrations",
    to: "/services/shopify-app-development" as const,
  },
  {
    title: "Mobuxe",
    type: "Shopify Theme Development",
    text: "Developed an Online Store 2.0 theme project with more than 80 sections for Shopify Theme Store submission.",
    focus: "Reusable storefront sections, configurable layouts and theme architecture.",
    link: "Custom Shopify Theme Development",
    to: "/services/shopify-theme-development" as const,
  },
  {
    title: "Blaze",
    type: "Shopify Theme Development",
    text: "Developed a luxury fashion theme project using Online Store 2.0 architecture, targeting Shopify Theme Store submission.",
    focus: "Responsive templates, product presentation and theme implementation.",
    link: "Custom Shopify Theme Development",
    to: "/services/shopify-theme-development" as const,
  },
];

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    school: "University of Agriculture Faisalabad — Sub Campus Burewala",
    period: "2021–2025",
  },
  {
    title: "Intermediate in Computer Science",
    school: "Superior College Burewala",
    period: "2019–2021",
  },
];

const certifications = [
  {
    title: "E-Commerce Store with Shopify",
    issuer: "Coursera",
  },
  {
    title: "Automate the Boring Stuff with Python Programming",
    issuer: "Udemy",
  },
];

const relevantServices = [
  {
    title: "Shopify Development",
    text: "Storefronts, custom themes, apps, integrations and technical improvements.",
    to: "/services/shopify-development" as const,
  },
  {
    title: "WordPress & WooCommerce",
    text: "Business websites, online stores, theme customization and plugin integrations.",
    to: "/services/wordpress-development" as const,
  },
  {
    title: "Full Stack Development",
    text: "Frontend interfaces, backend APIs and custom web application requirements.",
    to: "/services/full-stack-development" as const,
  },
  {
    title: "Automation & Data Collection",
    text: "Python scripts, web scraping and scoped workflow development.",
    to: "/services/ai-automation" as const,
  },
];

function ResumePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Resume & Experience"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Resume" }]}
        title={
          <>
            Mohid <span className="font-serif italic text-acid print:text-black">Imran</span>
          </>
        }
        actions={
          <>
            <DownloadButton />
            <MagneticCta to="/contact" variant="ghost">
              Discuss Your Project
            </MagneticCta>
          </>
        }
        rail="Shopify · Full Stack · Themes & Apps · Automation"
      >
        <p>
          Developer with experience building ecommerce storefronts, custom themes, Shopify app
          functionality and web applications.
        </p>
        <p>
          My work spans responsive interfaces, Python/Django REST APIs, WordPress development and
          automated data collection, with attention to performance and maintainable implementation.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40 print:bg-white print:py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Professional Summary
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Development Across Storefronts, Applications
              <span className="font-serif italic text-acid print:text-black">
                {" "}
                and Integrations
              </span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg print:text-black/80">
              <p>
                I have more than three years of experience across freelance projects and development
                teams.
              </p>
              <p>
                My Shopify work includes Liquid themes, Online Store 2.0 sections, apps built with
                Remix and headless storefront development using Hydrogen. I also build Angular
                interfaces, develop Python/Django REST APIs and work on WordPress websites using
                Elementor and custom themes.
              </p>
              <p>
                Alongside development, I investigate store issues, review mobile usability and
                improve frontend performance. My research experience includes Python data-collection
                scripts and AI automation prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40 print:bg-white print:py-12 print:text-black">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist print:text-black/50">
            / Technical Skills
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Technical
            <span className="font-serif italic text-acid print:text-black"> Skills</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10 print:divide-black/10 print:border-black/10">
            {skillGroups.map((group, i) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1 print:text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {group.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base print:text-black/80">
                  {group.items}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40 print:bg-white print:py-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Professional Experience
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Professional
            <span className="font-serif italic text-acid print:text-black"> Experience</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {experience.map((job, i) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="py-10"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="font-serif text-2xl italic md:text-3xl">{job.company}</h3>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-mist md:text-xs">
                      {job.role}
                    </p>
                    <p className="mt-2 text-sm text-mist md:text-base">{job.period}</p>
                    <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-mist md:text-base">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40 print:bg-white print:py-12 print:text-black">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist print:text-black/50">
            / Selected Development Projects
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Selected Development
            <span className="font-serif italic text-acid print:text-black"> Projects</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10 print:divide-black/10 print:border-black/10">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="py-10"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1 print:text-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="font-serif text-2xl italic md:text-3xl">{project.title}</h3>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-mist md:text-xs print:text-black/50">
                      {project.type}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base print:text-black/80">
                      {project.text}
                    </p>
                    {"tech" in project && project.tech ? (
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-mist md:text-xs print:text-black/60">
                        Technologies: {project.tech}
                      </p>
                    ) : null}
                    {"focus" in project && project.focus ? (
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/55 md:text-base print:text-black/70">
                        Focus: {project.focus}
                      </p>
                    ) : null}
                    <TextLink to={project.to} tone="bone" className="mt-6 print:hidden">
                      {project.link}
                    </TextLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-12 print:border-black/10">
            <h3 className="font-serif text-2xl italic md:text-3xl">Client Storefront Work</h3>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg print:text-black/80">
              <p>
                Client projects include Apolo-Untold, SweetNyWellness, Kaasida, Outstanding
                Nutrition and ArtfullyWalls.
              </p>
              <p>
                Across these engagements, work included Shopify theme development, app integration,
                responsive layouts and frontend optimization. Responsibilities varied by project.
              </p>
            </div>
            <div className="mt-8 print:hidden">
              <PrimaryLink to="/portfolio">Explore My Portfolio</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40 print:bg-white print:py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Education</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Educa
              <span className="font-serif italic text-acid print:text-black">tion</span>
            </h2>
            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {education.map((item, i) => (
                <article key={item.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm text-mist md:text-base">{item.school}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      {item.period}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40 print:bg-white print:py-12 print:text-black">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist print:text-black/50">
              / Certifications
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Certifica
              <span className="font-serif italic text-acid print:text-black">tions</span>
            </h2>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10 print:divide-black/10 print:border-black/10">
              {certifications.map((item, i) => (
                <article key={item.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1 print:text-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="font-serif text-2xl italic md:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm text-bone/70 md:text-base print:text-black/80">
                      {item.issuer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40 print:hidden">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Relevant Services
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Explore the Work Behind
            <span className="font-serif italic text-acid"> These Skills</span>
          </h2>
          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {relevantServices.map((item, i) => (
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-10">
            <PrimaryLink to="/services" tone="ink">
              Explore Services
            </PrimaryLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40 print:bg-white print:py-12 print:text-black">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center print:border-black/10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist print:text-black/50">
            / Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Discuss a Project or Development
            <span className="font-serif italic text-acid print:text-black"> Collaboration</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/65 md:text-lg print:text-black/80">
            <p>
              Share the work involved, your existing website or application, and any relevant
              requirements.
            </p>
            <p>
              For agency collaboration, include the expected responsibilities, project setup and
              review process.
            </p>
          </div>
          <dl className="mx-auto mt-10 max-w-xl space-y-5">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist print:text-black/50">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:mirzamohidimran@gmail.com"
                  className="font-serif text-xl italic text-bone transition-colors hover:text-acid md:text-2xl print:text-black"
                >
                  mirzamohidimran@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist print:text-black/50">
                LinkedIn
              </dt>
              <dd className="mt-2">
                <a
                  href="https://linkedin.com/in/mohid-imran-shopify-fullstack-developer"
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-xl italic text-bone transition-colors hover:text-acid md:text-2xl print:text-black"
                >
                  linkedin.com/in/mohid-imran-shopify-fullstack-developer
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row print:hidden">
            <PrimaryLink to="/contact">Discuss Your Project</PrimaryLink>
            <DownloadButton variant="secondary" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function DownloadButton({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const className =
    variant === "primary"
      ? "group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-acid"
      : "group inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bone transition hover:border-acid hover:text-acid";

  return (
    <button type="button" onClick={() => window.print()} className={className}>
      Download Resume
      <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
        {variant === "primary" ? "↓" : "↗"}
      </span>
    </button>
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
