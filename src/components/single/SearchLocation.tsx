import React, { useContext, useEffect, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { useSearchParams } from "react-router-dom";

const SearchLocation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  const loc = searchParams.get("loc");
  const { citiesError, weatherError } = useContext(SingleContext);
  const [location, setLocation] = useState("");
  const [invalidInput, setInvalidInput] = useState("");

  useEffect(() => {
    setLocation(loc ?? "");
    setInvalidInput("");
  }, [loc]);

  useEffect(() => {
    if (citiesError) {
      setInvalidInput("city not found");
    }
  }, [citiesError]);

  const handleOnSubmitForm = async (e: any) => {
    e.preventDefault();
    if (invalidInput) {
      return;
    }

    if (!location) {
      setInvalidInput("input is required");
      return;
    }

    setSearchParams({ loc: location });
  };

  return (
    <div className="my-4 text-color4">
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
          onChange={(e) => {
            setInvalidInput("");
            setLocation(e.target.value);
          }}
        />
        {invalidInput && <span className="input-error">{invalidInput}</span>}

        {!weatherError && (
          <button
            type="submit"
            className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color5"
          >
            search
          </button>
        )}
        {weatherError && (
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
