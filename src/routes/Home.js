import "../input.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div id="outlet" className="self-center mt-4">
        {/* {envStatus === "loading" ? <div>Loading...</div> : baseUrl} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
