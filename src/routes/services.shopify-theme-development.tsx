import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-theme-development")({
  head: () => servicePageHead("shopify-theme-development"),
  component: () => <ServicePage slug="shopify-theme-development" />,
});
