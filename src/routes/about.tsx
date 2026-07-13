import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohid Imran" },
      { name: "description", content: "The story, philosophy and practice behind Mohid Imran's independent engineering studio." },
      { property: "og:title", content: "About — Mohid Imran" },
      { property: "og:description", content: "Journey, values, philosophy and how Mohid partners with founders and teams." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2022", t: "First lines shipped", d: "Started freelancing on Shopify while finishing a CS degree. Learned to ship." },
  { y: "2023", t: "Studio of one", d: "Moved full-time independent. First AI automation projects for agencies." },
  { y: "2024", t: "Scale", d: "50+ stores optimized, first headless build, first six-figure retainer." },
  { y: "2025", t: "Systems", d: "AI platforms, internal tools, and long-form partnerships with DTC brands." },
  { y: "2026", t: "Today", d: "Selective engagements — building the software layer for ambitious operators." },
];

const values = [
  { t: "Ship the boring parts", d: "Auth, tests, observability, docs. Non-negotiable." },
  { t: "Own the outcome", d: "The metric that matters is yours. My job is to move it." },
  { t: "Explain the tradeoffs", d: "You should understand what I did and why — no black boxes." },
  { t: "Write less code", d: "The best PR is often the one that deletes 400 lines." },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative bg-ink px-6 pt-40 pb-24 md:px-10 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ About</p>
          <h1 className="mt-6 max-w-6xl font-serif text-6xl italic leading-[0.95] tracking-tight md:text-[8vw]">
            An engineer<br />with a <span className="text-acid">studio</span> mindset.
          </h1>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Journey</p>
          </div>
          <div className="col-span-12 space-y-6 md:col-span-8">
            <p className="font-serif text-3xl italic leading-tight md:text-5xl">
              I write software because I like watching numbers move — conversion rates, page speed, hours saved, revenue booked.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-mist">
              Three years in, I&apos;ve shipped over one hundred projects across ecommerce,
              SaaS and internal tooling. I run a studio of one on purpose — small enough
              to move quickly, deep enough to own the whole stack, and honest enough to
              tell you when a project doesn&apos;t need me.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Timeline</p>
          <div className="mt-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.y}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-white/10 py-8 last:border-b"
              >
                <span className="col-span-3 font-mono text-sm text-mist md:col-span-2">{t.y}</span>
                <span className="col-span-9 font-serif text-3xl italic md:col-span-4 md:text-5xl">{t.t}</span>
                <span className="col-span-12 text-sm text-bone/70 md:col-span-6">{t.d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Four things I <span className="font-serif italic text-flame">refuse</span> to compromise on.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-ink/10 p-10"
              >
                <p className="font-serif text-4xl italic">{v.t}</p>
                <p className="mt-4 text-mist">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}