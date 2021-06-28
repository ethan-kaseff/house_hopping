// Constants
const LOAD_REVIEWS_BY_SPOTID ="reviews/LOAD_REVIEWS_BY_SPOTID";
const LOAD_REVIEW_BY_ID ="reviews/LOAD_REVIEW_BY_ID";
const UPDATE_REVIEW ="reviews/UPDATE_REVIEW";


// Action Creators
const loadReviewsBySpotIdActionCreator = (reviews) => ({
    type:LOAD_REVIEWS_BY_SPOTID,
    payload:reviews,
});

const loadReviewByIdActionCreator = (review) => ({
    type:LOAD_REVIEW_BY_ID,
    payload:review,
});

const updateReviewActionCreator = (review) => ({
    type:UPDATE_REVIEW,
    payload:review,
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
export const fetchReviewById = (review_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const responseObject = await response.json();

    if (responseObject.errors) {
      return responseObject;
    }

    dispatch(loadReviewByIdActionCreator(responseObject));
}
export const updateReview = (review_id,content,count) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}`,{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:{ review_id,content,count }
    });
    const responseObject = await response.json();

    if (responseObject.errors) {
      return responseObject;
    }

    dispatch(updateReviewActionCreator(responseObject));
}

// Reducer

const initialState = { loaded_reviews:{}, selected_review:{} };

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case LOAD_REVIEWS_BY_SPOTID:
            newState = {...state};
            newState.loaded_reviews= action.payload;
            return newState;
        case LOAD_REVIEW_BY_ID:
            newState = {...state};
            newState.selected_review= action.payload;
            return newState;
        case UPDATE_REVIEW:
            newState = {...state, loaded_reviews:{...state.loaded_reviews}};
            newState.selected_review= action.payload;
            const id = action.payload.id;
            newState.loaded_reviews[id] = action.payload;
            return newState;
        default:
          return state;
    }
}
