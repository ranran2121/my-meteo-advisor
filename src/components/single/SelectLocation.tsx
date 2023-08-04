import React, { useContext, useState, useEffect } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import BeatLoader from "react-spinners/BeatLoader";
import { CityType } from "../../types/index";

const SelectLocation = ({
  cities,
  locationIndex,
}: {
  cities: CityType[] | null;
  locationIndex: number | null;
}) => {
  const [location, setLocation] = useState<Partial<CityType | null>>({});
  const [locIndex, setLocIndex] = useState(locationIndex);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const { data, isLoading, setIsLoading, setSearchParams } =
    useContext(SingleContext);

  useEffect(() => {
    setLocIndex(locationIndex);
  }, [locationIndex]);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (!location) {
      setIsInvalidInput(true);
      return;
    }

    setIsLoading(true);
    setSearchParams({
      loc: location.name,
      state: location.state,
      lat: location.lat,
      lon: location.lon,
    });
  };

  return (
    <div className="my-4 text-color4 px-8 w-full">
      <h2 className="text-xl font-semibold text-color5">Refine your search</h2>
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <ul className="mt-4">
          {cities?.map((city: CityType, index: number) => {
            const { state, name } = city;
            return (
              <li key={state}>
                <input
                  type="radio"
                  id={state}
                  name={name}
                  value={index}
                  checked={index === locIndex}
                  onChange={(e) => {
                    const i = Number(e.target.value);
                    setLocIndex(index);
                    setLocation(cities[i]);
                  }}
                />
                <label htmlFor={state} className="ml-2">
                  {name}, {state}
                </label>
              </li>
            );
          })}
        </ul>
        {isInvalidInput && (
          <span className="input-error">Location is required</span>
        )}
        {!data && (
          <>
            <button
              type="submit"
              className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
            >
              {!isLoading ? (
                "search"
              ) : (
                <BeatLoader color="#fff" speedMultiplier={1} />
              )}
            </button>
            <a
              href="/single-location"
              className="text-color4 font-semibold uppercase my-2 rounded-full py-2 bg-color5 text-center"
            >
              back
            </a>
          </>
        )}
        {data && (
          <a
            href="/single-location"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
          >
            new search
          </a>
        )}
      </form>
    </div>
  );
};

export default SelectLocation;
