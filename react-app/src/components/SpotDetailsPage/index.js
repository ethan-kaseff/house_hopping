import React, { useEffect, useState }from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import {fetchReviewsBySpotId, deleteReview} from "../../store/review"
import Spot from "../../components/Spot"
import BookSpotForm from "../../components/BookSpotForm"


export default function SpotDetailsPage() {
    const {id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(state => state.review.loaded_reviews)
    const user = useSelector(state => state.session.user)
    const generateStars = (starCount) => {
        // console.log(starCount)
        const stars = [];
        for (let i = 0; i < starCount;i++) {
            stars.push(<i className="fas fa-star"></i>)
        }
        for( let j = 0; j < 5-starCount; j++) {
            stars.push(<i className="far fa-star"></i>)
        }
        return stars;
    }

    const handleReviewEdit = (event) => {
        // const id =
        history.push(`/review/${event.target.id.substring(event.target.id.length-1)}`);
    }
    const handleReviewDelete = (event) => {
        dispatch(deleteReview(event.target.id.substring(event.target.id.length-1)));
    }


   useEffect(() => {
       dispatch(fetchReviewsBySpotId(id));
   }, [dispatch])


    return (
        <div>
            {!(id === "new") ? (
            <div>
                <div className='flex flex-row items-center justify-center'>
                    <Spot />
                    <BookSpotForm />
                </div>
                {/* Form */}
                <div className='flex flex-row items-center justify-center'>
                    {reviews && Object.values(reviews).map(review => {
                        return <div>
                            <p>{review.content} </p>
                            {generateStars(review.count)}
                            {review.user_id == user.id ?
                            <div className='flex flex-row items-center justify-center' >
                                <button id={'edit'+review.id} onClick={handleReviewEdit}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                <button id={'delete'+review.id} onClick={handleReviewDelete}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </div>
                            : null }
                        </div>
                    })}
                </div>
            </div>
            ): null }
        </div>
    )
}
