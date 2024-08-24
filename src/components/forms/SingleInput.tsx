import React from "react";

type Props = {
  label: string;
  value: string;
  setInvalidInput: (input: string) => void;
  setLocation: (input: string) => void;
  invalidInput: string;
};

const SingleInput = ({
  label,
  value,
  setInvalidInput,
  setLocation,
  invalidInput,
}: Props) => {
  return (
    <>
      <label
        className="my-4 text-color4 font-semibold"
        htmlFor="search-location"
      >
        {label}
      </label>
      <input
        className="px-4 py-2 rounded-full capitalize text-color1"
        id="search-location"
        aria-label="Search location"
        placeholder="Search"
        type="search"
        value={value}
        onChange={(e) => {
          setInvalidInput("");
          setLocation(e.target.value);
        }}
      />
      {invalidInput && <span className="input-error">{invalidInput}</span>}
    </>
  );
};

export default SingleInput;
