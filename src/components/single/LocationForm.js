import { useState } from "react";
import SearchLocation from "./SearchLocation";
import SelectLocation from "./SelectLocation";

const LocationForm = () => {
  const [cities, setCities] = useState(null);

  return (
    <>
      {!cities && <SearchLocation setCities={setCities} />}
      {cities && <SelectLocation cities={cities} />}
    </>
  );
};

export default LocationForm;
