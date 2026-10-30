import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/woocommerce-development")({
  head: () => servicePageHead("woocommerce-development"),
  component: () => <ServicePage slug="woocommerce-development" />,
});
