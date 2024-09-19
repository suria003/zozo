import { IoMail } from "react-icons/io5";

export default function Fourth() {
    return (
        <form className="flex flex-col justify-center items-start gap-3">
            <header className="text-2xl text-[#000]">Subscribe For Free</header>
            <div class="relative flex items-center max-w-xs group">
                <IoMail className="absolute left-3 h-[1.5rem] w-auto text-[#0000005a]" />
                <input class="w-full h-11 pl-12 pr-5 py-1.5 border-2 border-transparent rounded bg-gray-100 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-300 transition duration-500 ease-in-out outline-none" type="password" placeholder="Email" />
            </div>
            <button type="submit" className="text-[#0000FF] bg-[#FFFF00] text-bold px-[12px] py-[6px] rounded">Subscribe</button>
        </form>
    );
};
