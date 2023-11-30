import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-5">
            <div className="hero-content h-[500px] text-center">
                <div className="max-w-md">
                    <Link to={'signup'}> <button className=" btn btn-primary bg-[orange] text-[#fe3f3f] text-3xl font-bold px-7">Join as a donor</button></Link>
                    <Link to={'donor-search'}><button className=" btn btn-primary bg-[orange] text-[#fe3f3f] text-3xl font-bold px-7 mt-5">Search Donors</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;