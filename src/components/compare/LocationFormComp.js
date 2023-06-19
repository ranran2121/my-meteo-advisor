import { useState } from "react";
import SearchLocationComp from "./SearchLocationComp";
import SelectLocationComp from "./SelectLocationComp";

const LocationFormComp = () => {
  const [cities, setCities] = useState(null);

  return (
    <>
      {!cities && <SearchLocationComp setCities={setCities} />}
      {cities && <SelectLocationComp cities={cities} />}
    </>
  );
};

export default LocationFormComp;
