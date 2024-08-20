import React, { useState, useContext } from "react";
import { CompareContext } from "../../routes/Compare";
import BeatLoader from "react-spinners/BeatLoader";
import { CityType, invalidInputType } from "../../types/index";

const SelectLocationComp = ({
  cities1,
  cities2,
  location1Index,
  location2Index,
  setLocation1Index,
  setLocation2Index,
}: {
  cities1: CityType[] | null;
  cities2: CityType[] | null;
  location1Index: number | null;
  location2Index: number | null;
  setLocation1Index: (index: number) => void;
  setLocation2Index: (index: number) => void;
}) => {
  const [location1, setLocation1] = useState<Partial<CityType | null>>({});
  const [location2, setLocation2] = useState<Partial<CityType | null>>({});
  const [invalidInput, setInvalidInput] = useState<invalidInputType>({
    loc1: "",
    loc2: "",
  });
  const { data, isLoading, setIsLoading, setSearchParams } =
    useContext(CompareContext);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (!location1 || !location2) {
      setInvalidInput({
        loc1: "input is required",
        loc2: "input is required",
      });
      return;
    }
    if (!location1) {
      setInvalidInput({ loc1: "input is required" });
      return;
    }
    if (!location2) {
      setInvalidInput({ loc2: "input is required" });
      return;
    }

    setIsLoading(true);
    setSearchParams({
      loc1: location1.name,
      state1: location1.state,
      lat1: location1.lat,
      lon1: location1.lon,
      loc2: location2.name,
      state2: location2.state,
      lat2: location2.lat,
      lon2: location2.lon,
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
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name}
                    value={index}
                    checked={index === location1Index}
                    onChange={(e) => {
                      setLocation1Index(index);
                      const i = Number(e.target.value);
                      setLocation1(cities1[i]);
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
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name + state}
                    value={index}
                    checked={index === location2Index}
                    onChange={(e) => {
                      setLocation2Index(index);
                      const i = Number(e.target.value);
                      setLocation2(cities2[i]);
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
            <span className="input-error">{invalidInput.loc1}</span>
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
        {data && (
          <a
            href="/compare-locations"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color3 text-center"
          >
            new search
          </a>
        )}
      </form>
    </div>
  );
};

export default SelectLocationComp;
