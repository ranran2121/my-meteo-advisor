import LocationFormComp from "./LocationFormComp";

const SidebarComp = ({ setData, setError }) => {
  return (
    <div className="container md:rounded-tr-lg h-screen">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <LocationFormComp setData={setData} setError={setError} />
      </div>
    </div>
  );
};

export default SidebarComp;
