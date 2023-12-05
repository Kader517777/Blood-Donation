import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-gradient-to-r from-[#002050] to-[#00E2EC] mt-5">
            <div className="hero-content h-[500px] text-center">
                <div className="flex flex-col justify-center max-w-[50%]">
                    <Link to={'signup'}> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-[#ffffff] text-3xl font-bold px-7 w-[300px]">Join as a donor</button></Link>
                    <Link to={'donor-search'}><button className=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-[#ffffff] text-3xl font-bold px-7 w-[300px] mt-2">Search Donors</button></Link>
                </div>
                <div className=" flex-1">
                    <img src='https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;