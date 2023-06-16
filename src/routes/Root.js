import "../input.css";
import "../auroral.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ksun from "../assets/ksun.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <div id="outlet" className="self-center">
        <Outlet />
      </div>
    </>
  );
};

export default Root;