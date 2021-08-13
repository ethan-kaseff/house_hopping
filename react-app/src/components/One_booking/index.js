import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchBooking} from '../../store/booking'


export default function OneBooking() {
  const dispatch = useDispatch();
  const currentBooking = useSelector((state) => state.booking?.loaded_booking);
  // console.log(currentBooking, 'LOADED')

  const {id} = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchBooking(id));
    }
  }, [dispatch, id]);

const newStartDate = currentBooking?.start_date?.slice(0,17)
const newEndDate = currentBooking?.end_date?.slice(0,17)

  return (
    <div>
      <h1 className="text-4xl text-center p-5">Update Your Booking</h1>
      <div className="flex flex-col items-center justify-center m-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {currentBooking?.spot && currentBooking?.spot[0]?.images?.length > 0 ? <img
            className="w-96 h-60"
            src={currentBooking?.spot[0]?.images[0]?.image_url}
            alt={currentBooking?.spot[0]?.name}
          /> : <img
          className="w-96 h-60"
          src="https://i.imgur.com/d3OtztQ.jpeg"
          alt="default house"
          />}

          <div className="px-6 py-4">
            <h2 className="font-bold">Current Booking: </h2>
            <div className="italic text-blue-400">{currentBooking?.spot && currentBooking?.spot[0]?.name}</div>
            <div className="text-gray-700">Check In: {newStartDate}</div>
            <div className="text-gray-700"> Check Out: {newEndDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
