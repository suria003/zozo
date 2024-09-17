export default function Second() {
    return(
        <div className="flex flex-col justify-center items-start gap-2">
            <header className="text-bold text-2xl text-[#000]">information</header>
            <ul className="felx flex-col justify-center items-start gap-1 text-[#0000008a]">
                <li className="hover:underline hover:text-[#000] cursor-pointer">About Us</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer">Privacy Policy</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer">Terms and Conditions</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer">Disclaimer</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer">Contact</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer">Site Map</li>
            </ul>
        </div>
    );
};
