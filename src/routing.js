import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import Compare from "./routes/Compare";
import FarAndBeyond from "./routes/FarAndBeyond";
import SingleLocation from "./routes/SingleLocation";
import Root from "./routes/Root";
import Display from "./components/single/Display";
import DisplayComp from "./components/compare/DisplayComp";

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
        children: [
          {
            path: ":lat/:lon",
            element: <Display />,
          },
        ],
      },
      {
        path: "single-location-by-zip",
        element: <SingleLocation />,
        children: [
          {
            path: ":zip/:country",
            element: <Display />,
          },
        ],
      },
      {
        path: "compare-locations",
        element: <Compare />,
        children: [
          {
            path: ":lat1/:lon1/:lat2/:lon2",
            element: <DisplayComp />,
          },
        ],
      },
      {
        path: "far-and-beyond",
        element: <FarAndBeyond />,
      },
    ],
  },
]);

export default router;
