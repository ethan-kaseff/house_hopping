import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookings} from '../../store/booking'


export default function Booking() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking);
    console.log('bookingState😎', bookingState)

    useEffect(() => {
        // console.log('fetchBookings😎', async function(){await fetchBookings()} )
        dispatch(fetchBookings(), console.log('fetchBookings🍟'))
    },[dispatch])

    return (
        <div>

        </div>
    )
}
