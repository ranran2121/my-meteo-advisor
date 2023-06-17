import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const LocationFormComp = ({ setData, setError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location1 || !location2) {
      setInvalidInput({ loc1: "input is required", loc2: "input is required" });
      return;
    }

    try {
      const URL1 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location1}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const cities1 = await axios.get(URL1);
      const URL2 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location2}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const cities2 = await axios.get(URL2);

      const { lat, lon } = cities1.data[0];
      const URL1a = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast1 = await axios.get(URL1a);

      const URL2a = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${cities2.data[0].lat}&lon=${cities2.data[0].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast2 = await axios.get(URL2a);

      setData({ forecast1: forecast1.data, forecast2: forecast2.data });
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
        htmlFor="search-location1"
      >
        Location 1
      </label>
      <input
        className="px-4 py-2 rounded-full"
        id="search-location1"
        aria-label="Search location1"
        placeholder="Search"
        type="search"
        value={location1}
        onChange={(e) => setLocation1(e.target.value)}
      />
      {invalidInput.loc1 && (
        <span className="input-error">{invalidInput.loc1}</span>
      )}
      <label
        className="my-4 text-white font-semibold"
        htmlFor="search-location1"
      >
        Location 2
      </label>
      <input
        className="px-4 py-2 rounded-full"
        id="search-location2"
        aria-label="Search location2"
        placeholder="Search"
        type="search"
        value={location2}
        onChange={(e) => setLocation2(e.target.value)}
      />
      {invalidInput.loc2 && (
        <span className="input-error">{invalidInput.loc2}</span>
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

export default LocationFormComp;
