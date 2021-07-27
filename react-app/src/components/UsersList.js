import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {fetchSpotReviewsByUser, fetchAllSpots} from '../store/spot';
import Spot from '../components/Spot'


export default function UsersList() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  // const spots  = useSelector(state => state.spot.userReviewSpots)
  const spots  = useSelector(state => state.spot.spots)

  useEffect(() => {
    console.log(user);
    console.log('🙂spots',spots);
    // dispatch(fetchSpotReviewsByUser(user.id));
    dispatch(fetchAllSpots());
  }, [])
  console.log('🙂spots After UseEffect',spots);
  return (
    <div>
      {Object.values(spots).map(spot => {
        return(
          <NavLink to={`/spots/${spot.id}`} exact={true}>
            < Spot spot={spot}/>
          </NavLink>
        )
      })}
    </div>
  )
}
