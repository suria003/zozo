import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import action from "../../../Assets/gif/action.gif";
import adventure from "../../../Assets/gif/adventure.gif";
import animation from "../../../Assets/gif/animation.gif";
import comedy from "../../../Assets/gif/comedy.gif";
import drama from "../../../Assets/gif/drama.gif";
import war from "../../../Assets/gif/war.gif";
import fantasy from "../../../Assets/gif/fantasy.gif";
import horror from "../../../Assets/gif/horror.gif";
import mistrey from "../../../Assets/gif/mistrey.gif";
import romantic from "../../../Assets/gif/romantic.gif";
import sciencefiction from "../../../Assets/gif/scincefiction.gif";
import crime from "../../../Assets/gif/hacker.gif";

import what from "../../../Assets/joker.png";

export default function MovixView() {
    const [isScrolled, setIsScrolled] = useState(false);

    const discussionTopics = [
        { label: "Action", imgSrc: action },
        { label: "Adventure", imgSrc: adventure },
        { label: "Comedy", imgSrc: comedy },
        { label: "Drama", imgSrc: drama },
        { label: "Horror", imgSrc: horror },
        { label: "Science Fiction (Sci-Fi)", imgSrc: sciencefiction },
        { label: "Fantasy", imgSrc: fantasy },
        { label: "Romance", imgSrc: romantic },
        { label: "Crime", imgSrc: crime },
        { label: "Animation", imgSrc: animation },
        { label: "Mistrey", imgSrc: mistrey },
        { label: "War", imgSrc: war },
        { label: "Crime", imgSrc: crime },
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
            className="fixed left-[5%] h-auto w-[70%] bg-[#0000008a] p-[25px] flex flex-row justify-center items-center gap-2 rounded"
            style={{ top: isScrolled ? "10%" : "15%" }}
        >
            <IoMdArrowDropup className="absolute top-[-31px] left-[45%] h-[50px] w-auto text-[#0000008a]" />
            <div className="h-auto w-[80%] flex flex-col justify-center items-center gap-2">
                <img src={what} alt="" className="h-full w-auto object-cover" />
                <h1 className="text-bold text-center text-[#fff] text-2xl uppercase">MoviX</h1>
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