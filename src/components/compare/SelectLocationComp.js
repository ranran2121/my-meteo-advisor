import { useState, useContext } from "react";
import { CompareContext } from "../../routes/Compare";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const SelectLocationComp = ({ cities }) => {
  const { cities1, cities2 } = cities;
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [invalidInput, setInvalidInput] = useState({ loc1: "", loc2: "" });
  const { data, isLoading, setIsLoading } = useContext(CompareContext);

  const navigate = useNavigate();

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();

    if (!location1 || !location2) {
      setInvalidInput({
        loc1: "input is required",
        loc2: "input is required",
      });
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

    navigate(
      `/compare-locations/${location1.lat}/${location1.lon}/${location2.lat}/${location2.lon}`
    );
  };

  return (
    <div className="mt-4 text-color4 px-8 w-full">
      <h2 className="text-xl font-semibold">Refine your search</h2>
      <form
        onSubmit={handleOnSubmitForm}
        className="w-full flex flex-col justify-center"
      >
        <div className="mt-4  text-color3">
          <h3 className="mt-4">Location1</h3>
          <ul className="mt-2">
            {cities1.map((city, index) => {
              const { state, name } = city;
              return (
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name + state}
                    value={index}
                    onChange={(e) => {
                      setLocation1(cities1[e.target.value]);
                    }}
                  />
                  <label htmlFor={name + state} className="ml-2">
                    {name}, {state}
                  </label>
                </li>
              );
            })}
          </ul>
          {invalidInput.loc1 && (
            <span className="input-error">{invalidInput.loc1}</span>
          )}
        </div>
        <div className="mt-4  text-color5">
          <h3 className="mt-4">Location2</h3>
          <ul className="mt-2">
            {cities2.map((city, index) => {
              const { state, name } = city;
              return (
                <li key={state}>
                  <input
                    type="radio"
                    id={name + state}
                    name={name + state}
                    value={index}
                    onChange={(e) => {
                      setLocation2(cities2[e.target.value]);
                    }}
                  />
                  <label htmlFor={name + state} className="ml-2">
                    {name}, {state}
                  </label>
                </li>
              );
            })}
          </ul>
          {invalidInput.loc2 && (
            <span className="input-error">{invalidInput.loc1}</span>
          )}
        </div>
        {!data && (
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
        )}
        {data && (
          <a
            href="/compare-locations"
            className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color3 text-center"
          >
            new search
          </a>
        )}
      </form>
    </div>
  );
};

export default SelectLocationComp;
