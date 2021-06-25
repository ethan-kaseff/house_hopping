import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchSpot} from '../../store/spot';


export default function Spot() {
    const dispatch = useDispatch();
    const spotState = useSelector(state => state.spot.loaded_spot);
    // console.log('spotState😎', spotState)

    const {id} = useParams();
    // console.log('ID⬇️',id)

    useEffect(() => {
        dispatch(fetchSpot(id))
    },[])

    return (
        <div>
            <h1>{spotState.name}</h1>
            <div>
                <h2>Description:</h2>
                <h2>{spotState.description}</h2>
                <h2>Location:</h2>
                <h2>{spotState.location}</h2>
                <h2>{spotState.pet_friendly}</h2>
                <h2>{spotState.private}</h2>
                <h2>{spotState.available}</h2>
            </div>

            {/* <button onClick={() => testDispatch()}>TestDispatch</button> */}
        </div>
    )
}
