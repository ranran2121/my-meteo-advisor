import "../input.css";
import "../auroral.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ksun from "../assets/ksun.png";
import kcloud from "../assets/kcloud.png";
import kwind from "../assets/kwind.png";

const Home = () => {
  return (
    <div class="container">
      <div class="auroral-northern"></div>
      <div className="absolute p-4 md:px-24 flex flex-col w-full h-full">
        <h1 className="text-blue-600 text-center uppercase text-xl md:text-2xl mb-4">
          Welcome
        </h1>
        <h2 className="text-white text-center">
          This is not the typical weather forecast website
        </h2>
        <h2 className="text-white text-center">
          Take time to explore and find ...
        </h2>

        <div className="flex flex-row mt-8 w-full">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-white flex flex-row items-center">
            <div className="basis-1/3">
              <img
                src={ksun}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-blue-900 text-md md:text-xl">
              ... what the weather is like in your favourite location{" "}
              <Link to="/single-location">
                <ArrowRightIcon className="h-6 w-6 text-blue-900" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-8 w-full justify-end">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-white flex flex-row items-center">
            <div className="basis-1/3">
              <img
                src={kcloud}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-blue-900 text-md md:text-xl">
              ... where to find better weather if you you cannot make up between
              two locations
              <Link to="/compare-locations">
                <ArrowRightIcon className="h-6 w-6 text-blue-900" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-8 w-full">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-white flex flex-row items-center">
            <div className="basis-1/3">
              <img
                src={kwind}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-blue-900 text-md md:text-xl">
              ... how weather forecast pioneers into the space
              <Link to="/far-and-beyond">
                <ArrowRightIcon className="h-6 w-6 text-blue-900" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
