import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import Spot from "../Spot";
import SearchBar from '../SearchBar';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAllSpots } from "../../store/spot"
// import { fetchRandomSpot } from "../../store/spot";



function Splash() {
  const history = useHistory();
  const dispatch = useDispatch();
  const randomSpot = useSelector(state => state.spot.randomSpot)

  // let { id } = useParams();
  // if (!id) {
  //   id = 2;
  // }

  useEffect(() => {
    // dispatch(fetchRandomSpot());
  }, [dispatch])

  useEffect(()=> {
    history.push('/')
  }, [])
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-7xl">Welcome to House Hopping!</h1>
      <br />
      <SearchBar />
      <p className="text-4xl text-center p-5 text-gray-500"> Check Out These Spots to Book</p>
      <Spot />
    </div>
  );
}

export default Splash;
