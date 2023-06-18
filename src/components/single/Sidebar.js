import React from "react";
import "./../../auroral.css";
import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";

const Sidebar = ({ setData, setError }) => {
  return (
    <div className="container md:rounded-tr-lg">
      <div className="auroral-northern "></div>
      <div className="sidebar">
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
    </div>
  );
};

export default Sidebar;
