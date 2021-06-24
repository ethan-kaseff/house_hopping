import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SpotForm from "./components/SpotForm";
import Spot from "./components/Spot";
import { authenticate } from "./store/session";
import Booking from "./components/Booking"
import BookSpotForm from "./components/BookSpotForm"



function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
      // immediately invoking asynchronous function
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Booking/>
    {/* <Route path="/spots/:id">
      <BookSpotForm/>
    </Route> */}
    <Route path="/spots/:id">
      <Spot/>
    </Route>
      <NavBar />
      <Route path="/spots/new">
        <SpotForm />
      </Route>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
