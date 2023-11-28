import { MdOutlineHomeWork } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { TfiHome } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const DonorMenu = () => {
    return (
        <div className="flex flex-col">

            <ul className=" menu text-[#ECF0F8] font-bold text-xl">
                <li className=" border-b-[1px] rounded-lg"><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                }>
                    <TfiHome />
                    Donor Home
                </NavLink></li>
                <li className=" border-b-[1px] rounded-lg"><NavLink to={'my-donation-request'} className={({ isActive, isPending }) =>
                    isPending ? "bg-[#EBFF00] text-[#ffffff] hover:bg-slate-400  hover:text-white" : isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                }>
                    <VscGitPullRequestGoToChanges />
                    My Donation Request
                </NavLink></li>
                <li className=" border-b-[1px] rounded-lg"><NavLink to={'create-donation-request'} className={({ isActive, isPending }) =>
                    isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                }>
                    <MdOutlineHomeWork />
                    Create Donation Request
                </NavLink></li>

            </ul>
        </div>
    );
};

export default DonorMenu;