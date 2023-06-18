import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const SearchLocation = ({ setError, setCities }) => {
  const [location, setLocation] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location) {
      setIsInvalidInput(true);
      return;
    }

    try {
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp = await axios.get(URL);

      const first = resp.data.shift();
      const cities = resp.data.filter((city) => {
        return city.state !== first.state;
      });
      cities.unshift(first);

      setCities(cities);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 text-color4">
      <h2 className="text-xl font-semibold">Search by Location</h2>
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <label
          className="my-4 text-color4 font-semibold"
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

export default SearchLocation;