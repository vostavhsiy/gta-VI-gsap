import { createFileRoute } from "@tanstack/react-router";
import { ExampleContainer } from "../../features/example-container/example-container";
import { AnimationContainer } from "../../features/animation-container/animation-container";
import { SineEasing } from "../../widgets/sine-easing/sine-easing";

export const Route = createFileRoute("/_examples/sine-easing")({
  component: SineEasingPage
});

function SineEasingPage() {
  return (
    <ExampleContainer>
      <h2 className="text-4xl font-semibold">Sine Easing</h2>
      <p className="text-lg">
        Scroll-to-top button floating with sine easing animation example.
      </p>
      <AnimationContainer>
        <SineEasing />
      </AnimationContainer>
    </ExampleContainer>
  );
}
