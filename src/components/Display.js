import React from "react";
import LegendColumn from "./LegendColumn";
import DataColumn from "./DataColumn";

const Display = ({ data }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="py-4 px-4">
        <h2 className="text-blue-900 text-2xl font-bold">
          This is the weather forecast for
        </h2>
        <h1 className="mt-4 text-blue-500 font-extrabold text-3xl">
          {data.city.name}
        </h1>
      </div>

      <div className="border-b-2 border-blue-900 w-[70%] my-4 md:my-6"></div>

      <div className="mt-6 md:mt-10 flex flex-row gap-1 lg:gap-2">
        <div className="basis-1/4">
          <LegendColumn />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[5]} />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[13]} />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[21]} />
        </div>
      </div>
    </div>
  );
};

export default Display;
