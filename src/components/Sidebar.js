import React from "react";
import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";

const Sidebar = ({ setData, setError }) => {
  return (
    <div className="bg-blue-900 h-full flex flex-col items-center">
      <LocationForm setData={setData} setError={setError} />
      <div className="flex flex-row">
        <div className="border-b-2 border-white"></div>
        <div className="text-white font-semibold my-6 md:my-12"> OR</div>
        <div className="border-b-2 border-white"></div>
      </div>

      <ZipCodeForm setData={setData} setError={setError} />
    </div>
  );
};

export default Sidebar;
