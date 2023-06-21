import { useContext, useState } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";

const ZipCodeForm = () => {
  const { setError, setIsLoading, isLoading } = useContext(SingleContext);
  const [zipCode, setZipCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [invalidInput, setInvalidInput] = useState({ zip: "", country: "" });

  const navigate = useNavigate();

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

    setIsLoading(true);
    navigate(`/single-location-by-zip/${zipCode}/${countryCode}`);
  };

  return (
    <div className="mt-4 text-color4 w-full px-8">
      <form
        onSubmit={handleOnSubmit}
        className="w-full flex flex-col justify-center"
      >
        <div className="flex flex-col">
          <label
            className="my-4 text-color4 font-semibold"
            htmlFor="search-zipCode"
          >
            ZipCode
          </label>
          <input
            className="px-4 py-2 rounded-full text-color1"
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
            className="my-4 text-color4 font-semibold"
            htmlFor="search-zipCode"
          >
            CountryCode
          </label>
          <input
            className="px-4 py-2 rounded-full uppercase text-color1"
            id="search-countryCode"
            aria-label="Search countryCode"
            placeholder="e.g. IT"
            type="search"
            value={countryCode}
            onChange={(e) => {
              let invalid = { ...invalidInput, country: "" };
              setInvalidInput(invalid);
              if (e.target.value.length > 2 || e.target.value.length < 2) {
                invalid = { ...invalidInput, country: "invalid input" };
                setInvalidInput(invalid);
              }
              setCountryCode(e.target.value.toUpperCase());
            }}
          />
          {invalidInput.country && (
            <span className="input-error">{invalidInput.country}</span>
          )}
        </div>
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

export default ZipCodeForm;
