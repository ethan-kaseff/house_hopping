import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchBooking} from '../../store/booking'


export default function OneBooking() {
  const dispatch = useDispatch();
  const loadedBooking = useSelector((state) => state.booking.loaded_booking);
  // console.log(loadedBooking.booking, 'LOADED')

  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchBooking(id));
  }, []);
// .toString.slice(0,17)

const newStartDate = loadedBooking?.start_date?.slice(0,17)
const newEndDate = loadedBooking?.end_date?.slice(0,17)

  return (
    <div>
      <h1 className="text-4xl text-center p-5">Update Your Booking</h1>
    <div className="flex flex-col items-center justify-center m-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold">Current Booking: </h2>

          <div className="text-gray-700 ">Check In: {newStartDate}</div>
          <div className="text-gray-700 "> Check Out: {newEndDate}</div>
          {/* <div className="font-bold text-xl mb-2">Check In: {loadedBooking.start_date}</div>
          <div className="text-gray-700 text-base">{loadedBooking.end_date}</div> */}

          {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
        </div>
      </div>
    </div>
    </div>
  );
}
