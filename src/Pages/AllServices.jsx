import axios from "axios";
import { useEffect, useState } from "react";
import AllService from "../PagesComponents/AllService";


const AllServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/services')
        .then(res=>setServices(res.data))
    },[])
    return (
        <div>
            <h3 className="text-center text-3xl font-bold py-20">All of our services {services.length}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {
                    services.map(service=><AllService key={service._id} service={service}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;