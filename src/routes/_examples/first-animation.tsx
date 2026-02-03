import { createFileRoute } from "@tanstack/react-router";
import { FirstAnimation } from "../../widgets/first-animation/first-animation";
import { AnimationContainer } from "../../features/animation-container/animation-container";
import { ExampleContainer } from "../../features/example-container/example-container";

export const Route = createFileRoute("/_examples/first-animation")({
  component: FirstAnimationPage
});

function FirstAnimationPage() {
  return (
    <ExampleContainer>
      <h2 className="text-4xl font-semibold">First Animation</h2>
      <p className="text-lg">Opacity animation with yoyo effect example.</p>
      <AnimationContainer>
        <FirstAnimation />
      </AnimationContainer>
    </ExampleContainer>
  );
}
