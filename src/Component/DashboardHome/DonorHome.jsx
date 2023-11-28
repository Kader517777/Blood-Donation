/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "../TableRow";


const DonorHome = ({ user }) => {
    const [requestDonation, setRequestDonation] = useState();
    useEffect(() => {
        axios.get(`http://localhost:7000/requestDonation/${user?.email}`)
            .then(res => {
                const requestData = res?.data;
                const filter = requestData?.sort((a, b) => b.donationDate - a.donationDate)
                setRequestDonation(filter);
            })
    }, [user?.email])
    console.log(requestDonation);
    return (
        <div className="p-8">
            <h1 className=" flex justify-center text-base md:text-3xl font-bold mt-5">Well Come {user?.displayName}</h1>
            <h1 className="text-2xl font-bold mt-6 mb-3">Recent donation request</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Recipient Name</th>
                            <th>Recipient Location</th>
                            <th>Donation Date</th>
                            <th>Donation Time</th>
                            <th>Donation Status</th>
                            <th>Donor Information</th>
                            <th>Edit</th>
                            <th>delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {requestDonation?.slice(0, 3).map((item, index) => <TableRow key={index} index={index} item={item} />)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonorHome;