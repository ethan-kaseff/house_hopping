import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const responseObject = await dispatch(login(email, password));
    if (responseObject.errors) {
      setErrors(responseObject.errors);
    }
  };

  const onLoginWithDemo = async (e) => {
    e.preventDefault();

    const data = await dispatch(login('demo1@aa.io', 'password'));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bg-cover bg-center " style={{backgroundImage: "url(https://i.imgur.com/q8brc1T.jpeg)", minHeight: "100vh"}}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl text-blue-700 m-5">Welcome to House Hopping!</h1>
        <div className="flex items-center justify-center m-5">
          <form
            className="bg-white bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onLogin}
          >
            <div>
              {errors.map((error) => (
                <p className="text-red-500 text-xs italic">{error}</p>
              ))}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={onLoginWithDemo}
              >
                Login With Demo User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
