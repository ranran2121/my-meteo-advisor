import { useContext } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import { format } from "date-fns";
import BeatLoader from "react-spinners/BeatLoader";

const NasaForm = () => {
  const { setData, setError, isLoading, setIsLoading, setSearchParams } =
    useContext(FarContext);

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);
    const date = format(new Date(), "yyyy-MM-dd");
    setSearchParams({ day: date });
  };

  return (
    <div className="px-8 pt-2 md:pt-8 w-full flex flex-col justify-center">
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
