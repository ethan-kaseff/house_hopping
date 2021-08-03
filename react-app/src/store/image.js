const LOAD_IMAGES ="images/LOAD_IMAGES";


const loadImage = (images) => ({
    type:LOAD_IMAGES,
    payload: images
});



export const getImagesBySpotId = (spot_id) => async (dispatch) => {
    const response = await fetch(`/api/images/spot/${spot_id}`);
    // console.log(response)

    if (response.ok) {
      const responseObject = await response.json();
      // console.log(responseObject)
      dispatch(loadImage(responseObject));
    }
}


export const getAllImages = () => async (dispatch) => {
    const response = await fetch(`/api/images/`);
    // console.log(response)

    if (response.ok) {
      const responseObject = await response.json();
      // console.log(responseObject)
      dispatch(loadImage(responseObject));
    }
}



const initialState = {};

export default function reducer(state=initialState, action) {
    let newState;

    switch(action.type) {
        case LOAD_IMAGES:
            newState = { ...state }
            newState.image = action.payload
            // console.log(newState)
            return newState

        default:
            return state;
    }
}
