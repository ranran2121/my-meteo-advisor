import React, { useState, useContext } from "react";
import { CompareContext } from "../../routes/Compare";
import { useSearchParams } from "react-router-dom";
import CitiesList from "../forms/CitiesList";
import SelectLocationForm from "../forms/SelectLocationForm";

const SelectLocationComp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [_, setSearchParams] = useSearchParams();
  const { cities1, cities2 } = useContext(CompareContext);
  const [invalidInput1, setInvalidInput1] = useState("");
  const [invalidInput2, setInvalidInput2] = useState("");
  const [location1Index, setLocation1Index] = useState<number | null>(null);
  const [location2Index, setLocation2Index] = useState<number | null>(null);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (location1Index === null) {
      setInvalidInput1("selection is required");
      return;
    }
    if (location2Index === null) {
      setInvalidInput2("selection is required");
      return;
    }

    setSearchParams({
      loc1: cities1[location1Index].name,
      state1: cities1[location1Index].state,
      lat1: cities1[location1Index].lat,
      lon1: cities1[location1Index].lon,
      loc2: cities2[location2Index].name,
      state2: cities2[location2Index].state,
      lat2: cities2[location2Index].lat,
      lon2: cities2[location2Index].lon,
    });
  };

  return (
    <div className="my-4 text-color4 w-full">
      <h2 className="text-xl font-semibold">Refine your search</h2>
      <SelectLocationForm
        onSubmit={handleOnSubmitForm}
        hasCities={!!cities1.length && !!cities2.length}
      >
        <div className="mt-4  text-color3">
          <h3 className="mt-4">Location1</h3>
          <CitiesList
            cities={cities1}
            setLocationIndex={setLocation1Index}
            locationIndex={location1Index}
            invalidInput={invalidInput1}
            name="cities1"
          />
        </div>
        <div className="mt-4  text-color5">
          <h3 className="mt-4">Location2</h3>
          <CitiesList
            cities={cities2}
            setLocationIndex={setLocation2Index}
            locationIndex={location2Index}
            invalidInput={invalidInput2}
            name="cities2"
          />
        </div>
      </SelectLocationForm>
    </div>
  );
};

export default SelectLocationComp;
