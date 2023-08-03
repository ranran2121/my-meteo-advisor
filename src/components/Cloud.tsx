import { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { CloudType } from "../types";

const Cloud: FC<CloudType> = ({ src, text, link, alt, left }) => {
  return (
    <div
      className={`cloud relative 
     hover:scale-110 shadow-2xl ${left ? "self-end" : ""} mb-20 md:mb-0`}
    >
      <div className="absolute top-16 left-0 md:top-12 md:left-6 flex flex-row z-10">
        <img
          src={src}
          alt={alt}
          className="pl-4 md:pl-6 basis-1/4 w-[100px] h-[60px] md:w-[120px] md:h-[80px]"
        />
        <div className="basis-3/4 text-color1 text-sm md:text-lg ml-4 px-2">
          <p className="inline">{text}</p>
          <Link to={link}>
            <ArrowRightIcon className="h-6 w-6 ml-4 inline text-color5 animate-pulse hover:scale-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
