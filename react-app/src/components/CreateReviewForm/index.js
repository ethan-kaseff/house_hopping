import React ,{useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {createReview} from "../../store/review"
import "./createReviewForm.css"


export default function CreateReviewForm() {
    const dispatch = useDispatch();
    const [content,setContent] = useState('');
    const [count,setCount] = useState();
    const history = useHistory();

    const handleCreateReviewFormSubmit = (event) => {
        event.preventDefault();
        dispatch(createReview(content,count))
    }
    return (
        <div className="">
            <h1 className="text-2xl"> Post Review </h1>
            <form onSubmit={handleCreateReviewFormSubmit}>
                <label> Content: </label>
                <textarea value={content}  onChange={(e) => setContent(e.target.value)} className="border"></textarea>
                <div>
                    <label htmlFor="count">Review</label>
                    <select name="count" id="count" onChange={(e)=> setCount(parseInt(e.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>


        </div>
    )
}
