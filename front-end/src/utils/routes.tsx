import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Homepage } from "../components/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
    errorElement: <div>404 not Found</div>,
  },
]);
