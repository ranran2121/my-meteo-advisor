import React, { useContext } from "react";
import LocationFormComp from "./LocationFormComp";
import { CompareContext } from "../../routes/Compare";
import Map from "../Map";
import { hasValidCoordinates } from "../../utils";

const SidebarComp = () => {
  const { searchParams } = useContext(CompareContext);

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
          <LocationFormComp />
          {hasValidCoordinates(loc1.lat, loc1.lon) &&
            hasValidCoordinates(loc2.lat, loc2.lon) && (
              <Map loc1={loc1} loc2={loc2} />
            )}
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
