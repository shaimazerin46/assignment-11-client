import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        axios.get('https://services-review-server-livid.vercel.app/featuredServices')
        .then(res=>{
            setServices(res.data)
        })
    },[])
    return (
        <div className="">
            <h3 className="font-bold text-3xl text-center md:py-20 py-5">Featured Services</h3>
            <div className="grid md:grid-cols-2 md:px-3 lg:px-0  lg:grid-cols-3 gap-5 p-3 md:p-0">
              {
                services.map((service)=> <Service key={service._id} service={service}></Service>)
              }
            </div>
        </div>
    );
};

export default Services;