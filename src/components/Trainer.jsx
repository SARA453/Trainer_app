const Trainer = ({ asset, trainerName }) => {
  return (
    <div className="flex flex-col mb-5">
      <img src={asset.url} className="h-36 w-36 mr-5" />
      <p className="text-lg text-green-400 font-mono">{trainerName}</p>
    </div>
  );
};

export default Trainer;
