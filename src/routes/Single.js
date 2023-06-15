import Sidebar from "../components/Sidebar";
import Display from "../components/Display";

const Single = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row h-screen border-4 border-green-600">
      <div className="basis-1/3 border2 border-green-600">
        <Sidebar />
      </div>
      <div className="basis-2/3 border-4 border-yellow-600 self-center">
        <Display />
      </div>
    </div>
  );
};

export default Single;
