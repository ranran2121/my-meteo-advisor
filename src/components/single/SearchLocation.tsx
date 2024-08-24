import React, { useContext, useEffect, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { useSearchParams } from "react-router-dom";
import SingleInput from "../forms/SingleInput";
import SearchLocationForm from "../forms/SearchLocationForm";

const SearchLocation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  const loc = searchParams.get("loc");
  const { citiesError, weatherError } = useContext(SingleContext);
  const [location, setLocation] = useState("");
  const [invalidInput, setInvalidInput] = useState("");

  useEffect(() => {
    setLocation(loc ?? "");
    setInvalidInput("");
  }, [loc]);

  useEffect(() => {
    if (citiesError) {
      setInvalidInput("city not found");
    }
  }, [citiesError]);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();
    if (invalidInput) {
      return;
    }

    if (!location) {
      setInvalidInput("input is required");
      return;
    }

    setSearchParams({ loc: location });
  };

  return (
    <div className="my-4 text-color4">
      <SearchLocationForm
        onSubmit={handleOnSubmitForm}
        hasWeatherError={weatherError}
      >
        <SingleInput
          label="Location"
          value={location}
          invalidInput={invalidInput}
          setInvalidInput={setInvalidInput}
          setLocation={setLocation}
        />
      </SearchLocationForm>
    </div>
  );
};

export default SearchLocation;
