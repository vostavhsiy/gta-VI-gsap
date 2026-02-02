import { createFileRoute } from "@tanstack/react-router";
import { ExampleContainer } from "../features/example-container/example-container";
import { AnimationContainer } from "../features/animation-container/animation-container";
import { BackEasing } from "../widgets/back-easing/back-easing";

export const Route = createFileRoute("/back-easing")({
  component: BackEasingPage
});

function BackEasingPage() {
  return (
    <ExampleContainer>
      <h2 className="text-4xl font-semibold">Back Easing</h2>
      <p className="text-lg">Menu with indicator animation example.</p>
      <AnimationContainer>
        <BackEasing />
      </AnimationContainer>
    </ExampleContainer>
  );
}
