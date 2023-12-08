import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { Helmet } from "react-helmet";

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

    const link = document.querySelector('link[rel="icon"]');

    if (link) {
        link.setAttribute('href', 'https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png');
    } else {
        link.setAttribute('href', 'favicon.ico');
    }

    return (
        <div className="max-w-[1224px] mx-auto p-8">
            <Helmet>
                <title>Blood Donation | Donation Request</title>
                <link rel="canonical" href="https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png" />
                <img src="https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png" alt="" />
            </Helmet>
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