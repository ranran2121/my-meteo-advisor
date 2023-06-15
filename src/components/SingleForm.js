import React from "react";

const SingleForm = () => {
  return (
    <div className="px-4 pt-2 md:pt-10 flex flex-col justify-center">
      <label
        className="my-4 text-white font-semibold"
        htmlFor="search-location"
      >
        Name
      </label>
      <input
        className="px-4 py-2 rounded-full"
        id="search-location"
        aria-label="Search location"
        placeholder="Search"
        type="search"
        name="q"
      />
      <button className="text-white font-semibold uppercase my-4 rounded-full px-4 py-2 bg-blue-400">
        search
      </button>
    </div>
  );
};

export default SingleForm;
