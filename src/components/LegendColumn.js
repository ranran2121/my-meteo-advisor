import React from "react";

const LegendColumn = () => {
  return (
    <div className="flex flex-col rounded-xl text-white  bg-blue-900 px-1 border-2 border-blue-900">
      <p className="displayColEntry border-b-2 border-white font-bold">
        {" "}
        Date{" "}
      </p>
      <p className="displayColEntry border-b-2 border-white"> Temp (°C)</p>
      <p className="displayColEntry border-b-2 border-white"> Feel (°C)</p>
      <p className="displayColEntry border-b-2 border-white">
        Weather &nbsp;&nbsp;&nbsp;
      </p>
      <p className="displayColEntry"> Wind (kts)</p>
    </div>
  );
};

export default LegendColumn;
