import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();

  return token ? children : <Navigate replace to={'/login'} />;
};
