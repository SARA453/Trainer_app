import axios from "axios";

import Carousel from "../components/Carousel";

import Gym from "../assets/images/Gym.jpeg";
import CarouselTeam from "../components/CarouselTeam";
import { axiosInstance } from "../util/axiosInstance";

const Home = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src={Gym} className="w-full mt-14  h-screen bg-cover bg-center" />
      </div>

      <div className="flex flex-col justify-center mx-6">
        <button className="text-white text-bold text-xl bg-green-400 px-4 py-2 my-14 rounded-md self-center font-['Roboto-Regular']">
          Book Your Class
        </button>
        <Carousel />
      </div>
      <div>
        <p className="text-green-400 flex justify-center my-14 text-5xl font-['Roboto-Regular']">
          OUR TEAM
        </p>
        <CarouselTeam />
      </div>

      <div className="grid grid-cols-1 justify-items-center items-center mt-14 ">
        <form className="w-[900px]">
          <div className="flex mt-6 gap-3 justify-center">
            <input
              placeholder="Name"
              type="text"
              className="border border-gray-200 pl-2 py-1 w-2/4 rounded-sm"
            />
            <input
              placeholder="Surname"
              type="text"
              className="border border-gray-200 pl-2 py-1 w-2/4 rounded-sm"
            />
          </div>
          <div className="flex mt-6 gap-3 justify-center">
            <input
              placeholder="Email"
              type="text"
              className="border border-gray-200 pl-2 py-1 w-2/4 rounded-sm"
            />
            <input
              placeholder="Tel number"
              type="text"
              className="border border-gray-200 pl-2 py-1 w-2/4 rounded-sm"
            />
          </div>

          <div className="flex flex-col mt-6">
            <input
              placeholder="/"
              className="border border-gray-200 pl-2 py-1 rounded-sm"
            />
            <textarea
              placeholder="Write your message"
              className="border border-gray-200 mt-6 pl-2 pt-2 rounded-sm"
            />
            <button
              type="sumbit"
              className=" px-4 h-12 mt-4  mb-14  rounded-md  bg-green-400 hover:bg-yellow-500 text-white font-['Roboto-Regular']   self-center "
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
