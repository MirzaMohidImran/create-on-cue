import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mohid Imran" },
      { name: "description", content: "Shopify, headless commerce, full stack engineering, AI automation, scraping and performance optimization." },
      { property: "og:title", content: "Services — Mohid Imran" },
      { property: "og:description", content: "Engagements built around outcomes: revenue, speed, and hours saved." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  {
    n: "01",
    t: "Shopify Development",
    lead: "Themes, custom apps, checkout UI extensions and Plus rollouts engineered around conversion.",
    stack: ["Liquid", "Hydrogen", "Functions", "Checkout UI", "Metaobjects"],
    outcomes: ["+20–40% AOV", "≤2s LCP", "Merchant-friendly CMS"],
  },
  {
    n: "02",
    t: "Headless Commerce",
    lead: "Next.js storefronts on the edge — Sanity or Contentful, Shopify Storefront API, blazing first paint.",
    stack: ["Next.js", "Storefront API", "Sanity", "Vercel", "Cloudflare"],
    outcomes: ["98+ CWV", "Global edge cache", "Composable stack"],
  },
  {
    n: "03",
    t: "Full Stack Engineering",
    lead: "Django, Node and Postgres for products, dashboards and internal tools that need to last.",
    stack: ["Django", "Node", "Postgres", "REST", "GraphQL"],
    outcomes: ["Test coverage", "Observability", "Docs shipped"],
  },
  {
    n: "04",
    t: "AI Automation & Agents",
    lead: "Chatbots, agentic workflows and RAG pipelines wired into the tools your team already lives in.",
    stack: ["OpenAI", "LangChain", "n8n", "Pinecone", "Zapier"],
    outcomes: ["Hours saved / week", "24/7 support", "Fewer handoffs"],
  },
  {
    n: "05",
    t: "Web Scraping & Data",
    lead: "Resilient scrapers, ETL pipelines and enrichment that feed dashboards and market intelligence.",
    stack: ["Playwright", "Scrapy", "Airbyte", "DuckDB"],
    outcomes: ["Clean pipelines", "Deduped data", "Scheduled runs"],
  },
  {
    n: "06",
    t: "Performance & CRO",
    lead: "CWV rescues, analytics instrumentation, and experimentation programs that lift revenue per visitor.",
    stack: ["Lighthouse", "GA4", "PostHog", "Cloudflare"],
    outcomes: ["Faster stores", "Cleaner funnels", "Real experiments"],
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="bg-ink px-6 pt-40 pb-16 md:px-10 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Services</p>
          <h1 className="mt-6 max-w-6xl font-display text-6xl leading-[0.9] tracking-tight md:text-[8vw]">
            Six practices.<br />
            <span className="font-serif italic text-acid">One accountable person.</span>
          </h1>
        </div>
      </section>

      <section className="bg-ink px-6 pb-32 md:px-10 md:pb-48">
        <div className="mx-auto max-w-[1400px] divide-y divide-white/10 border-y border-white/10">
          {items.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group grid grid-cols-12 items-start gap-6 py-14 transition-colors md:gap-10"
            >
              <div className="col-span-12 flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-mist">{s.n}</span>
                <h2 className="font-serif text-4xl italic leading-none md:text-6xl">{s.t}</h2>
              </div>
              <p className="col-span-12 text-lg text-bone/80 md:col-span-4">{s.lead}</p>
              <div className="col-span-12 md:col-span-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">{t}</span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Outcomes</p>
                <ul className="mt-2 space-y-1 text-sm text-bone/80">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2"><span className="text-acid">✦</span>{o}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}