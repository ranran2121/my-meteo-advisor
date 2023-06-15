import Display from "./Display";

const DisplayContainer = ({ data }) => {
  return (
    <div className="flex-wrap p-8 mx-auto">
      <Display data={data} />
    </div>
  );
};

export default DisplayContainer;
