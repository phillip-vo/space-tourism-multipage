import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./errorPage";
import Index from "./routes";
import Destination, { loader as destinationLoader } from "./routes/destination";
import Crew, { loader as crewLoader } from "./routes/crew";
import Technology, { loader as technologyLoader } from "./routes/technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "destinations/:name",
        element: <Destination />,
        loader: destinationLoader,
      },
      {
        path: "crew/:name",
        element: <Crew />,
        loader: crewLoader,
      },
      {
        path: "technology/:name",
        element: <Technology />,
        loader: technologyLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
