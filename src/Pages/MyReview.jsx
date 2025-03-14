import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    const [reviewData,setReviewData] = useState(null);
    const [rating,setRating] = useState(0);
    const textRef = useRef()
    const [isModalOpen,setIsModalOpen] = useState(false)
    useEffect(()=>{
        if(user.email){
            axios.get(`https://services-review-server-livid.vercel.app/reviews?email=${user.email}`)
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
    const handleUpdateReviewForm=(e,id)=>{
        e.preventDefault();
        const text = textRef.current.value
        const updatedData = {text,rating};
        axios.put(`https://services-review-server-livid.vercel.app/reviews/${id}`,updatedData)
        .then(res=>
        {
            console.log(res.data);
            if(res.data.modifiedCount){
                Swal.fire({
                    title: "Good job!",
                    text: "Successfully updated!",
                    icon: "success"
                  });
                  setReviews(prevReviews => 
                    prevReviews.map(review => 
                        review._id === id ? { ...review, text, rating } : review 
                    )
                );
                  setIsModalOpen(false)
            }
        }
        )
        .catch(err=>{
            Swal.fire({
                icon: "error",
                text: (err.message),
              });
        })

    }
    const handleDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
         
          .then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://services-review-server-livid.vercel.app/reviews/${id}`)
                .then(res=>{
                  console.log(res.data)
                  if(res.data.deletedCount){
                    setReviews((prevReviews) =>
                        prevReviews.filter((review) => review._id !== id)
                    );
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                  }
              })
            
             
            }
          });
        
        
    }
    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <h3 className="text-center text-3xl font-bold md:py-20 py-5">My Review {reviews.length}</h3>
            <div>
                {
                    reviews.map(review=>
                        <div key={review._id} className="w-96 mx-auto md:mb-20 mb-5 card bg-base-100 shadow-xl p-5 space-y-3">
                        <div className="space-y-3">
                            <h2 className="card-title">{review.serviceTitle}</h2>
                            <p>{review.text}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={()=>handleUpdate(review._id)} className="btn btn-outline">Update</button>
                            <button onClick={()=>handleDelete(review._id)} className="btn btn-error">Delete</button>
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