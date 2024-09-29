import { IoMdArrowDropup } from "react-icons/io";


import tech from "../../../Assets/gif/technology.gif";
import edu from "../../../Assets/gif/education.gif";
import health from "../../../Assets/discussGif/health.gif";
import travel from "../../../Assets/discussGif/travel.gif";
import food from "../../../Assets/discussGif/food.gif";
import pets from "../../../Assets/discussGif/pets.gif";
import finance from "../../../Assets/discussGif/finance.gif";
import entertainment from "../../../Assets/discussGif/enterntaiment.gif";
import fitness from "../../../Assets/discussGif/fitness.gif";
import fashion from "../../../Assets/discussGif/fashion.gif";
import sports from "../../../Assets/discussGif/success.gif";
import ai from "../../../Assets/discussGif/ai.gif";

import what from "../../../Assets/what.png";

// social media
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export default function DiscussionView() {
    return (
        <section className="hidden top-[15%] left-[5%] h-auto w-[70%] bg-[#ffffff8a] p-[25px] flex flex-row justify-center items-center gap-2">
            <IoMdArrowDropup className="absolute top-[-31px] left-[25%] h-[50px] w-auto text-[#ffffff8a]" />
            <div className="h-auto w-[80%] flex flex-col justify-center items-center gap-2">
                <img src={what} alt="" className="h-full w-auto object-cover" />
                <h1 className="text-bold text-center text-[#fff] text-2xl uppercase">discussionsion</h1>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="text-2xl text-[#316FF6]"><FaFacebookSquare /></button>
                    <button className="text-2xl text-[#fa7e1e]"><FaInstagramSquare /></button>
                    <button className="text-2xl text-[#0077B5]"><FaLinkedin /></button>
                    <button className="text-2xl text-blue-600"><FaTwitterSquare /></button>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-5">
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Health<img src={tech} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Health<img src={edu} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Health<img src={health} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Travel<img src={travel} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Food<img src={food} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Animals<img src={pets} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Finance<img src={finance} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Entertainment<img src={entertainment} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Fitness<img src={fitness} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Fashion<img src={fashion} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">Sports<img src={sports} alt="" className="h-[45px] w-auto object-cover" /></button>
                <button className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded">AI<img src={ai} alt="" className="h-[45px] w-auto object-cover" /></button>
            </div>
        </section>
    );
}