import React, { useContext } from "react";
import LocationFormComp from "./LocationFormComp";
import Map from "../Map";
import { hasValidCoordinates } from "../../utils";
import { useSearchParams } from "react-router-dom";
import { CompareContext } from "../../routes/Compare";

const SidebarComp = () => {
  let [searchParams] = useSearchParams();
  const { data } = useContext(CompareContext);

  const loc1 = {
    lat: searchParams.get("lat1"),
    lon: searchParams.get("lon1"),
    name: searchParams.get("loc1"),
  };
  const loc2 = {
    lat: searchParams.get("lat2"),
    lon: searchParams.get("lon2"),
    name: searchParams.get("loc2"),
  };

  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 my-6">
          {!data && <LocationFormComp />}
          {data && (
            <div className="text-center">
              <a
                href="/compare-locations"
                className="text-color4 font-semibold uppercase my-4 rounded-full p-2 bg-color3 text-center"
              >
                new search
              </a>

              {hasValidCoordinates(loc1.lat, loc1.lon) &&
                hasValidCoordinates(loc2.lat, loc2.lon) && (
                  <Map
                    loc1={{
                      ...loc1,
                      lat: Number(loc1.lat),
                      lon: Number(loc1.lon),
                    }}
                    loc2={{
                      ...loc2,
                      lat: Number(loc2.lat),
                      lon: Number(loc2.lon),
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

export default SidebarComp;
