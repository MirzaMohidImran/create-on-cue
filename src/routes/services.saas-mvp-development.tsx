import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/saas-mvp-development")({
  head: () => servicePageHead("saas-mvp-development"),
  component: () => <ServicePage slug="saas-mvp-development" />,
});
