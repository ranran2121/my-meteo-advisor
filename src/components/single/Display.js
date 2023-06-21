import LegendColumn from "../LegendColumn";
import DataColumn from "../DataColumn";
import { findIndex } from "../../utils";
import { useContext, useEffect } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import Error from "../Error";

const Display = () => {
  const {
    data,
    error,
    isLoading,
    setIsLoading,
    setData,
    setError,
    searchParams,
  } = useContext(SingleContext);

  const zip = searchParams.get("zipCode");
  const country = searchParams.get("countryCode");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const i = findIndex();

  const loaderZip = async () => {
    try {
      //call openwathermap geolocation api to retrieve lat&lon coordinates
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/zip?zip=${zip},${country.toUpperCase()}&limit=5&appid=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`;
      const city = await axios.get(URL);
      //use the lat&lon to retrieve forecast
      const { lat, lon } = city.data;
      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast = await axios.get(URL2);

      setData(forecast.data);
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loaderLoc = async () => {
    try {
      //call openwathermap geolocation api to retrieve lat&lon coordinates
      const URL = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast = await axios.get(URL);

      setData(forecast.data);
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (zip && country) {
      loaderZip();
    }
    if (lat && lon) {
      loaderLoc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zip, country, isLoading]);

  if (error) {
    return <Error />;
  }

  if (data) {
    return (
      <div className="text-center flex flex-col items-center">
        <div className="py-4 px-4">
          <h2 className="text-color1 text-2xl font-bold">
            This is the weather forecast for
          </h2>
          <h1 className="mt-4 text-color2 font-extrabold text-3xl">
            {data.city.name}
          </h1>
        </div>

        <div className="border-b-2 border-color1 w-[70%] my-4 md:my-6"></div>

        <div className="mt-6 md:mt-10 flex flex-row gap-1 lg:gap-2 px-1 md:px-0">
          <div className="basis-1/4">
            <LegendColumn />
          </div>
          <div className="basis-1/4">
            <DataColumn data={data.list[i]} />
          </div>
          <div className="basis-1/4">
            <DataColumn data={data.list[i + 8]} />
          </div>
          <div className="basis-1/4">
            <DataColumn data={data.list[i + 16]} />
          </div>
        </div>
      </div>
    );
  }
};

export default Display;
