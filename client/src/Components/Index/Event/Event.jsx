import news from "../../../Assets/News/news.jpeg";

export default function Event() {
  return(
    <div className="relative h-auto w-full flex justify-center items-center">
        <img src={news} alt="" className="w-full h-auto object-cover rounded" />
        <div className="absolute text-center z-1000">
            <h1 className="text-[48px] text-bold text-orange-600 uppercase">News <span className="text-[#fff]">Unavailable</span></h1>
        </div>
    </div>
  );  
};