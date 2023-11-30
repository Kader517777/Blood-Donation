import { NavLink } from "react-router-dom";

const VolunteerMenu = () => {
    return (
        <div className=" flex-1">
            <ul className=" menu text-[#ECF0F8] font-bold text-xl">
                <li className=" border-b-[1px] rounded-lg"><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " bg-[#EBFF00] text-[#030508]" : ""
                }>
                    {/* <TfiHome /> */}
                    Home
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
    );
};

export default VolunteerMenu;