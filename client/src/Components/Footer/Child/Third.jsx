export default function Third() {
    return (
        <div className="flex flex-col justify-center items-start gap-2">
            <header className="text-bold text-2xl text-[#000]">Product</header>
            <ul className="grid grid-cols-2 grid-rows-auto gap-1 text-[#0000008a]">
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Technology</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Finance</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Education</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Entertainment</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Health</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Fitness</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Travel</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Fashion</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Food</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Sports</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>Animals</li>
                <li className="hover:underline hover:text-[#000] cursor-pointer" onClick={ () => window.location.href = "/" }>AI</li>
            </ul>
        </div>
    );
};
