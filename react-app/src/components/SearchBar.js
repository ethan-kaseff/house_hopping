import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


import { DateRangePicker } from 'react-dates';
import DataListInput from 'react-datalist-input';

import 'react-dates/lib/css/_datepicker.css';
import './HomePage.css';

import { getAvailablePlanes } from '../../store/plane';
import { saveCurrentDates } from '../../store/booking';


function HomePage({ isLoaded }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setfocusedInput] = useState(null);

    // For the DataList
    const [state, setState] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(saveCurrentDates(startDate, endDate))

        dispatch(getAvailablePlanes(startDate, endDate))

        history.push(`/searchResults`);
    }

    const items = [
        {
            key: 1,
            label: 'Kansas'
        },
        {
            key: 2,
            label: 'Missouri'
        },
        {
            key: 3,
            label: 'California'
        },
        {
            key: 4,
            label: 'Wisconsin'
        },
    ]

    const onSelect = useCallback((selectedItem) => {
        setState(selectedItem);
    })

    return (
        <>
            <div className='home-page-main-area'>
                <div className='nav-organizer'></div>
                <div className='photo-box'>
                    <div className='mottoo'>
                        <div></div>
                        <div>
                            <h1>Experience the skies in Fli-Res</h1>
                        </div>
                    </div>
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

                </div>
            </div>
            <div className='categories-area'>
                <h2>Categories</h2>
                <div className='category-section'>
                    <h4>4k</h4>
                    <p>The best planes with unending service</p>
                </div>
                <div className='category-section'>
                    <h4>1080p</h4>
                    <p>The best planes with unending service</p>
                </div>
                <div className='category-section'>
                    <h4>720p</h4>
                    <p>Getting everyone from point A to B </p>
                </div>
            </div>
        </>
    )
}

export default HomePage;