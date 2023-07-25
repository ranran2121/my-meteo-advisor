import { useState, useContext, useEffect } from "react";
import { CompareContext } from "../../routes/Compare";
import BeatLoader from "react-spinners/BeatLoader";

import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";

const SelectLocationComp = ({ cities }) => {
  const { cities1, cities2 } = cities;
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });
  const {
    data,
    isLoading,
    setIsLoading,
    setSearchParams,
    error,
    setData,
    setError,
    searchParams,
  } = useContext(CompareContext);
  const lat1 = searchParams.get("lat1");
  const lon1 = searchParams.get("lon1");
  const lat2 = searchParams.get("lat2");
  const lon2 = searchParams.get("lon2");

  const handleOnSubmitForm = async (e) => {
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
      lat1: location1.lat,
      lon1: location1.lon,
      lat2: location2.lat,
      lon2: location2.lon,
    });
  };

  const loaderLoc = async () => {
    if (!lat1 || !lat2 || !lon1 || !lon2) {
      setIsLoading(false);
      return;
    }
    try {
      //call openwathermap geolocation api to retrieve lat&lon coordinates
      const URL1 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat1}&lon=${lon1}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast1 = await axios.get(URL1);

      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat2}&lon=${lon2}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast2 = await axios.get(URL2);

      setData({ forecast1: forecast1.data, forecast2: forecast2.data });
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (lat1 && lon1 && lat2 && lon2) {
      loaderLoc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat1, lon1, lat2, lon2, isLoading]);

  return (
    <div className="my-4 text-color4 px-8 w-full">
      <h2 className="text-xl font-semibold">Refine your search</h2>
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <div className="mt-4  text-color3">
          <h3 className="mt-4">Location1</h3>
          <ul className="mt-2">
            {cities1.map((city, index) => {
              const { state, name } = city;
              return (
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name + state}
                    value={index}
                    onChange={(e) => {
                      setLocation1(cities1[e.target.value]);
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
            {cities2.map((city, index) => {
              const { state, name } = city;
              return (
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name + state}
                    value={index}
                    onChange={(e) => {
                      setLocation2(cities2[e.target.value]);
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
          <button
            type="submit"
            className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
          >
            {!isLoading ? (
              "search"
            ) : (
              <BeatLoader color="#fff" speedMultiplier={1} />
            )}
          </button>
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
