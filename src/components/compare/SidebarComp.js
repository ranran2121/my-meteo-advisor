import { useState } from "react";
import SearchLocationComp from "./SearchLocationComp";
import SelectLocationComp from "./SelectLocationComp";

const SidebarComp = () => {
  const [cities, setCities] = useState(null);

  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        {!cities && <SearchLocationComp setCities={setCities} />}
        {cities && <SelectLocationComp cities={cities} />}
      </div>
    </div>
  );
};

export default SidebarComp;
