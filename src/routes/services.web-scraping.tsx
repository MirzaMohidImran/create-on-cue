import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/web-scraping")({
  head: () => servicePageHead("web-scraping"),
  component: () => <ServicePage slug="web-scraping" />,
});
