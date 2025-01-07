import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import Rating from "react-rating";


const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    const [reviewData,setReviewData] = useState(null);
    const [rating,setRating] = useState(0);
    const textRef = useRef()
    const [isModalOpen,setIsModalOpen] = useState(false)
    useEffect(()=>{
        if(user.email){
            axios.get(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res=>{
                setReviews(res.data)
            })
        }
    },[user?.email])

    const handleUpdate = (id) =>{
        console.log(id);
        const singleReviewData = reviews.filter(review=>review._id===id);
        setReviewData(singleReviewData);

        setIsModalOpen(true)
    }
    const handleModal = ()=>{
        setIsModalOpen(false)
    }
    const handleUpdateReviewForm=(e)=>{
        e.preventDefault();
        const text = textRef.current.value
        

    }
    return (
        <div>
            <h3 className="text-center text-3xl font-bold py-20">My Review {reviews.length}</h3>
            <div>
                {
                    reviews.map(review=>
                        <div key={review._id} className="w-96 mx-auto mb-10 card bg-base-100 shadow-xl p-5 space-y-3">
                        <div className="space-y-3">
                            <h2 className="card-title">{review.serviceTitle}</h2>
                            <p>{review.text}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={()=>handleUpdate(review._id)} className="btn btn-outline">Update</button>
                            <button className="btn btn-error">Delete</button>
                        </div>
                        </div>
                    )
                }
            </div>

            {
                isModalOpen&& <div className="flex justify-center items-center fixed inset-0 z-50 ">
                    <div className="bg-slate-200 shadow-xl p-5 rounded-xl w-96">
                    <h3 className="text-center font-bold py-5">Update</h3>
                     <form className="flex flex-col space-y-5">
                           <textarea
                           ref={textRef}
                               defaultValue={reviewData[0].text}
                                placeholder="write your review"
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
                             <span>Ratings:</span>
                             <Rating
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                onChange={(newRating)=>setRating(newRating)}
                                initialRating={reviewData[0].rating}
                                ></Rating>
                               <button onClick={(e)=>handleUpdateReviewForm(e,reviewData[0]._id)} className="btn btn-primary w-40">Add review</button>
                        </form>
                    <button onClick={handleModal} className="btn btn-outline flex mx-auto justify-center mt-10">Close</button>
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default MyReview;