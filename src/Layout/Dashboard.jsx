import { Link, NavLink, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdOutlineHomeWork } from "react-icons/md";
import DonorMenu from "../Component/Menu/DonorMenu";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Provider/AuthContext";
import axios from "axios";
import AdminMenu from "../Component/Menu/AdminMenu";
import VolunteerMenu from "../Component/Menu/VolunteerMenu";



const Dashboard = () => {
    const { user } = useContext(userContext);
    const [userCollection, setUserCollection] = useState({});
    console.log(userCollection);
    const userEmail = user?.email;
    useEffect(() => {
        axios.get(`https://blood-donation-server-eight.vercel.app/user/${userEmail}`)
            .then(res => {
                setUserCollection(res?.data);
            })
    }, [userEmail])

    return (
        <div className=" flex">
            <div className="flex flex-col w-22 min-h-screen text-[#F8F9FA] bg-[#3232C8] items-center pt-5">
                <div className=" h-48">
                    <p className="flex items-center text-xl font-bold">
                        <Link to={'/'} className=" flex flex-col justify-center items-center">
                            <img className="h-12 w-12" src="https://i.ibb.co/N97Ljq3/b110a1631ac9ae054007f19bd98295c0.png" alt="" />
                            Blood Donation
                        </Link>

                    </p>

                </div>
                {userCollection?.role === 'donor' && < DonorMenu />}
                {userCollection?.role === 'admin' && < AdminMenu />}
                {userCollection?.role === 'volunteer' && < VolunteerMenu />}
                <ul className=" menu text-[#ECF0F8] font-bold text-xl w-full pb-5">
                    <li className="border-b-[1px] rounded-lg"><NavLink to={'profile'} className={({ isActive, isPending }) =>
                        isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                    }>
                        <MdOutlineHomeWork />
                        <p>Profile {`(${userCollection?.role})`}</p>
                    </NavLink></li>
                </ul>
            </div>
            <div className="bg-[#E9ECEF] flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;