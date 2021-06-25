import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { updateBooking} from '../../store/booking'


export default function EditBookSpotForm() {
    const [start_date,setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const bookingState = useSelector(state => state.booking.bookings);
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const data = await dispatch(updateBooking(start_date, end_date,id));
        history.push('/');
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
                <input type='submit'>Edit</input>
            </form>
        </div>
    )
}
