import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Heroes = React.lazy(() => import("@/pages/Heroes/Heroes"));
const Heroe = React.lazy(() => import("@/pages/Heroe/Heroe"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Heroes />,
    errorElement: <div>404</div>,
  },
  {
    path: "heroe/:heroId",
    element: <Heroe />,
  },
]);

export { Routes };
