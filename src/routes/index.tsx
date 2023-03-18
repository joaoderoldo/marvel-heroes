import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/Home/Home"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
]);

export { Routes };
