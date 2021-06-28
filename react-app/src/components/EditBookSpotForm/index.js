import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { updateBooking, deleteBooking} from '../../store/booking'


export default function EditBookSpotForm() {
    const [start_date,setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const bookingState = useSelector(state => state.booking.loaded_booking);
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(id,'ID')
        dispatch( updateBooking(start_date, end_date,id));
        history.push(`/`);
    }

    const handleBookingDelete = (event) => {
        event.preventDefault();
        dispatch(deleteBooking(id));
        history.push('/');
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center m-5">
            <button onClick={handleBookingDelete} type='button' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Delete</button>
            <form onSubmit={handleFormSubmit}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <label> Start Date: </label>
                    <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <label> End Date: </label>
                    <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
            </form>

            </div>
        </div>
    )
}
