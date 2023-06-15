import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Compare from "./routes/Compare";
import FarAndBeyond from "./routes/FarAndBeyond";
import Single from "./routes/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "single",
        element: <Single />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "far-and-beyond",
        element: <FarAndBeyond />,
      },
    ],
  },
]);

export default router;
