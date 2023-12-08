import { Helmet } from 'react-helmet-async';
import Banner from "./Banner";
import ContuctUs from "./ContuctUs";
import Featured from "./Featured";

const Home = () => {


    const link = document.querySelector('link[rel="icon"]');

    if (link) {
        link.setAttribute('href', 'https://i.ibb.co/N97Ljq3/b110a1631ac9ae054007f19bd98295c0.png');
    } else {
        link.setAttribute('href', 'vite.svg');
    }
    return (
        <div className=" max-w-[1224px] mx-auto">
            <Helmet>
                <title>Blood Donation | Home</title>
                <meta property="og:image" content="https://i.ibb.co/gjwxKyy/blood-donation-symbol-with-hand-and-blood-bag-free-vector-removebg-preview.png" />

            </Helmet>
            <Banner />
            <Featured />
            <ContuctUs />
        </div>
    );
};

export default Home;