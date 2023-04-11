import { NavLink } from "react-router-dom";

const Mrenu = () => {
  return (
    <div className="flex gap-4">
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
  );
};

export default Mrenu;
