import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { servicePageHead } from "@/lib/services-catalog";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => servicePageHead("ai-automation"),
  component: () => <ServicePage slug="ai-automation" />,
});
