import { useContext } from "react";
import { AppContext } from "../routes/Root";
import Display from "./single/Display";
import Error from "./Error";
import DisplayFar from "./FarAndBeyond/DisplayFar";
import Message from "./Message";
import DisplayComp from "./compare/DisplayComp";

const DisplayContainer = ({ page }) => {
  const { data, error } = useContext(AppContext);
  return (
    <div className="flex-wrap py-8 px-1 md:p-8 mx-auto">
      {!data && !error && <Message />}
      {data && page === "single" && <Display data={data} />}
      {data && page === "compare" && <DisplayComp data={data} />}
      {data && page === "far" && <DisplayFar data={data} />}
      {error && <Error />}
    </div>
  );
};

export default DisplayContainer;
