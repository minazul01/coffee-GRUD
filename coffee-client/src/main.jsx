import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./AddCoffee.jsx";
import UpdateCoffee from "./UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updatecoffee",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: () => fetch('http://localhost:5000/coffee')
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
