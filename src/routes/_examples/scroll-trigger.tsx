import { createFileRoute } from "@tanstack/react-router";
import { ExampleContainer } from "../../features/example-container/example-container";
import { AnimationContainer } from "../../features/animation-container/animation-container";
import { ScrollTrigger } from "../../widgets/scroll-trigger/scroll-trigger";

export const Route = createFileRoute("/_examples/scroll-trigger")({
  component: ScrollTriggerPage
});

function ScrollTriggerPage() {
  return (
    <ExampleContainer>
      <h2 className="text-4xl font-semibold">Scroll Trigger</h2>
      <p className="text-lg">Scroll Trigger plugin example.</p>
      <AnimationContainer>
        <ScrollTrigger />
      </AnimationContainer>
    </ExampleContainer>
  );
}
