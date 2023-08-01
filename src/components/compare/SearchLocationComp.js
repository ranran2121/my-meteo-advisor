import { useState, useContext } from "react";
import { CompareContext } from "../../routes/Compare";
import BeatLoader from "react-spinners/BeatLoader";

const SearchLocationComp = ({ setCities }) => {
  const {
    errorSearch,
    isLoading,
    setIsLoading,
    setSearchParams,
    location1,
    setLocation1,
    location2,
    setLocation2,
  } = useContext(CompareContext);
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!location1 && !location2) {
      setInvalidInput({ loc1: "input is required", loc2: "input is required" });
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
    setSearchParams({ loc1: location1, loc2: location2 });
  };

  return (
    <div className="my-4 text-color4">
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
          className="px-4 py-2 rounded-full capitalize text-color1"
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
          className="px-4 py-2 rounded-full capitalize  text-color1"
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

        {!errorSearch && (
          <button
            type="submit"
            className="text-color4 font-semibold uppercase my-4 rounded-full text-center py-2 bg-color3"
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
            href="/compare-locations"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color3 text-center"
          >
            New Search
          </a>
        )}
      </form>
    </div>
  );
};

export default SearchLocationComp;
