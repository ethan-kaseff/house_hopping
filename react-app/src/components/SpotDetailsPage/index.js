import React, { useEffect, useState }from 'react'
import {  useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import Spot from "../Spot"
import BookSpotForm from "../BookSpotForm"
import {fetchSpot} from "../../store/spot"
import {fetchReviewsBySpotId} from "../../store/review"

export default function SpotDetailsPage() {
    const {id } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector (state => state.spot.loaded_spot)

   useEffect(() => {
       console.log('SPOT',spot)
       dispatch(fetchReviewsBySpotId(id));
   }, [])

    return (
        <div>
            <div className='flex flex-row items-center justify-center'>
                <Spot/>
                <BookSpotForm />
            </div>
        </div>
    )
}
