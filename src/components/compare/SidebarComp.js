import LocationFormComp from "./LocationFormComp";

const SidebarComp = () => {
  return (
    <div className="container md:rounded-tr-lg h-auto md:h-full">
      <div className="auroral-northern "></div>
      <div className="sidebar">
        <LocationFormComp />
      </div>
    </div>
  );
};

export default SidebarComp;
