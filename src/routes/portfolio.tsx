import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Mohid Imran" },
      { name: "description", content: "Selected projects across Shopify, headless commerce, AI automation and full stack engineering." },
      { property: "og:title", content: "Work — Mohid Imran" },
      { property: "og:description", content: "A living index of shipped work." },
    ],
  }),
  component: PortfolioPage,
});

type Item = { title: string; kind: string; year: string; category: string; metric: string; color: string };
const items: Item[] = [
  { title: "Nordic Grain Co.", kind: "Shopify Plus", year: "2025", category: "Shopify", metric: "+38% AOV", color: "oklch(0.72 0.18 45)" },
  { title: "Astra Automations", kind: "AI Platform", year: "2025", category: "AI", metric: "12k hrs saved", color: "oklch(0.68 0.19 260)" },
  { title: "Fieldnote Studio", kind: "Editorial Commerce", year: "2024", category: "Shopify", metric: "98 CWV", color: "oklch(0.85 0.12 130)" },
  { title: "Meridian Wholesale", kind: "B2B Platform", year: "2024", category: "Full Stack", metric: "$4.2M GMV", color: "oklch(0.62 0.16 20)" },
  { title: "Verso Insights", kind: "Data Pipeline", year: "2024", category: "Scraping", metric: "1.2M rows/day", color: "oklch(0.78 0.14 200)" },
  { title: "Palette Journal", kind: "Headless CMS", year: "2023", category: "Full Stack", metric: "4× traffic", color: "oklch(0.7 0.14 340)" },
  { title: "Halcyon Studio", kind: "WordPress → Shopify", year: "2023", category: "WordPress", metric: "3× revenue", color: "oklch(0.66 0.16 90)" },
  { title: "Northline Ops", kind: "Internal Tooling", year: "2023", category: "Automation", metric: "45% faster ops", color: "oklch(0.6 0.15 300)" },
];

const cats = ["All", "Shopify", "Full Stack", "AI", "Automation", "WordPress", "Scraping"];

function PortfolioPage() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => (cat === "All" ? items : items.filter((i) => i.category === cat)), [cat]);

  return (
    <SiteShell>
      <section className="bg-ink px-6 pt-40 pb-12 md:px-10 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Work</p>
          <h1 className="mt-6 max-w-6xl font-serif text-6xl italic leading-[0.9] tracking-tight md:text-[8vw]">
            An index of<br />things <span className="text-acid">shipped</span>.
          </h1>
        </div>
      </section>

      <section className="sticky top-0 z-30 border-y border-white/10 bg-ink/80 px-6 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                cat === c ? "border-acid bg-acid text-ink" : "border-white/15 text-bone/70 hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`group relative col-span-12 overflow-hidden rounded-3xl md:col-span-6 ${
                  i % 4 === 0 ? "md:col-span-7" : i % 4 === 1 ? "md:col-span-5" : "md:col-span-6"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ backgroundColor: p.color }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0_/_0.3),transparent_50%)]" />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.14_0.01_260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.14_0.01_260) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-ink md:p-10">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em]">
                      <span>{p.kind}</span>
                      <span>{p.year}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-4xl italic leading-none md:text-6xl">{p.title}</h3>
                      <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em]">{p.metric}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </SiteShell>
  );
}