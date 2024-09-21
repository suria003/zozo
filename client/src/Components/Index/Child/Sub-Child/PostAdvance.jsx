import { FaArrowTrendUp } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import Image from "../../../../Assets/PopularImage.jpeg";

export default function PostAdvance() {
    return(
        <div className="flex flex-col justify-center items-center gap-[20px] h-auto w-[100%]">
            <h2 className="text-[16.8px] text-bold text-center text-[#0000007a]"><b>Popular Post</b></h2>

            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] px-[10px] py-[5px] cursor-pointer rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div>

            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] px-[10px] cursor-pointer py-[5px] rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div> 


            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] cursor-pointer px-[10px] py-[5px] rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div> 

            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] cursor-pointer px-[10px] py-[5px] rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div> 


            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] cursor-pointer px-[10px] py-[5px] rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div> 

            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] cursor-pointer px-[10px] py-[5px] rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div>

            <div className="relative w-[100%] h-[225px]">
                <img src={Image} alt="" className="w-full h-full object-fit rounded" />  
                <div className="absolute h-full w-full top-0 bg-[#0000002a]">
                    <FaArrowTrendUp  className="absolute top-2 right-2  text-[#FFC107] text-[33px] text-bold bg-[#fff] px-[10px] py-[5px] cursor-pointer rounded" />
                    <FaShareAlt className="absolute bottom-2 right-2 text-[#FFC107] text-[33px] px-[10px] py-[5px] bg-[#000] rounded cursor-pointer" />
                </div>
            </div>

        </div>
    );
};
