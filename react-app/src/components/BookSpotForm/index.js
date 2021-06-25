import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createBooking } from "../../store/booking";

import { DateRangePicker } from 'react-dates';

export default function BookSpotForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focusedInput, setfocusedInput] = useState(null);
  const bookingState = useSelector((state) => state.booking.bookings);
  const user = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const user_id = user.user.id;

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const startDateFormatted = convert(startDate)
    const endDateFormatted = convert(endDate)

    dispatch(createBooking(startDateFormatted, endDateFormatted, id, user_id));
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col pr-5">
        {/* <div>
          <label> Start Date</label>
          <input
            type="date"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label> End Date</label>
          <input
            type="date"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div> */}
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

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Book it!
        </button>
      </form>
    </div>
  );
}
