import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div className=" flex-1">
            <div className="flex flex-col">

                <ul className=" menu text-[#ECF0F8] font-bold text-xl">
                    <li className=" border-b-[1px] rounded-lg"><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                    }>
                        {/* <TfiHome /> */}
                        Home
                    </NavLink></li>
                    <li className=" border-b-[1px] rounded-lg my-4"><NavLink to={'all-users'} className={({ isActive, isPending }) =>
                        isPending ? "bg-[#EBFF00] text-[#ffffff] hover:bg-slate-400  hover:text-white" : isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                    }>
                        {/* <VscGitPullRequestGoToChanges /> */}
                        All users
                    </NavLink></li>
                    <li className=" border-b-[1px] rounded-lg"><NavLink to={'all-blood-donation-request'} className={({ isActive, isPending }) =>
                        isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                    }>
                        {/* <MdOutlineHomeWork /> */}
                        All blood donation request
                    </NavLink></li>
                    <li className=" border-b-[1px] rounded-lg my-4"><NavLink to={'content-management'} className={({ isActive, isPending }) =>
                        isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                    }>
                        {/* <MdOutlineHomeWork /> */}
                        Content management
                    </NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default AdminMenu;