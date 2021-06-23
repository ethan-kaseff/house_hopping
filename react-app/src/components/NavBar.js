import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "../output.css";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
      <NavLink to="/" exact={true} activeClassName="active">
        Home
      </NavLink>

      <NavLink to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>

      <NavLink to="/users" exact={true} activeClassName="active">
        Users
      </NavLink>

      <LogoutButton />
    </nav>
  );
};

export default NavBar;
