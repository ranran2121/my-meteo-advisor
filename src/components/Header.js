import Navbar from "./Navbar";
import headerImage from "../assets/header.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:basis-1/5 ">
        <img alt="header" src={headerImage} width={300} height={300} />
      </div>
      <div className="md:basis-4/5 flex items-center bg-blue-900">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
