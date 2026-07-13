import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Mohid Imran" },
      { name: "description", content: "Experience, skills and commercial products by Mohid Imran, Full Stack Engineer and Shopify Expert." },
      { property: "og:title", content: "Resume — Mohid Imran" },
      { property: "og:description", content: "Experience, skills and shipped products." },
    ],
  }),
  component: ResumePage,
});

const experience = [
  { r: "Independent Studio", c: "Mohid Imran — Studio of One", p: "2023 — Present", d: "Selective long-form engagements with DTC brands, agencies and SaaS teams. Full ownership from architecture through iteration." },
  { r: "Senior Shopify Engineer (contract)", c: "Various DTC brands", p: "2023 — 2024", d: "Performance rescues, checkout extensions, headless migrations. Consistent CWV and revenue lifts." },
  { r: "Full Stack Engineer", c: "Freelance & agency work", p: "2022 — 2023", d: "Django/React apps, dashboards, internal tools and API integrations for international clients." },
];

const skills = {
  Ecommerce: ["Shopify Plus", "Hydrogen", "Liquid", "Checkout Extensibility", "Metaobjects", "B2B"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Sanity"],
  Backend: ["Django", "Node", "Postgres", "REST", "GraphQL", "Redis"],
  "AI & Automation": ["OpenAI", "LangChain", "RAG", "n8n", "Zapier", "Playwright"],
  Infra: ["Vercel", "Cloudflare", "Docker", "GitHub Actions"],
};

const products = [
  { t: "Loyalty Loop", d: "Shopify app — points, tiers, referrals. Merchant-first UX." },
  { t: "Scrapewell", d: "Managed scraping API for market research teams." },
  { t: "Inboxbot", d: "Support agent that reads your docs and closes 60% of tickets." },
];

function ResumePage() {
  return (
    <SiteShell>
      <section className="bg-ink px-6 pt-40 pb-16 md:px-10 md:pt-56">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Resume</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-tight md:text-[8vw]">
              Mohid Imran<br /><span className="font-serif italic text-acid">on paper.</span>
            </h1>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-acid">
            Download PDF ↓
          </a>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Summary</p>
          </div>
          <p className="col-span-12 font-serif text-2xl italic leading-snug md:col-span-8 md:text-4xl">
            Full stack engineer and Shopify expert with 3+ years and 100+ shipped
            projects. I partner with founders and operators to build commerce,
            AI and internal software that moves numbers.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Experience</p>
          <div className="mt-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.r}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-white/10 py-8"
              >
                <span className="col-span-12 font-mono text-xs uppercase tracking-[0.2em] text-mist md:col-span-2">{e.p}</span>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-serif text-3xl italic md:text-4xl">{e.r}</h3>
                  <p className="mt-1 text-sm text-bone/70">{e.c}</p>
                </div>
                <p className="col-span-12 text-sm text-bone/80 md:col-span-6">{e.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Skills</p>
          </div>
          <div className="col-span-12 space-y-8 md:col-span-8">
            {Object.entries(skills).map(([g, list]) => (
              <div key={g} className="border-t border-ink/15 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">{g}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span key={s} className="rounded-full border border-ink/20 px-3 py-1 text-sm">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">Commercial products</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <div key={p.t} className="rounded-3xl border border-white/10 p-8">
                <p className="font-serif text-3xl italic">{p.t}</p>
                <p className="mt-3 text-sm text-bone/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}