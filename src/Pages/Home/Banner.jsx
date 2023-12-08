import { Link } from "react-router-dom";
import Button from "../../Component/Shared/Button";

const Banner = () => {
    return (
        <div className="hero bg-gradient-to-r from-[#002050] to-[#00E2EC] mt-5">
            <div className="hero-content h-[500px] text-center">
                <div className="flex flex-col justify-center max-w-[50%]">
                    <Link to={'signup'}> <Button fontText='Join as a donor'></Button></Link>
                    <Link to={'donor-search'}><Button fontText='Search Donors'></Button></Link>
                </div>
                <div className=" flex-1">
                    <img src='https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;