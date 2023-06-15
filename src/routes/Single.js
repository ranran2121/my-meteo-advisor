import Sidebar from "../components/Sidebar";
import DisplayContainer from "../components/DisplayContainer";
import { useState } from "react";

const Single = () => {
  const [data, setData] = useState(null);

  return (
    <div className="flex flex-col md:flex md:flex-row h-screen ">
      <div className="md:basis-1/4">
        <Sidebar setData={setData} />
      </div>
      <div className="md:basis-3/4 h-full self-center">
        <DisplayContainer data={data} />
      </div>
    </div>
  );
};

export default Single;
