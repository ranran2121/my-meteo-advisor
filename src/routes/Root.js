import { createContext, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../input.css";
import "../auroral.css";

export const AppContext = createContext(null);

const Root = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  return (
    <>
      <Header />
      <AppContext.Provider value={{ data, setData, error, setError }}>
        <Outlet />
      </AppContext.Provider>
      <Footer />
    </>
  );
};

export default Root;
