import LocationFormComp from "./LocationFormComp";

const SidebarCompar = ({ setData, setError }) => {
  return (
    <div className="bg-blue-900 h-full flex flex-col items-center ">
      <LocationFormComp setData={setData} setError={setError} />
      {/*   <div className="flex flex-row w-full items-center my-8 md:my-16 px-4">
        <div className="basis-1/3 w-full border-b-2 border-white"></div>
        <div className="text-white font-semibold basis-1/3 text-center">OR</div>
        <div className="basis-1/3 w-full border-b-2 border-white"></div>
      </div> */}
    </div>
  );
};

export default SidebarCompar;
