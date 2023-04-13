import {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {Navigate} from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
  const {userInfo, loading} = useContext(EcommerceContext);

  if (loading) {
    return (
      <div className="w-full h-screen m-auto ">
        <h1 className="w-full h-full flex justify-center items-center font-primary font-bold text-4xl m-auto">
          Loading...
        </h1>
      </div>
    );
  }

  if (!userInfo) return <Navigate to="/login" />;

  return <>{children}</>;
};
