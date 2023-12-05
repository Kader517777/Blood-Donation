/* eslint-disable react/prop-types */

const TableRow = ({ blog, index, userCollection }) => {




    return (
        <tr>
            <th>{index + 1}</th>
            <td>{blog?.title}</td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={blog?.image} />
                    </div>
                </div>
            </td>
            <td>{`${blog?.content}`}</td>
            <td>{userCollection?.role !== 'volunteer' ? blog?.status === 'draft' ? <button className="btn bg-[#873cff] w-[100px] text-[white]">Published</button> :
                blog?.status === 'published' ? <button className="btn bg-[#ffbe3c] w-[100px]">Unpublished</button> : <button className="btn bg-[#ffbe3c] w-[100px]">Draft</button>
                : ''}</td>
            {userCollection?.role !== 'volunteer' && < td >
                <button className="btn bg-[#ff3c3c] w-[100px] text-white">Delete</button>
            </td>}

        </tr >
    );
};

export default TableRow;