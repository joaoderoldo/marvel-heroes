import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "@/styles/GlobalStyles";
import { Routes } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Loading } from "@/components";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={Routes} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);
