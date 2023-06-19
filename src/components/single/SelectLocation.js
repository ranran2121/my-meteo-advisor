import { useContext, useState } from "react";
import { AppContext } from "../../routes/Root";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const SelectLocation = ({ cities }) => {
  const { setError, setData } = useContext(AppContext);
  const [location, setLocation] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location) {
      setIsInvalidInput(true);
    }

    try {
      const { lat, lon } = location;
      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast = await axios.get(URL2);

      setData(forecast.data);
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
        <ul className="mt-4">
          {cities.map((city, index) => {
            const { state, name } = city;
            return (
              <li key={state}>
                <input
                  type="radio"
                  id={state}
                  name={state}
                  value={index}
                  onChange={(e) => {
                    setLocation(cities[e.target.value]);
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

export default SelectLocation;
