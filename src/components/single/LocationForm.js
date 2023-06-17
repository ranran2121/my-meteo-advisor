import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const LocationForm = ({ setData, setError }) => {
  const [location, setLocation] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location) {
      setIsInvalidInput(true);
      return;
    }

    try {
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const cities = await axios.get(URL);

      const { lat, lon } = cities.data[0];
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
    <form
      onSubmit={handleOnSubmit}
      className="px-8 pt-2 md:pt-10 w-full flex flex-col justify-center"
    >
      <label
        className="my-4 text-white font-semibold"
        htmlFor="search-location"
      >
        Location
      </label>
      <input
        className="px-4 py-2 rounded-full capitalize"
        id="search-location"
        aria-label="Search location"
        placeholder="Search"
        type="search"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {isInvalidInput && (
        <span className="input-error">Location is required</span>
      )}
      <button
        type="submit"
        className="text-white font-semibold uppercase my-4 rounded-full px-4 py-2 bg-blue-400"
      >
        {!isLoading ? (
          "search"
        ) : (
          <BeatLoader color="#fff" speedMultiplier={1} />
        )}
      </button>
    </form>
  );
};

export default LocationForm;
