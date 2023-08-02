import { createContext, useState, useEffect } from "react";
import Sidebar from "../components/single/Sidebar";
import { useSearchParams } from "react-router-dom";
import Message from "../components/Message";
import Error from "../components/Error";
import Display from "../components/single/Display";
import { ISingleContext } from "../types";

export const SingleContext = createContext<Partial<ISingleContext>>({});

const SingleLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (data || error || errorSearch) {
      document
        .getElementById("display")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error, errorSearch]);

  return (
    <SingleContext.Provider
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
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <Sidebar />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="display">
          {!data && !error && !errorSearch && <Message />}
          {errorSearch && <Error />}
          {!errorSearch && data && <Display />}
        </div>
      </div>
    </SingleContext.Provider>
  );
};

export default SingleLocation;
