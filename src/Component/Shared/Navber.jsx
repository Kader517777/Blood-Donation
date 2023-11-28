import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";


const Navber = () => {
    const { user, signUp } = useContext(userContext);
    const userName = user?.auth?.currentUser?.displayName;
    const email = user?.auth?.currentUser?.email;
    const photoURL = user?.auth?.currentUser?.photoURL;
    console.log(photoURL);
    return (
        <div className="navbar bg-base-100 shadow-md">
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
                <p className="flex items-center text-xl font-bold">Blood Donation</p>
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
    );
};

export default Navber;