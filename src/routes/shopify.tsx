import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/shopify")({
  beforeLoad: () => {
    throw redirect({ to: "/shopify-ecommerce-development" });
  },
});
