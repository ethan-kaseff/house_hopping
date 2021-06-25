import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpot } from "../../store/spot";
import { NavLink } from "react-router-dom";
import BookSpotForm from "../BookSpotForm";

export default function Spot() {
  const dispatch = useDispatch();
  const spotState = useSelector((state) => state.spot.loaded_spot);
  // useSelector(state => console.log('state👻', state));
  // console.log('spotState😎', spotState)

  let { id } = useParams();
  if (!id) {
    id = 2;
  }
  // console.log('ID⬇️',id)
  // const testDispatch = () => {

  //     dispatch(fetchSpot(1))
  // }

  useEffect(() => {
    dispatch(fetchSpot(id));
  }, []);
  let pets;
  let privy;
  spotState.pet_friendly
    ? (pets = "Pet friendly!")
    : (pets = "Not pets, sorry");
  spotState.private ? (privy = "Private House") : (privy = "Shared Space");

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{spotState.name}</div>
          <p className="text-gray-700 text-base">{spotState.description}</p>
          <p>{pets}</p>
          <p>{privy}</p>
          {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
        </div>
      </div>
    </div>
  );
}
