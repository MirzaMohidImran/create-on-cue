import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/shopify-cro")({
  head: () => servicePageHead("shopify-cro"),
  component: () => <ServicePage slug="shopify-cro" />,
});
