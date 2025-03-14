import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);
    const [rating,setRating] = useState(0);
    const textRef = useRef();
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([])
    const serviceTitle =  data?.serviceTitle;
    
    // fetch service details
    useEffect(()=>{
        axios.get(`https://services-review-server-livid.vercel.app/services/${id}`)
    .then(res=>{
        const data = res.data;
        setData(data)
    })
    },[])

    // fetch review 
    useEffect(()=>{
        axios.get(`https://services-review-server-livid.vercel.app/reviews/service/${id}`)
        .then(res=>{
            setReviews(res.data)
        })
    },[])

    const handleReview = (e)=>{
       
        e.preventDefault();
        const text = textRef.current.value;
        const userInfo = {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL
        }
        const postedDate = new Date().toISOString().split('T')[0];
        console.log(rating,text,userInfo,postedDate)
        const review = {
            service_id: id,
            serviceTitle: serviceTitle,
            userInfo,
            text,
            rating,
            postedDate

        }
        axios.post('https://services-review-server-livid.vercel.app/reviews',review)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Thank you for your review",
                    icon: "success"
                  });

                  setReviews((prevReviews) => [
                    ...prevReviews,
                    { ...review, _id: res.data.insertedId }
                ]);

                
                textRef.current.value = "";
                setRating(0);
            }
        })
        .catch(err=>{
            Swal.fire({
                icon: "error",
                text: (err.message),
              });
        })

    }
    return (
        <div>
            <Helmet>
                <title>
                    Details
                </title>
            </Helmet>
            <h3 className="text-3xl text-center font-bold py-5 md:py-20">Service details</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">

            {/* Details */}
            <div className="space-y-5 mx-auto">
            <div className="flex gap-3">
                    <h3 className="text-2xl font-bold">{data?.companyName}</h3>
                    <span className="p-1 text-sm text-center border-[1px] border-green-500 bg-green-200 rounded-3xl">{data?.category}</span>
                    
                </div>
                <img src={data?.serviceImage} alt="" className="h-[200px] rounded-xl"/>
                <h3 className="font-bold text-xl">{data?.serviceTitle}</h3>
                <h3 ><span className="font-bold">Website:</span> {data?.website}</h3>
                
                <p>{data?.description}</p>
                <p><span className="font-bold">Price:</span> {data?.price}</p>

            </div>

            {/* add rating */}
            <div>
                <h3 className="text-xl font-bold mb-10 md:mb-20 text-center">Add review</h3>
                <div className="w-1/2 md:w-full mx-auto">
                    
                   <form onSubmit={handleReview} className="flex flex-col space-y-5">
                            <textarea
                            ref={textRef}
                                placeholder="write your review"
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
                            <span>Ratings:</span>
                            <Rating
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating}
                                onChange={(newRating)=>setRating(newRating)}
                            ></Rating>
                            <button className="btn btn-primary w-40">Add review</button>
                   </form>
                </div>
            </div>

            {/* display review */}
            <div>
                <h3 className="font-bold text-xl text-center pb-10 md:mb-20">All reviews</h3>
                <div className="mx-auto w-1/2 md:w-full">
                    {
                        reviews.map((review,idx)=>
                            <div key={idx} className="mb-10">
                                <div className="flex gap-3 mb-3">
                                    <img src={review.userInfo.photo} alt="" className="w-10 h-10 rounded-full"/>
                                    <span className="flex items-center font-bold">{review.userInfo.name}</span>
                                </div>
                                <p className="mb-3">{review.text}</p>
                                <div className="flex gap-3 text-sm">
                                    <p className="text-base">Rating: {review.rating}</p>
                                    <span className="flex items-center">{review.postedDate}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            </div>
        </div>
    );
};

export default ServiceDetails;