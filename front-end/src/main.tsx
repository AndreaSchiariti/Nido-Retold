import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.scss"
import { router } from "./utils/routes.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
