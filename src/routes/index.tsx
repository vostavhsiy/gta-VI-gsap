import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../widgets/landing/hero";
import { FirstVideo } from "../widgets/landing/first-video";
import { Jason } from "../widgets/landing/jason";
import { ViceSity } from "../widgets/landing/vice-sity";
import { SecondVideo } from "../widgets/landing/second-video";
import { Lucia } from "../widgets/landing/lucia";
import { PostCard } from '../widgets/landing/post-card'

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
      <SecondVideo />
      <Lucia />
      <PostCard />
    </div>
  );
}
