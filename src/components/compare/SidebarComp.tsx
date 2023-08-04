import React from "react";
import LocationFormComp from "./LocationFormComp";

const SidebarComp = () => {
  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 my-6">
          <LocationFormComp />
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
