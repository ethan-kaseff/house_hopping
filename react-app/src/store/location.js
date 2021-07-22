/* Constants */

const LOAD_LOCATIONS = 'locations/LOAD_LOCATIONS';


/* Action Creator */

const loadLocationsActionCreator = (locations) => ({
    type: LOAD_LOCATIONS,
    payload: locations
})


/* Thunk */

export const fetchLocations = () => async (dispatch)  => {
    const response = await fetch(`/api/locations/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseObject = await response.json();
  if (responseObject.errors) {
    return responseObject;
  }
  // console.log(responseObject, "🙂");
  dispatch(loadLocationsActionCreator(responseObject));
}

/* Reducer */
const initialState  = { locations:{} }

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {

    case LOAD_LOCATIONS:
      newState = { ...state };
      newState.locations = action.payload;
      return newState;

   default:
      return state;
  }
}
