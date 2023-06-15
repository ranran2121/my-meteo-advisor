import React from "react";

const LegendColumn = () => {
  return (
    <div className="flex flex-col rounded-xl text-white  bg-blue-900 px-1 md:px-3 border-2 border-blue-900">
      <div className="displayColEntry border-b-2 border-white font-bold">
        Date
      </div>
      <div className="displayColEntry border-b-2 border-white"> Temp (°C)</div>
      <div className="displayColEntry border-b-2 border-white"> Feel (°C)</div>
      <div className="displayColEntry border-b-2 border-white">Wind (kts)</div>
      <div className="pt-14 pb-4 h-40">Weather</div>
    </div>
  );
};

export default LegendColumn;
