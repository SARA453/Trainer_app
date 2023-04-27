import axios from "axios";

import Carousel from "../components/Carousel";

import Gym from "../assets/images/Gym.jpeg";
import CarouselTeam from "../components/CarouselTeam";
import { axiosInstance } from "../util/axiosInstance";

const Home = () => {
  return (
    <div className="container mx-au">
      <div className="relative w-full">
        <img src={Gym} className="w-full mt-14  h-screen bg-cover bg-center" />
      </div>

      <div className="flex flex-col justify-center  bg-red-200 mt-14">
        <button className="text-white text-md text-bold  bg-green-400 hover:bg-green-500 px-3 h-10 my-14 rounded-sm self-center font-['Roboto-Regular']">
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

      <div className="flex  items-center justify-center mt-14 bg-red-200">
        <form className="w-2/4">
          <div className="flex mt-14 gap-3 justify-center">
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
              className=" px-3 h-10 mt-4  mb-14  text-mdrounded-sm  bg-green-400 hover:bg-green-500 text-white font-['Roboto-Regular']   self-center "
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
