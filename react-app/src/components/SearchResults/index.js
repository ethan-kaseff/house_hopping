import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Spot from "../Spot";

function SearchResults() {
  const availableSpots = useSelector((state) => state.spot.availableSpots);

  const spotArr = [];

  for (const key in availableSpots) {
    spotArr.push(availableSpots[key]);
  }

  function SearchReturn({ availableSpots }) {
    if (availableSpots !== null) {
      return (
        <div className="flex flex-wrap overflow-hidden justify-center">
          {spotArr.map((spot) => {
            return (
              <NavLink to={`/spots/${spot.id}`} exact={true}>
                <Spot spot={spot} />
              </NavLink>
            );
          })}
        </div>
      );
    } else {
      return (
        <p>
          Unfortunately we don't have any houses available for this timeframe.
        </p>
      );
    }
  }

  // Card Click Function

  return (
    <>
      <div className="search-results-main-area">
        <div></div>
        <div>
          <div className="search-results">
            <div className="search-title">
              <h1 className="flex text-5xl justify-center pt-5">
                Search Results:
              </h1>
            </div>
            <div>
              <SearchReturn availableSpots={availableSpots} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SearchResults;
