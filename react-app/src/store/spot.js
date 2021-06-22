//createSpot is thunk for creating spot

//constants
const ADD_SPOT = "spot/ADD_SPOT";
const LOAD_SPOT = "spot/LOAD_SPOT"

//action creators
const addSpot = (spot) => ({
  type: ADD_SPOT,
  payload: spot,
});


const loadSpot = () => ({
  type: LOAD_SPOT,
  payload:spot,
});



//thuunks
export const createSpot =
  (name, description, location, pet_friendly, pprivate, available) =>
  async (dispatch) => {
    const response = await fetch("api/spots/create", {
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
    const data = await response.json();
    if (data.errors) {
      return data;
    }
    dispatch(addSpot(data));
    return {};
  };

// Thunk for read
export const fetchSpot =(id) => async (dispatch) => {
    const response = await fetch(`api/spots/:${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.errors) {
      return data;
    }
    dispatch(loadSpot(data));
    return {};
  };


// Thunk for update
// Thunk for delete


//reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_SPOT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case ADD_SPOT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
