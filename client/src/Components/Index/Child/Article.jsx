import post from "../../../Assets/movie/page.jpg";
import "./css.css";

import { IoIosArrowForward } from "react-icons/io";

export default function Article() {
    return (
        <article className="relative flex flex-col items-center gap-2 h-auto w-[70%] p-[25px]">

            <div className="flex flex-col justify-center items-center gap-3 h-auto">
                <img src={post} alt="" className="h-auto w-[100%] rounded" />
                <div className="text-justify text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique earum officia repellendus neque incidunt suscipit, et placeat dolores expedita quidem repudiandae excepturi eligendi! Voluptatibus eligendi architecto quo qui aperiam possimus reprehenderit quis praesentium consectetur cumque et dicta similique nostrum ipsum, esse doloremque quaerat tenetur repudiandae quasi ducimus exercitationem. Hic.</div>

                <div className="h-auto w-full flex justify-between items-center">
                    <button className="flex flex-row justify-center items-center gap-1 text-[14px] bg-[#000] px-5 py-4 text-[#fff] rounded">Read More<IoIosArrowForward /></button>
                    <button class="bookmarkBtn relative w-24 h-10 rounded-full border border-white/50 bg-gray-900 flex items-center justify-center cursor-pointer transition duration-300 overflow-hidden">
                        <span class="IconContainer w-7 h-7 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full flex items-center justify-center z-10 transition-all duration-300">
                            <svg viewBox="0 0 384 512" class="icon w-3.5 h-3.5">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                ></path>
                            </svg>
                        </span>
                        <p class="text w-14 h-full flex items-center justify-center text-white z-0 transition-all duration-300 text-base">
                            Save
                        </p>
                    </button>
                </div>
                <div className="h-[3px] w-full bg-[#0000009a]"></div><div className="h-[3px] w-full bg-[#0000008a]"></div><div className="h-[3px] w-full bg-[#0000007a]"></div>
            </div>

            {/* article one */}
            <div className="flex flex-col justify-center items-center gap-3 h-auto">
                <img src={post} alt="" className="h-auto w-[100%] rounded" />
                <div className="text-justify text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique earum officia repellendus neque incidunt suscipit, et placeat dolores expedita quidem repudiandae excepturi eligendi! Voluptatibus eligendi architecto quo qui aperiam possimus reprehenderit quis praesentium consectetur cumque et dicta similique nostrum ipsum, esse doloremque quaerat tenetur repudiandae quasi ducimus exercitationem. Hic.</div>

                <div className="h-auto w-full flex justify-between items-center">
                    <button className="flex flex-row justify-center items-center gap-1 text-[14px] bg-[#000] px-5 py-4 text-[#fff] rounded">Read More<IoIosArrowForward /></button>
                    <button class="bookmarkBtn relative w-24 h-10 rounded-full border border-white/50 bg-gray-900 flex items-center justify-center cursor-pointer transition duration-300 overflow-hidden">
                        <span class="IconContainer w-7 h-7 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full flex items-center justify-center z-10 transition-all duration-300">
                            <svg viewBox="0 0 384 512" class="icon w-3.5 h-3.5">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                ></path>
                            </svg>
                        </span>
                        <p class="text w-14 h-full flex items-center justify-center text-white z-0 transition-all duration-300 text-base">
                            Save
                        </p>
                    </button>
                </div>
                <div className="h-[3px] w-full bg-[#0000009a]"></div><div className="h-[3px] w-full bg-[#0000008a]"></div><div className="h-[3px] w-full bg-[#0000007a]"></div>
            </div>

            {/* article two */}
            <div className="flex flex-col justify-center items-center gap-3 h-auto">
                <img src={post} alt="" className="h-auto w-[100%] rounded" />
                <div className="text-justify text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique earum officia repellendus neque incidunt suscipit, et placeat dolores expedita quidem repudiandae excepturi eligendi! Voluptatibus eligendi architecto quo qui aperiam possimus reprehenderit quis praesentium consectetur cumque et dicta similique nostrum ipsum, esse doloremque quaerat tenetur repudiandae quasi ducimus exercitationem. Hic.</div>

                <div className="h-auto w-full flex justify-between items-center">
                    <button className="flex flex-row justify-center items-center gap-1 text-[14px] bg-[#000] px-5 py-4 text-[#fff] rounded">Read More<IoIosArrowForward /></button>
                    <button class="bookmarkBtn relative w-24 h-10 rounded-full border border-white/50 bg-gray-900 flex items-center justify-center cursor-pointer transition duration-300 overflow-hidden">
                        <span class="IconContainer w-7 h-7 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full flex items-center justify-center z-10 transition-all duration-300">
                            <svg viewBox="0 0 384 512" class="icon w-3.5 h-3.5">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                ></path>
                            </svg>
                        </span>
                        <p class="text w-14 h-full flex items-center justify-center text-white z-0 transition-all duration-300 text-base">
                            Save
                        </p>
                    </button>
                </div>
                <div className="h-[3px] w-full bg-[#0000009a]"></div><div className="h-[3px] w-full bg-[#0000008a]"></div><div className="h-[3px] w-full bg-[#0000007a]"></div>
            </div>
        </article>
    );
};