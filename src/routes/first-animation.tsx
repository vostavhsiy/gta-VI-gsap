import { createFileRoute } from "@tanstack/react-router";
import { FirstAnimation } from "../widgets/first-animation/first-animation";

export const Route = createFileRoute("/first-animation")({
  component: FirstAnimationPage,
});

function FirstAnimationPage() {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center justify-center">
      <h2 className="text-4xl font-semibold">First Animation</h2>
      <p className="text-lg">Opacity animation with yoyo effect example.</p>
      <FirstAnimation />
    </div>
  );
}
