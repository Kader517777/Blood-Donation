import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "../../Component/TableRow";

const AllBloodDonationRequest = () => {

    const [allRequest, setAllRequest] = useState([])
    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/requestDonation')
            .then(res => {
                setAllRequest(res?.data)
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto p-4 pt-9">
                <h1 className=" flex justify-center text-3xl font-bold">All blood donation request</h1>
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
                        {allRequest?.map((item, index) => <TableRow key={index} index={index} item={item} />)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBloodDonationRequest;