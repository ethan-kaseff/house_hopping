import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import Spot from "../Spot";

function SearchResults() {
  const history = useHistory();
  const dispatch = useDispatch();
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
              <h2>Search Results...</h2>
            </div>
            <div>
              {availableSpots && (
                <div>
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
