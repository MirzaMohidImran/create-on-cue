import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { MagneticCta, PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/portfolio/skincare-brand")({
  head: () => ({
    meta: [
      { title: "Skincare Brand Shopify Storefront | Mohid Imran" },
      {
        name: "description",
        content:
          "Explore a Figma-to-Shopify skincare brand storefront by Mohid Imran, covering design, development, foundational SEO and homepage performance.",
      },
      {
        property: "og:title",
        content: "Skincare Brand Shopify Storefront | Mohid Imran",
      },
      {
        property: "og:description",
        content:
          "Explore a Figma-to-Shopify skincare brand storefront by Mohid Imran, covering design, development, foundational SEO and homepage performance.",
      },
    ],
  }),
  component: SkincareBrandPage,
});

const overviewItems = [
  { label: "Client", value: "Skincare brand" },
  { label: "Industry", value: "Skincare & Beauty" },
  { label: "Platform", value: "Shopify" },
  { label: "Role", value: "UI/UX Designer & Shopify Developer" },
  {
    label: "Services",
    value:
      "Figma Design · Shopify Development · Basic SEO · Performance Optimization · Conversion-Focused UX",
  },
];

const performanceRows = [
  { metric: "Performance", desktop: "100/100", mobile: "97/100", emphasize: true },
  { metric: "Accessibility", desktop: "97/100", mobile: "97/100", emphasize: false },
  { metric: "Best Practices", desktop: "100/100", mobile: "100/100", emphasize: false },
  { metric: "SEO", desktop: "100/100", mobile: "100/100", emphasize: false },
  {
    metric: "Largest Contentful Paint",
    desktop: "0.5 seconds",
    mobile: "2.4 seconds",
    emphasize: false,
  },
  {
    metric: "Total Blocking Time",
    desktop: "0 milliseconds",
    mobile: "10 milliseconds",
    emphasize: false,
  },
];

const storefrontShots = [
  {
    src: "/portfolio/skincare-brand/storefront-desktop.png",
    alt: "Desktop homepage for a skincare brand Shopify storefront with product hero and shopping CTA",
    label: "Desktop storefront",
  },
  {
    src: "/portfolio/skincare-brand/storefront-mobile.png",
    alt: "Mobile homepage for a skincare brand Shopify storefront with product hero and shopping CTA",
    label: "Mobile storefront",
  },
];

const pagespeedShots = [
  {
    src: "/portfolio/skincare-brand/pagespeed-desktop.png",
    alt: "Google PageSpeed Insights desktop report showing a 100 performance score",
    label: "Desktop — Performance 100",
  },
  {
    src: "/portfolio/skincare-brand/pagespeed-mobile.png",
    alt: "Google PageSpeed Insights mobile report showing a 97 performance score",
    label: "Mobile — Performance 97",
  },
];

function SkincareBrandPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Figma Design · Shopify Dev · SEO · Performance"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Skincare Brand" },
        ]}
        title={
          <>
            From Figma to{" "}
            <span className="font-serif italic text-acid">Shopify</span>
          </>
        }
        subtitle={<>A skincare brand storefront built from design through launch.</>}
        actions={
          <>
            <MagneticCta to="/contact">Discuss a Similar Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              View All Projects
            </MagneticCta>
          </>
        }
        rail="Figma Design · Shopify Dev · SEO · Performance"
      >
        <p>
          A skincare storefront built from scratch, combining custom design, Shopify development,
          foundational SEO, and performance optimization.
        </p>
      </PageHero>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Project Overview
          </p>
          <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {overviewItems.map((item, i) => (
              <div
                key={item.label}
                className="grid gap-4 py-6 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist md:col-span-3">
                  {item.label}
                </dt>
                <dd className="text-base text-ink md:col-span-8">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              I took this skincare brand from initial design to a launched Shopify store, handling
              the complete Figma design, storefront development, basic SEO, and performance
              optimization.
            </p>
            <p>
              The goal was to create a cohesive shopping experience that introduced the brand
              clearly, presented its products effectively, and worked smoothly across desktop and
              mobile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Storefront
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Homepage Across
            <span className="font-serif italic text-acid"> Desktop &amp; Mobile</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            The launched storefront uses a dark, product-led hero, clear hierarchy, and shopping
            actions sized for both desktop browsing and mobile purchase flow.
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
            <figure className="lg:col-span-8">
              <div className="overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={storefrontShots[0].src}
                  alt={storefrontShots[0].alt}
                  width={1024}
                  height={587}
                  className="h-auto w-full"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                {storefrontShots[0].label}
              </figcaption>
            </figure>
            <figure className="mx-auto w-full max-w-[320px] lg:col-span-4 lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={storefrontShots[1].src}
                  alt={storefrontShots[1].alt}
                  width={392}
                  height={811}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                {storefrontShots[1].label}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Design to Development
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              From Design to
              <span className="font-serif italic text-acid"> Development</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                I designed the storefront in Figma before translating it into Shopify. Owning both
                stages allowed me to carry the visual direction into the finished store, with close
                attention to layout, typography, spacing, and responsive behavior.
              </p>
              <p>
                The result was a consistent brand experience across screen sizes, supported by a
                functioning ecommerce storefront.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Conversion Focus
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Conversion-Focused
              <span className="font-serif italic text-acid"> Experience</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Conversion-focused UX was part of the build from the design stage. My approach
                centered on clear visual hierarchy, accessible shopping actions, readable content,
                and responsive layouts that help visitors move from discovery toward purchase.
              </p>
              <p>
                For a newly launched skincare brand, these foundations support product exploration
                and a more straightforward shopping journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / SEO & Performance
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            SEO &amp;
            <span className="font-serif italic text-acid"> Performance</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              Alongside development, I completed foundational SEO work and optimized storefront
              performance to support launch readiness.
            </p>
            <p>The supplied Google PageSpeed Insights homepage reports recorded:</p>
          </div>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/20">
                  <th className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Metric
                  </th>
                  <th className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Desktop
                  </th>
                  <th className="py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Mobile
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceRows.map((row) => (
                  <tr key={row.metric} className="border-b border-ink/10 align-top">
                    <td className="py-5 pr-6 font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                      {row.metric}
                    </td>
                    <td
                      className={`py-5 pr-6 text-sm leading-relaxed md:text-base ${
                        row.emphasize ? "font-medium text-ink" : "text-mist"
                      }`}
                    >
                      {row.desktop}
                    </td>
                    <td
                      className={`py-5 text-sm leading-relaxed md:text-base ${
                        row.emphasize ? "font-medium text-ink" : "text-mist"
                      }`}
                    >
                      {row.mobile}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {pagespeedShots.map((shot) => (
              <figure key={shot.src}>
                <div className="overflow-hidden border border-ink/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1024}
                    height={493}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
            Results captured on November 3, 2026. These are homepage lab-test results; scores can
            vary between runs. The SEO score reflects Lighthouse checks rather than search rankings.
            Report screenshots are cropped to omit the tested URL.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Outcome</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              The
              <span className="font-serif italic text-acid"> Outcome</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                This skincare brand launched with a custom Figma-to-Shopify storefront, responsive
                design, foundational SEO, and strong measured homepage performance.
              </p>
              <p>
                This project demonstrates my ability to take ownership of a complete ecommerce
                build—from the first design decisions through development, optimization, and launch.
              </p>
              <p className="font-serif text-xl italic text-bone md:text-2xl">
                Designed and developed by Mohid Imran.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 text-center md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Need a Storefront Built From Design Through
            <span className="font-serif italic text-acid"> Launch?</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-bone/70 md:text-lg">
            <p>
              Share your brand direction, Figma files or product catalog, and we can define the
              Shopify development scope your launch needs.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticCta to="/contact">Discuss Your Store Project</MagneticCta>
            <MagneticCta to="/portfolio" variant="ghost">
              Explore More Work
            </MagneticCta>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
