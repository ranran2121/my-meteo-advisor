import { useContext, useEffect } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import axios from "axios";
import { NASA_API_BASEURL } from "../../constants";
import { format } from "date-fns";
import Error from "../Error";

const DisplayFar = () => {
  const {
    data,
    error,
    isLoading,
    setIsLoading,
    setData,
    setError,
    searchParams,
  } = useContext(FarContext);

  const mars = searchParams.get("mars");
  const day = searchParams.get("day");

  const loaderMars = async () => {
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
    if (mars) {
      loaderMars();
    }
    if (day) {
      loaderNasa();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mars, day, isLoading]);

  if (error) {
    return <Error />;
  }

  if (data && data.from === "beyond") {
    const { title, url, explanation, copyright, date, media_type } = data.data;
    return (
      <div className="text-center flex flex-col items-center" id="display-far">
        <div className="py-4 px-4">
          <h2 className="text-color1 text-2xl font-bold">
            The picture of the day {format(new Date(date), "dd-MM-yyyy")}
          </h2>
          <h1 className="mt-4 text-color2 font-extrabold text-3xl">{title}</h1>
        </div>
        <div className="px-2 md:px-0">
          {media_type === "image" ? (
            <>
              <img src={url} alt={title} width="300" />
              {copyright && (
                <figcaption className="italic">©{copyright}</figcaption>
              )}
            </>
          ) : (
            <iframe
              title={title}
              src={`${url}?autoplay=1&mute=1`}
              width="300"
              height="300"
            ></iframe>
          )}
        </div>
        <div className="mt-6 px-4 text-left">
          <p>{explanation}</p>
        </div>
      </div>
    );
  }
};

export default DisplayFar;
