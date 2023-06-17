const SingleBlock = ({ city }) => {
  return (
    <div className="flex flex-col rounded-xl text-white  bg-color1 px-1 md:px-3 border-2 border-color1">
      <div className="displayColEntry font-bold uppercase text-sm">{city}</div>
    </div>
  );
};

export default SingleBlock;
