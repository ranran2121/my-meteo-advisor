import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { SingleContext } from "../routes/SingleLocation";
import Display from "./single/Display";
import Error from "./Error";
import DisplayFar from "./FarAndBeyond/DisplayFar";
import Message from "./Message";
import DisplayComp from "./compare/DisplayComp";

const DisplayContainer = () => {
  const { error, data: singleData } = useContext(SingleContext);
  console.log("DATA", singleData);
  let { pathname } = useLocation();
  return (
    <div className="flex-wrap py-8 px-1 md:p-8 mx-auto">
      {!singleData && !error && <Message />}
      {singleData && pathname === "/single-location" && <Display />}
      {/* {data && page === "compare" && <DisplayComp data={data} />}
      {data && page === "far" && <DisplayFar data={data} />} */}
      {error && <Error />}
    </div>
  );
};

export default DisplayContainer;
