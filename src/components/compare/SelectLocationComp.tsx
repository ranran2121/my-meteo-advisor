import React, { useState, useContext } from "react";
import { CompareContext } from "../../routes/Compare";
import BeatLoader from "react-spinners/BeatLoader";
import { CityType, invalidInputType } from "../../types/index";
import { useSearchParams } from "react-router-dom";

const SelectLocationComp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [_, setSearchParams] = useSearchParams();
  const { data, isLoading, cities1, cities2 } = useContext(CompareContext);
  const [invalidInput, setInvalidInput] = useState<invalidInputType>({});
  const [location1Index, setLocation1Index] = useState<number | null>(null);
  const [location2Index, setLocation2Index] = useState<number | null>(null);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (location1Index === null) {
      setInvalidInput({ ...invalidInput, loc1: "selection is required" });
      return;
    }
    if (location2Index === null) {
      setInvalidInput({ ...invalidInput, loc2: "selection is required" });
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
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <div className="mt-4  text-color3">
          <h3 className="mt-4">Location1</h3>
          <ul className="mt-2">
            {cities1?.map((city: CityType, index: number) => {
              const { state, name } = city;
              return (
                <li key={state + name + index}>
                  <input
                    type="radio"
                    id={name + state + index}
                    name={name}
                    value={index}
                    checked={index === location1Index}
                    onChange={(e) => {
                      const i = Number(e.target.value);
                      setLocation1Index(i);
                    }}
                  />
                  <label htmlFor={name + state} className="ml-2">
                    {name}, {state}
                  </label>
                </li>
              );
            })}
          </ul>
          {invalidInput.loc1 && (
            <span className="input-error">{invalidInput.loc1}</span>
          )}
        </div>
        <div className="mt-4  text-color5">
          <h3 className="mt-4">Location2</h3>
          <ul className="mt-2">
            {cities2?.map((city: CityType, index: number) => {
              const { state, name } = city;
              return (
                <li key={state + name + index}>
                  <input
                    type="radio"
                    id={name + state + index}
                    name={name + state}
                    value={index}
                    checked={index === location2Index}
                    onChange={(e) => {
                      const i = Number(e.target.value);
                      setLocation2Index(i);
                    }}
                  />
                  <label htmlFor={name + state} className="ml-2">
                    {name}, {state}
                  </label>
                </li>
              );
            })}
          </ul>
          {invalidInput.loc2 && (
            <span className="input-error">{invalidInput.loc2}</span>
          )}
        </div>
        {!data && (
          <>
            <button
              type="submit"
              className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
            >
              {!isLoading ? (
                "search"
              ) : (
                <BeatLoader color="#fff" speedMultiplier={1} />
              )}
            </button>{" "}
            <a
              href="/compare-locations"
              className="text-color4 font-semibold uppercase my-2 rounded-full py-2 bg-color5 text-center"
            >
              back
            </a>
          </>
        )}
      </form>
    </div>
  );
};

export default SelectLocationComp;
