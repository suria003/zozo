import AboutInfo from "./Sub-Child/About";
import SocialMedia from "./Sub-Child/SocialMedia";
import PopularPost from "./Sub-Child/PopularPost";

export default function Navbar(){
    return (
        <section className="flex flex-col justify-center items-center gap-10 h-auto w-[30%] p-[10px] bg-white shadow-xl">
            <AboutInfo />
            <SocialMedia />
            <PopularPost />
        </section>
    );
}