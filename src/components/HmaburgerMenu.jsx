import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-['Roboto-Regular'] ">
      <div onClick={handleClose} className="my-2">
        {isOpen ? <AiOutlineCloseSquare /> : <FaBars />}
      </div>
      {isOpen && (
        <div className="flex flex-col">
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive ? "text-green-600 " : "text-black"
            }
          >
            <Link>Home</Link>
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive ? "text-green-600 " : "text-black"
            }
          >
            <button>Search</button>{" "}
          </NavLink>
          <NavLink
            to={"/myschedule"}
            className={({ isActive }) =>
              isActive ? "text-green-600 " : "text-black"
            }
          >
            <button>My Schedule</button>{" "}
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-green-600 " : "text-black"
            }
          >
            <button>Log in</button>
          </NavLink>
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-black"
            }
          >
            <button className="bg-red-400 px-2  mt-2 rounded-sm font-['Roboto-Regular'] h-8 text-xs">
              Become a Member
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
