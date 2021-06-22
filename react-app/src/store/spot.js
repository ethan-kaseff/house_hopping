//createSpot is thunk for creating spot

//constants
const ADD_UPDATE_SPOT = "spot/ADD_UPDATE_SPOT";
const DELETE_SPOT = "spot/DELETE_SPOT"

//action creators
const addUpdateSpot = (spot) => ({
  type: ADD_UPDATE_SPOT,
  payload: spot,
});

const deleteSpot = (spot) => ({
  type:DELETE_SPOT,
  payload:spot.id
})




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
    dispatch(addUpdateSpot(data));
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
    dispatch(addUpdateSpot(data));
  };


// Thunk for update
export const updateSpotActionCreator =
  (name, description, location, pet_friendly, pprivate, available, id) =>
  async (dispatch) => {
    const response = await fetch(`api/spots/:${id}`, {
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
    dispatch(addUpdateSpot(data));

  };
// Thunk for delete
export function deleteSpotActionCreator( id ) {
    return async function (dispatch) {
        const res = await fetch(`api/spots/:${id}`,
            {
                method: 'DELETE',
                body: JSON.stringify({id}),
            }
        );
        if (res.ok) {

            const responseObject = await res.json();
            // console.log(responseObject, '🙂')
            dispatch(deleteSpot(responseObject));
            return responseObject;
        } else {
            throw res;
        }
    }
}


//reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {



    case ADD_UPDATE_SPOT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;



    case DELETE_SPOT:
      newState = { ...state };
      delete newState[action.payload.id]
      return newState;

    default:
      return state;
  }
}
