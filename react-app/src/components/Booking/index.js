import React,{useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams, Link} from 'react-router-dom';
import {fetchBookings} from '../../store/booking'
import { fetchSpot } from '../../store/spot'


export default function MyBookings() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking.bookings);
    const newBookState = bookingState
    // console.log(Object.values(newBookState))
    const spotState = useSelector(state => state.spot)
    // console.log(spotState, 'SPOTSTATE')
    // console.log('bookingState😎', bookingState['2']?.spot_id)
    // const spotID = bookingState['2']?.spot_id
    // console.log(typeof bookingState['2'])
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchBookings())
        // console.log(bookingState.spot_id, 'IDDDD')
        // if (spotID) {
        //     dispatch(fetchSpot(spotID))
        // }
    }, [])


    return (
        <div className="flex flex-col items-center justify-center m-3">
            <div className="max-w-sm overflow-hidden shadow-lg p-3">
                {bookingState && Object.values(bookingState).map(booking => {
                    return (

                        <div className="rounded p-1 m-1 text-blue-500">
                            <Link to={`bookings/${booking.id}`}>
                                <h2>{booking.spot[0].name}</h2>
                                {booking.start_date.slice(0,17)}{}
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
