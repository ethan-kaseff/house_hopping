import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createSpot } from "../store/spot";
import DataListInput from 'react-datalist-input';
import { fetchLocations } from '../store/location'


function SpotForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [pet_friendly, setPet_friendly] = useState(false);
  const [pprivate, setPprivate] = useState(false);
  const [available, setAvailable] = useState(true);
  const [error,setError] = useState("");
  const locations = useSelector(state => state.location.locations.locations)


  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (name === "") {
      setError("Please provide a name.")
    }
    else if(description === "") {
      setError("Please provide a description.")
    }
    else if(location === "") {
      setError("Please select a location.")
    }
    else {
      setError("")
      const data = await dispatch(
        createSpot(name, description, location, pet_friendly, pprivate, available)
      );
      window.alert("submitted");
    }
  };

  useEffect(() => {
    dispatch(fetchLocations())
    if (locations) {

    }
    }, [dispatch])


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
          {locations ?
                    <div className=''>
                      <select onChange={e => setLocation(e.target.value)} name="location" id="location" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                        <option value="-1">Select An Option</option>
                        {locations.map(loc => {
                          return <option value={loc.id}>{loc.name}</option>
                        })}
                      </select>
                    </div> : null }
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
        <div >
          <p className="text-red-700">{error}</p>
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
