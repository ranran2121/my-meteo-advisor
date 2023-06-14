import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full">
      <ul className="ml-4 text-lg md:text-2xl lg:text-3xl font-semibold flex flex-row justify-around text-white">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/compare"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Compare
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/far-and-beyond"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Far and beyond
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
