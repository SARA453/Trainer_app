import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-400  h-48 ">
      <div className="grid grid-cols-3 justify-center items-center mt-12 ">
        <div className="flex flex-col ml-3 mt-6 text-white font-['Roboto-Regular'] ">
          <p>From Monday to Friday 7:00 - 22:00</p>
          <p>Saturday 10:00 - 19:00</p>
          <p>Sunday Closed</p>
        </div>
        <div className="flex flex-col mt-6 text-white font-['Roboto-Regular']">
          <p>Via ugo betti</p>
          <p>20151 Milan</p>
          <p>Tel +39 3989876166</p>
        </div>
        <div className="flex flex-col mt-6 text-white font-['Roboto-Regular']">
          <p>Viale monza</p>
          <p>20151 Milan</p>
          <p>Tel +39 3989876166</p>
        </div>
      </div>
      <div className="flex gap-7 justify-center items-center mt-8 ">
        <Link>
          <AiOutlineInstagram className="h-8 w-8  hover:text-red-500 shadow-xl shadow-white mb-5" />
        </Link>
        <Link>
          <AiOutlineFacebook className="h-8 w-8 r hover:text-red-500 shadow-xl shadow-white  mb-5 " />
        </Link>
      </div>

      <div className=" flex bg-white justify-center  h-11    py-2">
        <p className="font-['Roboto-Regular']">
          Copyright 2018 sarfit | All Rights Reserved | Designer&nbsp;
        </p>
        <p className="text-green-400"> Sara</p>
      </div>
    </footer>
  );
};

export default Footer;
