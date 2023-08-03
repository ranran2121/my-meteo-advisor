import React, { useContext } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import { format } from "date-fns";
import Error from "../Error";

const DisplayFar = () => {
  const { data, error } = useContext(FarContext);

  if (error) {
    return <Error />;
  }

  if (data && data.from === "beyond") {
    const { title, url, explanation, copyright, date, media_type } = data.data;
    return (
      <div
        className="text-center flex flex-col items-center mb-4"
        id="display-far"
      >
        <div className="py-4 px-4">
          <h2 className="text-color1 text-2xl font-bold">
            The picture of the day {format(new Date(date), "dd-MM-yyyy")}
          </h2>
          <h1 className="mt-4 text-color2 font-extrabold text-3xl">{title}</h1>
        </div>
        <div className="px-2 md:px-0">
          {media_type === "image" ? (
            <>
              <img src={url} alt={title} width="300" />
              {copyright && (
                <figcaption className="italic">©{copyright}</figcaption>
              )}
            </>
          ) : (
            <iframe
              title={title}
              src={`${url}?autoplay=1&mute=1`}
              width="300"
              height="300"
            ></iframe>
          )}
        </div>
        <div className="mt-6 px-4 text-left">
          <p>{explanation}</p>
        </div>
      </div>
    );
  }
};

export default DisplayFar;
