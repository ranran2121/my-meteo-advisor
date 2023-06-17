import "../input.css";
import "../auroral.css";
import { HOMEPAGELIST } from "../constants";
import Cloud from "../components/Cloud";

const Home = () => {
  return (
    <div className="container">
      <div className="auroral-northern"></div>
      <div className="absolute p-4 md:px-24 flex flex-col w-full h-full">
        <h1
          className="text-emerald-300 text-center uppercase text-2xl md:text-3xl 
       font-extrabold mb-4"
        >
          Welcome
        </h1>
        <h2 className="text-color4 text-xl md:text-2xl text-center">
          Not the typical weather forecast website
        </h2>
        <h2 className="text-color4 text-xl md:text-2xl text-center">
          Take time to explore and find ...
        </h2>

        {HOMEPAGELIST.map((element) => {
          const { src, text, link, alt, left } = element;
          return (
            <Cloud
              key={alt}
              src={src}
              alt={alt}
              text={text}
              link={link}
              left={left}
            />
          );
        })}

        {/*  <Cloud
          src={ksun}
          alt="sunny"
          text="... what the weather is like in your favourite location"
          link="/single-location"
          left={false}
        />

        <Cloud
          src={kcloud}
          alt="cloudy"
          text="... where to find better weather if you you cannot make up between two locations"
          link="/compare-locations"
          left={true}
        />

        <Cloud
          src={kwind}
          alt="windy"
          text="... how weather forecast pioneers into the space"
          link="/far-and-beyond"
          left={false}
        /> */}
      </div>
    </div>
  );
};

export default Home;

/* const Home = () => {
  return (
    <div className="container">
      <div className="auroral-northern"></div>
      <div className="absolute p-4 md:px-24 flex flex-col w-full h-full">
        <h1
          className="text-emerald-300 text-center uppercase text-2xl md:text-3xl 
       font-extrabold mb-4"
        >
          Welcome
        </h1>
        <h2 className="text-color4 text-center">
          This is not the typical weather forecast website
        </h2>
        <h2 className="text-color4 text-center">
          Take time to explore and find ...
        </h2>

        <div className="flex flex-row mt-7 w-full">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-color4 flex flex-row items-center border-2 border-color5 hover:border-dotted shadow-2xl">
            <div className="basis-1/3">
              <img
                src={ksun}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-color1 text-md md:text-xl">
              ... what the weather is like in your favourite location{" "}
              <Link to="/single-location">
                <ArrowRightIcon className="h-6 w-6 text-color1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-7 w-full justify-end">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-color4 flex flex-row items-center border-2 border-color5 hover:border-dotted shadow-2xl">
            <div className="basis-1/3">
              <img
                src={kcloud}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-color1 text-md md:text-xl">
              ... where to find better weather if you you cannot make up between
              two locations
              <Link to="/compare-locations">
                <ArrowRightIcon className="h-6 w-6 text-color1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-7 w-full">
          <div className="w-full md:basis-1/2 rounded-[60px] md:rounded-full h-40 md:h-60 p-18 bg-color4 flex flex-row items-center border-2 border-color5 hover:border-dotted shadow-2xl">
            <div className="basis-1/3">
              <img
                src={kwind}
                width="120px"
                height="80px"
                alt="sun"
                className="pl-4 md:pl-6"
              />
            </div>
            <div className="basis-2/3 px-2  text-color1 text-md md:text-xl">
              ... how weather forecast pioneers into the space
              <Link to="/far-and-beyond">
                <ArrowRightIcon className="h-6 w-6 text-color1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; */
