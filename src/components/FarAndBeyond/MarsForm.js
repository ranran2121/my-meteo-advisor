import axios from "axios";
import { NASA_API_BASEURL } from "../../constants";

const MarsForm = ({ setData, setError }) => {
  const handleOnClick = async () => {
    setError(false);
    setData(null);

    try {
      const URL = `${NASA_API_BASEURL}/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`;
      const response = await axios.get(URL);

      if (response.data.sol_keys.length > 0) {
        setData(response.data);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
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
        good luck
      </button>
    </div>
  );
};

export default MarsForm;
