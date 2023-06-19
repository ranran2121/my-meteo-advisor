import SidebarComp from "../components/compare/SidebarComp";
import DisplayContainer from "../components/DisplayContainer";

const Compare = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:h-screen ">
      <div className="md:basis-1/4">
        <SidebarComp />
      </div>
      <div className="md:basis-3/4 h-full self-center">
        <DisplayContainer page="compare" />
      </div>
    </div>
  );
};

export default Compare;
