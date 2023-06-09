import {useParams, NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex gap-4 items-center ">
      <NavLink
        to={"/home"}
        className={({ isActive }) =>
          isActive
            ? "text-green-400 border shadow py-1 px-2 rounded-sm"
            : "text-black "
        }
      >
        <button className="font-['Roboto-Regular']">Home</button>
      </NavLink>
      <NavLink
        to={"/search"}
        className={({ isActive }) =>
          isActive
            ? "text-green-400 border shadow py-1 px-2 rounded-sm "
            : "text-black"
        }
      >
        <button className="font-['Roboto-Regular']">Search</button>{" "}
      </NavLink>
      <NavLink
        to={`/users/${id}`}
        className={({ isActive }) =>
          isActive
            ? "text-green-400 border shadow py-1 px-2 rounded-sm "
            : "text-black"
        }
      >
        <button className="font-['Roboto-Regular']">My Schedule</button>{" "}
      </NavLink>

      {token ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive
              ? "text-green-400  border shadow py-1 px-2 rounded-sm"
              : "text-black"
          }
        >
          <button className="font-['Roboto-Regular']">Log in</button>
        </NavLink>
      )}
      <NavLink
        to={"/signup"}
        className={({ isActive }) =>
          isActive
            ? "text-green-400 border shadow py-1 px-2 rounded-sm"
            : "text-black"
        }
      >
        <button className="  p-1  font-['Roboto-Regular']">
          Become A Member
        </button>
      </NavLink>
    </div>
  );
};

export default Menu;
