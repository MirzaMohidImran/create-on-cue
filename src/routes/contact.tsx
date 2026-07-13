import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohid Imran" },
      { name: "description", content: "Start a project with Mohid Imran — full stack engineer, Shopify expert and AI automation engineer." },
      { property: "og:title", content: "Contact — Mohid Imran" },
      { property: "og:description", content: "Tell me about the project. I read every message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const bx = useTransform(sx, (v) => (v - 0.5) * 120);
  const by = useTransform(sy, (v) => (v - 0.5) * 120);

  return (
    <SiteShell>
      <section
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width);
          my.set((e.clientY - r.top) / r.height);
        }}
        className="relative min-h-screen overflow-hidden bg-ink px-6 pt-40 pb-24 md:px-10 md:pt-56"
      >
        <motion.div
          aria-hidden
          style={{ x: bx, y: by }}
          className="pointer-events-none absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.19_105_/_0.25),transparent_60%)] blur-3xl"
        />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Contact</p>
            <h1 className="mt-6 font-serif text-6xl italic leading-[0.9] tracking-tight md:text-[7vw]">
              Tell me about<br />the <span className="text-acid">project.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-bone/70">
              I read every message personally and reply within 24 hours on
              weekdays. If you&apos;d rather talk, book a 20-minute intro call.
            </p>

            <dl className="mt-16 space-y-6">
              <Row k="Email" v="hello@mohidimran.dev" />
              <Row k="Calendly" v="calendly.com/mohidimran" />
              <Row k="Location" v="Islamabad · Working globally" />
              <Row k="Response" v="Within 24 hours · Mon–Fri" />
            </dl>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="col-span-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:col-span-6 md:p-12"
          >
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <span className="font-serif text-6xl italic text-acid">✦</span>
                <p className="mt-6 font-serif text-3xl italic">Got it — talk soon.</p>
                <p className="mt-3 text-sm text-mist">I&apos;ll be in your inbox within a day.</p>
              </div>
            ) : (
              <>
                <Field label="Name" name="name" placeholder="Alex Chen" />
                <Field label="Email" name="email" type="email" placeholder="alex@company.com" />
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <div className="mt-6">
                  <label className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Budget</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["< $5k", "$5–15k", "$15–50k", "$50k+"].map((b) => (
                      <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" className="peer sr-only" />
                        <span className="block rounded-full border border-white/15 px-3 py-1.5 text-sm transition peer-checked:border-acid peer-checked:bg-acid peer-checked:text-ink">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Project</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you building, and what does success look like?"
                    className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-bone placeholder:text-mist focus:border-acid focus:outline-none"
                  />
                </div>
                <button className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink transition hover:bg-acid">
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-3 items-baseline border-t border-white/10 pt-4">
      <dt className="col-span-1 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">{k}</dt>
      <dd className="col-span-2 font-serif text-xl italic md:text-2xl">{v}</dd>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="mt-6 first:mt-0">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-bone placeholder:text-mist focus:border-acid focus:outline-none"
      />
    </div>
  );
}