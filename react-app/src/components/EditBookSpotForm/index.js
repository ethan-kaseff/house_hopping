import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { updateBooking, deleteBooking} from '../../store/booking'
import { fetchSpot } from '../../store/spot'
import { DateRangePicker } from 'react-dates';



export default function EditBookSpotForm() {
    const [start_date,setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [focusedInput, setfocusedInput] = useState(null);
    const bookingState = useSelector(state => state.booking.loaded_booking);
    // console.log(bookingState)
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();

    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }


    useEffect(() => {
        if (bookingState?.spot_id) {
            dispatch(fetchSpot(bookingState?.spot_id))
        }
    }, [dispatch])


    const handleFormSubmit = (event) => {
        // event.preventDefault();
        // console.log(id,'ID')
        const startDateFormatted = convert(start_date)
        const endDateFormatted = convert(end_date)
        dispatch( updateBooking(startDateFormatted, endDateFormatted, id));
        history.push(`/bookings/${id}`);
    }

    const handleBookingDelete = (event) => {
        event.preventDefault();
        dispatch(deleteBooking(id));
        history.push(`/users`);
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center m-5">
            <form onSubmit={handleFormSubmit}>
                {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <label> Start Date: </label>
                    <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <label> End Date: </label>
                    <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                </div> */}

                <DateRangePicker
                    startDate={start_date} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={end_date} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }} // PropTypes.func.isRequired,
                    focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => setfocusedInput(focusedInput)} // PropTypes.func.isRequired,
                    required
                    showDefaultInputIcon
                    className="flex flex-wrap justify-center"
                />{' '}
                <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
            </form>
            <button onClick={handleBookingDelete} type='button' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Delete</button>
            </div>
        </div>
    )
}
