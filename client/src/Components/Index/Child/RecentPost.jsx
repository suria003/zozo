import { FaBookReader } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

// image's defined 
import post from "../../../Assets/Post/post.jpg";

export default function RecentPost() {
    return (
        <article className="relative w-[30%] h-auto flex flex-col justify-center items-center gap-[50px]">

            <div className="w-full h-auto flex flex-col justify-center items-center">

                {/* image container */}
                <div className="h-auto w-full">
                    <img src={post} alt="" className="w-full h-auto object-cover" />
                </div>

                {/* Description container */}
                <div className="w-full h-auto py-[15px] flex flex-row justify-evenly items-start gap-2 bg-rose-600">

                    <div className="flex flex-col justify-center items-start gap-2">
                        {/* rating */}
                        <span className="text-[#fff] pl-[10px]">rating</span>

                        {/* movie name */}
                        <h1 className="uppercase text-[22px] text-bold text-[#fff]">Post Name</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        {/* trailer */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><FaBookReader /></button>

                        {/* download button */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><IoMdDownload /></button>
                    </div>

                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center">

                {/* image container */}
                <div className="h-auto w-full">
                    <img src={post} alt="" className="w-full h-auto object-cover" />
                </div>

                {/* Description container */}
                <div className="w-full h-auto py-[15px] flex flex-row justify-evenly items-start gap-2 bg-rose-600">

                    <div className="flex flex-col justify-center items-start gap-2">
                        {/* rating */}
                        <span className="text-[#fff] pl-[10px]">rating</span>

                        {/* movie name */}
                        <h1 className="uppercase text-[22px] text-bold text-[#fff]">Post Name</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        {/* trailer */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><FaBookReader /></button>

                        {/* download button */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><IoMdDownload /></button>
                    </div>

                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center">

                {/* image container */}
                <div className="h-auto w-full">
                    <img src={post} alt="" className="w-full h-auto object-cover" />
                </div>

                {/* Description container */}
                <div className="w-full h-auto py-[15px] flex flex-row justify-evenly items-start gap-2 bg-rose-600">

                    <div className="flex flex-col justify-center items-start gap-2">
                        {/* rating */}
                        <span className="text-[#fff] pl-[10px]">rating</span>

                        {/* movie name */}
                        <h1 className="uppercase text-[22px] text-bold text-[#fff]">Post Name</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        {/* trailer */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><FaBookReader /></button>

                        {/* download button */}
                        <button className="text-[16px] bg-white p-[10px] rounded"><IoMdDownload /></button>
                    </div>

                </div>
            </div>

        </article>
    );
}