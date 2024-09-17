import BallonImage from "../../Assets/back.jpg";
import Navbar from "./Child/Navbar";

export default function Index() {
    return (
        <main className="relative h-auto w-full">

            {/* header section */}
            <section className="relative h-[100vh] w-full">
                <div className="h-[100vh] h-screen w-full"><img src={BallonImage} alt="" className="" /></div>
            </section>

            <section className="flex flex-row justify-center items-center gap-10 h-auto w-[90%] m-auto mt-[300px]">
                <article className="h-auto w-[70%] p-[25px]"></article>
                <Navbar />
            </section>
        </main>
    );
}