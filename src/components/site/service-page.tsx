import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/shell";
import {
  getChildServices,
  getService,
  type ServiceEntry,
  type ServiceSlug,
} from "@/lib/services-catalog";

const revealEase = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, margin: "-80px" } as const;

type ServicePageProps = {
  slug: ServiceSlug;
};

export function ServicePage({ slug }: ServicePageProps) {
  const service = getService(slug);
  const reduceMotion = useReducedMotion();
  const parent = service.parent ? getService(service.parent) : undefined;
  const children = getChildServices(slug);
  const hasBody = Boolean(service.description || service.lead);
  const hasStack = Boolean(service.stack?.length || service.outcomes?.length);

  return (
    <SiteShell>
      <noscript>
        <style>{`.shopify-motion { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style>
      </noscript>

      <PageHero
        eyebrow={parent ? parent.title : "Services"}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          ...(parent ? [{ label: parent.title, to: parent.path }] : []),
          { label: service.title },
        ]}
        title={service.title}
        actions={<ServiceCtas variant={service.cta} />}
        rail={parent ? `${parent.title} · ${service.title}` : service.title}
      >
        {service.description || service.lead ? <p>{service.description ?? service.lead}</p> : null}
      </PageHero>

      {hasBody && service.description && service.lead && service.description !== service.lead ? (
        <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
          <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 md:gap-12">
            <SectionLabel className="col-span-12 text-mist md:col-span-3">/ Overview</SectionLabel>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={revealViewport}
              transition={{ duration: 0.9, ease: revealEase }}
              className="shopify-motion col-span-12 md:col-span-9"
            >
              <p className="max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg">
                {service.lead}
              </p>
            </motion.div>
          </div>
        </section>
      ) : null}

      {hasStack ? (
        <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading label="/ Detail" title={service.title} />
            <div className="mt-14 grid gap-10 border-y border-white/10 py-14 md:grid-cols-2">
              {service.stack?.length ? (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {service.outcomes?.length ? (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                    Outcomes
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-bone/80">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2">
                        <span className="text-acid">✦</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* TODO: awaiting approved copy for additional body sections */}

      {children.length > 0 ? (
        <section className="bg-ink px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading label="/ Related" title="Related services" />
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {children.map((child, index) => (
                <motion.article
                  key={child.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: revealEase }}
                  className="shopify-motion group relative flex min-h-64 flex-col justify-between overflow-hidden bg-ink p-7 transition-colors duration-500 hover:bg-bone hover:text-ink md:p-9"
                >
                  <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span
                      aria-hidden
                      className="font-serif text-2xl italic text-acid transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                    >
                      ✦
                    </span>
                  </div>
                  <div className="mt-12">
                    <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                      {child.title}
                    </h3>
                    {child.lead || child.description ? (
                      <p className="mt-5 line-clamp-4 text-sm leading-relaxed opacity-70 md:text-base">
                        {child.lead ?? child.description}
                      </p>
                    ) : null}
                    <Link
                      to={child.path}
                      className="mt-7 inline-flex items-center gap-2 border-b border-current/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
                    >
                      Explore →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {parent ? (
        <section className="bg-bone px-6 py-16 text-ink md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <Link
              to={parent.path}
              className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid"
            >
              ← {parent.title}
            </Link>
          </div>
        </section>
      ) : null}

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-14 md:py-20 text-center">
          <SectionLabel>/ Next</SectionLabel>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={revealViewport}
            transition={{ duration: 0.9, ease: revealEase }}
            className="shopify-motion mx-auto mt-6 max-w-5xl text-balance font-display text-4xl leading-[0.95] tracking-tight md:text-6xl"
          >
            {service.cta === "shopify" ? (
              <>
                Need a Shopify Store That Is Ready for
                <span className="block font-serif italic text-acid">What Comes Next?</span>
              </>
            ) : (
              <>Have a project ready to grow?</>
            )}
          </motion.h2>
          {/* TODO: awaiting approved non-Shopify closing body copy when available */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ delay: 0.16, duration: 0.7, ease: revealEase }}
            className="shopify-motion mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center"
          >
            <ServiceCtas variant={service.cta} />
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}

function ServiceCtas({ variant }: { variant: ServiceEntry["cta"] }) {
  if (variant === "shopify") {
    return (
      <>
        <MagneticCta to="/contact">Discuss Your Shopify Project</MagneticCta>
        <MagneticCta to="/portfolio" variant="ghost">
          View Shopify Work
        </MagneticCta>
      </>
    );
  }

  return (
    <>
      <MagneticCta to="/contact">Start a project</MagneticCta>
      <MagneticCta to="/portfolio" variant="ghost">
        View My Work
      </MagneticCta>
    </>
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

function SectionHeading({ label, title }: { label: string; title: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-12 gap-8">
      <SectionLabel className="col-span-12 md:col-span-3">{label}</SectionLabel>
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={revealViewport}
        transition={{ duration: 0.9, ease: revealEase }}
        className="shopify-motion col-span-12 max-w-4xl text-balance font-display text-4xl leading-[0.96] tracking-tight text-bone md:col-span-9 md:text-6xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
