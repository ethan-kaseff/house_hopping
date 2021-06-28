import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createSpot } from "../store/spot";

function SpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [pet_friendly, setPet_friendly] = useState(false);
  const [pprivate, setPprivate] = useState(false);
  const [available, setAvailable] = useState(true);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const data = await dispatch(
      createSpot(name, description, location, pet_friendly, pprivate, available)
    );
    window.alert("submitted");
    history.push("/");
  };

  return (
    <div className="flex items-center justify-center m-5">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            value={name}
          ></input>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            onChange={(ev) => {
              setDescription(ev.target.value);
            }}
            value={description}
          ></input>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="location"
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
            value={location}
          ></input>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pet Friendly
          </label>
          <input
            type="checkbox"
            name="pet_friendly"
            checked={pet_friendly}
            onChange={() => {
              setPet_friendly(!pet_friendly);
            }}
            value={pet_friendly}
          ></input>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Private
          </label>
          <input
            type="checkbox"
            name="private"
            checked={pprivate}
            onChange={() => {
              setPprivate(!pprivate);
            }}
            value={pprivate}
          ></input>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Available
          </label>
          <input
            type="checkbox"
            name="available"
            checked={available}
            onChange={() => {
              setAvailable(!available);
            }}
            value={available}
          ></input>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Make Spot
        </button>
      </form>
    </div>
  );

  //end of spotform
}

export default SpotForm;
