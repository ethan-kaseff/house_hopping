import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSpot, fetchAllSpots } from "../../store/spot";

export default function Spot({ spot }) {
  const dispatch = useDispatch();
  const loadedSpot = useSelector((state) => state.spot.loaded_spot);
  const allSpotState = useSelector((state) => Object.values(state.spot.spots));
  // console.log(allSpotState)

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
    // <div className="flex flex-col items-center justify-center m-5">
    //   <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //     {spotState.images ? <img
    //       className="w-full"
    //       src={spotState.images[0].image_url}
    //       alt={spotState.name}
    //     /> : <img
    //       className="w-full"
    //       src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
    //       alt="Sunset in the mountains"
    //     />}

    //     <div className="px-6 py-4">
    //       <div className="font-bold text-xl mb-2">{spotState.name}</div>
    //       <p className="text-gray-700 text-base">{spotState.description}</p>
    //       <p>{pets}</p>
    //       <p>{privy}</p>
    //       {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-wrap overflow-hidden">
      { allSpotState.map(spotObj => {
        return (
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
                <Link to={`spots/${spotObj?.id}`}>
                  <div className="font-bold text-xl mb-2">{spotObj.name}</div>
                </Link>
                <p className="text-gray-700 text-base">{spotObj.description}</p>
                {/* <p>{pets}</p> */}
                <p>{spotObj.private ? "Private Space" : "Shared Space"}</p>
                <p>{spotObj.pet_friendly ? "Pet Friendly!" : "Sorry, no pets allowed 😢"}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
