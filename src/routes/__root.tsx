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
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}
