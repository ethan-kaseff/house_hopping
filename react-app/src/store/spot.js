//constants
const LOAD_SINGLE_SPOT = "spot/LOAD_SINGLE_SPOT"
const ADD_UPDATE_SPOT = "spot/ADD_UPDATE_SPOT";
const DELETE_SPOT = "spot/DELETE_SPOT"

//action creators
const loadSingleSpotActionCreator = (spot) => ({
  type: LOAD_SINGLE_SPOT,
  payload: spot,
});

const addUpdateSpotActionCreator = (spot) => ({
  type: ADD_UPDATE_SPOT,
  payload: spot,
});

const deleteSpotActionCreator = (spot) => ({
  type:DELETE_SPOT,
  payload:spot.id
})

//thuunks
export const createSpot =
  (name, description, location, pet_friendly, pprivate, available) =>
  async (dispatch) => {

    const response = await fetch("/api/spots/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        location,
        pet_friendly,
        private: pprivate,
        available,
      }),
    });

    const responseObject = await response.json();

    if (responseObject.errors) {
      return responseObject;
    }

    dispatch(addUpdateSpotActionCreator(responseObject));
  };

// Thunk for read
export const fetchSpot =(id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseObject = await response.json();
    if (responseObject.errors) {
      return responseObject;
    }
    dispatch(loadSingleSpotActionCreator(responseObject));
  };


// Thunk for update
export const updateSpot =
  (name, description, location, pet_friendly, pprivate, available, id) =>
  async (dispatch) => {
    const response = await fetch(`/api/spots/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        location,
        pet_friendly,
        private: pprivate,
        available,
      }),
    });

    const responseObject = await response.json();
    if (responseObject.errors) {
      return responseObject;
    }
    dispatch(addUpdateSpotActionCreator(responseObject));

  };

// Thunk for delete
export function deleteSpot( id ) {
    return async function (dispatch) {
        const res = await fetch(`/api/spots/${id}`, {
          method: 'DELETE',headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id}),
        });
        if (res.ok) {

            const responseObject = await res.json();
            // console.log(responseObject, '🙂')
            dispatch(deleteSpotActionCreator(responseObject));
            return responseObject;
        } else {
            throw res;
        }
    }
}


// Reducer
const initialState = {spots:{}, loaded_spot:{}};
// const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  // console.log(action.payload);

  switch (action.type) {

    case LOAD_SINGLE_SPOT:
      newState = { ...state };
      // newState.spot = action.payload;
      newState.loaded_spot = action.payload;
      return newState;

    case ADD_UPDATE_SPOT:
      newState = { ...state, spots:{...state.spots}};
      newState.spots[action.payload.id] = action.payload;
      return newState;

    case DELETE_SPOT:
      newState = { ...state, spots:{...state.spots} };
      delete newState.spots[action.payload.id]
      return newState;

    default:
      return state;
  }
}
