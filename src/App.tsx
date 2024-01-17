import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import ErrorPage from "./screens/error-page";
import Layout from "./screens/layout";
import ListMusic from "./screens/ListMusic";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home-page",
        element: <HomePage />,
      },
      {
        path: "list-music",
        element: <ListMusic />,
      },
    ],
  },
]);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />

      <ReactQueryDevtools initialIsOpen />

      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default App;
