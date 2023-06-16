import ZipCodeForm from "../single/ZipCodeForm";
import LocationFormComp from "./LocationFormComp";

const SidebarCompar = ({ setData, setError }) => {
  return (
    <div className="bg-blue-900 h-full flex flex-col items-center ">
      <LocationFormComp setData={setData} setError={setError} />
      {/*  <div className="flex flex-row">
        <div className="border-b-2 border-white"></div>
        <div className="text-yellow-400 font-semibold my-6 md:my-12"> VS</div>
        <div className="border-b-2 border-white"></div>
      </div> */}
    </div>
  );
};

export default SidebarCompar;
