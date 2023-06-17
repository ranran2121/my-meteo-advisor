import React from "react";
import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";

const Sidebar = ({ setData, setError }) => {
  return (
    <div className="bg-color1 h-full flex flex-col items-center">
      <LocationForm setData={setData} setError={setError} />
      <div className="flex flex-row w-full items-center my-8 md:my-16 px-4">
        <div className="basis-1/3 w-full border-b-2 border-color4"></div>
        <div className="text-color4 font-semibold basis-1/3 text-center">
          OR
        </div>
        <div className="basis-1/3 w-full border-b-2 border-color4"></div>
      </div>
      <ZipCodeForm setData={setData} setError={setError} />
    </div>
  );
};

export default Sidebar;
