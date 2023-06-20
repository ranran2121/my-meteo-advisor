import { createContext, useState, useEffect } from "react";
import Sidebar from "../components/single/Sidebar";
import { Outlet } from "react-router-dom";

export const SingleContext = createContext(null);

const SingleLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data || error) {
      document.getElementById("display").scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <SingleContext.Provider
      value={{ data, setData, error, setError, isLoading, setIsLoading }}
    >
      <div className="flex flex-col md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <Sidebar />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="display">
          <Outlet />
          {/* {!data && !error && <Message />}
          {data && <Display />}
          {error && <Error />} */}
        </div>
      </div>
    </SingleContext.Provider>
  );
};

export default SingleLocation;
