import { createContext, useState, useEffect } from "react";
import Sidebar from "../components/single/Sidebar";
import Message from "../components/Message";
import Display from "../components/single/Display";
import Error from "../components/Error";

export const SingleContext = createContext(null);

const SingleLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data || error) {
      document.getElementById("display").scrollIntoView({ behavior: "smooth" });
    }
  }, [data, error]);

  return (
    <SingleContext.Provider value={{ data, setData, error, setError }}>
      <div className="flex flex-col md:flex-row md:h-screen ">
        <div className="md:basis-1/4">
          <Sidebar />
        </div>
        <div className="md:basis-3/4 h-full self-center" id="display">
          {!data && !error && <Message />}
          {data && <Display />}
          {error && <Error />}
        </div>
      </div>
    </SingleContext.Provider>
  );
};

export default SingleLocation;
