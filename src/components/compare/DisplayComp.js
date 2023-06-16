import { useState } from "react";
import LegendColumn from "../LegendColumn";
import DataColumn from "../DataColumn";
import SingleBlock from "../SingleBlock";

const DisplayComp = ({ data }) => {
  const [hasWinner, setHasWinner] = useState("");
  const { forecast1, forecast2 } = data;

  const handleOnclick = () => {
    var l1points = 0;
    if (forecast1.list[5].clouds.all < forecast2.list[5].clouds.all) {
      l1points++;
    }
    if (forecast1.list[5].main.feels_like < forecast2.list[5].main.feels_like) {
      l1points++;
    }
    if (forecast1.list[5].main.humidity < forecast2.list[5].main.humidity) {
      l1points++;
    }
    if (forecast1.list[5].wind.speed < forecast2.list[5].wind.speed) {
      l1points++;
    }

    if (l1points >= 2) {
      setHasWinner(forecast1.city.name);
    }
    setHasWinner(forecast2.city.name);
  };

  return (
    <div className="text-center flex flex-col items-center">
      <div className="p4">
        <h2 className="text-blue-900 text-2xl font-bold">
          This is the weather forecast for
        </h2>
        <h1 className="mt-2 text-blue-500 font-extrabold text-3xl">
          {forecast1.city.name}
        </h1>
        <h2 className="text-blue-900 text-2xl font-bold mt-2">vs</h2>
        <h1 className="mt-2 text-blue-500 font-extrabold text-3xl">
          {forecast2.city.name}
        </h1>
      </div>

      <div className="border-b-2 border-blue-900 w-[70%] my-4"></div>

      <div className="mt-4">
        <div className="flex flex-row gap-1 lg:gap-2">
          <div className="basis-1/3">
            <div className="flex flex-col rounded-xl  px-1 md:px-3 border-2 border-white">
              <div className="displayColEntry font-bold uppercase text-sm">
                {" "}
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <SingleBlock city={forecast1.city.name} />
          </div>
          <div className="basis-1/3">
            <SingleBlock city={forecast2.city.name} />
          </div>
        </div>

        <div className="mt-2 flex flex-row gap-1 lg:gap-2">
          <div className="basis-1/3">
            <LegendColumn />
          </div>
          <div className="basis-1/3">
            <DataColumn data={forecast1.list[5]} />
          </div>
          <div className="basis-1/3">
            <DataColumn data={forecast2.list[5]} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        {!hasWinner ? (
          <button
            type="button"
            className="bg-blue-900 rounded-full px-4 py-2 text-white uppercase"
            onClick={handleOnclick}
          >
            ...and the winner is?
          </button>
        ) : (
          <div className="text-blue-900 uppercase font-extrabold border-4 border-blue-900 bg-yellow-400 px-4 py-2 rounded-full">
            {hasWinner}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayComp;
