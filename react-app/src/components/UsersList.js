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
  // console.log('🙂 spots',spots);


  useEffect(() => {
    // console.log(user);
    // dispatch(fetchSpotReviewsByUser(user.id));
    dispatch(fetchSpotByUser(user.id));
  }, [dispatch])


  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-5">Current Bookings: </h1>
        <MyBookings />
      <h1 className="font-bold text-3xl text-center p-5">Current Listings: </h1>
      <div className="flex flex-wrap overflow-hidden">
      {spots.map(spotObj => {
        return(
            <div className="grid grid-cols box-content items-center justify-center m-5">
              <div className="max-w-xs max-h-full rounded overflow-hidden shadow-lg">
              {spotObj.images.length > 0 ? <img
                className="w-96 h-60"
                src={spotObj.images[0].image_url}
                alt={spotObj.name}
              /> : <img
                className="w-96 h-60"
                src="https://i.imgur.com/d3OtztQ.jpeg"
                alt="default house"
              />}
                <div className="px-6 py-4">
                  <NavLink to={`/spots/${spotObj?.id}`}>
                    <div className="font-bold text-xl mb-2">{spotObj?.name}</div>
                  </NavLink>
                  <p className="text-gray-700 text-base">{spotObj?.description}</p>
                  <p>{spotObj.private ? "Private Space" : "Shared Space"}</p>
                  <p>{spotObj.pet_friendly ? "Pet Friendly!" : "Sorry, no pets allowed 😢"}</p>
                </div>
              </div>
            </div>
        )
      })}
      </div>
    </div>
  )
}
