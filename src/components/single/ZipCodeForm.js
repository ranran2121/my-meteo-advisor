import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const LocationForm = ({ setData, setError }) => {
  const [zipCode, setZipCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidInput, setInvalidInput] = useState({ zip: "", country: "" });

  const isValidForm = () => {
    return !invalidInput.zip && !invalidInput.country;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!isValidForm()) {
      return;
    }

    if (!zipCode && !countryCode) {
      setInvalidInput({
        zip: "zip code is required",
        country: "zip code is required",
      });
      return;
    }
    if (!zipCode) {
      setInvalidInput({
        zip: "zip code is required",
      });
      return;
    }

    if (!countryCode) {
      setInvalidInput({
        country: "zip code is required",
      });
      return;
    }

    try {
      //call openeathermap geolocation api to retrieve lat&lon coordinates
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/zip?zip=${zipCode},${countryCode.toUpperCase()}&limit=5&appid=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`;
      const city = await axios.get(URL);
      //use the lat&lon to retrieve forecast
      const { lat, lon } = city.data;
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
          onChange={(e) => {
            setError(false);
            let invalid = { ...invalidInput, zip: "" };
            setInvalidInput(invalid);
            const reg = /^\d+$/;
            if (!reg.test(e.target.value)) {
              invalid = { ...invalidInput, zip: "invalid input" };
              setInvalidInput(invalid);
            }
            setZipCode(e.target.value);
          }}
        />
        {invalidInput.zip && (
          <span className="input-error">{invalidInput.zip}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label
          className="my-4 text-white font-semibold"
          htmlFor="search-zipCode"
        >
          CountryCode
        </label>
        <input
          className="px-4 py-2 rounded-full uppercase"
          id="search-countryCode"
          aria-label="Search countryCode"
          placeholder="e.g. IT"
          type="search"
          value={countryCode}
          onChange={(e) => {
            setError(false);
            let invalid = { ...invalidInput, country: "" };
            setInvalidInput(invalid);
            if (e.target.value.length > 2 || e.target.value.length < 2) {
              invalid = { ...invalidInput, country: "invalid input" };
              setInvalidInput(invalid);
            }
            setCountryCode(e.target.value);
          }}
        />
        {invalidInput.country && (
          <span className="input-error">{invalidInput.country}</span>
        )}
      </div>
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
