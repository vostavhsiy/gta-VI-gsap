import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../widgets/landing/hero";

export const Route = createFileRoute("/")({
  component: GtaLandingPage
});

function GtaLandingPage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
