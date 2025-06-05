import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="">
        <div className="grid grid-cols-3 pl-3.5 pr-5 pt-3 pb-3 w-full fixed bg-white">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="p-0.5 mt-0.5 size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img className="h-[24px] ml-4 mt-1" src="youtubeLogo.png" alt="#" />
            </div>
            <div>
                <SearchBar/>
            </div>
            <div className="flex justify-end">
                <button className="mr-2 text-gray-600 py-1 px-5 rounded-full bg-transparent border border-gray-300 focus:ring-blue-500 focus:border-blue-500">Sign In</button>
            </div>    
        </div>
    </div>
}