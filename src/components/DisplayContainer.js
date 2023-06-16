import Display from "./Display";
import Error from "./Error";
import Message from "./Message";
import DisplayComp from "./compare/DisplayComp";

const DisplayContainer = ({ data, error, isSingle }) => {
  return (
    <div className="flex-wrap py-8 px-1 md:p-8 mx-auto">
      {!data && !error && <Message />}
      {data && isSingle && <Display data={data} />}
      {data && !isSingle && <DisplayComp data={data} />}
      {error && <Error />}
    </div>
  );
};

export default DisplayContainer;
