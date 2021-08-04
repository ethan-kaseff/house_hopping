import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchSpot, fetchAllSpots } from "../../store/spot";
import { getAllImages } from "../../store/image"

export default function Spot() {
  const dispatch = useDispatch();
  const loadedSpot = useSelector((state) => state.spot.loaded_spot);
  const allSpots = useSelector((state) => Object.values(state.spot.spots));
  // console.log(allSpots)
  const allImages = useSelector(state => (state.image.image?.imagesDict))
  // console.log(allImages)



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
    dispatch(getAllImages())
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
              <div className="flex-none w-48 relative">
                <img
                  className="w-full"
                  src="https://i.imgur.com/bUBNNlS.jpg"
                  alt="Sunset in the mountains"
                />
              </div>

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
