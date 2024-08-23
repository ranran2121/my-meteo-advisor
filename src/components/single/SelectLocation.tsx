import React, { useContext, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { useSearchParams } from "react-router-dom";
import CitiesList from "../forms/CitiesList";

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
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <CitiesList
          cities={cities}
          setLocationIndex={setLocationIndex}
          locationIndex={locationIndex}
          invalidInput={invalidInput}
        />

        <button
          type="submit"
          className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
        >
          Search
        </button>

        {!cities ? (
          <a
            href="/single-location"
            className="text-color4 font-semibold uppercase my-2 rounded-full py-2 bg-color5 text-center"
          >
            Back
          </a>
        ) : (
          <a
            href="/single-location"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
          >
            New Search
          </a>
        )}
      </form>
    </div>
  );
};

export default SelectLocation;
