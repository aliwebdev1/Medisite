import React, { useContext } from "react";
import logo from "../../../assets/images/Medisite logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const menuItems = (
    <>
      {[
        { to: "/home", label: "Home" },
        { to: "/pages", label: "Pages" },
        { to: "/service", label: "Service Area" },
        { to: "/blogs", label: "Blogs" },
        { to: "/contact", label: "Contact Us" },
        { to: "/about", label: "About Us" },
      ].map((item) => (
        <li key={item.to} className="text-[20px]">
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `pb-1 px-2 transition-all duration-300 ${
                isActive
                  ? " font-semibold border-b-4 border-white"
                  : "text-white hover:text-[#34c9b6]"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <header>
      <div className="navbar bg-primary shadow-sm px-4 md:px-29 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden bg-white text-primary mr-5 md:mr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-xl p-0 flex items-center"
          >
            <img className="w-20 md:w-auto" src={logo} alt="medisite" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">
                      {user.emailVerified ? "verified" : "Not verified"}
                    </span>
                  </a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <a onClick={logOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/sign-up" className="btn">
              Sign - up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
