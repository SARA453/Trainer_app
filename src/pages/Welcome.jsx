import { Link } from "react-router-dom";
import welcome1 from "../images/welcome1.jpeg";
import welcome2 from "../images/welcome2.jpeg";

const Welcome = () => {
  return (
    <div className="container-fluid mt-6">
      <div className="flex flex-col items-center">
        <div classsName="relative">
          <img src={welcome1} />
          <div className="absolute top-[80%] left-[20%]">
            <p className="text-5xl  text-white">
              Believe <br /> Yourself
            </p>
          </div>
          <div className="absolute top-[650px] left-[235px]">
            <Link to={"/home"}>
              <button className="text-white text-bold text-xl bg-green-400 px-4 py-2 rounded-md font-serif">
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
