import React, { useEffect }from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import {fetchReviewsBySpotId, deleteReview} from "../../store/review"
import BookSpotForm from "../../components/BookSpotForm"
import CreateReviewForm from "../../components/CreateReviewForm"
import { fetchSpot } from "../../store/spot"
import { getImagesBySpotId } from "../../store/image"


export default function SpotDetailsPage() {
    const { id } = useParams();
    // console.log(id)
    const dispatch = useDispatch();
    const history = useHistory();
    const spotState = useSelector(state => state.spot.loaded_spot)
    // console.log(spotState)
    const reviews = useSelector(state => state.review.loaded_reviews)
    // console.log(reviews)
    const user = useSelector(state => state.session.user)
    const newImage = useSelector(state => state.image.image)
    // console.log(newImage?.image_url)

    if (!user) {
        history.push("/login");
    }

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
        dispatch(fetchSpot(id))
        dispatch(getImagesBySpotId(id))
   }, [dispatch])


    return (
        <div>
            {!(id === "new") ? (
            <div>
                <div className='flex flex-row items-center justify-center'>
                    {/* <Spot /> */}
                    <BookSpotForm />
                </div >
                <div className="grid grid-cols-1 items-center justify-center m-5">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src={newImage?.image_url}
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{spotState.name}</div>
                        <p className="text-gray-700 text-base">{spotState.description}</p>
                        {/* <p>{pets}</p>
                        <p>{privy}</p> */}
                        {/* <p>Pet Friendly {spotState.pet_friendly}</p> */}
                    </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <CreateReviewForm/>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    {reviews && Object.values(reviews).map(review => {
                        return <div className="m-3 border rounded p-3">
                            <p>{review?.content} </p>
                            {generateStars(review.count)}
                            {review.user_id == user?.id ?
                            <div className='flex flex-row items-center justify-center' >
                                <button id={'edit'+review?.id} onClick={handleReviewEdit}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                <button id={'delete'+review?.id} onClick={handleReviewDelete}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
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
