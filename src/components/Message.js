import React from "react";
import sun from "../assets/sun.png";

const Message = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="py-4 px-4 text-xl md:text-3xl">
        <h2 className="text-blue-900  font-bold">Start your search</h2>
        <h2 className="text-blue-900 font-bold">for</h2>
        <h2 className="text-blue-900 font-bold">your favourite location</h2>
      </div>
      <img src={sun} alt="sun-icon" />
    </div>
  );
};

export default Message;
