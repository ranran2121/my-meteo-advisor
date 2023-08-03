import React, { useCallback, useContext, useEffect, useState } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import BeatLoader from "react-spinners/BeatLoader";
import { NASA_API_BASEURL } from "../../constants";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MarsForm = () => {
  const { setData, setError } = useContext(FarContext);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const far = searchParams.get("far");

  const loaderMars = useCallback(async () => {
    try {
      const URL = `${NASA_API_BASEURL}/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`;
      const response = await axios.get(URL);

      if (response.data.sol_keys.length > 0) {
        setData({ data: response.data, from: "mars" });
      } else {
        setError(true);
      }
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setData, setError]);

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);

    setSearchParams({ far: "mars" });
  };

  useEffect(() => {
    if (far === "mars") {
      loaderMars();
    }
  }, [loaderMars, far]);

  return (
    <div className="px-8 pt-2 md:pt-10 w-full flex flex-col justify-center my-6">
      <h3 className="text-color4 font-semibold text-2xl text-center">
        Will you be lucky in having a glimpse of the weather on{" "}
        <span className="text-3xl text-color2 italic underline underline-offset-4">
          Mars
        </span>{" "}
        ?
      </h3>
      <button
        type="submit"
        onClick={handleOnClick}
        className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
      >
        {!isLoading ? (
          "good luck"
        ) : (
          <BeatLoader color="#fff" speedMultiplier={1} />
        )}
      </button>
    </div>
  );
};

export default MarsForm;
