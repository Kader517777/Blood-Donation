import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Provider/AuthContext";
import axios from "axios";
import DonorHome from "../../Component/DashboardHome/DonorHome";
import AdminHome from "../../Component/DashboardHome/AdminHome";

const DashboardHome = () => {

    const { user } = useContext(userContext);
    const [userCollection, setUserCollection] = useState({})
    useEffect(() => {
        axios.get(`https://blood-donation-server-eight.vercel.app/user/${user?.email}`)
            .then(res => {
                setUserCollection(res?.data);
            })
    }, [user?.email])
    return (
        <div>
            {userCollection?.role === 'donor' && <DonorHome user={user} key={userCollection._id} />}
            {userCollection?.role === 'admin' && <AdminHome user={user} key={userCollection._id} />}
            {userCollection?.role === 'volunteer' && <AdminHome user={user} key={userCollection._id} />}
        </div>
    );
};

export default DashboardHome;