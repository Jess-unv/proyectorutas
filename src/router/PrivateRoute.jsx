import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { state } = useLocation();

  const isAuthenticated = state?.logged === true; 

  return isAuthenticated ? children : <Navigate to='/login' replace />;
};
