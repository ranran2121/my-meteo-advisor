import Navbar from "./Navbar";
import headerImage from "../assets/header.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:basis-1/4 ">
        <NavLink to="/">
          <img alt="header" src={headerImage} width={300} height={300} />
        </NavLink>
      </div>
      <div
        className={`py-5 md:py-0 md:basis-3/4 flex items-center bg-color1 ${
          pathname === "/" ? "" : "md:rounded-bl-lg"
        } `}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
