import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    createBooking,
    fetchBooking,
    updateBooking,
    deleteBooking
} from '../../store/booking'


export default function BookSpotForm() {
    const [start_date,setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch()
    // },[dispatch])


    const handleFormSubmit = (event) => {
        event.preventDefault();

        // dispatch(createBooking())// needs  => start_date, end_date
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label> Start Date</label>
                    <input type="text" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label> End Date</label>
                    <input type="text" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
