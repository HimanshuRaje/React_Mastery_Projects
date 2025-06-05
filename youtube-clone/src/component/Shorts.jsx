export const Shorts = (props)=> {
    return <div className="">
        <div>
            <a href={props.link}>
                <img className="rounded-xl " src={props.SThumbnail} alt="" />
            </a>
        </div>
        <div className="flex justify-between pl-2 pt-2" >
            <a href="" className="text-sm font-semibold">
                {props.Stitle}
            </a>
            <button className="flex justify-center pl-1 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </button>
        </div>
        <div className="ml-3 text-gray-800 font-semibold">
            {props.views} views
        </div>
    </div>
}