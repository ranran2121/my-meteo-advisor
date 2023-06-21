import { useContext } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const MarsForm = () => {
  const { setData, setError, isLoading, setIsLoading, setSearchParams } =
    useContext(FarContext);

  const navigate = useNavigate();

  const handleOnClick = async () => {
    setError(false);
    setData(null);
    setIsLoading(true);

    //navigate(`/far-and-beyond?mars=1`);
    setSearchParams({ mars: true });
  };

  return (
    <div className="px-8 pt-2 md:pt-10 w-full flex flex-col justify-center">
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
