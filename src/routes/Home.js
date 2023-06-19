import "../input.css";
import "../style/auroral.css";
import { HOMEPAGELIST } from "../constants";
import Cloud from "../components/Cloud";

const Home = () => {
  return (
    <div className="container">
      <div className="auroral-northern"></div>
      <div className="relative p-4 md:px-24 flex flex-col w-full h-full">
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
      </div>
    </div>
  );
};

export default Home;
