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
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spot from "./components/Spot";
import { authenticate } from "./store/session";
import MyBookings from "./components/Booking";
import BookSpotForm from "./components/BookSpotForm";
import EditBookSpotForm from "./components/EditBookSpotForm";
import Splash from "./components/Splash";
import OneBooking from "./components/One_booking";
// import BookSpotForm from "./components/BookSpotForm"

import "react-dates/initialize";

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
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/booking/new">
        <BookSpotForm />
      </Route>
      <Route path="/bookings/:id">
        <OneBooking />
        <EditBookSpotForm />
      </Route>
      <Route path="/spots/:id">
        <div className='flex flex-row items-center justify-center'>
          <Spot />
          <BookSpotForm />
        </div>
      </Route>
      <Route path="/spots/new">
        <SpotForm />
      </Route>
      <Switch>
        <Route path="/search-bar" exact={true}>
          <SearchBar />
        </Route>
        <Route path="/search-results" exact={true}>
          <SearchResults />
        </Route>
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
          <Splash />
          <MyBookings />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
