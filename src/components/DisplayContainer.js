import Display from "./Display";

const DisplayContainer = ({ data }) => {
  //TODO remove the comment
  return (
    <div className="flex-wrap py-8 px-1 md:p-8 mx-auto">
      {/* {data && <Display data={data} />} */}
      <Display data={data} />
    </div>
  );
};

export default DisplayContainer;
