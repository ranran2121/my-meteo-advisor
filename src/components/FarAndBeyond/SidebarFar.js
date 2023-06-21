import { useContext, useState, useEffect } from "react";
import MarsForm from "./MarsForm";
import NasaForm from "./NasaForm";
import "../../style/auroral.css";
import { FarContext } from "../../routes/FarAndBeyond";

const SidebarFar = () => {
  const { setData, searchParams } = useContext(FarContext);
  const nasa = searchParams.get("day");
  const [isNasa, setIsNasa] = useState(nasa ? true : false);

  useEffect(() => {
    if (nasa) {
      setIsNasa(true);
    } else {
      setIsNasa(false);
    }
  }, [nasa, searchParams]);

  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
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
        {isNasa ? <NasaForm /> : <MarsForm />}
      </div>
    </div>
  );
};

export default SidebarFar;
