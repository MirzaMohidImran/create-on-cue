import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-support")({
  head: () => servicePageHead("shopify-support"),
  component: () => <ServicePage slug="shopify-support" />,
});
