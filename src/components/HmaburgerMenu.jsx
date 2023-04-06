import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div onClick={handleClose}>{isOpen ? <AiOutlineCloseSquare /> : <FaBars />}</div>
      <div>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive ? "text-green-600 " : "text-black"
          }
        >
          <button>Home</button>
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
      </div>
    </Nav>
  );
};

export default HamburgerMenu;
