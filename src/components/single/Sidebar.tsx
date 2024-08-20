import React, { useState, useContext } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import "../../style/auroral.css";
import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";
import Map from "../Map";
import { hasValidCoordinates } from "../../utils";

const Sidebar = () => {
  const { setData, setSearchParams, searchParams } = useContext(SingleContext);
  const zipCode = searchParams.get("zipCode");
  const [isZip, setIsZip] = useState(zipCode ? true : false);

  const loc = {
    lat: searchParams.get("lat"),
    lon: searchParams.get("lon"),
    name: searchParams.get("loc"),
  };

  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 my-6">
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
                setSearchParams("");
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
                setSearchParams("");
                setIsZip(false);
              }}
            />
          </div>

          {isZip ? <ZipCodeForm /> : <LocationForm />}
          {hasValidCoordinates(loc.lat, loc.lon) && <Map loc1={loc} />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
