import BallonImage from "../../Assets/back.jpg";
import Navbar from "./Child/Navbar";

import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";


export default function Index() {
    return (
        <main className="relative h-auto w-full">

            {/* header section */}
            <section className="relative h-[100vh] w-full">
                <div className="h-[100vh] h-screen w-full"><img src={BallonImage} alt="" className="fixed" /></div>
                <div className="absolute top-[15%] left-[20%] w-[60%]">
                    <h3 className="text-center text-xl space-y-4"><b className="text-[56.8px] text-[#454545]">Welcome to Zonzo Discover</b>, a platform to explore diverse topics, from tech trends to lifestyle insights. Our mission is to inspire curiosity and provide engaging, informative content for all.</h3>
                </div>
                <div className="absolute bottom-1 flex flex-col items-center gap-1">
                    <ImLinkedin2 className="bg-transprent text-[#000] h-[34.8px] w-auto p-[5px] cursor-pointer" />
                    <ImTwitter className="bg-transprent text-[#000] h-[34.8px] w-auto p-[5px] cursor-pointer" />
                    <AiFillInstagram className="bg-transprent text-[#000] h-[34.8px] w-auto cursor-pointer" />
                </div>
            </section>

            <section className="flex flex-row justify-center items-center gap-10 h-auto w-[90%] m-auto mt-[300px]">
                <article className="h-auto w-[70%] p-[25px] bg-white bg-opacity-80">
                    
                </article>
                <Navbar />
            </section>

        </main>
    );
}