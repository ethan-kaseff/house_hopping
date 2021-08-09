import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors,setErrors] = useState("")

  const onSignUp = async (e) => {
    e.preventDefault();
     if (password === repeatPassword) {
      const e = await dispatch(signUp(firstName, lastName, email, birthdate, aboutMe, password));
      if (e) {
        setErrors(e)
      }
      else{
        setErrors('')
      }
    } else {
      setErrors('Password and Repeat Password must match!')
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateBirthdate = (e) => {
    setBirthdate(e.target.value);
  };
  const updateAboutMe = (e) => {
    setAboutMe(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bg-cover bg-center " style={{backgroundImage: "url(https://i.imgur.com/q8brc1T.jpeg)", minHeight: "100vh"}}>
      <div className="flex items-center justify-center p-10">
        <form
          className="bg-white bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSignUp}
        >
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              placeholder="John"
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              placeholder="Doe"
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              placeholder="e@mail.com"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Birthdate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="birthdate"
              placeholder="2021-07-28"
              onChange={updateBirthdate}
              value={birthdate}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              About Me
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="aboutMe"
              placeholder="I like pizza..."
              onChange={updateAboutMe}
              value={aboutMe}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="password123"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Repeat Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="repeat_password"
              placeholder="password123"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          {errors?
        <p className="text-red-600">{errors}</p>
        :null}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
