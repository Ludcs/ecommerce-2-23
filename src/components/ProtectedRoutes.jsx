import {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {Navigate} from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
  const {userInfo, loading} = useContext(EcommerceContext);

  if (loading)
    return <h1 className="font-primary font-bold text-3xl ">Loading...</h1>;

  if (!userInfo) return <Navigate to="/login" />;

  return <>{children}</>;
};
