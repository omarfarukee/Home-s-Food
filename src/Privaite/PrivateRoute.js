import React,{useContext} from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
     if( loading){
        return <div className='flex justify-center mt-2'><button className="btn btn-square loading h-20 w-20"></button></div>
    
    }
    if(!user) {
     return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }
    return children
    };

export default PrivateRoute;