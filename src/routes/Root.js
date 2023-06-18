import "../input.css";
import "../auroral.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div id="outlet" className="h-fit">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
