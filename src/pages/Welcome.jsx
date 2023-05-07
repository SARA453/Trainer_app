import { Link } from "react-router-dom";
import welcome1 from "../assets/images/welcome1.jpeg";
import welcome2 from "../assets/images/welcome2.jpeg";

const Welcome = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={welcome1} />
          <div className="absolute top-[70%] left-[22%]">
            <p className="text-5xl  text-white">
              Believe <br /> Yourself
            </p>
          </div>
          <div className="absolute top-[160px] left-[80px] sm:top-[200px] sm:left-[110px] md:top-[270px] md:left-[130px] lg:top-[360px] lg:left-[170px] xl:top-[450px] xl:left-[220px]">
            <Link to={"/home"}>
              <button className="text-white text-bold text-xl hover:bg-red-200 px-4 py-2 rounded-sm border  font-serif">
                Choose Your Class
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src={welcome2} />
          <div className="flex items-center justify-center my-8 "></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
