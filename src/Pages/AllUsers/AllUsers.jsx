import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/users')
            .then(res => {
                setUsers(res?.data)
            })
    }, [])

    return (
        <div className="overflow-x-auto p-5">
            <h1 className=" flex justify-center text-3xl font-bold">All Users</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>User Image</th>
                        <th>User Email</th>
                        <th>Name</th>
                        <th>user status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((userCollection, index) => <TableRow key={index} index={index} userCollection={userCollection} />)}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;