import React, { useContext } from "react";
import "../../style/auroral.css";
import { FarContext } from "../../routes/FarAndBeyond";
import { NavLink } from "react-router-dom";

const SidebarFar = ({ handleClick }: { handleClick: () => void }) => {
  const { data } = useContext(FarContext);
  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <div className="w-full px-8 mt-6">
          {!data && (
            <>
              <h3 className="text-color4 font-semibold text-2xl text-center">
                Will you be lucky in having a glimpse of the weather on{" "}
                <span className="text-3xl text-color2 italic underline underline-offset-4">
                  Mars
                </span>{" "}
                ?
              </h3>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
                >
                  good luck
                </button>
              </div>
            </>
          )}
          {data && data.from === "beyond" && (
            <>
              <h4 className="text-color4 font-semibold text-2xl text-center">
                It looks like InSight lander is not transmitting data... but we
                can delight you with the image of the day by{" "}
                <span className="text-3xl text-color2 italic underline underline-offset-4">
                  Nasa
                </span>
              </h4>
              <div className="flex justify-center">
                <NavLink
                  to={"/"}
                  className="text-color4 font-semibold uppercase my-4 rounded-full px-4 py-2 bg-color3"
                >
                  home
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarFar;
