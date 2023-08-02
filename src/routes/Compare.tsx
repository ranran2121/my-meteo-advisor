import { createContext, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarComp from "../components/compare/SidebarComp";
import Message from "../components/Message";
import Error from "../components/Error";
import DisplayComp from "../components/compare/DisplayComp";
import { WEATHER_API_BASEURL } from "../constants";
import axios from "axios";
import {
  ICompareContext,
  CompareDataType,
  CitiesType,
  CityType,
} from "../types";

export const CompareContext = createContext<Partial<ICompareContext>>({});

const Compare = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const lat1 = searchParams.get("lat1");
  const lon1 = searchParams.get("lon1");
  const lat2 = searchParams.get("lat2");
  const lon2 = searchParams.get("lon2");
  const loc1 = searchParams.get("loc1");
  const loc2 = searchParams.get("loc2");

  const [data, setData] = useState<CompareDataType | null>(null);
  const [error, setError] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CitiesType | null>(null);
  const [location1, setLocation1] = useState(loc1 ?? "");
  const [location2, setLocation2] = useState(loc2 ?? "");

  const loaderLoc = useCallback(async () => {
    if (!lat1 || !lat2 || !lon1 || !lon2) {
      setIsLoading(false);
      return;
    }
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
  }, [lat1, lat2, lon1, lon2]);

  useEffect(() => {
    if (lat1 && lon1 && lat2 && lon2) {
      loaderLoc();
    } else {
      setData(null);
    }
  }, [lat1, lon1, lat2, lon2, isLoading, loaderLoc]);

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

      setCities({ cities1, cities2 });
    } catch (e) {
      setErrorSearch(true);
    } finally {
      setIsLoading(false);
    }
  }, [location1, location2, setCities, setErrorSearch, setIsLoading]);

  useEffect(() => {
    if (loc1 && loc2) {
      loaderCities();
    } else {
      setData(null);
    }
  }, [loaderCities, loc1, loc2]);

  useEffect(() => {
    if (data || error || errorSearch) {
      document
        .getElementById("comp-display")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error, errorSearch]);

  return (
    <CompareContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
        errorSearch,
        setErrorSearch,
        searchParams,
        setSearchParams,
        cities,
        setCities,
        location1,
        setLocation1,
        location2,
        setLocation2,
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarComp />
        </div>
        <div className="md:basis-3/4 h-full self-center mb-4" id="comp-display">
          {!data && !error && !errorSearch && <Message />}
          {errorSearch && <Error />}
          {!errorSearch && data && <DisplayComp />}
        </div>
      </div>
    </CompareContext.Provider>
  );
};

export default Compare;
