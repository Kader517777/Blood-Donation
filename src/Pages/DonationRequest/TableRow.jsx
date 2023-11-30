/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ item, index }) => {
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{item?.rName}</td>
            <td>{item?.upazila}, {item?.district}</td>
            <td>{item?.donationDate}</td>
            <td>{item?.donationTime}</td>
            <td><Link to={'/blood-donation-details'}><button className='btn btn-primary'>View</button></Link></td>

        </tr>
    );
};

export default TableRow;