import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

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

export default function DiscussionView() {
    const [isScrolled, setIsScrolled] = useState(false);

    const discussionTopics = [
        { label: "Technology", imgSrc: tech },
        { label: "Education", imgSrc: edu },
        { label: "Health", imgSrc: health },
        { label: "Travel", imgSrc: travel },
        { label: "Food", imgSrc: food },
        { label: "Animals", imgSrc: pets },
        { label: "Finance", imgSrc: finance },
        { label: "Entertainment", imgSrc: entertainment },
        { label: "Fitness", imgSrc: fitness },
        { label: "Fashion", imgSrc: fashion },
        { label: "Sports", imgSrc: sports },
        { label: "AI", imgSrc: ai },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className="fixed left-[5%] h-auto w-[70%] bg-[#ffffff8a] p-[25px] flex flex-row justify-center items-center gap-2 rounded transition-all duration-500 ease-in-out"
            style={{ top: isScrolled ? "10%" : "15%" }} 
        >
            <IoMdArrowDropup className="absolute top-[-31px] left-[25%] h-[50px] w-auto text-[#ffffff8a]" />
            <div className="h-auto w-[80%] flex flex-col justify-center items-center gap-2">
                <img src={what} alt="" className="h-full w-auto object-cover" />
                <h1 className="text-bold text-center text-[#fff] text-2xl uppercase">Discussions</h1>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="text-2xl text-[#316FF6]"><FaFacebookSquare /></button>
                    <button className="text-2xl text-[#fa7e1e]"><FaInstagramSquare /></button>
                    <button className="text-2xl text-[#0077B5]"><FaLinkedin /></button>
                    <button className="text-2xl text-blue-600"><FaTwitterSquare /></button>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-5">
                {discussionTopics.map((topic, index) => (
                    <button
                        key={index}
                        className="flex flex-row justify-center items-center gap-2 px-[20px] py-[10px] text-[#000000] text-[14px] bg-white border-1 border-[##33cccc] rounded"
                    >
                        {topic.label}
                        <img src={topic.imgSrc} alt={topic.label} className="h-[45px] w-auto object-cover" />
                    </button>
                ))}
            </div>
        </section>
    );
}