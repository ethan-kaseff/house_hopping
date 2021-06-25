import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { updateBooking, fetchBooking} from '../../store/booking'


export default function EditBookSpotForm() {
    const [start_date,setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const bookingState = useSelector(state => state.booking.loaded_booking);
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await dispatch(
            fetchBooking(id));
        const editBooking = await dispatch(
            updateBooking(start_date, end_date,id));
        history.push('/');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label> Start Date</label>
                    <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label> End Date</label>
                    <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button type='submit'>Edit</button>
                {/* <input type='button' onClick={handleFormSubmit}>Edit</input> */}

            </form>
        </div>
    )
}
