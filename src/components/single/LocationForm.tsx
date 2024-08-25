import React, { useContext } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import SearchLocation from "./SearchLocation";
import SelectLocation from "./SelectLocation";

const LocationForm = () => {
  const { cities } = useContext(SingleContext);

  return cities ? <SelectLocation /> : <SearchLocation />;
};

export default LocationForm;
