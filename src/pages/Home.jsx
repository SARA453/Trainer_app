import axios from "axios";

import Carousel from "../components/Carousel";

import Gym from "../assets/images/Gym.jpeg";
import CarouselTeam from "../components/CarouselTeam";
import { axiosInstance } from "../util/axiosInstance";

const getClasses = async () => {
  const { data } = await axiosInstance.get("/api/v1/classes");

  return data;
};

const Home = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src={Gym} className="w-full mt-8  h-screen bg-cover bg-center" />
      </div>

      <div className="flex flex-col justify-center mx-6">
        <button className="text-white text-bold text-xl bg-green-600 px-4 py-2 my-6 rounded-md self-center font-['Roboto-Regular']">
          Book Your Class
        </button>
        <Carousel />
      </div>
      <div>
        <p className="text-green-600 flex justify-center my-10 text-5xl font-['Roboto-Regular']">
          OUR TEAM
        </p>
        <CarouselTeam />
      </div>

      <div className="grid grid-cols-1 justify-items-center items-center  mt-12">
        <form>
          <div className="flex mt-6 gap-3">
            <input
              placeholder="Name"
              type="text"
              className="border border-gray-200 pl-2 py-1"
            />
            <input
              placeholder="Surname"
              type="text"
              className="border border-gray-200 pl-2 py-1"
            />
          </div>
          <div className="flex mt-6 gap-3">
            <input
              placeholder="Email"
              type="text"
              className="border border-gray-200 pl-2 py-1"
            />
            <input
              placeholder="Tel number"
              type="text"
              className="border border-gray-200 pl-2 py-1"
            />
          </div>

          <div className="flex flex-col mt-6">
            <input
              placeholder="/"
              className="border border-gray-200 pl-2 py-1"
            />
            <textarea
              placeholder="Write your message"
              className="border border-gray-200 mt-6 pl-2 pt-2"
            />
            <button
              type="sumbit"
              className=" px-4 py-2 my-6 rounded-md  bg-green-600 text-white font-['Roboto-Regular'] "
            >
              Send your request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
