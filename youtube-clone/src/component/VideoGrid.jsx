import { Shorts } from "./Shorts"
import { VideoCard } from "./VideoCard"

const SHORTS = [{
    SThumbnail:"ytS-1.jpg",
    Stitle:"The cat:don’t bother me!!!#funny #funnycats #cat ",
    views:"2.9M",
    link:"https://www.youtube.com/shorts/nEWqjAULnJQ"
},{
    SThumbnail:"ytS-2.jpg",
    Stitle:"Calcium is crazy ",
    views:"3.2M",
    link:"https://www.youtube.com/shorts/a9XSxgQhNJ0"
},{
    SThumbnail:"ytS-3.jpg",
    Stitle:"This Tech Bag cost less than 1500 INR!",
    views:"1.0M",
    link:"https://www.youtube.com/shorts/76Pk8evuubA"
},{
    SThumbnail:"ytS-4.jpg",
    Stitle:"Maggie’s priceless reaction",
    views:"2.9k",
    link:"https://www.youtube.com/shorts/z4mpSZ3LZJo"
},{
    SThumbnail:"ytS-5.jpg",
    Stitle:"Just a Fluffy Cloud ☁️",
    views:"2.9k",
    link:"https://www.youtube.com/shorts/Y1fVFdLIgrY"
}/*,{
    SThumbnail:"ytS-6.jpg",
    Stitle:"Maggie’s priceless reaction",
    views:"2.9k",
    link:"https://www.youtube.com/shorts/tCGBxFijS98o"
},*/]

const VIDEOS = [{
    thumbnail:"ytThumb-1.avif",
    videoLink:"https://www.youtube.com/watch?v=dlaVMXdJaTc&t=5s&pp=ygUWZGFpbHkgZG9zZSBvZiBpbnRlcm5ldA%3D%3D",
    channelImage:"ytChannel-1.jpg",
    channelLink:"https://www.youtube.com/@DailyDoseOfInternet",
    title:"Self-Driving Cars Were a Mistake",
    channelName:"Daily Dose Of Internate",
    views:"2.5M",
    timestamp:"4 days ago"    
},{
    thumbnail:"ytT-2.jpg",
    videoLink:"https://www.youtube.com/watch?v=889B-B4Bw54&t=0s",
    channelImage:"ytC-2.jpg",
    channelLink:"https://www.youtube.com/@AbhiandNiyu",
    title:"Trudeau resignation | Impact on India",
    channelName:"Abhi and Niyu",
    views:"1.5M",
    timestamp:"1 days ago"    
},{
    thumbnail:"ytT-3.jpg",
    videoLink:"https://www.youtube.com/watch?v=889B-B4Bw54&t=40s",
    channelImage:"ytC-3.jpg",
    channelLink:"https://www.youtube.com/@yellowdude_co",
    title:"Build strong functional arms", 
    channelName:"Yellow Dude | Gravgear",
    views:"80k",
    timestamp:"8 days ago"    
},{
    thumbnail:"ytT-4.jpg",
    videoLink:"https://www.youtube.com/watch?v=gCuoVMmes4c",
    channelImage:"ytC-4.jpg",
    channelLink:"https://www.youtube.com/@bingesociety",
    title:"Kung Fu Hustle: The Landlady and the Landlord vs the Beast",
    channelName:"Bing Society",
    views:"55M",
    timestamp:"2 years ago"    
},{
    thumbnail:"ytT-5.jpg",
    videoLink:"https://www.youtube.com/watch?v=wy9IYJxne0E",
    channelImage:"ytC-5.jpg",
    channelLink:"https://www.youtube.com/@ZakirKhan",
    title:"Best Friend Vs Girlfriend | Zakir Khan | Stand-Up Comedy | Mannpasand",
    channelName:"Zakir Khan",
    views:"11M",
    timestamp:"11 months ago"    
},{
    thumbnail:"ytT-6.jpg",
    videoLink:"https://www.youtube.com/watch?v=ozpcrgmwyto",
    channelImage:"ytC-6.jpg",
    channelLink:"https://www.youtube.com/@JeremyEthier",
    title:"Your Shoulders Need These Exercises",
    channelName:"Jeremy Ethier",
    views:"1.1M",
    timestamp:"1mongth ago"    
},{
    thumbnail:"ytT-7.jpg",
    videoLink:"https://www.youtube.com/watch?v=QPkdkknzUkQ",
    channelImage:"ytC-7.jpg",
    channelLink:"https://www.youtube.com/@excelmovies",
    title:"Ramayana: The Legend Of Prince Rama | Official Hindi Trailer | 24th January",
    channelName:"Exel Movies",
    views:"17M",
    timestamp:"3 days ago"    
},{
    thumbnail:"ytT-8.jpg",
    videoLink:"https://www.youtube.com/watch?v=BfzMi1EOe4I",
    channelImage:"ytC-8.jpg",
    channelLink:"https://www.youtube.com/@casicreativoenglish",
    title:"Your Organs When You Eat Too Much Sugar",
    channelName:"CasiCreativo English",
    views:"3.5M",
    timestamp:"2 years ago"    
}]



export const VideoGrid = ()=>{
    return <div>
    <div className="ml-12 mt-9 pl-6 pt-4 mr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                videoLink={video.videoLink}
                channelLink={video.channelLink}
                thumbnail={video.thumbnail}
                channelImage={video.channelImage}
                channelName={video.channelName}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
            </div>)}
    </div>
    <div className="ml-12 mt-5 pl-6 pt-4 mr-4 grid grid col-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
        {SHORTS.map(shorts => <div>
            <Shorts 
                SThumbnail={shorts.SThumbnail}
                Stitle={shorts.Stitle}
                link={shorts.link}
                views={shorts.views}
            ></Shorts>
            </div>)}
        </div>
        <div className="ml-12 mt-9 pl-6 pt-4 mr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                videoLink={video.videoLink}
                channelLink={video.channelLink}
                thumbnail={video.thumbnail}
                channelImage={video.channelImage}
                channelName={video.channelName}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
            </div>)}
    </div>
</div>
}