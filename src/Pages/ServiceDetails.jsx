import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ServiceDetails = () => {
    const {id} = useParams();
    const [data,setData] = useState(null)
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/services/${id}`)
    .then(res=>{
        const data = res.data;
        setData(data)
    })
    },[])
    return (
        <div>
            <h3 className="text-3xl text-center font-bold py-20">Service details</h3>

            <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-5">
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
            <div>
                <h3 className="text-xl font-bold mb-20 text-center">Add review</h3>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;