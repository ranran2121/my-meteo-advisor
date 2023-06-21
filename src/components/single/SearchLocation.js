import { useContext, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const SearchLocation = ({ setCities }) => {
  const [location, setLocation] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const { errorSearch, setErrorSearch, setData, isLoading, setIsLoading } =
    useContext(SingleContext);

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();

    if (!location) {
      setIsInvalidInput(true);
      return;
    }

    setIsLoading(true);

    try {
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp = await axios.get(URL);

      if (resp.data.length === 0) {
        throw new Error("error");
      }

      const first = resp.data.shift();
      const cities = resp.data.filter((city) => {
        return city.state !== first.state;
      });
      cities.unshift(first);

      setCities(cities);
    } catch (e) {
      setErrorSearch(true);
    } finally {
      setData(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 text-color4 w-full px-8">
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
          className="px-4 py-2 rounded-full capitalize text-color1"
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
        {!errorSearch && (
          <button
            type="submit"
            className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color5"
          >
            {!isLoading ? (
              "search"
            ) : (
              <BeatLoader color="#fff" speedMultiplier={1} />
            )}
          </button>
        )}
        {errorSearch && (
          <a
            href="/single-location"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color3 text-center"
          >
            New Search
          </a>
        )}
      </form>
    </div>
  );
};

export default SearchLocation;
