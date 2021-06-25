import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoutButton from "./auth/LogoutButton";
import "../output.css";

const NavBar = () => {
  const user = useSelector((store) => store.session.user);
  // console.log(user);
  if (user) {
    return (
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        <NavLink
          to="/"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Home
        </NavLink>
        <NavLink
          to="/spots/new"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Host Spot
        </NavLink>

        <NavLink
          to="/users"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Your Profile
        </NavLink>

        <LogoutButton />
      </nav>
    );
  } else {
    return (
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Login
        </NavLink>

        <NavLink
          to="/sign-up"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign Up
        </NavLink>
      </nav>
    );
  }
};

export default NavBar;
