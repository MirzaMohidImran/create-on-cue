import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-speed-optimization")({
  head: () => servicePageHead("shopify-speed-optimization"),
  component: () => <ServicePage slug="shopify-speed-optimization" />,
});
