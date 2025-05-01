import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UpdateCoffee from "./AllComponent/MainSection/UpdateCoffee.jsx";
import App from "./AllComponent/MainSection/App.jsx";
import AddCoffee from "./AllComponent/MainSection/AddCoffee.jsx";
import Register from "./AllComponent/Authentication/Register.jsx";
import Login from "./AllComponent/Authentication/Login.jsx";
import Authentication from "./AllComponent/Authentication/Authentication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </StrictMode>
);
