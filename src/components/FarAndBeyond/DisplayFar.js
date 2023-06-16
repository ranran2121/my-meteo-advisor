import { format } from "date-fns";

const DisplayFar = ({ data }) => {
  const { title, url, explanation, copyright, date } = data;

  return (
    <div className="text-center flex flex-col items-center">
      <div className="py-4 px-4">
        <h2 className="text-blue-900 text-2xl font-bold">
          The picture of the day {format(new Date(date), "dd-MM-yyyy")}
        </h2>
        <h1 className="mt-4 text-blue-500 font-extrabold text-3xl">{title}</h1>
      </div>

      <div className="px-2 md:px-0">
        <img src={url} alt={title} />
        <figcaption className="italic">©{copyright}</figcaption>
      </div>

      <div className="mt-6 px-2">
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default DisplayFar;
