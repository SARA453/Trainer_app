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
              isActive
                ? "text-green-600 border shadow p-1 rounded-sm w-12 "
                : "text-black"
            }
          >
            <button className="text-sm">Home</button>
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border shadow p-1 rounded-sm w-14"
                : "text-black"
            }
          >
            <button className="text-sm">Search</button>{" "}
          </NavLink>
          <NavLink
            to={"/myschedule"}
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border shadow p-1 rounded-sm w-24 "
                : "text-black"
            }
          >
            <button className="text-sm">My Schedule</button>{" "}
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border shadow p-1 rounded-sm w-12 "
                : "text-black"
            }
          >
            <button className="text-sm">Log in</button>
          </NavLink>
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border shadow rounded-sm p-1 "
                : "text-black"
            }
          >
            <button className="  font-['Roboto-Regular'] text-sm  ">
              Become a Member
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
