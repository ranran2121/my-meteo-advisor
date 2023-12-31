import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Compare from "./routes/Compare";
import FarAndBeyond from "./routes/FarAndBeyond";
import SingleLocation from "./routes/SingleLocation";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "single-location",
        element: <SingleLocation />,
      },
      {
        path: "compare-locations",
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
