/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Provider/AuthContext';
import axios from 'axios';
import { VscGlobe } from 'react-icons/vsc';
import { CiUser } from "react-icons/ci";

const DonorProfile = () => {
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
        <div className='bg-[#FBFBFB] min-h-[calc(100%-56px)] flex flex-col items-center'>
            <div className='bg-[#FFFFFF] shadow-lg rounded-lg w-[250px] flex flex-col justify-center'>
                {userCollection?.image ? <div className="avatar flex justify-center p-5">
                    <div className="w-48 rounded">
                        <img src={userCollection?.image} />
                    </div>
                </div> :
                    <CiUser size='250px' />
                }
                <button className='btn btn-success'>Change Picture</button>
            </div>
            <div className='bg-[#FFFFFF] shadow-lg rounded-lg flex flex-col justify-center p-5 md:mt-12 mt-4 text-2xl font-bold min-w-[200px] md:min-w-[500px]'>
                <h1 className=' flex mx-auto'>Personal Information</h1>
                <div>
                    <h1 >Name: <span className='w-[70px] bg-stone-200'>{userCollection?.name}</span></h1>
                    <h1 className='my-5'>Email: {userCollection?.email}</h1>
                    <h1>Address: {userCollection?.district} {userCollection?.upazila}</h1>
                    <h1 className='my-5'>Blood Group: {userCollection?.BloodGroup}</h1>
                </div>

            </div>
        </div>
    );
};

export default DonorProfile;