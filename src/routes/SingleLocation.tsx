import React, { createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/single/Sidebar";
import { useSearchParams } from "react-router-dom";
import Message from "../components/Message";
import Error from "../components/Error";
import Display from "../components/single/Display";
import { ISingleContext } from "../types";
import { fetchCities, fetchWeather } from "../utils";

export const SingleContext = createContext<Partial<ISingleContext>>({});

const SingleLocation = () => {
  let [searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const loc = searchParams.get("loc");

  const {
    data: cities,
    error: citiesError,
    //isPending: cities1IsPending,
  } = useQuery({
    queryKey: ["cities", loc],
    queryFn: () => fetchCities(loc),
    retry: false,
    enabled: !!loc, // only fetch if loc1 is defined
  });

  const {
    data: weather,
    error: weatherError,
    //isPending: weather1IsPending,
  } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather({ lat: lat, lon: lon }),
    enabled: !!lat && !!lon, // only fetch if lat1 and lon1 are defined
  });

  useEffect(() => {
    if (weather || weatherError) {
      document
        .getElementById("display")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [weather, weatherError]);

  return (
    <SingleContext.Provider
      value={{
        cities,
        weather,
        citiesError,
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <Sidebar />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="display">
          {!weather && !weatherError && <Message />}
          {weatherError && <Error />}
          {!weatherError && weather && <Display />}
        </div>
      </div>
    </SingleContext.Provider>
  );
};

export default SingleLocation;
