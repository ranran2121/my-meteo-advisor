import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full">
      <ul className="md:ml-4 text-md md:text-2xl lg:text-3xl font-semibold flex flex-row justify-around text-color4">
        <li>
          <NavLink
            to={"/single-location"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            One and only
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/compare-locations"}
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
