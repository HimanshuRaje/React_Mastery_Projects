export function VideoCard(props) {
    return <div className=" mx-auto w-90 p-2">
        <div className="">
          <a href={props.videoLink}><img className="rounded-lg" src={props.thumbnail} alt="" /></a>
        </div>
          <div className="grid grid-cols-8">
            <div className="col-span-1">
              <a href={props.channelLink}><img className="mt-2 ml-1 rounded-full w-8 h-8" src={props.channelImage} alt="" /></a>
            </div>
            <div className="col-span-6 pl-2 ">
              <div className="pb-2 text-sm "> 
              {props.title}
              </div>
              <div className="col-span-6 text-gray-500 text-sm">
              <a href={props.channelLink}>{props.channelName}</a>
              </div>
              <div className="col-span-6 text-gray-500 text-xs">
              {props.views}  |  {props.timestamp}
              </div>
            </div>
            <div className="">
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-8 -3 20 23" strokeWidth={1.0} stroke="currentColor" className="ml-2 size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
              </svg></a>
            </div>
          </div>
    </div>
}