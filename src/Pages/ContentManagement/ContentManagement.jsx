import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TableRow from "./TableRow";
import { useContext } from "react";
import { userContext } from "../../Provider/AuthContext";

const ContentManagement = () => {

    const { user } = useContext(userContext);
    const [userCollection, setUserCollection] = useState({})
    useEffect(() => {
        axios.get(`https://blood-donation-server-eight.vercel.app/user/${user?.email}`)
            .then(res => {
                setUserCollection(res?.data);
            })
    }, [user?.email])

    const [allBlogs, setAllBlogs] = useState([])
    useEffect(() => {
        axios.get('https://blood-donation-server-eight.vercel.app/allBlogs')
            .then(res => {
                setAllBlogs(res.data)
            })
    }, [])
    console.log(allBlogs);
    return (
        <div className="max-w-[1100px] mx-auto p-5">
            {userCollection?.role === 'admin' && <div className=" flex justify-end"><Link to={'add-blog'} className="btn bg-[#208a3e]">Add Blog</Link></div>}
            <div>
                <Outlet />
            </div>
            <div>
                <div className="overflow-x-auto">
                    <h1 className=" flex justify-center text-3xl font-bold"> Content</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBlogs?.map((blog, index) => <TableRow key={index} index={index} blog={blog} userCollection={userCollection} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement;