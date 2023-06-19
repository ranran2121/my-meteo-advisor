import { createContext, useState, useEffect } from "react";
import SidebarFar from "../components/FarAndBeyond/SidebarFar";
import Message from "../components/Message";
import DisplayFar from "../components/FarAndBeyond/DisplayFar";
import Error from "../components/Error";

export const FarContext = createContext(null);

const FarAndBeyond = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data || error) {
      document
        .getElementById("far-display")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <FarContext.Provider value={{ data, setData, error, setError }}>
      <div className="flex flex-col md:flex md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <SidebarFar setData={setData} setError={setError} />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="far-display">
          {!data && !error && <Message />}
          {data && <DisplayFar />}
          {error && <Error />}
        </div>
      </div>
    </FarContext.Provider>
  );
};

export default FarAndBeyond;
