import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Toaster />
        </div>
    );
};

export default Main;