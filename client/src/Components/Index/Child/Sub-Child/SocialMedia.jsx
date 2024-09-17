import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { GrTechnology } from "react-icons/gr";
import { MdBusiness } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";


export default function SocialMedia() {
    return (
        <div className="relative right-[65px] flex flex-row justify-center items-center gap-4 h-auto w-full">
            <div className="flex flex-col justify-center items-center gap-4 h-auto w-full" >
                <h2 className="text-[20px] text-[#0000009a]">GET CONNECT</h2>

                <ul className="flex flex-col justify-center items-center gap-3">
                    <span className="flex flex-row justify-center items-center gap-3 h-10 w-40 bg-black border border-black text-[#fff] rounded cursor-pointer"><FaLinkedinIn className="h-[25px] w-[25px] cursor-pointer hover:text-[#0077B5]" />LinkedIn</span>
                    <span className="flex flex-row justify-center items-center gap-3 h-10 w-40 bg-black border border-black text-[#fff] rounded cursor-pointer"><FaXTwitter className="h-[25px] w-[25px] cursor-pointer hover:text-[#1da1f2]" />Twitter</span>
                    <span className="flex flex-row justify-center items-center gap-3 h-10 w-40 bg-black border border-black text-[#fff] rounded cursor-pointer"><FaTelegramPlane className="h-[25px] w-[25px] cursor-pointer hover:text-[#229ED9]" />Telgram</span>
                </ul>
            </div>
            <div className="absolute bottom-0 -right-5 grid grid-cols-2 auto-rows-auto gap-4">
                <span className="cursor-pointer"><GrTechnology className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
                <span className="cursor-pointer"><MdBusiness className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
                <span className="cursor-pointer"><FaGraduationCap className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
                <span className="cursor-pointer"><MdHealthAndSafety className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
                <span className="cursor-pointer"><IoMdFitness className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
                <span className="cursor-pointer"><IoFastFood className="h-[40px] w-auto p-[5px] text-[#fff] bg-[#000] rounded"/></span>
            </div>
        </div>
    );
};
