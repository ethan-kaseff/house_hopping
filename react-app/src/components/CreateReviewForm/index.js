import React ,{useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {createReview} from "../../store/review"
import "./createReviewForm.css"


export default function CreateReviewForm() {
    const dispatch = useDispatch();
    const [content,setContent] = useState('');
    const [count,setCount] = useState(-1);
    const [error, setError] = useState('');
    const history = useHistory();
    const current_user = useSelector(state => state.session.user)
    const {id} = useParams()        // This is the SPOT ID

    const handleCreateReviewFormSubmit = (event) => {
        event.preventDefault();
        if (content === '') {
            setError("Please add review content")
        }
        else if (count === -1) {
            setError("Please select a rating")
        } else {
            setError("")
            dispatch(createReview(content,count, current_user.id,id))
        }
    }
    return (
        <div className="border rounded p-3">
            <h1 className="text-2xl"> Post Review </h1>
            <form onSubmit={handleCreateReviewFormSubmit}>
                <label> Content: </label>
                <textarea value={content}  onChange={(e) => setContent(e.target.value)} className="border" placeholder="Please write your review here"></textarea>
                <div>
                    <label htmlFor="count">Review</label>
                    <select name="count" id="count" onChange={(e)=> setCount(parseInt(e.target.value))}>
                        <option value="-1">Select A Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <p className="text-red-700">{error}</p>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>


        </div>
    )
}
