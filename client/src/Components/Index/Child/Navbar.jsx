import AboutInfo from "./Sub-Child/About";
import SocialMedia from "./Sub-Child/SocialMedia";
import PopularPost from "./Sub-Child/PopularPost";
import PostAdvance from "./Sub-Child/PostAdvance";

export default function Navbar() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 h-auto w-[30%] p-[10px] bg-white shadow-xl mt-[25px] rounded">
            <AboutInfo />
            <SocialMedia />
            <PopularPost />
            <PostAdvance />
        </section>
    );
}