import  { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const AdminRoute = ({ children }) => {
    const { isItLoading, user } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    if (isItLoading) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (user?.email === 'admin@admin.com') {
        return children
    }

    // if (user) {
    //     return children
    // }

    return <Navigate state={location.pathname} to='/'> {toast.error("Admins only! Redirecting home. No VIP pass, no entry. 🏠😄 ")}</Navigate>
};

export default AdminRoute;