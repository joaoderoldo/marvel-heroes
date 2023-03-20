import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Heroes = React.lazy(() => import("@/pages/Heroes/Heroes"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Heroes />,
    errorElement: <div>404</div>,
  },
]);

export { Routes };
