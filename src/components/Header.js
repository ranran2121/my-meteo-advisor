import Navbar from "./Navbar";
import headerImage from "../assets/header.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:basis-1/5 ">
        <NavLink to="/">
          <img alt="header" src={headerImage} width={300} height={300} />
        </NavLink>
      </div>
      <div className="py-5 md:py-0 md:basis-4/5 flex items-center bg-blue-900">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
