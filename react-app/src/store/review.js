// Constants
const LOAD_REVIEWS_BY_SPOTID ="reviews/LOAD_REVIEWS_BY_SPOTID";


// Action Creators
const loadReviewsBySpotIdActionCreator = (reviews) => ({
    type:LOAD_REVIEWS_BY_SPOTID,
    payload:reviews,
});


// Thunk

export const fetchReviewsBySpotId = (spot_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/spot/${spot_id}`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const responseObject = await response.json();

    if (responseObject.errors) {
      return responseObject;
    }

    dispatch(loadReviewsBySpotIdActionCreator(responseObject));

}

// Reducer

const initialState = { loaded_reviews:{} };

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case LOAD_REVIEWS_BY_SPOTID:
            newState = {...state};
            newState.loaded_reviews= action.payload;
            return newState;
        default:
          return state;
    }
}
