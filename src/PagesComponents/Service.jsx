import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {_id,serviceImage,serviceTitle,description,price} = service;
    

    return (
        <div>
           <div className="card bg-base-100 shadow-xl flex flex-col h-full">
  <figure className="">
    <img
      src={serviceImage}
      alt="IT services"
      className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">{serviceTitle}</h2>
    <p>{description}</p>
    <p>Price: {price}</p>
    <div className="card-actions">
      <Link to={`/details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;