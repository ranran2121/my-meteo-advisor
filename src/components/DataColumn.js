import React from "react";

const DataColumn = ({ data }) => {
  console.log("DATA", data);
  const { dt_txt, main, wind, weather } = data;
  return (
    <div className="flex flex-col border-2 border-blue-900 rounded-xl text-blue-900 px-3">
      <p className="displayColEntry border-b-2 border-blue-900 font-bold">
        {dt_txt.split(" ")[0]}
      </p>
      <div className="displayColEntry border-b-2 border-blue-900">
        {main.temp.toFixed(1)}
      </div>
      <div className="displayColEntry border-b-2 border-blue-900">
        {main.feels_like.toFixed(1)}
      </div>
      <div className="displayColEntry border-b-2 border-blue-900">
        {weather[0].main}
      </div>
      <div className="displayColEntry">{wind.speed.toFixed(1)}</div>
    </div>
  );
};

export default DataColumn;
