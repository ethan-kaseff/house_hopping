// constants

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

// action creators
const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

// thunks
export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(setUser(data));
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  console.log(data)
  if (data.errors) {
    return data;
  }
  dispatch(setUser(data));
  return {};
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  dispatch(removeUser());
};

export const signUp =
  (firstName, lastName, email, birthdate, aboutMe, password) =>
  async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        about_me: aboutMe,
        birthdate,
        password: password,
      }),
    });
    const responseObject = await response.json();
    if(responseObject.errors){
        return responseObject.errors
    }
    dispatch(setUser(responseObject));
  };

// reducer r

// reducer r
const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case SET_USER:
      newState.user = action.payload
      return newState;
    case REMOVE_USER:
      newState = {...state,user:{...state.user}}
      newState.user = null;
      return newState;
    default:
      return state;
  }
}
