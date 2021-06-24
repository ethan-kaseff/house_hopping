import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchSpot} from '../../store/spot';


export default function Spot() {
    const dispatch = useDispatch();
    const spotState = useSelector(state => state.spot.loaded_spot);
    // useSelector(state => console.log('state👻', state));
    // console.log('spotState😎', spotState)

    const {id} = useParams();
    // console.log('ID⬇️',id)
    // const testDispatch = () => {

    //     dispatch(fetchSpot(1))
    // }

    useEffect(() => {
        dispatch(fetchSpot(id))
    },[])

    return (
        <div>
            {spotState.name}

            {/* <button onClick={() => testDispatch()}>TestDispatch</button> */}
        </div>
    )
}
