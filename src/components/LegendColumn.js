import React from "react";

const LegendColumn = () => {
  return (
    <div className="flex flex-col rounded-xl text-color4  bg-color1 px-1 md:px-3 border-2 border-color1">
      <div className="displayColEntry border-b-2 border-color4 font-bold">
        Date
      </div>
      <div className="displayColEntry border-b-2 border-color4"> Temp (°C)</div>
      <div className="displayColEntry border-b-2 border-color4"> Feel (°C)</div>
      <div className="displayColEntry border-b-2 border-color4">Wind (kts)</div>
      <div className="pt-14 pb-4 h-40">Weather</div>
    </div>
  );
};

export default LegendColumn;
