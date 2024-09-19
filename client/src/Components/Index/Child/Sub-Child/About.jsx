import { Link } from "react-router-dom";
export default function  AboutInfo() {
    return(
        <div className="flex flex-col justify-center items-center gap-2 h-auto w-full relative">
            <h2 className="text-[16.8px] text-bold text-center text-[#0000007a]"><b>ZONZO</b></h2>
            <div className="text-justify text-[#000]">Discover fresh perspectives and the latest technological insights with Zonzo. Our platform delves into diverse <Link className="text-xl text-[#0000FF] text-bold underline">Topics</Link> , offering comprehensive reviews and exploration of emerging technologies. Plus, find the best movies and related content, all in one place.</div>
        </div>
    );
};