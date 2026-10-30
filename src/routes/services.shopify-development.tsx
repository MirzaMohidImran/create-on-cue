import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-development")({
  head: () => servicePageHead("shopify-development"),
  component: () => <ServicePage slug="shopify-development" />,
});
