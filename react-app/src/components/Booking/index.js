import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookings} from '../../store/booking'


export default function Booking() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking.bookings);
    console.log('bookingState😎', bookingState)

    useEffect(() => {
        dispatch(fetchBookings())
    },[dispatch])

    return (
        <div>
            {/* {bookingState && Object.values(bookingState).map(booking => {
                return (
                    <div>
                    <h2> Booking </h2>
                    <div> Start Date:{booking.start_date} </div>
                    <input type='button' value='edit' key={'booking_edit'+ booking.id} id={'booking_edit'+ booking.id}/>
                    <input type='button' value='delete' key={'booking_delete'+ booking.id} id={'booking_delete'+ booking.id}/>
                    </div>
                )
})} */}
        </div>
    )
}
