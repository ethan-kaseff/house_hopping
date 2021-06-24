import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


import { DateRangePicker } from 'react-dates';
import DataListInput from 'react-datalist-input';

import 'react-dates/lib/css/_datepicker.css';

import { getAvailableSpots } from '../../store/spot';
// import { saveCurrentDates } from '../../store/booking';


function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);

    // For the DataList
    const [location, setLocation] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(saveCurrentDates(startDate, endDate))
        console.log(location.key)
        dispatch(getAvailableSpots(location.key, startDate, endDate))

        history.push(`/search-results`);
    }

    const items = [
        {
            key: 'Kansas City',
            label: 'Kansas City'
        },
        {
            key: 'South Miami',
            label: 'South Miami'
        },
    ]

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
                            items={items}
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
                        <button type='submit' id='search-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar;