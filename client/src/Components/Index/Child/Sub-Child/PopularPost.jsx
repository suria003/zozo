import { FaArrowTrendUp } from "react-icons/fa6";

export default function PopularPost() {

    return(
        <div className="relative flex flex-col justify-center items-start gap-2 h-auto w-full">
            <h2 className="text-[16.8px] text-[#0000009a] ml-[50px]">Connect with us</h2>
            <button className="flex flex-row justify-center items-center gap-3 text-[16px] bg-black text-[#fff] px-10 py-3 rounded ml-[35px]">touch<FaArrowTrendUp/></button>
        </div>
    );
};
