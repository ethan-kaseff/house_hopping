import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchBooking} from '../../store/booking'


export default function One_Booking() {
  const dispatch = useDispatch();
  const loadedBooking = useSelector((state) => state.booking.loaded_booking);
  console.log(loadedBooking.booking, 'LOADED')
  let newArr = loadedBooking.booking
  for (let booking in newArr) {
    console.log(booking, 'booking')
  }
  // useSelector(state => console.log('state👻', state));
  // console.log('spotState😎', spotState)
  const {id} = useParams()
  // console.log('ID⬇️',id)
  // const testDispatch = () => {

  useEffect(() => {
    dispatch(fetchBooking(id));
  }, []);
  //     dispatch(fetchSpot(1))
  // }

  // useEffect(() => {
  //   dispatch(fetchSpot(id));
  // }, []);


  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{loadedBooking.start_date}</div>
          <p className="text-gray-700 text-base">{loadedBooking.end_date}</p>

          {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
        </div>
      </div>
    </div>
  );
}
