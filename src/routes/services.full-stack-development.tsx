import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/full-stack-development")({
  head: () => servicePageHead("full-stack-development"),
  component: () => <ServicePage slug="full-stack-development" />,
});
