import { useContext, useState } from "react";
import AuthContext from '../Context/AuthContext/AuthContext';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
    const {user} = useContext(AuthContext);
    
    const navigate = useNavigate()
    const handleAddServices = (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data =  Object.fromEntries(formdata.entries());
        const addedDate = new Date().toISOString().split('T')[0];
        data.addedDate = addedDate;
        const userEmail = user.email
        data.userEmail = userEmail;
        console.log(data)
        axios.post('https://services-review-server-livid.vercel.app/services',data)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Successfully added!",
                    icon: "success"
                  });
            }
            navigate ('/myServices')
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
            <h3 className="py-20 text-center font-bold text-3xl">Add services</h3>
            <div>
            <div className="mb-20 card mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleAddServices}>
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input name="serviceImage" type="url" placeholder="service image" className="input input-bordered" required />
        </div>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <input name="serviceTitle" type="text" placeholder="service image" className="input input-bordered" required />
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name
            </span>
          </label>
          <input name="companyName" type="text" placeholder="company name" className="input input-bordered" required />
        </div>
        {/* Website */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Website
            </span>
          </label>
          <input name="website" type="url" placeholder="website" className="input input-bordered" required />
        </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description
            </span>
          </label>
          <input name="description" type="text" placeholder="description" className="input input-bordered" required />
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category
            </span>
          </label>
          <input name="category" type="text" placeholder="category" className="input input-bordered" required />
        </div>
        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price
            </span>
          </label>
          <input name="price" type="text" placeholder="price" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
            </div>

        </div>
    );
};

export default AddServices;