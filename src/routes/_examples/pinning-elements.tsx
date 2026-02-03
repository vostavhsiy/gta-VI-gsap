import { createFileRoute } from "@tanstack/react-router";
import { ExampleContainer } from "../../features/example-container/example-container";
import { AnimationContainer } from "../../features/animation-container/animation-container";
import { PinningElements } from "../../widgets/pinning-elements/pinning-elements";

export const Route = createFileRoute("/_examples/pinning-elements")({
  component: PinningElementsPage
});

function PinningElementsPage() {
  return (
    <ExampleContainer>
      <h2 className="text-4xl font-semibold">Pinning Elements</h2>
      <p className="text-lg">Pinning elements with scrolling example.</p>
      <AnimationContainer>
        <PinningElements />
      </AnimationContainer>
    </ExampleContainer>
  );
}
