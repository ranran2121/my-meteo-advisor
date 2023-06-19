import Sidebar from "../components/single/Sidebar";
import DisplayContainer from "../components/DisplayContainer";

const SingleLocation = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen ">
      <div className="md:basis-1/4">
        <Sidebar />
      </div>
      <div className="md:basis-3/4 h-full self-center">
        <DisplayContainer page="single" />
      </div>
    </div>
  );
};

export default SingleLocation;
