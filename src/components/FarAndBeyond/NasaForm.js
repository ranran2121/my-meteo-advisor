import { useContext, useEffect, useState } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import { format } from "date-fns";
import BeatLoader from "react-spinners/BeatLoader";
import { NASA_API_BASEURL } from "../../constants";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const NasaForm = () => {
  const { setData, setError } = useContext(FarContext);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const day = searchParams.get("day");

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);
    const date = format(new Date(), "yyyy-MM-dd");
    setSearchParams({ day: date });
  };

  const loaderNasa = async () => {
    try {
      const URL = `${NASA_API_BASEURL}/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${day}&hd=true`;
      const response = await axios.get(URL);
      setData({ data: response.data, from: "beyond" });
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (day) {
      loaderNasa();
    }
  }, [day]);

  return (
    <div className="px-8 pt-2 md:pt-8 w-full flex flex-col justify-center my-6">
      <h3 className="text-color4 font-semibold text-2xl text-center">
        Want to enjoy a glimpse of the{" "}
        <span className="text-3xl text-color2 italic underline underline-offset-4">
          "Beyond"
        </span>{" "}
        ?
      </h3>
      <button
        type="submit"
        onClick={handleOnClick}
        className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
      >
        {!isLoading ? "enjoy" : <BeatLoader color="#fff" speedMultiplier={1} />}
      </button>
    </div>
  );
};

export default NasaForm;
