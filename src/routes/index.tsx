import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Heroes = React.lazy(() => import("@/pages/Heroes/Heroes"));
const Heroe = React.lazy(() => import("@/pages/Heroe/Heroe"));
const NotFound = React.lazy(() => import("@/pages/NotFound/NotFound"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Heroes />,
    errorElement: <NotFound />,
  },
  {
    path: "heroe/:heroeId",
    element: <Heroe />,
  },
]);

export { Routes };
