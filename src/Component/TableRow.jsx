/* eslint-disable react/prop-types */
import React from 'react';

const TableRow = ({ item, index }) => {
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{item?.recipientName}</td>
            <td>{item?.upazila}, {item?.district}</td>
            <td>{item?.donationDate}</td>
            <td>{item?.donationTime}</td>
            <td>{item?.donationStatus}</td>
            <td>name and email</td>
            <td><button className='btn btn-info'>Edit</button></td>
            <td><button className='btn btn-warning'>Delete</button></td>
            <td><button className='btn btn-primary'>View</button></td>

        </tr>
    );
};

export default TableRow;