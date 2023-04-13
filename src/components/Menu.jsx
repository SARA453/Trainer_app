import { NavLink, useNavigate } from "react-router-dom";

const Mrenu = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex gap-4 items-center">
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

      {token ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? "text-green-600 " : "text-black"
          }
        >
          <button>Log in</button>
        </NavLink>
      )}
       <NavLink
          to={"/signup"}
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-black"
          }
        >
          <button className="bg-red-400 p-2 rounded-sm">Become A Member</button>
        </NavLink>
    </div>
  );
};

export default Mrenu;
