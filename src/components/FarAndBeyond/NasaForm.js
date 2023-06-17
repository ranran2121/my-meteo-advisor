import { useState } from "react";
import axios from "axios";
import { NASA_API_BASEURL } from "../../constants";
import { format } from "date-fns";
import BeatLoader from "react-spinners/BeatLoader";

const NasaForm = ({ setData, setError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);

    try {
      const date = format(new Date(), "yyyy-MM-dd");
      const URL = `${NASA_API_BASEURL}/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}&hd=true`;
      const response = await axios.get(URL);

      setData({ data: response.data, from: "beyond" });
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-8 pt-2 md:pt-8 w-full flex flex-col justify-center">
      <h3 className="text-white font-semibold text-2xl text-center">
        Want to enjoy a glimpse of the{" "}
        <span className="text-3xl text-color2 italic underline underline-offset-4">
          "Beyond"
        </span>{" "}
        ?
      </h3>
      <button
        type="submit"
        onClick={handleOnClick}
        className="text-white font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
      >
        {!isLoading ? "enjoy" : <BeatLoader color="#fff" speedMultiplier={1} />}
      </button>
    </div>
  );
};

export default NasaForm;
