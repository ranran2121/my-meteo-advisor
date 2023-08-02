import { useState, useContext, useEffect, useCallback } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import SearchLocation from "./SearchLocation";
import SelectLocation from "./SelectLocation";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";

const LocationForm = () => {
  const [cities, setCities] = useState(null);
  const { setIsLoading, setData, setError, searchParams } =
    useContext(SingleContext);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const loaderLoc = useCallback(async () => {
    try {
      const URL = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const forecast = await axios.get(URL);

      setData(forecast.data);
    } catch (e) {
      setData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [lat, lon, setData, setError, setIsLoading]);

  useEffect(() => {
    if (lat && lon) {
      loaderLoc();
    } else {
      setData(null);
    }
  }, [lat, loaderLoc, lon, setData]);

  return (
    <>
      {!cities && <SearchLocation setCities={setCities} />}
      {cities && <SelectLocation cities={cities} />}
    </>
  );
};

export default LocationForm;
