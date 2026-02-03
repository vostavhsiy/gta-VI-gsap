import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_examples")({
  component: ExamplesLayout
});

function ExamplesLayout() {
  return (
    <div className="p-5 flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
}
