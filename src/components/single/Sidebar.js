import LocationForm from "./LocationForm";
import ZipCodeForm from "./ZipCodeForm";
import "../../style/auroral.css";

const Sidebar = () => {
  return (
    <div className="container md:rounded-tr-lg h-screen">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <LocationForm />
        <div className="flex flex-row w-full items-center my-8 md:my-16 px-4">
          <div className="basis-1/3 w-full border-b-2 border-color4"></div>
          <div className="text-color4 font-semibold basis-1/3 text-center">
            OR
          </div>
          <div className="basis-1/3 w-full border-b-2 border-color4"></div>
        </div>
        <ZipCodeForm />
      </div>
    </div>
  );
};

export default Sidebar;
