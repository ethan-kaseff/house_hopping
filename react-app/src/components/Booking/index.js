import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {fetchBookings} from '../../store/booking'


export default function My_Bookings() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking.bookings);
    // console.log('bookingState😎', bookingState)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchBookings())
    }, [])


    return (
        <div>

            {bookingState && Object.values(bookingState).map(booking => {
                return (
                    <div>
                    <h2> Booking </h2>
                    <div> Start Date:{booking.start_date} </div>

                    </div>
                )
            })
            }
        </div>
    )
}
