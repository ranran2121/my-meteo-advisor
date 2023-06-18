import { useState } from "react";
import SearchLocationComp from "./SearchLocationComp";
import SelectLocationComp from "./SelectLocationComp";

const LocationFormComp = ({ setData, setError }) => {
  const [cities, setCities] = useState(null);

  return (
    <>
      {!cities && (
        <SearchLocationComp setError={setError} setCities={setCities} />
      )}
      {cities && (
        <SelectLocationComp
          setError={setError}
          cities={cities}
          setData={setData}
        />
      )}
    </>
  );
};

export default LocationFormComp;
