import { useState, useEffect, useContext } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import "../../style/auroral.css";
import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { setData, pathname } = useContext(SingleContext);
  const [isZip, setIsZip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isZip) {
      navigate("/single-location-by-zip");
    } else {
      navigate("/single-location");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isZip]);

  return (
    <div className="container md:rounded-tr-lg md:h-screen">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 mt-6">
          <div className="flex flex-row my-2 justify-between">
            <label
              htmlFor="zip-code"
              className="text-xl font-semibold text-color3"
            >
              Search by zip code
            </label>
            <input
              className="mr-6"
              type="radio"
              id="zip-code"
              name="selection"
              checked={isZip}
              onChange={() => {
                setData(null);
                setIsZip(true);
              }}
            />
          </div>

          <div className="flex flex-row my-2 justify-between">
            <label
              htmlFor="location"
              className="text-xl font-semibold text-color5 mr-2"
            >
              Search by location
            </label>
            <input
              className="mr-6"
              type="radio"
              id="location"
              name="selection"
              checked={!isZip}
              onChange={() => {
                setData(null);
                setIsZip(false);
              }}
            />
          </div>
        </div>
        {pathname.split("/")[1] === "single-location" && <LocationForm />}

        {pathname.split("/")[1] === "single-location-by-zip" && <ZipCodeForm />}
      </div>
    </div>
  );
};

export default Sidebar;
