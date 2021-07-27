import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import Spot from "../Spot";
import SearchBar from '../SearchBar';
import {useDispatch, useSelector} from 'react-redux';
import { fetchRandomSpot } from "../../store/spot";



function Splash() {
  const history = useHistory();
  const dispatch = useDispatch();
  const randomSpot = useSelector(state => state.spot.randomSpot)

  // let { id } = useParams();
  // if (!id) {
  //   id = 2;
  // }

  useEffect(() => {
    dispatch(fetchRandomSpot());
  }, [dispatch])

  useEffect(()=> {
    history.push('/')
  }, [])
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-7xl">Welcome to House Hopper!</h1>
      <h2 className="text-2xl text-gray-500">Happy Travels!</h2>
      <br />
      <SearchBar />
      <p> Try checking out this spot today!</p>
      <NavLink to={`/spots/${randomSpot.id}`} exact={true}>
        <Spot spot={randomSpot}/>
      </NavLink>
    </div>
  );
}

export default Splash;
