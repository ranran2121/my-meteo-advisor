import React, { useState, useContext } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import "../../style/auroral.css";
import LocationForm from "./LocationForm";
//import ZipCodeForm from "./ZipCodeForm";
import Map from "../Map";
import { hasValidCoordinates } from "../../utils";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const { weather } = useContext(SingleContext);
  let [searchParams, setSearchParams] = useSearchParams();
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
                setSearchParams("");
                setIsZip(false);
              }}
            />
          </div>

          {/* {isZip ? <ZipCodeForm /> : <LocationForm />} */}
          {!weather && <LocationForm />}
          {weather && (
            <div className="text-center">
              <a
                href="/single-locations"
                className="text-color4 font-semibold uppercase my-4 rounded-full p-2 bg-color3 text-center"
              >
                new search
              </a>

              {hasValidCoordinates(loc.lat, loc.lon) && (
                <Map
                  loc1={{
                    ...loc,
                    lat: Number(loc.lat),
                    lon: Number(loc.lon),
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
