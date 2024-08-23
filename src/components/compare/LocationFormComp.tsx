import { useContext } from "react";
import SearchLocationComp from "../compare/SearchLocationComp";
import SelectLocationComp from "../compare/SelectLocationComp";
import { CompareContext } from "../../routes/Compare";

const LocationFormComp = () => {
  const { cities1, cities2 } = useContext(CompareContext);

  return cities1 && cities2 ? <SelectLocationComp /> : <SearchLocationComp />;
};

export default LocationFormComp;
