import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/featuredServices')
        .then(res=>{
            setServices(res.data)
        })
    },[])
    return (
        <div className="my-20">
            <h3 className="font-bold text-3xl text-center">Featured Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                services.map((service)=> <Service key={service._id} service={service}></Service>)
              }
            </div>
        </div>
    );
};

export default Services;