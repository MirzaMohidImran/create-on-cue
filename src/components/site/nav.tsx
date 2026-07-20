import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "backdrop-blur-xl bg-[oklch(0.14_0.01_260_/_0.75)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 md:flex md:px-10 md:py-4">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2 font-display text-sm tracking-tight text-bone"
        >
          <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-acid text-ink">
            <span className="font-serif italic text-lg leading-none">M</span>
          </span>
          <span className="truncate">Mohid Imran</span>
          <span className="hidden text-mist sm:inline">— studio</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors ${
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
          className="group hidden items-center gap-2 rounded-full bg-bone px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink transition hover:bg-acid md:inline-flex"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
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
                        0{links.indexOf(l) + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
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
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}