import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteReview } from '../../store/review';


function DeleteReview({ props }) {
    // console.log(props.review)
    const dispatch = useDispatch();
    const history = useHistory()

    async function handleOnSubmit() {
        if (props.review.id) {
            await dispatch(deleteReview(props.review.id));
        }
        // history.push(`/`)
        // history.push(`/spots/${props.review.spot_id}`)
        window.location.reload(false);
    }

    return (
        <div>
            <button type="submit" onClick={handleOnSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">
                Delete Review
            </button>
        </div>
    )
}

export default DeleteReview;
