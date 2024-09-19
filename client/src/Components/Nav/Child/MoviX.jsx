import movixImage from "../../../Assets/movix.jpg";

export default function MoviX() {
    return (
        <section>
            <img src={movixImage} alt="" className="h-[100vh] w-full object-cover" />
            <div className="h-[85vh] w-full grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                <button className="text-m px-8 py-3 border border-[#000]">Action</button>
                <button className="text-m px-8 py-3 border border-[#000]">Adventure</button>
                <button className="text-m px-8 py-3 border border-[#000]">Comedy</button>
                <button className="text-m px-8 py-3 border border-[#000]">Drama</button>
                <button className="text-m px-8 py-3 border border-[#000]">Horror</button>
                <button className="text-m px-8 py-3 border border-[#000]">Romantic</button>
                <button className="text-m px-8 py-3 border border-[#000]">Science Fiction (Sci-Fi)</button>
                <button className="text-m px-8 py-3 border border-[#000]">Fantasy</button>
                <button className="text-m px-8 py-3 border border-[#000]">Mystery</button>
                <button className="text-m px-8 py-3 border border-[#000]">Animation</button>
                <button className="text-m px-8 py-3 border border-[#000]">Musical</button>
                <button className="text-m px-8 py-3 border border-[#000]">Historical</button>
                <button className="text-m px-8 py-3 border border-[#000]">Biographical</button>
                <button className="text-m px-8 py-3 border border-[#000]">Crime</button>
                <button className="text-m px-8 py-3 border border-[#000]">War</button>
                <button className="text-m px-8 py-3 border border-[#000]">Family</button>
                <button className="text-m px-8 py-3 border border-[#000]">Sports</button>
                <button className="text-m px-8 py-3 border border-[#000]">Psychological</button>
                <button className="text-m px-8 py-3 border border-[#000]">Experimental</button>
                <button className="text-m px-8 py-3 border border-[#000]">Superhero</button>
                <button className="text-m px-8 py-3 border border-[#000]">Political</button>
                <button className="text-m px-8 py-3 border border-[#000]">Silent</button>
                <button className="text-m px-8 py-3 border border-[#000]">Romantic Comedy (Rom-Com)</button>
                <button className="text-m px-8 py-3 border border-[#000]">Western</button>
                <button className="text-m px-8 py-3 border border-[#000]">Noir</button>
            </div>

        </section>
    );
}


// Action, Adventure, Comedy, Drama, Horror, Romantic, Science Fiction (Sci-Fi), Fantasy, Mystery, Animation, Musical, Historical, Biographical (Biopic), Crime, War, Western, Family, Sports, Psychological, Noir, Coming of Age, Fantasy Adventure, Experimental, Superhero, Political, Silent, Cult, Romantic Comedy (Rom-Com)