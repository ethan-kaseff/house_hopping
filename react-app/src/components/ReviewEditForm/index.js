import React ,{useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchReviewById, updateReview} from "../../store/review"
import "./reviewEditForm.css"


export default function ReviewEditForm({props}) {
    // console.log(props)
    // const {review_id} = useParams();
    // console.log(review_id)
    const dispatch = useDispatch();
    const review = useSelector(state => state.review.selected_review)
    const [content,setContent] = useState('');
    const [count,setCount] = useState();
    const history = useHistory();
    const [show, setShow] = useState(true);

    const handleShowAndClose = () => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }


    const handleReviewEditFormSubmit = (event) => {
        event.preventDefault();
        dispatch(updateReview(props.review.id,content,count))
        history.push(`/spots/${props.review.spot_id}`)
    }

    // useEffect(() => {
    //    setContent(review.content)
    // }, [review])

    // useEffect(() => {
    //    dispatch(fetchReviewById(review_id));
    // //    if (review && review.content) {
    //     //    setContent(review.content);
    // //    }
    // }, [dispatch])


    return (
        <div>
            <button onClick={handleShowAndClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">
                Edit
            </button>
            {/* <h1>Review Edit Form</h1> */}
            {review &&
            <form onSubmit={handleReviewEditFormSubmit} hidden={show}>
                <label> Content: </label>
                <textarea value={content} className="border"  onChange={(e) => setContent(e.target.value)}></textarea>
                <div>
                    <label htmlFor="count">Rating</label>
                    <select name="count" id="count" value={count} onChange={(e)=> setCount(e.target.value)}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button type="submit" onclick={handleShowAndClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            }
        </div>
    )
}
