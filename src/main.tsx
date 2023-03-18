import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyles";
import { Routes } from "@/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </Suspense>
  </React.StrictMode>
);
