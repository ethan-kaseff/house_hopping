import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Moment from "moment";
import { extendMoment } from "moment-range";

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { getPlanes } from '../../store/plane';
import { createBooking } from '../../store/booking';
import { updateCurrentBookings } from '../../store/booking';


import './PlaneProfile.css';

function PlaneProfile() {
    const dispatch = useDispatch();
    const { planeId } = useParams();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);

    useEffect(() => {
        dispatch(getPlanes());
        dispatch(updateCurrentBookings(planeId))
    }, [dispatch, planeId])

    const plane = useSelector(state => state.plane[planeId]);
    const user = useSelector(state => state.session.user);
    const dates = useSelector(state => state.booking);
    const currentBookings = useSelector(state => state.booking.currentBookings);

    const currentBookingsArr = [];
    for (const key in currentBookings) {
        currentBookingsArr.push(currentBookings[key])
    }

    const isBlocked = date => {
        let bookedRanges = [];
        let blocked;
        currentBookingsArr.map(booking => {
            return bookedRanges = [...bookedRanges,
            Moment.range(booking.startDate, booking.endDate)]
        }
        );
        blocked = bookedRanges.find(range => range.contains(date));
        return blocked;
    };



    useEffect(() => {
        if (dates) {
            setStartDate(dates.startDate);
            setEndDate(dates.endDate);
        }

    }, [dates])

    const bookIt = (e) => {
        e.preventDefault();
        dispatch(createBooking(user.id, planeId, startDate, endDate));
        console.log('something')
    }


    return (
        <>
            <div className='nav-organizer'></div>
            {plane &&
                <div className='profile-content'>
                    <div></div>
                    <div className='plane-info'>
                        <img src={plane.imageLink} alt='plane' className='image'></img>
                        <h1>{plane.name}</h1>
                        <label>Category: </label>
                        <span>{plane.categoryId}</span>
                        <h3>Description</h3>
                        <p>{plane.description}</p>
                        <h3>Plane Facts</h3>
                        <div className='plane-facts'>
                            <label>Refill Miles: </label>
                            <span>{plane.refillMiles}</span>
                            <br></br>
                            <label>Year Built: </label>
                            <span>{plane.yearBuilt}</span>
                            <br></br>
                            <label>Zip Code Location: </label>
                            <span>{plane.zipCode}</span>
                        </div>
                    </div>
                    <div className='booking-space'>
                        <div className='datepicker'>
                            <form onSubmit={bookIt}>
                                <DateRangePicker
                                    startDate={startDate} // momentPropTypes.momentObj or null,
                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                    endDate={endDate} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({ startDate, endDate }) => {
                                        setStartDate(startDate);
                                        setEndDate(endDate);
                                    }} // PropTypes.func.isRequired,
                                    focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => setfocusedInput(focusedInput)} // PropTypes.func.isRequired,
                                    showDefaultInputIcon
                                // isDayBlocked={isBlocked}
                                />
                                <button type='submit'>Book</button>

                            </form>
                        </div>
                    </div>
                    <div></div>
                </div>
            }
        </>
    )

}


export default PlaneProfile
