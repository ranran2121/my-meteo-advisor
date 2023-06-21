import { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarComp from "../components/compare/SidebarComp";
import Message from "../components/Message";
import Error from "../components/Error";
import DisplayComp from "../components/compare/DisplayComp";

export const CompareContext = createContext(null);

const Compare = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (data || error || errorSearch) {
      document
        .getElementById("comp-display")
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
      }}
    >
      <div className="flex flex-col md:flex md:flex-row lg:h-screen ">
        <div className="md:basis-1/4">
          <SidebarComp />
        </div>
        <div className="md:basis-3/4 h-full self-center mb-4" id="comp-display">
          {!data && !error && !errorSearch && <Message />}
          {errorSearch && <Error />}
          {!errorSearch && <DisplayComp />}
        </div>
      </div>
    </CompareContext.Provider>
  );
};

export default Compare;
