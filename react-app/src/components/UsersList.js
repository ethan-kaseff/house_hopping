import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { fetchSpotByUser, fetchSpotReviewsByUser, fetchAllSpots} from '../store/spot';
import Spot from '../components/Spot'
import MyBookings from "./Booking";


export default function UsersList() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  // const spots  = useSelector(state => state.spot.userReviewSpots)
  const spots  = useSelector(state => Object.values(state.spot.spots))
  console.log('🙂spots',spots);


  useEffect(() => {
    console.log(user);
    // dispatch(fetchSpotReviewsByUser(user.id));
    dispatch(fetchSpotByUser(user.id));
  }, [])


  return (
    <div>
        <MyBookings />
      <h1 className="font-bold text-3xl text-center p-5">Current Listings: </h1>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
      {spots.map(spot => {
        return(
            <div className="grid grid-cols-1 items-center justify-center m-5">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <NavLink to={`/spots/${spot.id}`}>
                    <div className="font-bold text-xl mb-2">{spot.name}</div>
                  </NavLink>
                  <p className="text-gray-700 text-base">{spot.description}</p>
                  {/* <p>{pets}</p>
                  <p>{privy}</p> */}
                  {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
                </div>
              </div>
            </div>
        )
      })}
      </div>
    </div>
  )
}
