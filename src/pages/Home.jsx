import axios from "axios";
import { useNavigate } from "react-router";
import Carousel from "../components/Carousel";
import Class from "../components/Class";
import useQuery from "../hooks/useQuery";
import gym from "../images/gym.png";

const getClasses = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/classes");

  return data;
};

const getRatings = async (classId) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/v1/classes/${classId}/ratings`
  );
  return data;
};

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6">
        <div className="relative w-full">
          <img
            src="http://localhost:4000/file-bucket/1583694115775lower-abs1.jpg"
            className="w-full mt-8 h-[450px]"
          />
          <p className="absolute top-[63%] left-[4%] text-white text-5xl">
            Lower Abs <br /> Workout
          </p>
        </div>
      </div>

      <div className="justify-center items-center mx-6 mt-5">
        <button className="text-white text-bold text-xl bg-green-400 px-4 py-2 rounded-md font-serif">
          Book Your Class
        </button>
        <Carousel />
      </div>
      <div>
        <form>
          <div>
            <input
              placeholder="Name"
              type="text"
              className="border border-gray-200"
            />
            <input
              placeholder="Surname"
              type="text"
              className="border border-gray-200"
            />
          </div>
          <div>
            <input placeholder="Email" type="text" className="border border-gray-200"/>
            <input placeholder="Tel number" type="text" className="border border-gray-200"/>
          </div>

          <input placeholder="/" className="border border-gray-200"/>
          <textarea placeholder="Write your message" className="border border-gray-200"/>
          <button type="sumbit"  className="bg-green-400 px-4 py-2 rounded-md">Send your request</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
