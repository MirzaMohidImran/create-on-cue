import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/wordpress-development")({
  head: () => servicePageHead("wordpress-development"),
  component: () => <ServicePage slug="wordpress-development" />,
});
