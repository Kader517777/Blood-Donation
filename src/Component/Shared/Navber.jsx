import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";


const Navber = () => {
    const { user, signUp } = useContext(userContext);
    const photoURL = user?.auth?.currentUser?.photoURL;
    return (
        <div className=" bg-base-100 shadow-md">
            <div className="navbar max-w-[1224px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                                }
                            >
                                Home
                            </NavLink></li>
                        </ul>
                    </div>
                    <p className="flex items-center text-xl font-bold">
                        <Link to={'/'} >
                            <img className="h-12 w-12" src="https://i.ibb.co/N97Ljq3/b110a1631ac9ae054007f19bd98295c0.png" alt="" />
                        </Link>
                        Blood Donation
                    </p>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/donation-requests"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                            }
                        >
                            Donation Requests
                        </NavLink></li>
                        <li><NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                            }
                        >
                            Blog
                        </NavLink></li>
                        <li>
                            {!user ? <Link className="text-3xl font-bold mr-0 md:mr-6" to='login'>Login</Link> :
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="">{photoURL ? <div className="avatar mx-0 md:mx-3">
                                        <div className="w-12 rounded-full">
                                            <img src={photoURL} />
                                        </div>
                                    </div> : <FaUserCircle size='34px' />}</div>
                                    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                                        <li>
                                            <Link onClick={() => signUp()} className="w-full text-xl mr-0 md:mr-6" to='/'>LogOut</Link>
                                        </li>
                                        <li><Link to={'dashboard'} className="w-full text-xl">Dashboard</Link></li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;