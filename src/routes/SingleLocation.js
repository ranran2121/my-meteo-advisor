import { createContext, useState } from "react";
import Sidebar from "../components/single/Sidebar";
import DisplayContainer from "../components/DisplayContainer";

export const SingleContext = createContext(null);

const SingleLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  return (
    <SingleContext.Provider value={{ data, setData, error, setError }}>
      <div className="flex flex-col md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <Sidebar />
        </div>
        <div className="md:basis-3/4 h-full self-center">
          <DisplayContainer />
        </div>
      </div>
    </SingleContext.Provider>
  );
};

export default SingleLocation;
