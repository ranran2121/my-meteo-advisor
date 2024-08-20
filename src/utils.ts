import { format } from "date-fns";

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
