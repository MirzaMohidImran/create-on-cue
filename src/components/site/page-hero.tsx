import type { ReactNode } from "react";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export type HeroCrumb = { label: string; to?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  breadcrumb?: HeroCrumb[];
  /** Mono strip under the hero — defaults to eyebrow */
  rail?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  actions,
  breadcrumb,
  rail,
}: PageHeroProps) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => (v - 0.5) * 40);
  const ty = useTransform(sy, (v) => (v - 0.5) * 40);
  const tx2 = useTransform(sx, (v) => (v - 0.5) * -80);
  const ty2 = useTransform(sy, (v) => (v - 0.5) * -60);

  const strip = rail ?? eyebrow;

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="grain relative isolate flex min-h-[88svh] flex-col overflow-hidden bg-ink px-6 pt-32 md:px-10"
    >
      <motion.div
        aria-hidden
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.86_0.19_105_/_0.35),transparent_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_35_/_0.25),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97_0.01_90) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97_0.01_90) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        <div className="min-w-0 flex-1">
          {breadcrumb?.length ? (
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors hover:text-acid">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-bone/70">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          ) : (
            <span>{eyebrow ?? "Mohid Imran"}</span>
          )}
        </div>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          Available for Projects · Worldwide
        </span>
      </div>

      <div className="relative mt-auto grid flex-1 grid-cols-12 items-end gap-8 pb-14 pt-20">
        <div className="col-span-12 md:col-span-8">
          {eyebrow && breadcrumb?.length ? (
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-acid">
              {eyebrow}
            </p>
          ) : null}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-balance font-display text-4xl leading-[0.95] tracking-tight text-bone sm:text-5xl md:text-[4.8vw]"
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 max-w-3xl font-serif text-2xl italic text-bone/90 md:text-3xl"
            >
              {subtitle}
            </motion.div>
          ) : null}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="col-span-12 space-y-6 md:col-span-4"
        >
          {children ? (
            <div className="space-y-4 text-balance text-sm leading-relaxed text-bone/70 md:text-base">
              {children}
            </div>
          ) : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </motion.div>
      </div>

      {strip ? (
        <div className="relative border-t border-white/10 py-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist md:text-xs">
            {strip}
          </p>
        </div>
      ) : null}
    </section>
  );
}

export function MagneticCta({
  to,
  href,
  children,
  variant = "light",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "light" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const className =
    variant === "light"
      ? "group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-acid"
      : "group inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bone transition hover:border-acid hover:text-acid";

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: sx, y: sy }}>
      {href ? (
        <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
          {children}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            {href.startsWith("#") ? "↓" : "→"}
          </span>
        </a>
      ) : (
        <Link
          ref={ref}
          to={to ?? "/"}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={className}
        >
          {children}
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </motion.div>
  );
}
