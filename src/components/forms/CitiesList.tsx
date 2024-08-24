import React from "react";
import { CityType } from "../../types";

type Props = {
  cities: CityType[];
  setLocationIndex: (index: number) => void;
  locationIndex: number | null;
  invalidInput: string;
  name: string;
};

const CitiesList = ({
  cities,
  setLocationIndex,
  locationIndex,
  invalidInput,
  name,
}: Props) => {
  return (
    <>
      <ul className="mt-4">
        {cities?.map((city: CityType, index: number) => {
          const { state, name } = city;

          return (
            <li key={state + name + index}>
              <input
                type="radio"
                id={name + state + index}
                name={name}
                value={index}
                checked={index === locationIndex}
                onChange={(e) => {
                  const i = Number(e.target.value);
                  setLocationIndex(i);
                }}
              />
              <label htmlFor={name + state + index} className="ml-2">
                {name}, {state}
              </label>
            </li>
          );
        })}
      </ul>
      {invalidInput && <span className="input-error">{invalidInput}</span>}
    </>
  );
};

export default CitiesList;
