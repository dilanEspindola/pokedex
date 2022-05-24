import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from './Spinner';

export const ProtectedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <Spinner />;

  if (!userState) return <Navigate to='/login' />;

  return <div>{children}</div>;
};
