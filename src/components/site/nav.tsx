import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

import { getMainServices } from "@/lib/services-catalog";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/portfolio", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const reduceMotion = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuId = useId();
  const servicesWrapRef = useRef<HTMLDivElement>(null);
  const mainServices = getMainServices();
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesWrapRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "backdrop-blur-xl bg-[oklch(0.14_0.01_260_/_0.75)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 md:flex md:h-20 md:justify-between md:px-10">
          <Link
            to="/"
            className="group flex min-w-0 shrink-0 items-center gap-2 font-display text-sm tracking-tight text-bone"
          >
            <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-acid text-ink">
              <span className="font-serif italic text-lg leading-none">M</span>
            </span>
            <span className="truncate">Mohid Imran</span>
            <span className="hidden text-mist lg:inline">— studio</span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur md:flex">
            {links.map((l) => {
              if ("hasMenu" in l && l.hasMenu) {
                return (
                  <div
                    key={l.to}
                    ref={servicesWrapRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to="/services"
                      aria-expanded={servicesOpen}
                      aria-controls={servicesMenuId}
                      aria-haspopup="true"
                      className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors lg:px-4 lg:text-xs ${
                        servicesActive || servicesOpen ? "text-ink" : "text-bone/70 hover:text-bone"
                      }`}
                    >
                      {(servicesActive || servicesOpen) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-acid"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative">{l.label}</span>
                      <span
                        aria-hidden
                        className={`relative inline-block text-[9px] transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id={servicesMenuId}
                          role="menu"
                          aria-label="Services"
                          initial={
                            reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 }
                          }
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute left-1/2 top-full z-50 w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink/95 shadow-[0_24px_80px_oklch(0.14_0.01_260_/_0.55)] backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                                / Practices
                              </p>
                              <Link
                                to="/services"
                                role="menuitem"
                                className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-acid"
                                onClick={() => setServicesOpen(false)}
                              >
                                All services →
                              </Link>
                            </div>
                            <div className="grid gap-px bg-white/5 sm:grid-cols-2">
                              {mainServices.map((service, index) => {
                                const active = pathname === service.path;
                                return (
                                  <Link
                                    key={service.slug}
                                    to={service.path}
                                    role="menuitem"
                                    onClick={() => setServicesOpen(false)}
                                    className={`group flex min-h-[5.5rem] flex-col justify-between bg-ink px-5 py-4 transition-colors hover:bg-bone hover:text-ink ${
                                      active ? "bg-white/[0.04]" : ""
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist group-hover:text-ink/50">
                                        {String(index + 1).padStart(2, "0")}
                                      </span>
                                      <span
                                        aria-hidden
                                        className="font-serif text-lg italic text-acid transition-transform duration-300 group-hover:rotate-12"
                                      >
                                        ✦
                                      </span>
                                    </div>
                                    <span className="mt-3 font-display text-sm tracking-tight md:text-[15px]">
                                      {service.title}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors lg:px-4 lg:text-xs ${
                    active ? "text-ink" : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-acid"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>
          <Link
            to="/contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-bone px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:bg-acid lg:inline-flex"
          >
            Start a project
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-bone backdrop-blur md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.05,
                    delayChildren: reduceMotion ? 0 : 0.05,
                  },
                },
              }}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {links.map((l, linkIndex) => {
                if ("hasMenu" in l && l.hasMenu) {
                  return (
                    <motion.div
                      key={l.to}
                      variants={{
                        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="border-b border-white/10"
                    >
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className={`flex w-full items-baseline justify-between py-4 font-display text-3xl tracking-tight transition-colors ${
                          servicesActive ? "text-acid" : "text-bone hover:text-acid"
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                          0{linkIndex + 1}
                          <span
                            aria-hidden
                            className={`transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-5">
                              <Link
                                to="/services"
                                onClick={() => setOpen(false)}
                                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-mist hover:text-acid"
                              >
                                All services →
                              </Link>
                              {mainServices.map((service, index) => (
                                <Link
                                  key={service.slug}
                                  to={service.path}
                                  onClick={() => setOpen(false)}
                                  className={`flex items-start justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3 transition-colors hover:border-acid/40 hover:bg-white/[0.03] ${
                                    pathname === service.path
                                      ? "border-acid/50 text-acid"
                                      : "text-bone"
                                  }`}
                                >
                                  <span className="font-display text-lg tracking-tight">
                                    {service.title}
                                  </span>
                                  <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const active = pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    variants={{
                      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline justify-between border-b border-white/10 py-4 font-display text-3xl tracking-tight transition-colors ${
                        active ? "text-acid" : "text-bone hover:text-acid"
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                        0{linkIndex + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="group inline-flex w-full items-center justify-between rounded-full bg-acid px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink"
                >
                  Start a project
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
