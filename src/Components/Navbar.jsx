import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";


const Navbar = () => {
  const {user,logout} = useContext(AuthContext);
  const navigate = useNavigate();
 
  
    const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/allSearvices'>Services</NavLink>
    
    {
      user &&  <NavLink to='/addServices'>Add services</NavLink> 
    }
     {
      user && <NavLink to='/myServices'>My services</NavLink> 
    }
    {
      user &&  <NavLink to='/myReview'>My review</NavLink>
    }
    </>

    const handleLogout = ()=>{
      logout()
      .then(()=>{
        Swal.fire({
          title: "Good job!",
          text: "Successfully logged out!",
          icon: "success"
        });
        navigate('/login')
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
            <div className="navbar bg-base-100 py-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-28  shadow">
       {links}
      </ul>
    </div>
    <a className="text-3xl font-bold">ServiceCritic</a>
  </div>
  <div className="navbar-center hidden lg:flex dark:text-white">
    <ul className="menu menu-horizontal px-1 dark:text-white space-x-5">
     {links}
    </ul>
  </div>
  {
    user? <div className=" navbar-end flex gap-5">
      <div className="nav_box">
          <img src={user.photoURL} alt="" className="w-10 rounded-full h-10"/>
          <span className="nav_name">{user.displayName}</span>
      </div>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>:
      <div className="navbar-end flex gap-5">
          <Link to='/login'> <button className="btn btn-primary text-white">Login</button></Link>
          <Link to='/register'><button className="btn btn-primary text-white">Register</button></Link>
      </div>
  }
  
</div>
        </div>
    );
};

export default Navbar;