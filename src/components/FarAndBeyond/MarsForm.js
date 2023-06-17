import { useState } from "react";
import axios from "axios";
import { NASA_API_BASEURL } from "../../constants";
import BeatLoader from "react-spinners/BeatLoader";

const MarsForm = ({ setData, setError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);

    try {
      const URL = `${NASA_API_BASEURL}/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`;
      const response = await axios.get(URL);

      if (response.data.sol_keys.length > 0) {
        setData({ data: response.data, from: "mars" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-8 pt-2 md:pt-10 w-full flex flex-col justify-center">
      <h3 className="text-white font-semibold text-2xl text-center">
        Will you be lucky in having a glimpse of the weather on{" "}
        <span className="text-3xl text-blue-500 italic underline underline-offset-4">
          Mars
        </span>{" "}
        ?
      </h3>
      <button
        type="submit"
        onClick={handleOnClick}
        className="text-white font-semibold uppercase my-4 rounded-full px-4 py-2 bg-blue-400"
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
