import React from "react";
import LegendColumn from "../LegendColumn";
import DataColumn from "../DataColumn";
import { findIndex } from "../../utils";
import { useContext } from "react";
import { SingleContext } from "../../routes/SingleLocation";
import Error from "../Error";

const Display = () => {
  const { data, error } = useContext(SingleContext);
  const i = findIndex();

  if (error) {
    return <Error />;
  }

  return (
    <div className="text-center flex flex-col items-center mb-4">
      <div className="py-4 px-4">
        <h2 className="text-color1 text-2xl font-bold">
          This is the weather forecast for
        </h2>
        <h1 className="mt-4 text-color2 font-extrabold text-3xl">
          {data.city.name}
        </h1>
      </div>

      <div className="border-b-2 border-color1 w-[70%] my-4 md:my-6"></div>

      <div className="mt-6 md:mt-10 flex flex-row gap-1 lg:gap-2 px-1 md:px-0">
        <div className="basis-1/4">
          <LegendColumn />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[i]} />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[i + 8]} />
        </div>
        <div className="basis-1/4">
          <DataColumn data={data.list[i + 16]} />
        </div>
      </div>
    </div>
  );
};

export default Display;
