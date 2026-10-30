import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => servicePageHead("web-application-development"),
  component: () => <ServicePage slug="web-application-development" />,
});
