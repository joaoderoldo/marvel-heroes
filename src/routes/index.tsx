import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Heroes = React.lazy(() => import("@/pages/Heroes/Heroes"));
const Hero = React.lazy(() => import("@/pages/Hero/Hero"));
const NotFound = React.lazy(() => import("@/pages/NotFound/NotFound"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Heroes />,
    errorElement: <NotFound />,
  },
  {
    path: "hero/:heroId",
    element: <Hero />,
  },
]);

export { Routes };
