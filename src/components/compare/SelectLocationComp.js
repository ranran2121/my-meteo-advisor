import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const SelectLocationComp = ({ cities, setError, setData }) => {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { cities1, cities2 } = cities;

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location1 || !location2) {
      setInvalidInput({ loc1: "input is required", loc2: "input is required" });
      return;
    }

    try {
      const { lat, lon } = location1;
      const URL1 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast1 = await axios.get(URL1);

      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${location2.lat}&lon=${location2.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast2 = await axios.get(URL2);

      setData({ forecast1: forecast1.data, forecast2: forecast2.data });
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 text-color4 px-8 w-full">
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
      </form>
    </div>
  );
};

export default SelectLocationComp;