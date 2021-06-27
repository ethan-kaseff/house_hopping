import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {fetchSpotReviewsByUser} from '../store/spot';
import Spot from '../components/Spot'

// function UsersList() {
//
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("/api/users/");
//       const responseData = await response.json();
//       setUsers(responseData.users);
//     }
//     fetchData();
//     dispatch(fetchSpotReviewsByUser(user))
//   }, []);

//   const userComponents = users.map((user) => {
//     return (
//       <li key={user.id}>
//         <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
//       </li>
//     );
//   });

//   return (
//     <>
//       <h1>User List: </h1>
//       <ul>{userComponents}</ul>
//     </>
//   );
// }



export default function UsersList() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const spots  = useSelector(state => state.spot.userReviewSpots)

  useEffect(() => {
    console.log(user);
    dispatch(fetchSpotReviewsByUser(user.id));
  }, [])



  return (
    <div>
      {Object.values(spots).map(spot => {
        return(
          <NavLink to={`/spots/${spot.id}`} exact={true}>
            < Spot spot={spot}/>
          </NavLink>
        )
      })}
    </div>
  )
}


// export default UsersList;
