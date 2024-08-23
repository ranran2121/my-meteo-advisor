import React, { useState, useContext, useEffect } from "react";
import { CompareContext } from "../../routes/Compare";
import BeatLoader from "react-spinners/BeatLoader";
import { invalidInputType } from "../../types/index";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchLocationComp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  const loc1 = searchParams.get("loc1");
  const loc2 = searchParams.get("loc2");
  const { errorSearch, isLoading, cities1Error, cities2Error } =
    useContext(CompareContext);
  const [location1, setLocation1] = useState<string>(loc1 ?? "");
  const [location2, setLocation2] = useState<string>(loc2 ?? "");
  const [invalidInput, setInvalidInput] = useState<invalidInputType>({
    loc1: "",
    loc2: "",
  });

  const location = useLocation();

  // Effect to synchronize input fields with URL parameters
  useEffect(() => {
    setLocation1(loc1 ?? "");
    setLocation2(loc2 ?? "");
    setInvalidInput({ loc1: "", loc2: "" });
  }, [loc1, loc2]); // Depend on loc1 and loc2 to update input fields when params change

  useEffect(() => {
    if (location.pathname !== "/compare-locations") {
      setLocation1("");
      setLocation2("");
      setInvalidInput({ loc1: "", loc2: "" });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (cities1Error) {
      setInvalidInput((prev) => {
        return { ...prev, loc1: "city not found" };
      });
    }
    if (cities2Error) {
      setInvalidInput((prev) => {
        return { ...prev, loc2: "city not found" };
      });
    }
  }, [cities1Error, cities2Error]);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (invalidInput.loc1 || invalidInput.loc2) {
      return;
    }

    if (!location1) {
      setInvalidInput((prev) => ({ ...prev, loc1: "input is required" }));
      return;
    }

    if (!location2) {
      setInvalidInput((prev) => ({ ...prev, loc2: "input is required" }));
      return;
    }

    setSearchParams({ loc1: location1, loc2: location2 });
  };

  return (
    <div className="my-4 text-color4">
      <h2 className="text-xl font-semibold">Search by Location</h2>
      <form
        onSubmit={handleOnSubmit}
        className=" pt-2 md:pt-10 w-full flex flex-col justify-center"
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
          type="text"
          value={location1}
          onChange={(e) => {
            setInvalidInput((prev) => ({
              ...prev,
              loc1: "",
            }));
            setLocation1(e.target.value);
          }}
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
          type="text"
          value={location2}
          onChange={(e) => {
            setInvalidInput((prev) => ({
              ...prev,
              loc2: "",
            }));
            setLocation2(e.target.value);
          }}
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
