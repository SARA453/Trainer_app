import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-green-400  h-48 ">
      <div className="grid grid-cols-3 justify-center items-center mt-12 ">
        <div className="flex flex-col ml-3 text-white ">
          <p>From Monday to Friday 7:00 - 22:00</p>
          <p>Saturday 10:00 - 19:00</p>
          <p>Sunday Closed</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Via ugo betti</p>
          <p>20151 Milan</p>
          <p>Tel +39 3989876166</p>
        </div>
        <div className="flex flex-col text-white ">
          <p>Viale monza</p>
          <p>20151 Milan</p>
          <p>Tel +39 3989876166</p>
        </div>
      </div>
      <div className="flex gap-7 justify-center items-center mt-8 ">
        <AiOutlineInstagram className="h-8 w-8 bg-white  rounded-md mb-5" />

        <AiOutlineFacebook className="h-8 w-8 bg-white rounded-md mb-5 " />
      </div>
    </footer>
  );
};

export default Footer;
