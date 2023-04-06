
import { NavLink } from "react-router-dom";
import SARFIT from "../images/SARFIT.png"

const Header = () => {
  return (
    <header className="container mx-auto flex flex-col justify-end md:gap-4 mt-4 md:flex-row">
     <img src={SARFIT} className="h-16 w-16 self-start" />
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
    </header>
  );
};

export default Header;
