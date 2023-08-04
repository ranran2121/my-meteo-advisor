import React, { useState, useContext, useEffect, useCallback } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import SearchLocation from "./SearchLocation";
import SelectLocation from "./SelectLocation";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import { CityType } from "../../types";

const LocationForm = () => {
  const { setIsLoading, setData, setError, searchParams, setErrorSearch } =
    useContext(SingleContext);
  const location = searchParams.get("loc");
  const state = searchParams.get("state");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const [cities, setCities] = useState<CityType[] | null>(null);
  const [locationIndex, setLocationIndex] = useState<number | null>(null);

  const loaderCities = useCallback(async () => {
    try {
      const URL = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp = await axios.get(URL);

      if (resp.data.length === 0) {
        throw new Error("error");
      }

      const first = resp.data.shift();
      const cities = resp.data.filter((city: CityType) => {
        return city.state !== first.state;
      });
      cities.unshift(first);

      setCities(cities);
    } catch (e) {
      setErrorSearch(true);
    } finally {
      setData(null);
      setIsLoading(false);
    }
  }, [location, setData, setErrorSearch, setIsLoading]);

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

  const findLocationIndex = useCallback(() => {
    let ind = 0;
    cities?.forEach((city, index) => {
      if (city.state === state) {
        ind = index;
      }
    });
    return ind;
  }, [state]);

  useEffect(() => {
    if (lat && lon) {
      loaderCities();
      const index = findLocationIndex();
      setLocationIndex(index);
      loaderLoc();
    } else if (location) {
      loaderCities();
    } else {
      setData(null);
    }
  }, [findLocationIndex, lat, loaderCities, loaderLoc, location, lon, setData]);

  return (
    <>
      {location || lat ? (
        <SelectLocation cities={cities} locationIndex={locationIndex} />
      ) : (
        <SearchLocation setCities={setCities} />
      )}
    </>
  );
};

export default LocationForm;
