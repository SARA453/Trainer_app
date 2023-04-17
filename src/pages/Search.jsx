import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Class from "../components/Class";
import Trainer from "../components/Trainer";
import useAxios from "../hooks/useAxios";

const Search = () => {
  const { data: classes } = useAxios("/api/v1/classes");
  const { data: trainers } = useAxios("/api/v1/trainers");
  const [query, setQuery] = useState("");

  const filteredClasses = classes.filter((item) =>
    item.className.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTrainers = trainers.filter((item) =>
    item.trainerName.toLowerCase().includes(query.toLowerCase())
  );

  const onFilter = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <p className="text-4xl text-green-600 font-['Roboto-Regular'] ">
          Search
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search classes"
            value={query}
            onChange={onFilter}
            className="border  pl-10   py-3 mt-3  relative rounded-md w-full text-gray-600"
          />
          <div className="absolute  top-8   pl-3 flex items-center pointer-events-none">
            <BsSearch className="text-gray-200" />
          </div>
        </div>
      </div>

      {filteredClasses.length > 0 && (
        <div>
          <p className="text-2xl mt-7 text-green-600 font-['Roboto-Regular']">
            Popular Classes
          </p>
          <div className="grid grid-cols-3">
            {filteredClasses.map((item) => (
              <Class {...item} key={item.id} />
            ))}
          </div>
        </div>
      )}

      {filteredTrainers.length > 0 && (
        <div>
          <p className="text-2xl text-green-600  mt-5 font-['Roboto-Regular']">
            Popular Trainers
          </p>
          <div className="grid grid-cols-4  mt-5">
            {filteredTrainers.map((item) => (
              <Trainer {...item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
