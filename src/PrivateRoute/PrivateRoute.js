import React, { useContext } from 'react';
import { context } from '../Context/AuthContext/AuthContext';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(context);
const location = useLocation();
if (loading) {
    return (
      <div className="flex justify-center items-center">
        <progress color="#164E63" size={176} />
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
    

export default PrivateRoute;