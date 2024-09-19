import BallonImage from "../../Assets/back.jpg";

import Navbar from "./Child/Navbar";
import Article from "./Child/Article";

import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Index() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const scrolled = window.scrollY;
        setScrollY(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const zoomScale = 1 + scrollY / 500;
    return (
        <main className="relative h-auto w-full">

            <section className="relative h-[100vh] w-full">
                <div className="h-[100vh] h-screen w-full"><img src={BallonImage} alt="" className="fixed" style={{ transform: `scale(${zoomScale})` }} /></div>
                <div className="absolute top-[15%] left-[20%] w-[60%]">
                    <h3 className="text-center text-xl space-y-4"><b className="text-[56.8px] text-[#454545]">Welcome to Zonzo Discover</b>, a platform to explore diverse topics, from tech trends to lifestyle insights. Our mission is to inspire curiosity and provide engaging, informative content for all.</h3>
                </div>
                <div className="absolute bottom-1 left-1 flex flex-col items-center gap-1">
                    <ImLinkedin2 className="bg-transprent text-[#0077B5] h-[34.8px] w-auto p-[5px] cursor-pointer" />
                    <ImTwitter className="bg-transprent text-[#2e333d] h-[34.8px] w-auto p-[5px] cursor-pointer" />
                    <AiFillInstagram className="bg-transprent text-[#fa7e1e] h-[34.8px] w-auto cursor-pointer" />
                </div>
            </section>

            <section className="relative flex flex-row justify-center items-start gap-10 h-auto w-[90%] m-auto">
                <Article />
                <Navbar />
            </section>

        </main>
    );
}