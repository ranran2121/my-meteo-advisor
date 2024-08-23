import { format } from "date-fns";
import axios from "axios";
import { WEATHER_API_BASEURL } from "./constants";

export const findIndex = (): number => {
  const today = new Date();
  const t = format(today, "yyyy-MM-dd");
  const [year, month, day] = t.split("-");
  const tomorrow = new Date(
    Number(year),
    Number(month) - 1,
    Number(day) + 1,
    12
  );

  const diff = tomorrow.getTime() - today.getTime();
  const index = Math.floor(diff / (60 * 60 * 3 * 1000));

  return index + 1;
};

export const hasValidCoordinates = (lat: string | null, lon: string | null) => {
  if (lat === null || lon === null || lat === "" || lon === "") {
    return false;
  }

  return (
    !isNaN(Number(lat)) &&
    !isNaN(Number(lon)) &&
    isFinite(Number(lat)) &&
    isFinite(Number(lon))
  );
};

export const fetchCities = async (location: string | null) => {
  if (!location) return null;
  try {
    const URL = `${WEATHER_API_BASEURL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const response = await axios.get(URL);
    if (response.data.length === 0) {
      throw new Error("No cities found");
    }
    return response.data;
  } catch (e) {
    throw new Error("No cities found");
  }
};

export const fetchWeather = async ({
  lat,
  lon,
}: {
  lat: string | null;
  lon: string | null;
}) => {
  if (!lat || !lon) return null;

  try {
    const URL = `${WEATHER_API_BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    throw new Error("no data available");
  }
};
