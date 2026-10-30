/**
 * Service page catalog for /services/* routes.
 * Copy here is limited to titles and text already present elsewhere on the site.
 * Sections without approved copy stay empty (see route TODOs).
 */

export type ServiceSlug =
  | "shopify-development"
  | "shopify-cro"
  | "full-stack-development"
  | "wordpress-development"
  | "ai-automation"
  | "web-scraping"
  | "shopify-store-development"
  | "shopify-theme-development"
  | "shopify-app-development"
  | "headless-shopify-development"
  | "shopify-support"
  | "shopify-speed-optimization"
  | "web-application-development"
  | "saas-mvp-development"
  | "dashboard-portal-development"
  | "woocommerce-development";

export type ServicePath = `/services/${ServiceSlug}`;

export type ServiceEntry = {
  slug: ServiceSlug;
  path: ServicePath;
  title: string;
  /** Existing overview / page lead when available */
  lead?: string;
  stack?: string[];
  outcomes?: string[];
  /** Existing detailed description when available */
  description?: string;
  parent?: ServiceSlug;
  children?: ServiceSlug[];
  cta: "shopify" | "default";
};

/** Descriptions sourced from /shopify-ecommerce-development */
const shopifyDescriptions = {
  store:
    "A complete Shopify storefront built around your products, brand system, content requirements and customer journey. The build uses reusable sections and merchant-friendly controls so your team can manage the store without depending on a developer for routine updates.",
  theme:
    "Custom Liquid and Online Store 2.0 development for new designs, existing-theme improvements and full storefront redesigns. Templates, sections, product pages, collections, navigation and cart experiences are implemented responsively and tested across devices.",
  apps: "Custom storefront features and connections with ERP, CRM, subscription, loyalty, reviews, email, fulfillment, payments and other business systems. Existing apps are assessed before new code is introduced.",
  headless:
    "Hydrogen or Next.js storefronts using Shopify’s Storefront API when a brand has a justified need for composable architecture, advanced content experiences or frontend flexibility. A conventional Shopify theme remains the recommendation when headless complexity would not create enough value.",
  support:
    "Retained development for enhancements, quality assurance, troubleshooting, app changes, performance monitoring and scheduled releases after launch.",
  speed:
    "Performance work focused on theme code, images, fonts, scripts, app overhead, loading behavior and page templates. Changes are measured before and after implementation, with limitations documented.",
  cro: "Implementation of evidence-based improvements across landing pages, product pages, collections, cart and mobile journeys. Development supports CRO hypotheses and analytics; it does not promise a conversion increase without sufficient traffic and testing.",
} as const;

/** Leads / stack / outcomes sourced from /services overview */
const overview = {
  shopify: {
    lead: "Themes, custom apps, checkout UI extensions and Plus rollouts engineered around conversion.",
    stack: ["Liquid", "Hydrogen", "Functions", "Checkout UI", "Metaobjects"],
    outcomes: ["+20–40% AOV", "≤2s LCP", "Merchant-friendly CMS"],
  },
  headless: {
    lead: "Next.js storefronts on the edge — Sanity or Contentful, Shopify Storefront API, blazing first paint.",
    stack: ["Next.js", "Storefront API", "Sanity", "Vercel", "Cloudflare"],
    outcomes: ["98+ CWV", "Global edge cache", "Composable stack"],
  },
  fullStack: {
    lead: "Django, Node and Postgres for products, dashboards and internal tools that need to last.",
    stack: ["Django", "Node", "Postgres", "REST", "GraphQL"],
    outcomes: ["Test coverage", "Observability", "Docs shipped"],
  },
  ai: {
    lead: "Chatbots, agentic workflows and RAG pipelines wired into the tools your team already lives in.",
    stack: ["OpenAI", "LangChain", "n8n", "Pinecone", "Zapier"],
    outcomes: ["Hours saved / week", "24/7 support", "Fewer handoffs"],
  },
  scraping: {
    lead: "Resilient scrapers, ETL pipelines and enrichment that feed dashboards and market intelligence.",
    stack: ["Playwright", "Scrapy", "Airbyte", "DuckDB"],
    outcomes: ["Clean pipelines", "Deduped data", "Scheduled runs"],
  },
  cro: {
    lead: "CWV rescues, analytics instrumentation, and experimentation programs that lift revenue per visitor.",
    stack: ["Lighthouse", "GA4", "PostHog", "Cloudflare"],
    outcomes: ["Faster stores", "Cleaner funnels", "Real experiments"],
  },
} as const;

/** Intro from /shopify-ecommerce-development hero */
export const shopifyDevelopmentIntro =
  "I design, build and improve Shopify stores for brands that need stronger performance, clearer customer journeys and reliable custom functionality. From theme development and migrations to Shopify Plus, integrations and ongoing improvements, every engagement is built around the needs of your business.";

export const servicesCatalog: Record<ServiceSlug, ServiceEntry> = {
  "shopify-development": {
    slug: "shopify-development",
    path: "/services/shopify-development",
    title: "Shopify Development",
    lead: overview.shopify.lead,
    stack: [...overview.shopify.stack],
    outcomes: [...overview.shopify.outcomes],
    description: shopifyDevelopmentIntro,
    children: [
      "shopify-store-development",
      "shopify-theme-development",
      "shopify-app-development",
      "headless-shopify-development",
      "shopify-support",
    ],
    cta: "shopify",
  },
  "shopify-cro": {
    slug: "shopify-cro",
    path: "/services/shopify-cro",
    title: "Shopify CRO & Store Optimization",
    lead: overview.cro.lead,
    stack: [...overview.cro.stack],
    outcomes: [...overview.cro.outcomes],
    description: shopifyDescriptions.cro,
    children: ["shopify-speed-optimization"],
    cta: "shopify",
  },
  "full-stack-development": {
    slug: "full-stack-development",
    path: "/services/full-stack-development",
    title: "Full Stack Development",
    lead: overview.fullStack.lead,
    stack: [...overview.fullStack.stack],
    outcomes: [...overview.fullStack.outcomes],
    children: [
      "web-application-development",
      "saas-mvp-development",
      "dashboard-portal-development",
    ],
    cta: "default",
  },
  "wordpress-development": {
    slug: "wordpress-development",
    path: "/services/wordpress-development",
    title: "WordPress Development",
    children: ["woocommerce-development"],
    cta: "default",
  },
  "ai-automation": {
    slug: "ai-automation",
    path: "/services/ai-automation",
    title: "AI & Workflow Automation",
    lead: overview.ai.lead,
    stack: [...overview.ai.stack],
    outcomes: [...overview.ai.outcomes],
    cta: "default",
  },
  "web-scraping": {
    slug: "web-scraping",
    path: "/services/web-scraping",
    title: "Web Scraping & Data Solutions",
    lead: overview.scraping.lead,
    stack: [...overview.scraping.stack],
    outcomes: [...overview.scraping.outcomes],
    cta: "default",
  },
  "shopify-store-development": {
    slug: "shopify-store-development",
    path: "/services/shopify-store-development",
    title: "Shopify Store Development & Redesign",
    description: `${shopifyDescriptions.store} ${shopifyDescriptions.theme}`,
    parent: "shopify-development",
    cta: "shopify",
  },
  "shopify-theme-development": {
    slug: "shopify-theme-development",
    path: "/services/shopify-theme-development",
    title: "Custom Shopify Theme Development",
    description: shopifyDescriptions.theme,
    parent: "shopify-development",
    cta: "shopify",
  },
  "shopify-app-development": {
    slug: "shopify-app-development",
    path: "/services/shopify-app-development",
    title: "Shopify App Development & Integrations",
    description: shopifyDescriptions.apps,
    parent: "shopify-development",
    cta: "shopify",
  },
  "headless-shopify-development": {
    slug: "headless-shopify-development",
    path: "/services/headless-shopify-development",
    title: "Headless Shopify Development",
    lead: overview.headless.lead,
    stack: [...overview.headless.stack],
    outcomes: [...overview.headless.outcomes],
    description: shopifyDescriptions.headless,
    parent: "shopify-development",
    cta: "shopify",
  },
  "shopify-support": {
    slug: "shopify-support",
    path: "/services/shopify-support",
    title: "Shopify Troubleshooting & Support",
    description: shopifyDescriptions.support,
    parent: "shopify-development",
    cta: "shopify",
  },
  "shopify-speed-optimization": {
    slug: "shopify-speed-optimization",
    path: "/services/shopify-speed-optimization",
    title: "Shopify Speed Optimization",
    description: shopifyDescriptions.speed,
    parent: "shopify-cro",
    cta: "shopify",
  },
  "web-application-development": {
    slug: "web-application-development",
    path: "/services/web-application-development",
    title: "Custom Web Application Development",
    lead: overview.fullStack.lead,
    parent: "full-stack-development",
    cta: "default",
  },
  "saas-mvp-development": {
    slug: "saas-mvp-development",
    path: "/services/saas-mvp-development",
    title: "SaaS & MVP Development",
    lead: overview.fullStack.lead,
    parent: "full-stack-development",
    cta: "default",
  },
  "dashboard-portal-development": {
    slug: "dashboard-portal-development",
    path: "/services/dashboard-portal-development",
    title: "Dashboards, Portals & Internal Tools",
    lead: overview.fullStack.lead,
    parent: "full-stack-development",
    cta: "default",
  },
  "woocommerce-development": {
    slug: "woocommerce-development",
    path: "/services/woocommerce-development",
    title: "WooCommerce Development",
    parent: "wordpress-development",
    cta: "default",
  },
};

export const mainServiceSlugs: ServiceSlug[] = [
  "shopify-development",
  "shopify-cro",
  "full-stack-development",
  "wordpress-development",
  "ai-automation",
  "web-scraping",
];

export function getService(slug: ServiceSlug): ServiceEntry {
  return servicesCatalog[slug];
}

export function getMainServices(): ServiceEntry[] {
  return mainServiceSlugs.map((slug) => servicesCatalog[slug]);
}

export function getChildServices(slug: ServiceSlug): ServiceEntry[] {
  const entry = servicesCatalog[slug];
  return (entry.children ?? []).map((child) => servicesCatalog[child]);
}

export function servicePageHead(slug: ServiceSlug) {
  const service = getService(slug);
  return {
    meta: [{ title: `${service.title} — Mohid Imran` }],
  };
}
