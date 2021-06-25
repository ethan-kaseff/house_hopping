import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createBooking } from "../../store/booking";

export default function BookSpotForm() {
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const bookingState = useSelector((state) => state.booking.bookings);
  const user = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const user_id = user.user.id;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await dispatch(
      createBooking(start_date, end_date, id, user_id)
    );
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label> Start Date</label>
          <input
            type="text"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label> End Date</label>
          <input
            type="text"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
