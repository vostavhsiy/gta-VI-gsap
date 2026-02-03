import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../widgets/landing/hero";
import { FirstVideo } from "../widgets/landing/first-video";

export const Route = createFileRoute("/")({
  component: GtaLandingPage
});

function GtaLandingPage() {
  return (
    <div>
      <Hero />
      <FirstVideo />
    </div>
  );
}
