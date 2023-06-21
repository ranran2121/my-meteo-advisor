import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MarsForm from "./MarsForm";
import NasaForm from "./NasaForm";
import "../../style/auroral.css";
import { FarContext } from "../../routes/FarAndBeyond";

const SidebarFar = () => {
  const { setData, pathname } = useContext(FarContext);
  const [isNasa, setIsNasa] = useState(pathname === "/far-and-beyond-nasa");
  const navigate = useNavigate();

  useEffect(() => {
    if (isNasa) {
      navigate("/far-and-beyond-nasa");
    } else {
      navigate("/far-and-beyond");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNasa]);

  return (
    <div className="container md:rounded-tr-lg md:h-screen">
      <div className="auroral-northern "></div>
      <div className="sidebar pt-8">
        <div className="w-full px-8 mt-6">
          <div className="flex flex-row my-2 justify-between">
            <label htmlFor="mars" className="text-xl font-semibold text-color3">
              Look at Mars
            </label>
            <input
              className="mr-6"
              type="radio"
              id="mars"
              name="selection"
              checked={!isNasa}
              onChange={() => {
                setData(null);
                setIsNasa(false);
              }}
            />
          </div>

          <div className="flex flex-row my-2 justify-between">
            <label
              htmlFor="nasa"
              className="text-xl font-semibold text-color5 mr-2"
            >
              Look at beyond
            </label>
            <input
              className="mr-6"
              type="radio"
              id="nasa"
              name="selection"
              checked={isNasa}
              onChange={() => {
                setData(null);
                setIsNasa(true);
              }}
            />
          </div>
        </div>
        {pathname.split("/")[1] === "far-and-beyond" && <MarsForm />}

        {pathname.split("/")[1] === "far-and-beyond-nasa" && <NasaForm />}
      </div>
    </div>
  );
};

export default SidebarFar;
