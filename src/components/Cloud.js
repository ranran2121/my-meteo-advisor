import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Cloud = ({ src, text, link, alt, left }) => {
  return (
    <div className={`flex flex-row mt-6 w-full ${left ? "justify-end" : ""}`}>
      <div
        className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-white flex flex-row items-center hover:border-2 hover:border-emerald-400 hover:border-dotted 
     hover:scale-110 shadow-2xl"
      >
        <div className="basis-1/3">
          <img
            src={src}
            width="120px"
            height="80px"
            alt={alt}
            className="pl-4 md:pl-6"
          />
        </div>
        <div className="basis-2/3 px-2 text-blue-900 text-md md:text-lg">
          <p className="inline">{text}</p>
          <Link to={link}>
            <ArrowRightIcon className="h-6 w-6 ml-4 inline text-emerald-400 animate-pulse hover:scale-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
