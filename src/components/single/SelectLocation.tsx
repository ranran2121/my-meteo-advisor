import React, { useContext, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { useSearchParams } from "react-router-dom";
import CitiesList from "../forms/CitiesList";
import SelectLocationForm from "../forms/SelectLocationForm";

const SelectLocation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [_, setSearchParams] = useSearchParams();
  const { cities } = useContext(SingleContext);
  const [invalidInput, setInvalidInput] = useState("");
  const [locationIndex, setLocationIndex] = useState<number | null>(null);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (locationIndex === null) {
      setInvalidInput("selection is required");
      return;
    }

    setSearchParams({
      loc: cities[locationIndex].name,
      state: cities[locationIndex].state,
      lat: cities[locationIndex].lat,
      lon: cities[locationIndex].lon,
    });
  };

  return (
    <div className="my-4 text-color4 w-full">
      <h2 className="text-xl font-semibold text-color5">Refine your search</h2>
      <SelectLocationForm
        onSubmit={handleOnSubmitForm}
        hasCities={!!cities.length}
      >
        <CitiesList
          cities={cities}
          setLocationIndex={setLocationIndex}
          locationIndex={locationIndex}
          invalidInput={invalidInput}
          name="cities"
        />
      </SelectLocationForm>
    </div>
  );
};

export default SelectLocation;
