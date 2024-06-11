/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";


import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
    const { isItLoading, user } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (isItLoading) {
        return <span className="loading loading-bars loading-lg mt-96 ml-[56rem]"></span>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'> {toast.error('logged In First or Register')}</Navigate>
};

export default PrivateRoute;