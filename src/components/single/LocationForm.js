import { useState } from "react";
import SearchLocation from "./SearchLocation";
import SelectLocation from "./SelectLocation";

const LocationForm = ({ setData, setError }) => {
  const [cities, setCities] = useState(null);

  return (
    <>
      {!cities && <SearchLocation setError={setError} setCities={setCities} />}
      {cities && (
        <SelectLocation setError={setError} cities={cities} setData={setData} />
      )}
    </>
  );
};

export default LocationForm;
