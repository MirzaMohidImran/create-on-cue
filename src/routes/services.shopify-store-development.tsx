import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-store-development")({
  head: () => servicePageHead("shopify-store-development"),
  component: () => <ServicePage slug="shopify-store-development" />,
});
