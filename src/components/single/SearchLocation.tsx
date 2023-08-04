import React, { useContext, useState, FC } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import BeatLoader from "react-spinners/BeatLoader";
import { SearchLocationType } from "../../types/index";

const SearchLocation: FC<SearchLocationType> = ({ setCities }) => {
  const [location, setLocation] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const { errorSearch, isLoading, setIsLoading, setSearchParams } =
    useContext(SingleContext);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();

    if (!location) {
      setIsInvalidInput(true);
      return;
    }

    setIsLoading(true);
    setSearchParams({ loc: location });
  };

  return (
    <div className="my-4 text-color4 w-full px-8">
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
