import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber";
import { Toaster } from "react-hot-toast";
import Footer from '../Component/Shared/Footer'

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer />
            <div><Toaster /></div>
        </div>
    );
};

export default Main;