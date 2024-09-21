import React, { useState, useEffect } from "react";
import Logo from "./Child/Logo";
import { IoHome } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Search from "./Child/Search";

export default function Navigation() {
    const [isFixed, setIsFixed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
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
            className={`flex justify-between items-center h-[8vh] w-full px-10 z-50 shadow transition-all duration-300 ease-in
                ${isFixed 
                    ? "fixed top-0 bg-[#e4ecec]" 
                    : "absolute top-10 bg-transparent"
                }`}
        >
            <ul className="relative flex justify-center items-center gap-5 ml-[50px] text-[#ffffff]">
                <Logo />
                <li className="flex justify-center items-center gap-1 text-[16px] cursor-pointer text-[#483d30] ml-20" onClick={ () => window.location.href = "/"}>
                    <IoHome />Home
                </li>
                <li className="flex justify-center items-center gap-1 text-[16px] cursor-pointer text-[#483d30]">
                    Discussion Point <IoMdArrowDropdown className="h-[21.8px] w-auto" />
                </li>
                <li className="flex justify-center items-center gap-3 text-[16px] cursor-pointer text-[#483d30]" onClick={ () => window.location.href = "/post" }>
                    Post
                </li>
                <li className="flex justify-center items-center gap-1 text-[16px] cursor-pointer text-[#483d30]">
                    MoviX <IoMdArrowDropdown className="h-[21.8px] w-auto" />
                </li>
            </ul>
            <ul className="flex justify-center items-center gap-10">
                <Search />
            </ul>
        </nav>
    );
}