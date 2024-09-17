import React, { useState, useEffect } from "react";
import Logo from "./Child/Logo";
import { IoHome } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import { MdTopic } from "react-icons/md";
import Notification from "./Child/Notification";
import Search from "./Child/Search";

export default function Navigation() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`${scrollDirection === "down"
                ? "absolute top-[-15vh] transition-all duration-300 ease-in"
                : "fixed top-0 transition-all duration-300 ease-in text-[#000]"
                } flex justify-between items-center h-[10vh] w-full px-10 z-50 shadow`}
        >
            <Logo />
            <ul className={`${scrollDirection === "up" ? "text-[#fff]" : "text-[#ffffff7a]"} flex justify-center items-center gap-10`}>
                <li className="flex justify-center items-center gap-1 text-xl cursor-pointer hover:text-[#000]">
                    <IoHome />HOME
                </li>
                <li className="flex justify-center items-center gap-1 text-xl cursor-pointer hover:text-[#000]">
                    <RiArticleFill />ARTICLE
                </li>
                <li className="flex justify-center items-center gap-1 text-xl cursor-pointer hover:text-[#000]">
                    <MdTopic />TOPIC
                </li>
            </ul>
            <ul className="flex justify-center items-center gap-10">
                <Notification />
                <Search />
            </ul>
        </nav>
    );
}