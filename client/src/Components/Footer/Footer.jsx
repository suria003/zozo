import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import First from "./Child/First";
import Second from "./Child/Second";
import Third from "./Child/Third";
import Fourth from "./Child/Fourth";

import car from "../../Assets/car.png";


export default function Footer() {
    return (
        <footer className="relative flex flex-col justify-center items-center gap-5 mt-10 w-full h-auto py-10 bg-[#eab288] overflow-hidden">
            <section className="flex justify-between items-start h-auto w-[90%]">
                <First />
                <Second />
                <Third />
                <Fourth />
            </section>

            {/* line */}
            <div className="h-[2px] w-full bg-[#0000008a]"></div>

            {/* social media */}
            <section className="relative h-auto w-[90%]">
                <div className="flex flex-row justify-center items-center gap-5">
                    <FaLinkedin className="h-[35px] w-[35px] text-[#000] cursor-pointer hover:text-[#0077B5]" onClick={ () => window.location.href = ""} />
                    <FaSquareXTwitter className="h-[35px] w-[35px] text-[#000]] cursor-pointer hover:text-[#1da1f2]" onClick={ () => window.location.href = ""} />
                    <FaTelegram className="h-[35px] w-[35px] text-[#000000] cursor-pointer hover:text-[#229ED9]" onClick={ () => window.location.href = ""} />
                </div>
                <div className="absolute bottom-0 right-0">&copy; 2024 zonzo<sup>&reg;</sup>. All rights reserved.</div>
            </section>
            <img src={car} className="absolute h-[200px] w-auto bottom-[-40px] left-0" />
        </footer>
    );
}