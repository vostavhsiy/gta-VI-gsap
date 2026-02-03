import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../widgets/landing/hero";
import { FirstVideo } from "../widgets/landing/first-video";
import { Jason } from "../widgets/landing/jason";
import { ViceSity } from "../widgets/landing/vice-sity";

export const Route = createFileRoute("/")({
  component: GtaLandingPage
});

function GtaLandingPage() {
  return (
    <div>
      <Hero />
      <ViceSity />
      <FirstVideo />
      <Jason />
    </div>
  );
}
