import { useContext, useEffect } from "react";
import { FarContext } from "../../routes/FarAndBeyond";
import { format } from "date-fns";

const DisplayFar = () => {
  const { data } = useContext(FarContext);
  const { title, url, explanation, copyright, date, media_type } = data.data;

  useEffect(() => {
    document
      .getElementById("display-far")
      .scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (data.from === "mars") {
    return <></>;
  }

  return (
    <div className="text-center flex flex-col items-center" id="display-far">
      <div className="py-4 px-4">
        <h2 className="text-color1 text-2xl font-bold">
          The picture of the day {format(new Date(date), "dd-MM-yyyy")}
        </h2>
        <h1 className="mt-4 text-color2 font-extrabold text-3xl">{title}</h1>
      </div>
      <div className="px-2 md:px-0">
        {media_type === "image" ? (
          <>
            <img src={url} alt={title} width="500" />
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
      <div className="mt-6 px-2">
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default DisplayFar;
