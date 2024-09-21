export default function Second() {
    return(
        <div className="flex flex-col justify-center items-start gap-2">
            <header className="text-bold text-2xl text-[#000]">information</header>
            <ul className="felx flex-col justify-center items-start gap-1 text-[#0000008a]">
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/about"}>About Us</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/privacy"}>Privacy Policy</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/condition"}>Terms and Conditions</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/disclaimer"}>Disclaimer</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/reach"}>Contact</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/map"}>Site Map</li>
            </ul>
        </div>
    );
};
