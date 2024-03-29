import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoutButton from "./auth/LogoutButton";
import "../output.css";

const NavBar = ({pageName}) => {
  const user = useSelector((store) => store.session.user);
  // console.log(user);

    return (
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        {user && <NavLink
          to="/home"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Home
        </NavLink> }
        {user && <NavLink
          to="/spots/new"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Host Spot
        </NavLink> }

        {user && <NavLink
          to="/users"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Your Profile
        </NavLink> }

        {user && <LogoutButton /> }
        {(!user && pageName ==="sign-up") &&  <NavLink
          to="/"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Login
        </NavLink>}

        {(pageName !== "sign-up" && !user) &&  <NavLink
          to="/sign-up"
          exact={true}
          activeClassName="active"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign Up
        </NavLink>}
      </nav>
  )
};

export default NavBar;
