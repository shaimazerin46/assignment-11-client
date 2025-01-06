import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <h3>Loading</h3>
    }
    if(user){
        return children
    }
   
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
