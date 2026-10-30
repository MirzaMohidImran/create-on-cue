import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/dashboard-portal-development")({
  head: () => servicePageHead("dashboard-portal-development"),
  component: () => <ServicePage slug="dashboard-portal-development" />,
});
