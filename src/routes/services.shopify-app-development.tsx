import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-app-development")({
  head: () => servicePageHead("shopify-app-development"),
  component: () => <ServicePage slug="shopify-app-development" />,
});
