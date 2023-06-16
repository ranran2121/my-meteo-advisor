const SingleBlock = ({ city }) => {
  return (
    <div className="flex flex-col rounded-xl text-white  bg-blue-900 px-1 md:px-3 border-2 border-blue-900">
      <div className="displayColEntry font-bold uppercase text-sm">{city}</div>
    </div>
  );
};

export default SingleBlock;
