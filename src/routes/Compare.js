import { createContext, useState, useEffect } from "react";
import DisplayComp from "../components/compare/DisplayComp";
import SidebarComp from "../components/compare/SidebarComp";
import Message from "../components/Message";
import Error from "../components/Error";

export const CompareContext = createContext(null);

const Compare = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data || error) {
      document
        .getElementById("comp-display")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <CompareContext.Provider value={{ data, setData, error, setError }}>
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarComp />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="comp-display">
          {!data && !error && <Message />}
          {data && <DisplayComp />}
          {error && <Error />}
        </div>
      </div>
    </CompareContext.Provider>
  );
};

export default Compare;
