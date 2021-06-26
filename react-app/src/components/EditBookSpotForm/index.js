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
        history.push(`/`);
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center m-5">
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
                {/* <input type='button' onClick={handleFormSubmit}>Edit</input> */}

            </form>
            </div>
        </div>
    )
}
