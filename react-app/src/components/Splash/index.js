import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Spot from "../Spot";
import SearchBar from '../SearchBar'



function Splash() {
  let { id } = useParams();
  if (!id) {
    id = 2;
  }
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-7xl">Welcome to House Hopper!</h1>
      <h2 className="text-2xl text-gray-500">Happy Travels!</h2>
      <br />
      <SearchBar />
      <p> Try checking out this spot today!</p>
      <NavLink to={`/spots/${id}`} exact={true}>
        <Spot />
      </NavLink>
    </div>
  );
}

export default Splash;
