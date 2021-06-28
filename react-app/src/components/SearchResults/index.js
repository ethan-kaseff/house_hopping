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

  // Card Click Function

  return (
    <>
      <div className="search-results-main-area">
        <div></div>
        <div>
          <div className="search-results">
            <div className="search-title">
              <h1 className="flex text-5xl justify-center pt-5">Search Results:</h1>
            </div>
            <div>
              {availableSpots && (
                <div className='flex flex-wrap overflow-hidden justify-center'>
                  {spotArr.map((spot) => {
                    return (
                      <NavLink to={`/spots/${spot.id}`} exact={true}>
                        <Spot spot={spot} />
                      </NavLink>
                    );
                  })}
                </div>
              )}
              {!availableSpots && (
                <div className="no-results">
                  <p>
                    Unfortunately we don't have any planes available for this
                    timeframe.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SearchResults;
