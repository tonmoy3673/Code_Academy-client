import React, { useContext } from 'react';
import { context } from '../Context/AuthContext/AuthContext';
import { DotLoader } from "react-spinners";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(context);
const location = useLocation();
if (loading) {
    return (
      <div className="flex justify-center items-center">
        <DotLoader color="#164E63" size={176} />
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
};
    

export default PrivateRoute;