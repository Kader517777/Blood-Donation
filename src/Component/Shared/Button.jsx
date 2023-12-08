/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Button = ({ fontText }) => {
    return (
        <div>
            <button
                className={`btn 
                bg-gradient-to-r from-pink-500 to-yellow-500
                 hover:from-green-400 hover:to-blue-500
            text-[#ffffff] text-[30px] font-bold px-7 w-full mt-2`}>
                {fontText}
            </button>
        </div >
    );
};

export default Button;