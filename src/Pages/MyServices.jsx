import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const MyServices = () => {
    const [services, setServices] = useState([]);
    const { user} = useContext(AuthContext);
    const [prevData,setPrevData] = useState({})
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [search,setSearch] = useState("")
    

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://services-review-server-livid.vercel.app/services?email=${user.email}`)
                .then(res => {
                    setServices(res.data)
                })

        }

    }, [user?.email])

    const handleUpdate = (id) =>{
        setPrevData({});
        setIsModalOpen(true);
        axios.get(`https://services-review-server-livid.vercel.app/services/${id}`)
        .then(res=>setPrevData(res.data));
        
        
    }
    const handleClose = () =>{
        setIsModalOpen(false)
    }

    const handleUpdateFormData =(e,id) =>{
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        
        axios.put(`https://services-review-server-livid.vercel.app/services/${id}`,data)
        .then(res=>
            {
                console.log(res.data)
                if(res.data.modifiedCount){
                    Swal.fire({
                        title: "Good job!",
                        text: "Updated successfully",
                        icon: "success"
                      });
                }
                
                const updatedData = services.map(service=>service._id===id? {...service,...data} : service);
                setServices(updatedData)
                setIsModalOpen(false);
            }
        )
        .catch(err=>{
            Swal.fire({
                icon: "error",
                text: (err.message),
              });
        })
    }

    const handleDelete = (id) =>{
       axios.delete(`https://services-review-server-livid.vercel.app/services/${id}`)
       .then(res=>{
        console.log(res.data);
        if(res.data.deletedCount){
            Swal.fire({
                title: "Good job!",
                text: "Successfully deleted",
                icon: "success"
              });
            
        }
        const filteredData = services.filter(service=>service._id!==id)
        setServices(filteredData)
       })
       .catch(err=>{
        console.log(err.message);
        Swal.fire({
            icon: "error",
            text: (err.message),
            footer: '<a href="#">Why do I have this issue?</a>'
          });
       })

    }
    const filteredServices = services.filter(service => {
        return (
            service.serviceTitle.toLowerCase().includes(search.toLowerCase()) ||
            service.companyName.toLowerCase().includes(search.toLowerCase())
        );
    });
    return (
        <div>
          <Helmet>
            <title>My Services</title>
          </Helmet>
            <h3 className="text-center text-3xl font-bold md:py-20 py-5">My services: {services.length}</h3>

            <div className="text-center mb-5">
                <input
                    type="text"
                    placeholder="Search by service title or company"
                    className="input input-bordered w-80"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            <div>
             <div className="overflow-x-auto md:mb-20 mb-5">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Service title</th>
                                        <th>Company name</th>
                                        <th>Price</th>
                                        <th>Posted date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    

                                    {
                                         filteredServices.map((service,idx) => 
                                    <tr key={service._id}>
                                         <th>{idx+1}</th>
                                         <td>{service?.serviceTitle}</td>
                                         <td>{service?.companyName}</td>
                                         <td>{service?.price}</td>
                                         <td>{service?.addedDate}</td>
                                         <td className="flex gap-3">
                                           
                                            <button onClick={()=>handleUpdate(service._id)} className="btn btn-outline">Update</button>
                                            
                                            <button onClick={()=>handleDelete(service._id)}>
                                                <img src="https://img.icons8.com/?size=64&id=PN84GwwZXtfH&format=png" alt="" className="w-10"/>
                                            </button>
                                         </td>
                                     </tr> 
                                         )
                                    }
                                   

                                </tbody>
                            </table>
             </div>
               
               {/* Modal */}
               {
                isModalOpen&& (
                    <div className="flex items-center justify-center fixed inset-0 z-50 ">
                       <div className="bg-slate-100 rounded-lg shadow-lg w-1/3 p-6">
                       <h3 className="text-center font-bold">Update</h3>
                       
                       <form className="card-body h-[400px] overflow-y-auto" onSubmit={(e)=>handleUpdateFormData(e,prevData._id)}>
                      
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input defaultValue={prevData.serviceImage} name="serviceImage" type="url" placeholder="service image" className="input input-bordered" required />
        </div>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <input defaultValue={prevData.serviceTitle} name="serviceTitle" type="text" placeholder="service image" className="input input-bordered" required />
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name
            </span>
          </label>
          <input defaultValue={prevData.companyName} name="companyName" type="text" placeholder="company name" className="input input-bordered" required />
        </div>
        {/* Website */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Website
            </span>
          </label>
          <input defaultValue={prevData.website} name="website" type="url" placeholder="website" className="input input-bordered" required />
        </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description
            </span>
          </label>
          <input defaultValue={prevData.description} name="description" type="text" placeholder="description" className="input input-bordered" required />
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category
            </span>
          </label>
          <input defaultValue={prevData.category} name="category" type="text" placeholder="category" className="input input-bordered" required />
        </div>
        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price
            </span>
          </label>
          <input defaultValue={prevData.price} name="price" type="text" placeholder="price" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
                       <button onClick={handleClose} className="flex justify-center mx-auto btn btn-outline">Close</button>
                       </div>
                    </div>
                )
               }
            </div>
        </div>
    );
};

export default MyServices;