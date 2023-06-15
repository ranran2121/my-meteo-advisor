import { useState } from "react";
import { WEATHER_API_BASEURL } from "../constants";
import axios from "axios";

const LocationForm = ({ setData }) => {
  const [zipCode, setZipCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!zipCode && !countryCode) {
      setError({
        zip: "zip code is required",
        country: "zip code is required",
      });

      return;
    }
    if (!zipCode) {
      setError({
        zip: "zip code is required",
      });
      return;
    }

    if (!countryCode) {
      setError({
        country: "zip code is required",
      });
      return;
    }

    try {
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/zip?zip=${zipCode},${countryCode}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const city = await axios.get(URL);
      const { lat, lon } = city.data;
      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast = await axios.get(URL2);
      setData(forecast.data);

      console.log("RESP", forecast.data);
    } catch (e) {
      console.log("ERROREEEE", e);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="px-8 w-full flex flex-col justify-center"
    >
      <div className="flex flex-col">
        <label
          className="my-4 text-white font-semibold"
          htmlFor="search-zipCode"
        >
          ZipCode
        </label>
        <input
          className="px-4 py-2 rounded-full"
          id="search-zipCode"
          aria-label="Search zipCode"
          placeholder="Search"
          type="search"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        {error?.zip && <span>{error.zip}</span>}
      </div>
      <div className="flex flex-col">
        <label
          className="my-4 text-white font-semibold"
          htmlFor="search-zipCode"
        >
          CountryCode
        </label>
        <input
          className="px-4 py-2 rounded-full"
          id="search-countryCode"
          aria-label="Search countryCode"
          placeholder="e.g. IT"
          type="search"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />
        {error?.country && <span>{error.country}</span>}
      </div>
      <button
        type="submit"
        className="text-white font-semibold uppercase my-4 rounded-full px-4 py-2 bg-blue-400"
      >
        search
      </button>
    </form>
  );
};

export default LocationForm;
