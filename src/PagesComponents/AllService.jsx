import { Link } from "react-router-dom";


const AllService = ({service}) => {
    const {_id,serviceImage,serviceTitle,description,category,price} = service
    return (
        <div>
            <div className="card shadow-xl h-full flex flex-col">
  <figure className="">
    <img
      src={serviceImage}
      alt="service image"
      className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body flex-grow">
   <div className="flex gap-5">
   <h2 className="card-title">{serviceTitle}</h2>
   <span className="flex items-center py-1 px-1 text-sm text-center border-[1px] border-green-500 bg-green-200 rounded-3xl">{category}</span>
   </div>
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

export default AllService;