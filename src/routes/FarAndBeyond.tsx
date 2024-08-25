import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SidebarFar from "../components/FarAndBeyond/SidebarFar";
import Message from "../components/Message";
import DisplayFar from "../components/FarAndBeyond/DisplayFar";
import Error from "../components/Error";
import { IFarContext } from "../types";
import { fetchMarsWeather } from "../utils";

export const FarContext = createContext<Partial<IFarContext>>({});

const FarAndBeyond = () => {
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);

  const { data, error, refetch } = useQuery({
    queryKey: ["mars"],
    queryFn: () => fetchMarsWeather(),
    retry: false,
    enabled: isQueryEnabled,
  });

  const handleClick = () => {
    setIsQueryEnabled(true); // Enable the query when the button is clicked
    refetch(); // Optionally refetch if the query does not run automatically when enabled
  };

  useEffect(() => {
    if (data || error) {
      document
        .getElementById("far-display")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <FarContext.Provider
      value={{
        data,
        error,
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarFar handleClick={handleClick} />
        </div>
        <div
          className="md:basis-3/4 h-full md:h-screen self-center"
          id="far-display"
        >
          {!data && !error && <Message />}
          {error && <Error />}
          {data && !error && <DisplayFar />}
        </div>
      </div>
    </FarContext.Provider>
  );
};

export default FarAndBeyond;
