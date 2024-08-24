import React from "react";

type Props = {
  children: React.ReactNode;
  hasCities: boolean;
  onSubmit: (e: React.FormEvent) => void;
};

const SelectLocationForm = ({ children, hasCities, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col justify-center">
      {children}

      <button
        type="submit"
        className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
      >
        Search
      </button>

      {!hasCities ? (
        <a
          href="/single-location"
          className="text-color4 font-semibold uppercase my-2 rounded-full py-2 bg-color5 text-center"
        >
          Back
        </a>
      ) : (
        <a
          href="/single-location"
          className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color5 text-center"
        >
          New Search
        </a>
      )}
    </form>
  );
};

export default SelectLocationForm;
