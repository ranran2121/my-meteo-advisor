import { useState } from "react";
import SidebarFar from "../components/FarAndBeyond/SidebarFar";
import DisplayContainer from "../components/DisplayContainer";

const FarAndBeyond = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col md:flex md:flex-row h-screen ">
      <div className="md:basis-1/4">
        <SidebarFar setData={setData} setError={setError} />
      </div>
      <div className="md:basis-3/4 h-full self-center">
        <DisplayContainer data={data} error={error} page="far" />
      </div>
    </div>
  );
};

export default FarAndBeyond;
