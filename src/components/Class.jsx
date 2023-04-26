const Class = ({ className, asset, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center  p-2 m-2 ">
      <img src={asset.url} className=" rounded h-52" />
      <p className="text-green-400 font-['Roboto-Regular']">
        {className}
      </p>
    </div>
  );
};

export default Class;
