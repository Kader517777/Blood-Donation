import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Provider/AuthContext";
import axios from "axios";
import DonorHome from "../../Component/DashboardHome/DonorHome";

const DashboardHome = () => {

    const { user } = useContext(userContext);
    const [userCollection, setUserCollection] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:7000/user/${user?.email}`)
            .then(res => {
                setUserCollection(res?.data);
            })
    }, [user?.email])
    console.log(userCollection);
    return (
        <div>
            {userCollection?.role === 'admin' && <DonorHome user={user} key={userCollection._id} />}
        </div>
    );
};

export default DashboardHome;