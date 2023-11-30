/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";

const AdminOrVolunteerRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader, userCollection } = useContext(userContext);


    console.log(userCollection?.role);
    if (user && (userCollection?.role === 'volunteer' || userCollection?.role === 'admin')) {
        return children;
    }
    if (loader) {
        return <div className=" h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return <Navigate state={location} to='/login' replace></Navigate>
};

export default AdminOrVolunteerRoute;