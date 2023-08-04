import React, { useState, useContext, useEffect, useCallback } from "react";
import { CompareContext } from "../../routes/Compare";
import SearchLocationComp from "../compare/SearchLocationComp";
import SelectLocationComp from "../compare/SelectLocationComp";
import { WEATHER_API_BASEURL } from "../../constants";
import axios from "axios";
import { CityType } from "../../types";

const LocationFormComp = () => {
  const { setIsLoading, setData, setError, searchParams, setErrorSearch } =
    useContext(CompareContext);
  const lat1 = searchParams.get("lat1");
  const lon1 = searchParams.get("lon1");
  const lat2 = searchParams.get("lat2");
  const lon2 = searchParams.get("lon2");
  const location1 = searchParams.get("loc1");
  const location2 = searchParams.get("loc2");
  const state1 = searchParams.get("state1");
  const state2 = searchParams.get("state2");

  const [cities1, setCities1] = useState<CityType[] | null>(null);
  const [cities2, setCities2] = useState<CityType[] | null>(null);
  const [location1Index, setLocation1Index] = useState<number | null>(null);
  const [location2Index, setLocation2Index] = useState<number | null>(null);

  const loaderCities = useCallback(async () => {
    try {
      const URL1 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location1}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp1 = await axios.get(URL1);

      if (resp1.data.length === 0) {
        setErrorSearch(true);
        return;
      }

      const first1 = resp1.data.shift();
      const cities1 = resp1.data.filter((city: CityType) => {
        return city.state !== first1.state;
      });
      cities1.unshift(first1);

      const URL2 = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location2}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp2 = await axios.get(URL2);

      if (resp2.data.length === 0) {
        setErrorSearch(true);
        return;
      }

      const first2 = resp2.data.shift();
      const cities2 = resp2.data.filter((city: CityType) => {
        return city.state !== first2.state;
      });
      cities2.unshift(first2);

      setCities1(cities1);
      setCities2(cities2);
    } catch (e) {
      setErrorSearch(true);
    } finally {
      setIsLoading(false);
    }
  }, [location1, location2, setErrorSearch, setIsLoading]);

  const loaderLoc = useCallback(async () => {
    try {
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
  }, [lat1, lat2, lon1, lon2, setData, setError, setIsLoading]);

  const findLocationIndex = (cities: CityType[], state: string) => {
    let ind = 0;
    cities?.forEach((city, index) => {
      if (city.state === state) {
        ind = index;
      }
    });
    return ind;
  };

  useEffect(() => {
    if (cities1) {
      const index1 = findLocationIndex(cities1, state1);
      setLocation1Index(index1);
    }
  }, [cities1, state1]);

  useEffect(() => {
    if (cities2) {
      const index2 = findLocationIndex(cities2, state2);
      setLocation2Index(index2);
    }
  }, [cities2, state2]);

  useEffect(() => {
    if (lat1 && lon1 && lat2 && lon2) {
      loaderCities();
      loaderLoc();
    } else if (location1 && location2) {
      loaderCities();
    } else {
      setData(null);
    }
  }, [
    lat1,
    lat2,
    loaderCities,
    loaderLoc,
    location1,
    location2,
    lon1,
    lon2,
    setData,
  ]);

  return (
    <>
      {(location1 && location2) || (lat1 && lat2) ? (
        <SelectLocationComp
          cities1={cities1}
          cities2={cities2}
          location1Index={location1Index}
          location2Index={location2Index}
        />
      ) : (
        <SearchLocationComp />
      )}
    </>
  );
};

export default LocationFormComp;
