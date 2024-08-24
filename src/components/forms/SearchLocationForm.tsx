import React from "react";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  hasWeatherError: boolean;
  children: React.ReactNode; // Allow children components
};

const SearchLocationForm: React.FC<Props> = ({
  onSubmit,
  hasWeatherError,
  children,
}) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col justify-center">
      {children}

      {!hasWeatherError && (
        <button
          type="submit"
          className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color5"
        >
          search
        </button>
      )}
      {hasWeatherError && (
        <a
          href="/single-location"
          className="text-color4 font-semibold uppercase my-4 rounded-full py-2 bg-color3 text-center"
        >
          New Search
        </a>
      )}
    </form>
  );
};

export default SearchLocationForm;
