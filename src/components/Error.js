import React from "react";
import storm from "../assets/storm.jpeg";

const Error = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="py-4 px-4 text-xl md:text-3xl">
        <h2 className="text-blue-900  font-bold">Data are not available</h2>
        <h2 className="text-blue-900 font-bold">or</h2>
        <h2 className="text-blue-900 font-bold">the service is down</h2>
      </div>
      <img src={storm} alt="storm-icon" />
    </div>
  );
};

export default Error;
