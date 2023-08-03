import React, { useContext } from "react";
import SearchLocationComp from "./SearchLocationComp";
import SelectLocationComp from "./SelectLocationComp";
import { CompareContext } from "../../routes/Compare";

const SidebarComp = () => {
  const { cities } = useContext(CompareContext);

  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 my-6">
          {!cities && <SearchLocationComp />}
          {cities && <SelectLocationComp />}
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;
