//constants
const LOAD_BOOKINGS = "booking/LOAD_BOOKINGS";
const LOAD_BOOKING = "booking/LOAD_BOOKING";
const ADD_UPDATE_BOOKING = "booking/ADD_UPDATE_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";

//action creators
const loadBookingsActionCreator = (booking) => ({
  type: LOAD_BOOKINGS,
  payload: booking,
});

const loadBookingActionCreator = (booking) => ({
  type: LOAD_BOOKING,
  payload: booking,
});

const addUpdateBookingActionCreator = (booking) => ({
  type: ADD_UPDATE_BOOKING,
  payload: booking,
});

const deleteBookingActionCreator = (id) => ({
  type: DELETE_BOOKING,
  payload: id,
});

//thuunks
export const createBooking =
  (start_date, end_date, spot_id, user_id) => async (dispatch) => {
    const response = await fetch("/api/bookings/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_date,
        end_date,
        spot_id,
        user_id,
      }),
    });

    const responseObject = await response.json();

    if (responseObject.errors) {
      return responseObject;
    }

    dispatch(addUpdateBookingActionCreator(responseObject));
  };

// Thunk for read All Booking api/user/:id/booking/
export const fetchBookings = () => async (dispatch) => {
  const response = await fetch(`/api/bookings/`, {
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
  dispatch(loadBookingsActionCreator(responseObject));
};

// Thunk for read one booking, api/user/:id/booking/:booking_id
export const fetchBooking = (id) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(response, "🙂");

  const responseObject = await response.json();
  if (responseObject.errors) {
    return responseObject;
  }
  // console.log(responseObject, "🙂");
  dispatch(loadBookingActionCreator(responseObject));
};

// Thunk for update
export const updateBooking = (start_date, end_date, id) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date,
      end_date,
    }),
  });

  const responseObject = await response.json();
  if (responseObject.errors) {
    return responseObject;
  }
  // console.log(responseObject, 'HEYYYYYYYYY')
  dispatch(addUpdateBookingActionCreator(responseObject));
};

// Thunk for delete

export const deleteBooking = (id) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${id}`,{
  method: "DELETE",
  });
  const responseObject = await response.json();
  if (responseObject.errors) {
    return responseObject;
  }
  dispatch(deleteBookingActionCreator(responseObject.id));
}

// Reducer
// const initialState = { };
const initialState = { bookings: {}, loaded_booking: {} };

export default function reducer(state = initialState, action) {
  let newState;
  // console.log(action, 'ACTION')
  switch (action.type) {
    case LOAD_BOOKINGS:
      newState = { ...state };
      newState.bookings = action.payload;
      return newState;

    case LOAD_BOOKING:
      // console.log(action.payload, '!!!!!')
      // newState = { ...state, bookings: { ...state.bookings } };
      // newState.bookings[action.payload.id] = action.payload;
      newState = { ...state };
      newState.loaded_booking = action.payload;
      // newState.bookings[action.payload.id] = action.payload;
      return newState;

    case ADD_UPDATE_BOOKING:
      newState = { ...state, bookings: { ...state.bookings } };
      newState.bookings[action.payload.id] = action.payload;
      return newState;

    case DELETE_BOOKING:
      newState = { ...state, bookings: { ...state.bookings } };
      delete newState.bookings[action.payload.id];
      return newState;

    default:
      return state;
  }
}
