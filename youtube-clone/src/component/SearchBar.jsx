
export const SearchBar = () => {
    return (
        <div className=" flex justify-between ">
            <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 outline-none py-1 px-4 bg-transparent border border-gray-300 focus:bg-gray-100 focus:ring- focus:ring-blue-500 focus:border-blue-500 rounded-l-full"  
            />
            <button className="border bg-gray-100 w-16 flex justify-center cursor-pointer pt-1.5 m-0 text-inherit rounded-r-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="gray" class="size-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    );
};

