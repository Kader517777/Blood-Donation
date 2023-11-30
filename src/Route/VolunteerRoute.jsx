/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const VolunteerRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(userContext);
    const [userCollection, setUserCollection] = useState({})
    useEffect(() => {
        axios.get(`https://blood-donation-server-eight.vercel.app/user/${user?.email}`)
            .then(res => {
                setUserCollection(res?.data);
            })
    }, [user?.email])


    if (user && userCollection?.role === 'volunteer') {
        return children;
    }
    if (loader) {
        return <div className=" h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return <Navigate state={location} to='/login' replace></Navigate>
};

export default VolunteerRoute;