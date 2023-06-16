import Display from "./Display";
import Error from "./Error";
import Message from "./Message";

const DisplayContainer = ({ data, error }) => {
  return (
    <div className="flex-wrap py-8 px-1 md:p-8 mx-auto">
      {!data && !error && <Message />}
      {data && <Display data={data} />}
      {error && <Error />}
    </div>
  );
};

export default DisplayContainer;
