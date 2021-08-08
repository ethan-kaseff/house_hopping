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
                  {spotArr.length > 0 ? spotArr.map((spot) => {
                    return (
                      <NavLink to={`/spots/${spot.id}`} exact={true}>
                        <Spot spot={spot} />
                      </NavLink>
                    );
                  }) :
                  <div className="no-results">
                  <p className="text-2xl" >
                    Unfortunately, we currently don't have any spots in that location.
                  </p>
                </div>
                }
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
