import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const DonationRequest = () => {
    const [allRequest, setAllRequest] = useState([])
    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/requestDonation')
            .then(res => {
                const resData = res?.data;
                const filter = resData.filter(item => item?.donationStatus === 'pending')
                setAllRequest(filter)
            })
    }, [])
    return (
        <div className="max-w-[1224px] mx-auto p-8">
            <h1 className="text-3xl font-bold flex justify-center mb-5">Blood Donation Requests</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Requester Name</th>
                            <th>Recipient Location</th>
                            <th>Donation Date</th>
                            <th>Donation Time</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allRequest?.map((item, index) => <TableRow key={index} index={index} item={item} />)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonationRequest;