import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import LegendColumn from "../LegendColumn";
import DataColumn from "../DataColumn";
import SingleBlock from "../SingleBlock";
import { CompareContext } from "../../routes/Compare";
import { findIndex } from "../../utils";
import Error from "../Error";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";

const DisplayComp = () => {
  const [hasWinner, setHasWinner] = useState("");
  const { data, error, isLoading, setIsLoading, setData, setError } =
    useContext(CompareContext);

  let { lat1, lon1, lat2, lon2 } = useParams();
  const i = findIndex();

  const handleOnclick = () => {
    const l1points = givePoints(data.forecast1.list[i]);
    const l2points = givePoints(data.forecast2.list[i]);

    if (l1points >= l2points) {
      setHasWinner(data.forecast1.city.name);
    } else {
      setHasWinner(data.forecast2.city.name);
    }
  };

  const loaderLoc = async () => {
    try {
      //call openwathermap geolocation api to retrieve lat&lon coordinates
      const URL1 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat1}&lon=${lon1}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast1 = await axios.get(URL1);

      const URL2 = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat2}&lon=${lon2}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast2 = await axios.get(URL2);

      setData({ forecast1: forecast1.data, forecast2: forecast2.data });
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (lat1 && lon1 && lat2 && lon2) {
      loaderLoc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat1, lon1, lat2, lon2, isLoading]);

  if (error) {
    return <Error />;
  }

  if (data) {
    return (
      <div className="text-center flex flex-col items-center">
        <div className="p4">
          <h2 className="text-color1 text-2xl font-bold">
            This is the weather forecast for
          </h2>
          <h1 className="mt-2 text-color2 font-extrabold text-3xl">
            {data.forecast1.city.name}
          </h1>
          <h2 className="text-color1 text-2xl font-bold mt-2">vs</h2>
          <h1 className="mt-2 text-color2 font-extrabold text-3xl">
            {data.forecast2.city.name}
          </h1>
        </div>

        <div className="border-b-2 border-color1 w-[70%] my-4"></div>

        <div className="mt-4">
          <div className="flex flex-row gap-1 lg:gap-2">
            <div className="basis-1/3">
              <div className="flex flex-col rounded-xl  px-1 md:px-3 border-2 border-color4">
                <div className="displayColEntry font-bold uppercase text-sm"></div>
              </div>
            </div>
            <div className="basis-1/3">
              <SingleBlock city={data.forecast1.city.name} />
            </div>
            <div className="basis-1/3">
              <SingleBlock city={data.forecast2.city.name} />
            </div>
          </div>

          <div className="mt-2 flex flex-row gap-1 lg:gap-2">
            <div className="basis-1/3">
              <LegendColumn />
            </div>
            <div className="basis-1/3">
              <DataColumn data={data.forecast1.list[i]} />
            </div>
            <div className="basis-1/3">
              <DataColumn data={data.forecast2.list[i]} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          {!hasWinner ? (
            <button
              type="button"
              className="bg-color1 rounded-full px-4 py-2 text-color4 uppercase"
              onClick={handleOnclick}
            >
              ...and the winner is?
            </button>
          ) : (
            <div className="text-color1 uppercase font-extrabold border-4 border-color1 bg-color5 px-4 py-2 rounded-full">
              {hasWinner}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default DisplayComp;

function givePoints(l) {
  const { clouds, main, wind } = l;
  const pointsHum = 100 - main.humidity;
  const pointsWind = 200 - wind.speed;
  const pointsClouds = 100 - clouds.all;
  let pointsFeel = main.feels_like;
  if (main.feels_like >= 30) {
    pointsFeel = 100 - main.feels_like;
  }
  return pointsHum + pointsWind + pointsClouds + pointsFeel;
}
