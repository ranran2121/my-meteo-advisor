import React from "react";

const SingleBlock = ({ cityName }: { cityName: string }) => {
  return (
    <div className="flex flex-col rounded-xl text-color4  bg-color1 px-1 md:px-3 border-2 border-color1">
      <div className="displayColEntry font-bold uppercase text-sm">
        {cityName}
      </div>
    </div>
  );
};

export default SingleBlock;
