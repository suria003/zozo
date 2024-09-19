import "./css.css";
export default function Search() {
  return (
    <form class="relative w-[500px] h-[35px] flex items-center px-3 bg-white rounded-full focus-within:rounded-none transition-all duration-500">
      <button class="border-none bg-transparent text-gray-400">
        <svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>

      <input class="w-full h-full px-2 py-1 bg-transparent text-[12px] border-none focus:outline-none placeholder:text-gray-400"
        placeholder="Type your text" required="" type="text" />
      <button class="absolute right-3 opacity-0 invisible flex flex-row items-center transition-opacity duration-300 focus:outline-none" type="reset">
        <div className="h-[2px] w-[20px] bg-gray-400 rotate-90"></div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 22 22" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </form>
  );
}