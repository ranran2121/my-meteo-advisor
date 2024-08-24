import React, { useState, useContext, useEffect } from "react";
import { CompareContext } from "../../routes/Compare";
import { useSearchParams } from "react-router-dom";
import SearchLocationForm from "../forms/SearchLocationForm";
import SingleInput from "../forms/SingleInput";

const SearchLocationComp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  const loc1 = searchParams.get("loc1");
  const loc2 = searchParams.get("loc2");
  const { errorSearch, cities1Error, cities2Error } =
    useContext(CompareContext);
  const [location1, setLocation1] = useState<string>(loc1 ?? "");
  const [location2, setLocation2] = useState<string>(loc2 ?? "");
  const [invalidInput1, setInvalidInput1] = useState("");
  const [invalidInput2, setInvalidInput2] = useState("");

  // Effect to synchronize input fields with URL parameters
  useEffect(() => {
    setLocation1(loc1 ?? "");
    setLocation2(loc2 ?? "");
    setInvalidInput1("");
    setInvalidInput2("");
  }, [loc1, loc2]); // Depend on loc1 and loc2 to update input fields when params change

  useEffect(() => {
    if (cities1Error) {
      setInvalidInput1("city not found");
    }
    if (cities2Error) {
      setInvalidInput2("city not found");
    }
  }, [cities1Error, cities2Error]);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (invalidInput1 || invalidInput2) {
      return;
    }

    if (!location1) {
      setInvalidInput1("input is required");
      return;
    }

    if (!location2) {
      setInvalidInput2("input is required");
      return;
    }

    setSearchParams({ loc1: location1, loc2: location2 });
  };

  return (
    <div className="my-4 text-color4">
      <h2 className="text-xl font-semibold">Search by Location</h2>
      <SearchLocationForm
        onSubmit={handleOnSubmit}
        hasWeatherError={errorSearch}
      >
        <SingleInput
          label="Location1"
          value={location1}
          invalidInput={invalidInput1}
          setInvalidInput={setInvalidInput1}
          setLocation={setLocation1}
        />

        <SingleInput
          label="Location2"
          value={location2}
          invalidInput={invalidInput2}
          setInvalidInput={setInvalidInput2}
          setLocation={setLocation2}
        />
      </SearchLocationForm>
    </div>
  );
};

export default SearchLocationComp;
