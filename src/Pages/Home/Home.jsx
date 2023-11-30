import Banner from "./Banner";
import ContuctUs from "./ContuctUs";
import Featured from "./Featured";

const Home = () => {
    return (
        <div className=" max-w-[1224px] mx-auto">
            <Banner />
            <Featured />
            <ContuctUs />
        </div>
    );
};

export default Home;