/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { userContext } from "../../Provider/AuthContext";

const TableRow = ({ userCollection, index }) => {
    const { user } = useContext(userContext);
    const [userStatus, setStatus] = useState(userCollection?.status);
    const [userRole, setUserRole] = useState(userCollection?.role)
    const handletatusRole = (statusRole) => {
        const userStatusRole = {
            email: userCollection?.email,
            statusRole: statusRole,
        }
        axios.patch(`https://blood-donation-server-eight.vercel.app/statusRole`, userStatusRole)
            .then(res => {
                const resData = res.data;
                const updatedData = resData.acknowledged && resData.modifiedCount && resData.matchedCount;
                if (updatedData && statusRole === 'blocked') {
                    setStatus('blocked');
                    console.log('blocked');
                } else if (updatedData && statusRole === 'active') {
                    setStatus('active');
                    console.log('active');
                } else if (updatedData && statusRole === 'volunteer') {
                    setUserRole('volunteer');
                    console.log('volunteer');
                } else if (updatedData && statusRole === 'admin') {
                    setUserRole('admin');
                    console.log('admin');
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                {userCollection?.image ? <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={userCollection?.image} />
                    </div>
                </div> :
                    <CiUser size='48px' />
                }
            </td>
            <td>{userCollection?.email}</td>
            <td>{userCollection?.name}</td>
            <td>{userStatus}</td>
            <td>{userStatus === 'active' ? <button onClick={() => handletatusRole('blocked')} className='btn btn-warning text-xl'>Block</button> :
                <button onClick={() => handletatusRole('active')} className='btn btn-info text-xl'>Active</button>}</td>
            <td >
                {userRole === 'volunteer' ? 'already volunteer' : <button onClick={() => handletatusRole('volunteer')} className="btn btn-info text-xl">Volunteer</button>}
            </td>
            <td >
                {userRole === 'admin' ? 'already admin' : <button onClick={() => handletatusRole('admin')} className="btn bg-orange-400 text-xl">Admin</button>}
            </td>
        </tr>
    );
};

export default TableRow; 