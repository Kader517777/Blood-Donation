import { NavLink, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdOutlineHomeWork } from "react-icons/md";
import DonorMenu from "../Component/Menu/DonorMenu";



const Dashboard = () => {



    return (
        <div className=" flex">
            <div className=" w-22 min-h-screen text-[#F8F9FA] bg-[#3232C8]">
                <div className=" h-48">
                    <ul className=" menu text-[#ECF0F8] font-bold text-xl">
                        <li className="border-b-[1px] rounded-lg"><NavLink to={'profile'} className={({ isActive, isPending }) =>
                            isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                        }>
                            <MdOutlineHomeWork />
                            Profile
                        </NavLink></li>
                    </ul>
                </div>
                <DonorMenu />
            </div>
            <div className="bg-[#E9ECEF] flex-1">
                <h1 className=" flex justify-center text-base md:text-3xl font-bold mt-5">Well Come Jonh</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;