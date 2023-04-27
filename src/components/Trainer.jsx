const Trainer = ({ asset, trainerName }) => {
  return (
    <div className="flex flex-col  p-2 m-2 ">
      <img src={asset.url} className="h-36 w-36 rounded mb-7" />
      <p className="text-lg text-white  font-['Roboto-Regular']">
        {trainerName}
      </p>
    </div>
  );
};

export default Trainer;
