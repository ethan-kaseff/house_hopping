import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import Spot from "../Spot";
import { fetchSpot } from "../../store/spot"

function SearchResults() {
  const dispatch = useDispatch()
  const availableSpots = useSelector((state) => Object.values(state.spot.availableSpots));
  // console.log(availableSpots)
  const current_user = useSelector(state => state.session.user);
  const history = useHistory();
  const spotArr = [];

  for (const key in availableSpots) {
    spotArr.push(availableSpots[key]);
  }

  useEffect(() => {
    if (!current_user){
      history.push('/')
    }
    dispatch(fetchSpot(availableSpots[0]?.id))
  }, [current_user, dispatch])

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
                  {/* {spotArr.length > 0 ? spotArr.map((spot) => {
                    return (
                      <NavLink to={`/spots/${spot.id}`} exact={true}>
                        <Spot />
                      </NavLink>
                    ); */}
                    {availableSpots.length > 0 ? availableSpots.map(spot => {
                      return (
                         <div className="flex flex-col items-center justify-center m-5">
                    <div className="max-w-xs rounded overflow-hidden shadow-lg">
                      {spot?.images ? <img
                        className="w-full"
                        src={spot?.images[0].image_url}
                        alt={spot?.name} />
                       : <img
                        className="w-4 h-4"
                        src="https://www.goerie.com/storyimage/PA/20150718/LIFESTYLE/610129783/AR/0/AR-610129783.jpg"
                        alt="Sunset in the mountains"
                      />}

                      <div className="px-6 py-4">
                        <Link to={`spots/${spot?.id}`}>
                          <div className="font-bold text-xl mb-2">{spot?.name}</div>
                        </Link>
                        <p className="text-gray-700 text-base">{spot?.description}</p>
                        {/* <p>{pets}</p>
                        <p>{privy}</p> */}
                        {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
                      </div>
                    </div>
                  </div>
                      )}) :
                    <div className="no-results">
                  <p className="text-2xl" >
                    Unfortunately, we currently don't have any spots in that location.
                  </p>
                </div>}
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
