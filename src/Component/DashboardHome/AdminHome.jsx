import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Provider/AuthContext";
import { HiUserGroup } from "react-icons/hi";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import axios from "axios";


const AdminHome = () => {
    const { user } = useContext(userContext);
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/users')
            .then(res => {
                setUsers(res?.data)
            })
    }, [])

    const [allRequest, setAllRequest] = useState([])
    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/requestDonation')
            .then(res => {
                setAllRequest(res?.data)
            })
    }, [])
    return (
        <div>
            <h1 className=" flex justify-center text-base md:text-3xl font-bold mt-5">Well Come {user?.displayName}</h1>
            <div className=" max-w-[1110px] grid grid-cols-1 md:grid-cols-3 p-5 gap-10 mx-auto">
                <div className="flex justify-center items-center p-5 rounded-lg shadow-md h-[150px]  bg-gradient-to-r from-[#ffbe85] to-[#fa5908]">
                    <div className=""><HiUserGroup size='80px' /></div>
                    <div className="ml-5">
                        <h1 className="text-2xl font-bold text-white">Total User:</h1>
                        <h1 className="flex justify-center text-4xl font-bold text-red-500 mt-3">{users?.length}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center p-5 rounded-lg shadow-md h-[150px]  bg-gradient-to-r from-[#dcff85] to-[#95d001]">
                    <div className=""><HiOutlineArchiveBoxArrowDown size='80px' /></div>
                    <div className="ml-5">
                        <h1 className="text-xl font-bold text-[#4b73f7]">Total funding:</h1>
                        <h1 className="flex justify-center text-4xl font-bold text-red-500 mt-3">4501</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center p-5 rounded-lg shadow-md h-[150px]  bg-gradient-to-r from-[#8ce0ff] to-[#0189ba]">
                    <div className=""><HiUserGroup size='80px' /></div>
                    <div className="ml-5">
                        <h1 className="text-xl font-bold text-white">Total blood Donation Request:</h1>
                        <h1 className="flex justify-center text-4xl font-bold text-red-500 mt-3">{allRequest?.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;