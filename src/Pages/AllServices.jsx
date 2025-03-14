import axios from "axios";
import { useEffect, useState } from "react";
import AllService from "../PagesComponents/AllService";
import { Helmet } from "react-helmet-async";


const AllServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        axios.get('https://services-review-server-livid.vercel.app/services')
        .then(res=>setServices(res.data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <h3 className="text-center text-3xl font-bold py-20">All of our services {services.length}</h3>
            <div className="px-3 md:px-3 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {
                    services.map(service=><AllService key={service._id} service={service}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;