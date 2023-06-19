import SidebarFar from "../components/FarAndBeyond/SidebarFar";
import DisplayContainer from "../components/DisplayContainer";

const FarAndBeyond = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:h-screen ">
      <div className="md:basis-1/4">
        <SidebarFar />
      </div>
      <div className="md:basis-3/4 h-full self-center">
        <DisplayContainer page="far" />
      </div>
    </div>
  );
};

export default FarAndBeyond;
