import React from "react";
import MarsForm from "./MarsForm";
import NasaForm from "./NasaForm";
import "../../style/auroral.css";

const SidebarFar = () => {
  return (
    <div className="container md:rounded-tr-lg md:h-screen">
      <div className="auroral-northern "></div>
      <div className="sidebar pt-8">
        <MarsForm />
        <div className="flex flex-row w-full items-center my-8 md:my-16 px-4">
          <div className="basis-1/3 w-full border-b-2 border-color4"></div>
          <div className="text-color4 font-semibold basis-1/3 text-center">
            OR
          </div>
          <div className="basis-1/3 w-full border-b-2 border-color4"></div>
        </div>
        <NasaForm />
      </div>
    </div>
  );
};

export default SidebarFar;
