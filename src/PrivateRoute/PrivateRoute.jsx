import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <span className="loading loading-dots loading-lg text-warning flex justify-center items-center h-screen mx-auto"></span>
    }
    if(user){
        return children
    }
   
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
