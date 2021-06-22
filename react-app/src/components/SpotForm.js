import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createSpot } from "../store/spot";

function SpotForm() {
  const dispatch = useDispatch();
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
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
          value={name}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(ev) => {
            setDescription(ev.target.value);
          }}
          value={description}
        ></input>
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={(ev) => {
            setLocation(ev.target.value);
          }}
          value={location}
        ></input>
      </div>
      <div>
        <label>Pet Friendly</label>
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
        <label>Private</label>
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
        <label>Available</label>
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
      <button type="submit">Make Spot</button>
    </form>
  );

  //end of spotform
}

export default SpotForm;
