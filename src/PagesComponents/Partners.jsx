import axios from "axios";
import { useEffect, useState } from "react";
import Partner from "./Partner";


const Partners = () => {
    const [partners,setPartners] = useState([])
    useEffect(()=>{
        axios.get('/partner.json')
        .then(res=>{
            setPartners(res.data)
        })
    },[])
    return (
        <div className="md:pb-20 pb-5"> 
            <h3 className="text-3xl font-bold text-center ">Meet Our Partners</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 md:mt-20 mt-10">
                {
                  partners.map((partner,idx)=><Partner key={idx} partner={partner}></Partner>)  
                }
            </div>
        </div>
    );
};

export default Partners;