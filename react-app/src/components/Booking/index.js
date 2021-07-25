import React,{useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams, Link} from 'react-router-dom';
import {fetchBookings} from '../../store/booking'


export default function MyBookings() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking.bookings);
    // console.log('bookingState😎', bookingState)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchBookings())
    }, [])


    return (
        <div className="flex flex-col items-center justify-center m-3">
            <div className="max-w-sm border rounded overflow-hidden shadow-lg p-3">
                <h2 className="p-1 m-1"> Upcoming Bookings:</h2>
                {bookingState && Object.values(bookingState).map(booking => {
                    return (

                        <div className="border rounded p-1 m-1 bg-blue-500 text-white">
                            {/* <h2>Start Date:{booking.start_date}</h2>
                            <h2>End Date:{booking.end_date}</h2> */}
                            <Link to={`bookings/${booking.id}`}>{booking.start_date}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
