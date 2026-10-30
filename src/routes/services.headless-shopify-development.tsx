import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/headless-shopify-development")({
  head: () => servicePageHead("headless-shopify-development"),
  component: () => <ServicePage slug="headless-shopify-development" />,
});
