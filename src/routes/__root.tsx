import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { MainNav } from "../features/main-nav/main-nav";

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  return (
    <React.Fragment>
      <MainNav />
      <main className="p-5 flex flex-col min-h-screen">
        <Outlet />
      </main>
    </React.Fragment>
  );
}
