import { format } from "date-fns";

const DataColumn = ({ data }) => {
  const { dt_txt, main, wind, weather } = data;

  return (
    <div className="flex flex-col border-2 border-blue-900 rounded-xl text-blue-900 px-1 text-sm md:text-lg md:px-3">
      <div className="displayColEntry border-b-2 border-blue-900 font-bold">
        {format(new Date(dt_txt), "dd/MM/yy")}
      </div>
      <div className="displayColEntry border-b-2 border-blue-900">
        {main.temp.toFixed(1)}
      </div>
      <div className="displayColEntry border-b-2 border-blue-900">
        {main.feels_like.toFixed(1)}
      </div>
      <div className="displayColEntry border-b-2 border-blue-900">
        {wind.speed.toFixed(1)}
      </div>
      <div className="displayColEntry">{weather[0].main}</div>
      <div className="h-20 pl-2 md:pl-3">
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
    </div>
  );
};

export default DataColumn;
