import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'


import { DateRangePicker } from 'react-dates';
import DataListInput from 'react-datalist-input';

import './SearchBar.css'
import 'react-dates/lib/css/_datepicker.css';

import { getAvailableSpots } from '../../store/spot';
// import { saveCurrentDates } from '../../store/booking';
import { fetchLocations } from '../../store/location'


function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);

    // For the DataList
    const [location, setLocation] = useState();
    const locations = useSelector(state => state.location.locations)

    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('location🏡',location)

        const startDateFormatted = convert(startDate)
        const endDateFormatted = convert(endDate)

        // dispatch(saveCurrentDates(startDate, endDate))

        dispatch(getAvailableSpots(location.key, startDateFormatted, endDateFormatted))

        history.push(`/search-results`);
    }

    useEffect(() => {
         dispatch(fetchLocations())
         if (locations) {

         }
    }, [dispatch])
    // const items = [
    //     {
    //         key: 'Kansas City',
    //         label: 'Kansas City'
    //     },
    //     {
    //         key: 'South Miami',
    //         label: 'South Miami'
    //     },
    //     {
    //         key: 'Tennessee',
    //         label: 'Tennessee'
    //     },
    //     {
    //         key: 'Jackson',
    //         label: 'Jackson'
    //     },
    //     {
    //         key: 'Folsom',
    //         label: 'Folsom'
    //     },
    //     {
    //         key: 'Kentucky',
    //         label: 'Kentucky'
    //     },
    //     {
    //         key: 'Mars',
    //         label: 'Mars'
    //     },
    //     {
    //         key: 'England',
    //         label: 'England'
    //     },
    //     {
    //         key: 'Cape Cod',
    //         label: 'Cape Cod'
    //     },
    // ]

    const onSelect = useCallback((selectedItem) => {
        setLocation(selectedItem);
    })

    return (
        <>
            <div className='search-bar-container'>
                <form onSubmit={handleSubmit} className='search-bar'>
                    <div className='autocomplete-div'>
                        <DataListInput
                            placeholder="Select a State..."
                            items={Object.values(locations)}
                            onSelect={onSelect}
                        />
                    </div>
                    <div>
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
                        />
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar;
