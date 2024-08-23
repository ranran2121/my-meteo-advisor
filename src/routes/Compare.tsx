import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import SidebarComp from "../components/compare/SidebarComp";
import Message from "../components/Message";
import Error from "../components/Error";
import DisplayComp from "../components/compare/DisplayComp";
import { ICompareContext, CompareDataType } from "../types";
import { fetchCities, fetchWeather } from "../utils";

export const CompareContext = createContext<Partial<ICompareContext>>({});

const Compare = () => {
  const [data, setData] = useState<CompareDataType | null>(null);
  const [errorSearch, setErrorSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let [searchParams] = useSearchParams();

  const lat1 = searchParams.get("lat1");
  const lon1 = searchParams.get("lon1");
  const lat2 = searchParams.get("lat2");
  const lon2 = searchParams.get("lon2");
  const loc1 = searchParams.get("loc1");
  const loc2 = searchParams.get("loc2");

  const {
    data: cities1,
    error: cities1Error,
    //isPending: cities1IsPending,
  } = useQuery({
    queryKey: ["cities", loc1],
    queryFn: () => fetchCities(loc1),
    retry: false,
    enabled: !!loc1, // only fetch if loc1 is defined
  });

  const {
    data: cities2,
    error: cities2Error,
    //isPending: cities2IsPending,
  } = useQuery({
    queryKey: ["cities", loc2],
    queryFn: () => fetchCities(loc2),
    retry: false,
    enabled: !!loc2, // only fetch if loc2 is defined
  });

  const {
    data: weather1,
    error: weather1Error,
    //isPending: weather1IsPending,
  } = useQuery({
    queryKey: ["weather", lat1, lon1],
    queryFn: () => fetchWeather({ lat: lat1, lon: lon1 }),
    enabled: !!lat1 && !!lon1, // only fetch if lat1 and lon1 are defined
  });

  const {
    data: weather2,
    error: weather2Error,
    // isPending: weather2IsPending,
  } = useQuery({
    queryKey: ["weather", lat2, lon2],
    queryFn: () => fetchWeather({ lat: lat2, lon: lon2 }),
    enabled: !!lat2 && !!lon2, // only fetch if lat2 and lon2 are defined
  });

  useEffect(() => {
    if (weather1Error || weather2Error) {
      setErrorSearch(true);
    }

    if (weather1 && weather2) {
      setData({ weather1, weather2 });
    }
  }, [weather1, weather1Error, weather2, weather2Error]);

  useEffect(() => {
    if (data || errorSearch) {
      document
        .getElementById("comp-display")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, errorSearch]);

  return (
    <CompareContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        errorSearch,
        setErrorSearch,
        cities1,
        cities2,
        weather1,
        weather2,
        cities1Error,
        cities2Error,
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarComp />
        </div>
        <div className="md:basis-3/4 h-full self-center mb-4" id="comp-display">
          {!data && !errorSearch && <Message />}
          {errorSearch && <Error />}
          {!errorSearch && data && <DisplayComp />}
        </div>
      </div>
    </CompareContext.Provider>
  );
};

export default Compare;
