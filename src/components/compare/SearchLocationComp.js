import { useState } from "react";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const SearchLocationComp = ({ setError, setCities }) => {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!location1 || !location2) {
      setInvalidInput({ loc1: "input is required", loc2: "input is required" });
      return;
    }

    try {
      const URL1 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location1}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp1 = await axios.get(URL1);

      const first1 = resp1.data.shift();
      const cities1 = resp1.data.filter((city) => {
        return city.state !== first1.state;
      });
      cities1.unshift(first1);

      const URL2 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location2}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp2 = await axios.get(URL2);

      const first2 = resp2.data.shift();
      const cities2 = resp2.data.filter((city) => {
        return city.state !== first2.state;
      });
      cities2.unshift(first2);
      setCities({ cities1, cities2 });
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 text-color4">
      <h2 className="text-xl font-semibold px-8">Search by Location</h2>
      <form
        onSubmit={handleOnSubmit}
        className="px-8 pt-2 md:pt-10 w-full flex flex-col justify-center"
      >
        <label
          className="my-4 text-color4 font-semibold"
          htmlFor="search-location1"
        >
          Location 1
        </label>
        <input
          className="px-4 py-2 rounded-full capitalize"
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
          className="my-4 text-color4 font-semibold"
          htmlFor="search-location1"
        >
          Location 2
        </label>
        <input
          className="px-4 py-2 rounded-full capitalize"
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

export default SearchLocationComp;