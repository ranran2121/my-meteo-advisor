import { createContext, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarFar from "../components/FarAndBeyond/SidebarFar";
import Message from "../components/Message";

export const FarContext = createContext(null);

const FarAndBeyond = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (data || error) {
      document
        .getElementById("far-display")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <FarContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
        pathname,
      }}
    >
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarFar />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="far-display">
          {!data && !error && <Message />}
          <Outlet />
        </div>
      </div>
    </FarContext.Provider>
  );
};

export default FarAndBeyond;
