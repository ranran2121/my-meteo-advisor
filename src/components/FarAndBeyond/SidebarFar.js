import React from "react";
import MarsForm from "./MarsForm";
import NasaForm from "./NasaForm";

const SidebarFar = ({ setData, setError }) => {
  return (
    <div className="bg-color1 h-full flex flex-col items-center pt-8 md:rounded-tr-lg">
      <MarsForm setData={setData} setError={setError} />
      <div className="flex flex-row w-full items-center my-8 md:my-16 px-4">
        <div className="basis-1/3 w-full border-b-2 border-color4"></div>
        <div className="text-color4 font-semibold basis-1/3 text-center">
          OR
        </div>
        <div className="basis-1/3 w-full border-b-2 border-color4"></div>
      </div>
      <NasaForm setData={setData} setError={setError} />
    </div>
  );
};

export default SidebarFar;
