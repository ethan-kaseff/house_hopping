import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchSpot, fetchAllSpots } from "../../store/spot";

export default function Spot({ spot }) {
  const dispatch = useDispatch();
  const loadedSpot = useSelector((state) => state.spot.loaded_spot);
  const allSpots = useSelector((state) => Object.values(state.spot.spots));
  // console.log(allSpots)


  // let spotState;
  // let { id } = useParams();
  // if (!spot) {
  //   if (!id) {
  //     id = 2;
  //   }
  //   spotState = loadedSpot;
  // } else {
  //   spotState = spot;
  // }
  // console.log('ID⬇️',id)
  // const testDispatch = () => {

  useEffect(() => {
    // if (id !== undefined) {
    //   dispatch(fetchSpot(id));
    // }
    dispatch(fetchAllSpots())
  }, [dispatch]);
  //     dispatch(fetchSpot(1))
  // }

  // useEffect(() => {
  //   dispatch(fetchSpot(id));
  // }, []);
  let pets;
  let privy;
  // spotState.pet_friendly ? (pets = "Pet friendly!") : (pets = "No pets, sorry");
  // spotState.private ? (privy = "Private House") : (privy = "Shared Space");

  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4" >
      {allSpots.map(spotObj => {
        return (
          <div className="  m-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* <div className="grid grid-cols-1 items-center justify-center m-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg"> */}
              <img
                className="w-full"
                src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <NavLink to={`/spots/${spotObj.id}`}>
                  <div className="font-bold text-xl mb-2">{spotObj.name}</div>
                </NavLink>
                <p className="text-gray-700 text-base">{spotObj.description}</p>
                <p>{pets}</p>
                <p>{privy}</p>
                {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
              </div>
            </div>
          </div>
          )
      })}
  </div>
  );
}
